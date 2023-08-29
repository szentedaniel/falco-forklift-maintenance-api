import { ForbiddenException } from "@nestjs/common"
import { PrismaClient } from "@prisma/client"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"
import * as argon from 'argon2'
const prisma = new PrismaClient()

const usage = function () {
  const usageText = `
  
  használat:
  yarn create_admin "név" "felhasználónév" "jelszó" "jelszó újra"
  vagy
  yarn create_admin
  `

  console.log(usageText)
}

const checkPasswords = (pw1: string, pw2: string) => (pw1 == pw2) ? true : false

const createUser = async (user: { name: string, username: string, password: string }) => {
  try {
    const hash = await argon.hash(user.password)
    const admin = await prisma.users.create({ data: { ...user, password: hash, role: ['admin'] } })
    if (admin) return admin
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new ForbiddenException('Felhasználónév foglalt!')
      }
    }
    throw error
  }
  return null
}

const args = process.argv

const main = async () => {
  if (args.length > 6) {
    console.log('Túl sok paraméter')
    usage()
  } else if (args.length > 2 && args.length < 6) {
    console.log('Érvénytelen paraméterek')
    usage()
  } else {
    if (args.length == 6) {
      const userObj = { name: args[2], username: args[3], password: args[4], repeatPassword: args[5] }
      if (checkPasswords(userObj.password, userObj.repeatPassword)) {
        delete userObj.repeatPassword
        await createUser(userObj).then((u) => {
          if (u) console.log('Admin felhasználó sikeresen létrehozva!')
          else console.log('A létrehozás során hiba történt')
        }).catch((e) => {
          if (e instanceof ForbiddenException) console.error(e.message)
        })
      } else {
        console.log('A jelszavak nem egyeznek, próbálja meg újra!')
      }
    } else {
      console.log('Adja meg a paramétereket')
      usage()
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
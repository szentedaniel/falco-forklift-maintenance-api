import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MulterModule } from '@nestjs/platform-express'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'
import { FileuploadModule } from './fileupload/fileupload.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { UsersModule } from './users/users.module'
import { ForkliftsModule } from './forklifts/forklifts.module'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*/*/*/*/*/*/*', '/api', 'api/auth/verify', '/api/', '/api/*', '/api*'],
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    MulterModule.register({ dest: './uploads' }),
    AuthModule,
    PrismaModule,
    FileuploadModule,
    // MailModule,
    UsersModule,
    ForkliftsModule,
    // RestaurantsModule,
    // FavoritesModule,
    // TablesModule,
    // CategoriesModule,
    // OrdersModule,
    // ProductsModule,
    // ConsumptionTypesModule,
    // LanguagesModule,
    // AllergiesModule,
    // StatusModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}

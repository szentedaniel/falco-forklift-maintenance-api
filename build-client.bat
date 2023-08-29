call cd ..\falco-forklift-maintenance-front\
call npm run build
call xcopy /e /k /h /i /y .\build\* ..\falco-forklift-maintenance-api\client\
call cd ..\falco-forklift-maintenance-api\client\
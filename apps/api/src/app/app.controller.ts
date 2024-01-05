import { Body, Controller, Get,Post, Put } from '@nestjs/common';
import { Delete, Param, Patch } from '@nestjs/common/decorators';

import { AppService } from './app.service';
import { ok } from 'assert';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/all-users')
  getUsers() {
    return this.appService.getAllUser();
  }
  @Post('/create-users')
  createUsers(@Body() data :{email : string , password : string}) {

    console.log(data);
    return this.appService.createUser(data);
  }

 @Patch('/patch-user')
  patchUser(@Body() data :{email : string , password : string}) {

    console.log(data);
    return this.appService.patchUser(data);
  }

@Delete('delete-user/:id')
  deleteUser(@Param('id')id: number){

    console.log("inside user deleted ",id);

    return this.appService.deletUser(+id)

  }
}






import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/all-users')
  getUsers() {
    return this.appService.getAllUser();
  }

  @Post('/create-user')
  createUser(@Body() data:{email:string, passeord:string}) {
    console.log(data)
    return this.appService.createuser(data);
  }
  
  @Patch('/patch-user')
  patchUser(@Body() data:{email:string, passeord:string}) {
    console.log(data)
    return this.appService.patchUser(data);
  }

  @Delete("delete-user/:id")
  deleteUser(@Param('id')id:number){
    return this.appService.deleteUser(+id);
  }
}

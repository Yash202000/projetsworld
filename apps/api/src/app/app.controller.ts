<<<<<<< HEAD
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
=======
import { Body, Controller, Get,Post, Put } from '@nestjs/common';
import { Delete, Param, Patch } from '@nestjs/common/decorators';
>>>>>>> c3c7a86bf39de2c6a0f536221627cb03c88ff3ce

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/all-users')
  getUsers() {
    return this.appService.getAllUser();
  }

  @Post('/create-user')
<<<<<<< HEAD
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
=======
  createUser(@Body() data: {email: string, password: string}) {
    console.log(data);
    return this.appService.createUser(data);
  }


  @Patch('/patch-user')
  patchUser(@Body() data: {email: string, password: string}) {
    console.log(data);
    return this.appService.patchUser(data);
  }


  @Delete("delete-user/:id")
  deleteUser(@Param('id') id: number){
>>>>>>> c3c7a86bf39de2c6a0f536221627cb03c88ff3ce
    return this.appService.deleteUser(+id);
  }
}

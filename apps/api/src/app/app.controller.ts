import { Body, Controller, Get, Post, Patch, Delete, Param} from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/all-users')
  getUsers() {
    return this.appService.getAllUser();
  }

  @Post('/create-user')
  createUser(@Body() data : {email : string, password : string}) {
    console.log(data);
    return this.appService.createUser(data);
  }

  @Patch('/patchUser')
  patchUser(@Body() data : {email : string, password : string}) {
    console.log(data);
    return this.appService.patchUser(data);
  }

  @Delete("deleteUser/:id")
  deleteUser(@Param('id') id : number) {
    console.log("inside the delete user method id", id);
    
    return this.appService.deleteUser(+id);
  }
}

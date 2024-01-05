// import { Body, Controller, Get,Post, Put } from '@nestjs/common';
// import { Delete, Param, Patch } from '@nestjs/common/decorators';

// import { AppService } from './app.service';
import { Get, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/all-posts')
  getAllPost(){
    return this.appService.getAllPost();
  }

  @Post('/create-post')
  createPost(){
    return this.appService.createPost();
  }
}
// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get('/all-users')
//   getUsers() {
//     return this.appService.getAllUser();
//   }

//   @Post('/create-user')
//   createUser(@Body() data: {email: string, password: string}) {
//     console.log(data);
//     return this.appService.createUser(data);
//   }


//   @Patch('/patch-user')
//   patchUser(@Body() data: {email: string, password: string}) {
//     console.log(data);
//     return this.appService.patchUser(data);
//   }


//   @Delete("delete-user/:id")
//   deleteUser(@Param('id') id: number){
//     return this.appService.deleteUser(+id);
//   }
// }

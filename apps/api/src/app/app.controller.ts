import { Body, Controller, Get, Patch, Post, Delete, Put } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('all-users')
  getUsers() {
    return this.appService.getUsers();
  }

  @Post('create-user')
  createUser(@Body() data: {username: string, email: string, phone: string}) {
    return this.appService.createUser(data);
  }

  @Put('update-user')
  updateUser(@Body() data: {username: string, email: string, phone: string}) {
    return this.appService.updateUser(data);
  }

  @Delete('delete-user/:id')
  deleteUser(@Body() data: {id: number}) {
    return this.appService.deleteUser(data);
  }
}

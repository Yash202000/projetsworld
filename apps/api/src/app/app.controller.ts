import { Body, Controller, Get,Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/all-users')
  getUsers() {
    return this.appService.getAllUser();
  }

  @Post('/create-user')
  createUser(@Body() data: {email: string, password: string}) {
    console.log(data);
    return this.appService.createUser(data);
  }
}

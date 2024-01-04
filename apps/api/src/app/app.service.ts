import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


class UserDto{
  id: number;
  email: string;
  password: string;
}

@Injectable()
export class AppService {
 
  // get all users from users table
  async  getAllUser(){
    const users : UserDto[] = await prisma.user.findMany(); // select * from users;
    return users;
  }
  
  //create user
  async createUser(data: {email: string, password: string}){
    console.log("inside the create user method data: ",data);
    // check if user exists...
    const tempUser = await prisma.user.findFirst({
      where:{
        email: data.email
      }
    })
    if(tempUser){
      throw new HttpException("user already exists",HttpStatus.BAD_REQUEST);
    }

    // here I am creating the user..
    const user = await prisma.user.create({
      data: data
    })

    console.log('user created successfully!');
    return user;
  }


  getData(): { message: string } {
    return { message: 'Hello API' };
  }


}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UserDTO {
  id: number;
  username: string;
  email: string;
  phone: string;
}

@Injectable()
export class AppService {
   
  async getUsers(){
    const users : UserDTO[] = await prisma.user.findMany(); // select * from user
    return users;
  }

  async createUser(data: {username: string, email: string, phone: string}) {
    const tempUser = await prisma.user.findFirst({
      where: {
        email: data.email
      }
    })
    if(tempUser) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const user = await prisma.user.create({
      data: data
    })

    // console.log('user created successfully');
    return user;
  }

  async updateUser(data: {username: string, email: string, phone: string}) {
    const tempUser = await prisma.user.findFirst({
      where: {
        username: data.username
      }
    })
    if(tempUser) {
      const user = await prisma.user.update({
        where: {
          username: data.username
        },
        data: data
      })

      return user;
    }

    throw new HttpException('User does not exits', HttpStatus.BAD_REQUEST);
  }

  async deleteUser(data: {id: number}) {
    const tempUser = await prisma.user.findFirst({
      where: {
        id: data.id
      }
    })
    if(tempUser) {
      const user = await prisma.user.delete({
        where: {
          id: data.id
        }
      })

      console.log('user deleted successfully');

      return user;
    }

    throw new HttpException('User does not exits', HttpStatus.BAD_REQUEST);
  }
}

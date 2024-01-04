import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class UserDTO {
  id: number;
  email: string;
  password: string;
}

@Injectable()
export class AppService {

  // get all users from users table
  async getAllUser() {
    const users : UserDTO[] = await prisma.user.findMany(); // select * from users
    return users;
  }

  async createUser(data : {email : string, password : string}) {
    console.log("inside the create user method data", data);

    // check if the user already exists
    const tempUser = await prisma.user.findFirst({
      where : {
        email : data.email
      }
    })
    if (tempUser) {
      throw new HttpException("User already exists", HttpStatus.BAD_REQUEST);
    }
    
    // here I am creating user..
    const user = await prisma.user.create({
      data : data
    })

    

    return user;
  }

  async patchUser(data : {email : string, password : string}) {
    console.log("inside the create user method data", data);

    // check if the user already exists
    const tempUser = await prisma.user.findFirst({
      where : {
        email : data.email
      }
    })
    if (tempUser) {
      const updatedUser = await prisma.user.update({
        where : {
          email : data.email
        },
        data : {
          password : data.password
        }
      })

      return updatedUser;
    }
    
    throw new HttpException("User already exists", HttpStatus.BAD_REQUEST);

  }

  async deleteUser(id : number) {
    const user = await prisma.user.findFirst({
      where : {
        id : id 
      }
    })

    if(!user) throw new HttpException("User not found", HttpStatus.BAD_REQUEST);

    const deletedUser = await prisma.user.delete({
      where : {
        id : id
      }
    })

    return deletedUser;
  }
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

}

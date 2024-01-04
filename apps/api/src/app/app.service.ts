import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
<<<<<<< HEAD
=======

const prisma = new PrismaClient()


class UserDto{
  id: number;
  email: string;
  password: string;
}
>>>>>>> c3c7a86bf39de2c6a0f536221627cb03c88ff3ce

const prisma = new PrismaClient()

class UserDto{
  id: number;
  email: string;
  passeord: string;
}
@Injectable()
export class AppService {
<<<<<<< HEAD

  //get all users from users table
  async getAllUser(){
    const user: UserDto[]= await prisma.user.findMany();
    return user;
  }



  // create user
  async createuser(data: {email:string,passeord:string}){
    console.log("inside the create user method data: ",data)
    
    const tempUser = await prisma.user.findFirst({
      where:{
        email: data.email
      }
    })
    if(tempUser){
      throw new HttpException("user already exit",HttpStatus.BAD_REQUEST)
    }
    
    const user= await prisma.user.create({
      data: data
    }) 
    console.log('user created successfull!')
    return user;
  }
  // Patch user
  async patchUser(data: {email:string,passeord:string}){
    console.log("inside the path user method data: ",data)
    
    const tempUser = await prisma.user.findFirst({
      where:{
        email: data.email
      }
    })

    console.log(tempUser);
    if(tempUser){
      const updateUser = await prisma.user.update({
        where:{
          email:data.email
        },
        data:{
          passeord:data.passeord
        }
      })
      console.log('user updated')
      return updateUser;
    }
    console.log('throw waoal a')
    throw new HttpException("user not exist",HttpStatus.BAD_REQUEST)    
  }
  async deleteUser(id: number){
    const user = await prisma.user.findFirst({
      where:{
        id:id
      }
    })

  if(!user) throw new HttpException("user not exist",HttpStatus.BAD_REQUEST);

  const deleteUser = await prisma.user.delete({
    where:{
      id: id
    }
  }) 
  return deleteUser;
    
  }
  getData():{message:string}{
    return {message:"Hello API"};
  }
} 

=======
 
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


  //patch user
  async patchUser(data: {email: string, password: string}){
    console.log("inside the create user method data: ",data);
    // check if user exists...
    const tempUser = await prisma.user.findFirst({
      where:{
        email: data.email
      }
    })
    if(tempUser){
      const updatedUser = await prisma.user.update({
        where:{
          email: data.email
        },
        data: {
          password: data.password
        }
      })

      return updatedUser;

    }
    throw new HttpException("user not exist", HttpStatus.BAD_REQUEST);

  }


  async deleteUser(id: number){
    const user = await prisma.user.findFirst({
      where:{
        id: id
      }
    })

    if(!user) throw new HttpException("user not exist", HttpStatus.BAD_REQUEST);

    const deletedUser = await prisma.user.delete({
      where:{
        id: id
      }
    })
    return deletedUser;
  }


  getData(): { message: string } {
    return { message: 'Hello API' };
  }


}
>>>>>>> c3c7a86bf39de2c6a0f536221627cb03c88ff3ce

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class UserDto{
  id: number;
  email: string;
  passeord: string;
}
@Injectable()
export class AppService {

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


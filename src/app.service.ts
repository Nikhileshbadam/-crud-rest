import { Injectable } from '@nestjs/common';
import { User , UserDoc } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDoc>
  ){}
    async createUser(user: User):Promise<User>{
    const newUser = new this.userModel(user)
    return newUser.save()
  }
    async readUser(){
      return this.userModel.find({})
      .then((user)=>{return user})
      .catch((err)=>{console.log("notr found")})


  }
  async deleteUser(id){
    const data = await this.userModel.findByIdAndDelete(id)
    console.log({data})
    return data ? `User deleted Successfully` : `User Not Deleted`;
  }
  updateUser(id: string, updateUserDto: User): Promise<User>{
    this.userModel.findByIdAndUpdate(id, updateUserDto);
    return this.userModel.findById(id)

  }
  async getUserById(id){
    return this.userModel.findById(id)
  }
}

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/user')
  async createUser(@Body() userDto: User){
    return this.appService.createUser(userDto)
  }
  @Get('/users')
  async readUser(){
    return this.appService.readUser()
  }
  @Delete('/user/:id')
  deleteUser(@Param('id') id:string){
    return this.appService.deleteUser(id)
  }
  @Put('/user/:id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: User) {
    return this.appService.updateUser(id, updateUserDto);
  }
  @Get('/user/:id')
  async getUserByid(@Param('id') id:string){
    return this.appService.getUserById(id);
  }
  
  }



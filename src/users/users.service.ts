import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from '../models/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { response } from 'express';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users)
    private userModel: typeof Users,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<Users> {
    try{
      const user = await this.userModel.create(createUserDto);
      if(user == null){
        throw new Error('Failed to create user');
      }
      return this.userModel.create(createUserDto);
    }catch (error) {
      return error.message
    }
    
  }

  async findAll(): Promise<Users[]> {
    try {
      const user = await this.userModel.findAll();
      console.log(user);
      if (user == null) {
        throw new Error('Users not found');
      }
      return this.userModel.findAll();
    }catch (error) {
      return error.message
    }
  }

  async findOne(id: number): Promise<Users> {
    try {
      const user = await this.userModel.findByPk(id);
      console.log(user);
      if (user == null) {
        throw new Error('User not found');
      }
      return this.userModel.findByPk(id);
    }catch (error) {
      return error.message
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<Users>  {
    const affectedRows = await this.userModel.update(updateUserDto, {
      where: { id }
    });

    try{
      if(affectedRows[0] == 0){
        throw new Error('Failed to update user');
      }
      return this.userModel.findByPk(id);
      
    }catch (error) {
      return error.message
    }
  }

  async remove(id: number): Promise<number>  {
    const deletedCount = await this.userModel.destroy({
      where: { id },
    });
    try{
      if (deletedCount == 0) {
        throw new Error('Failed to delete user');
      } 
      return deletedCount;
    }catch (error) {
      return error.message
    }
  }
}

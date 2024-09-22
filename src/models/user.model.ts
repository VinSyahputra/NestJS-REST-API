// src/models/user.model.ts
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Users extends Model<Users> {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  role: string;

  @Column
  address: string;

  @Column
  phone: string;
}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 50})
  email: string;
  
  @Column({length: 255})
  senha: string;

}
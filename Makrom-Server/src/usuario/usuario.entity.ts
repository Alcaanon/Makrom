import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 100})
  usuario: string;

  @Column({length: 100})
  nome: string;

  @Column({length: 15})
  telefone: string;

  @Column({length: 50})
  email: string;
  
  @Column({length: 255})
  senha: string;

}
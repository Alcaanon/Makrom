import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Assinatura {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 100})
  name: string;
  
  @Column({length: 100})
  email: string;
  
  @Column({length: 15})
  phone: string;
  
  @Column({length: 15})
  mobilePhone: string;
  
  @Column({length: 14})
  cpfCnpj: string;
  
  @Column({length: 9})
  postalCode: string;
  
  @Column({length: 100})
  address: string;

  @Column({length: 10})
  addressNumber: string;
  
  @Column({length: 100})
  complement: string;

  @Column({length: 100})
  province: string;

  @Column({length: 100})
  city: string;

  @Column({length: 100})
  state: string;
  
  @Column({length: 100})
  externalReference: string;
  
  @Column('boolean', {default: false})
  notificationDisabled: boolean;
  
  @Column({length: 100})
  additionalEmails: string;
  
  @Column({length: 100})
  municipalInscription: string;
  
  @Column({length: 25})
  stateInscription: string;
  
  @Column({length: 25})
  observations: string;
  
}
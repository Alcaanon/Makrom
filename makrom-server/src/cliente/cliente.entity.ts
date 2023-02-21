import { Entity, Column } from 'typeorm';

@Entity()
export class Cliente {

  @Column({length: 255})
  name: string;

  @Column({length: 14})
  cpfCnpj: string;
  
  @Column({length: 100})
  email: string;
  
  @Column({length: 15})
  phone: string;
  
  @Column({length: 15})
  mobilePhone: string;
  
  @Column({length: 10})
  adressNumber: string;
  
  @Column({length: 100})
  complement: string;
  
  @Column({length: 9})
  postalCode: string;
  
  @Column({length: 100})
  externalReference: string;
  
  @Column({length: 10})
  notificationDisabled: boolean;
  
  @Column({length: 100})
  additionalEmails: string;
  
  @Column({length: 100})
  municipalInscription: string;
  
  @Column({length: 25})
  stateInscription: string;
  
  @Column({length: 25})
  observations: string;
  
  @Column({length: 100})
  groupname: string;

}
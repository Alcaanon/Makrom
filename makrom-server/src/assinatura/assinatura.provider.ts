import { Connection, Repository } from 'typeorm';
import { Assinatura } from './assinatura.entity';

export const assinaturaProviders = [
  {
    provide: 'ASSINATURA_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Assinatura),
    inject: ['DATABASE_CONNECTION'],
  },
];
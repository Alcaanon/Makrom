import { Connection, Repository } from 'typeorm';
import { Cliente } from './cliente.entity';

export const clienteProviders = [
  {
    provide: 'USUARIO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Cliente),
    inject: ['DATABASE_CONNECTION'],
  },
];
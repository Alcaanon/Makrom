import { Connection, Repository } from 'typeorm';
import { Usuario } from './cliente.entity';

export const clienteProviders = [
  {
    provide: 'USUARIO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Usuario),
    inject: ['DATABASE_CONNECTION'],
  },
];
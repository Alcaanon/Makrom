import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'containers-us-west-73.railway.app',
      port: 7747,
      username: 'postgres',
      password: 'kncSRscAWAhib8o4I0KI',
      database: 'railway',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];
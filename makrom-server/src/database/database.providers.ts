import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'containers-us-west-85.railway.app',
      port: 6632,
      username: 'postgres',
      password: 'Wz2OAX1G839aAOqWyvp4',
      database: 'railway',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];
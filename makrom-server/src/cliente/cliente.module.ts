import { HttpModule } from '@nestjs/axios/dist';
import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { DatabaseModule } from '../database/database.module';
import { ClienteController } from './cliente.controller';
import { clienteProviders } from './cliente.providers';

@Module({
  imports: [
    DatabaseModule, forwardRef(() => AuthModule),
    HttpModule,
    ConfigModule
  ],
  controllers: [ClienteController],
  providers: [
    ...clienteProviders,
  ],
  exports: []
})
export class ClienteModule {}
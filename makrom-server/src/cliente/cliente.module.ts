import { HttpModule } from '@nestjs/axios/dist';
import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { DatabaseModule } from '../database/database.module';
import { ClienteController } from './cliente.controller';
import { clienteProviders } from './cliente.providers';
import { ClienteService } from './cliente.service';

@Module({
  imports: [
    DatabaseModule, forwardRef(() => AuthModule),
    HttpModule
  ],
  controllers: [ClienteController],
  providers: [
    ...clienteProviders,
    ClienteService,
  ],
  exports: [ClienteService]
})
export class ClienteModule {}
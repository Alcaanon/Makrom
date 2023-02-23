import { HttpModule } from '@nestjs/axios/dist';
import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { DatabaseModule } from '../database/database.module';
import { CobrancaController } from './cobranca.controller';

@Module({
  imports: [
    DatabaseModule, forwardRef(() => AuthModule),
    HttpModule,
    ConfigModule
  ],
  controllers: [CobrancaController],
  providers: [
  ],
  exports: []
})
export class CobrancaModule {}
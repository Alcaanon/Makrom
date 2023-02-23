import { HttpModule } from '@nestjs/axios/dist';
import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { DatabaseModule } from '../database/database.module';
import { AssinaturaController } from './assinatura.controller';
import { assinaturaProviders } from './assinatura.provider'

@Module({
  imports: [
    DatabaseModule, forwardRef(() => AuthModule),
    HttpModule,
    ConfigModule
  ],
  controllers: [AssinaturaController],
  providers: [
    ...assinaturaProviders,
  ],
  exports: []
})
export class AssinaturaModule {}
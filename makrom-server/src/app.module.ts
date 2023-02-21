import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AsaasService } from './services/asaas/asaas.service';

@Module({
  imports: [
    AuthModule,
    ConfigModule,
    HttpModule
  ],
  controllers: [AppController],
  providers: [AppService, AsaasService],
})
export class AppModule {}

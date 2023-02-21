import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ClienteModule } from 'src/cliente/cliente.module';
import { TokenModule } from 'src/token/token.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    ClienteModule, 
    PassportModule, 
    TokenModule, 
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),],
  providers: [
    AuthService, 
    LocalStrategy, 
    JwtStrategy, 
  ],
  exports: [
    JwtModule, 
    AuthService, 
  ]
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AssinaturaModule } from 'src/assinatura/assinatura.module';
import { ClienteModule } from 'src/cliente/cliente.module';
import { CobrancaModule } from 'src/cobranca/cobranca.module';
import { PagamentoModule } from 'src/linksdepagamento/pagamento.module';
import { TokenModule } from 'src/token/token.module';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    AssinaturaModule,
    ClienteModule,
    CobrancaModule,
    PagamentoModule,
    UsuarioModule, 
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

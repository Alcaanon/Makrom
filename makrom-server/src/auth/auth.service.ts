import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';
import { ClienteService } from 'src/cliente/cliente.service';
import { Cliente } from 'src/cliente/cliente.entity';

@Injectable()
export class AuthService {
    constructor(
      private clienteService: ClienteService,
      private jwtService: JwtService,
      private tokenService: TokenService
    ) {}

    // async validarUsuario(usuario: string, senha: string): Promise<any> {
    //   const user = await this.clienteService.findOne(usuario);
    //   if (user && bcrypt.compareSync(senha, user.senha)) {
    //     const { senha, ...result } = user;
    //     return result;
    //   }
    //   return null;
    // }

    async login(user: any) {
      const payload = { usuario: user.usuario, sub: user.id };
      const token = this.jwtService.sign(payload)
      this.tokenService.save(token, user.usuario)
      return {
        access_token: token
      };
    }

    async loginToken(token: string) {
      let usuario: Cliente = await this.tokenService.getUsuarioByToken(token)
      if (usuario){
        return this.login(usuario)
      }else{
        return new HttpException({
          errorMessage: 'Token inválido'
        }, HttpStatus.UNAUTHORIZED)
      }
    }

}

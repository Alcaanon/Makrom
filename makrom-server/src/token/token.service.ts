import { Injectable, Inject, HttpException, HttpStatus, forwardRef } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Token } from './token.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { AuthService } from 'src/auth/auth.service';
import { Usuario } from 'src/usuario/usuario.entity';

@Injectable()
export class TokenService {
  constructor(
    @Inject('TOKEN_REPOSITORY')
    private tokenRepository: Repository<Token>,
    private usuarioService: UsuarioService,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService
  ) {}

  async save(hash: string, usuario: string){
    let objToken = await this.tokenRepository.findOne({usuario: usuario})
    if (objToken){
      this.tokenRepository.update(objToken.id, {
        hash: hash
      })
    }else{
      this.tokenRepository.insert({
        hash: hash,
        usuario: usuario
      })
    }
  }

  async refreshToken(oldToken: string){
    let objToken = await this.tokenRepository.findOne({ hash: oldToken })
    if (objToken){
      let usuario = await this.usuarioService.findOne(objToken.usuario)      
      return this.authService.login(usuario)
    }else{
      return new HttpException({
        errorMessage: 'Token inválido'
      }, HttpStatus.UNAUTHORIZED)
    }
  }

  async getUsuarioByToken(token: string): Promise<Usuario>{
    token = token.replace("Bearer ","").trim()
    let objToken: Token = await this.tokenRepository.findOne({hash: token})
    if (objToken){
      let usuario = await this.usuarioService.findOne(objToken.usuario)      
      return usuario
    }else{
      return null
    }
  }

  async getToken(): Promise<Token[]> {
    return this.tokenRepository.find();
  }
}
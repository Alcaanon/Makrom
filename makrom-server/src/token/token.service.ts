import { Injectable, Inject, HttpException, HttpStatus, forwardRef } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Token } from './token.entity';
import { AuthService } from 'src/auth/auth.service';
import { ClienteService } from 'src/cliente/cliente.service';
import { Cliente } from 'src/cliente/cliente.entity';

@Injectable()
export class TokenService {
  constructor(
    @Inject('TOKEN_REPOSITORY')
    private tokenRepository: Repository<Token>,
    private clienteService: ClienteService,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService
  ) {}

  // async save(hash: string, usuario: string){
  //   let objToken = await this.tokenRepository.findOne({usuario: usuario})
  //   if (objToken){
  //     this.tokenRepository.update(objToken.id, {
  //       hash: hash
  //     })
  //   }else{
  //     this.tokenRepository.insert({
  //       hash: hash,
  //       usuario: usuario
  //     })
  //   }
  // }

  // async refreshToken(oldToken: string){
  //   let objToken = await this.tokenRepository.findOne({ hash: oldToken })
  //   if (objToken){
  //     let usuario = await this.clienteService.findOne(objToken.usuario)      
  //     return this.authService.login(usuario)
  //   }else{
  //     return new HttpException({
  //       errorMessage: 'Token inválido'
  //     }, HttpStatus.UNAUTHORIZED)
  //   }
  // }

  // async getUsuarioByToken(token: string): Promise<Cliente>{
  //   token = token.replace("Bearer ","").trim()
  //   let objToken: Token = await this.tokenRepository.findOne({hash: token})
  //   if (objToken){
  //     let usuario = await this.clienteService.findOne(objToken.usuario)      
  //     return usuario
  //   }else{
  //     return null
  //   }
  // }

  async getToken(): Promise<Token[]> {
    return this.tokenRepository.find();
  }
}
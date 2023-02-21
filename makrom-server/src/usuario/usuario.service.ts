import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { UpdateUsuarioDto } from './dto/usuario.update.dto';
import { Usuario } from './usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async listar(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async cadastrar(data: UsuarioCadastrarDto): Promise<ResultadoDto>{
    let usuario = new Usuario()
    usuario.usuario = data.usuario
    usuario.email = data.email
    usuario.senha = bcrypt.hashSync(data.senha, 8)
    return this.usuarioRepository.save(usuario)
    .then((result) => {
      return <ResultadoDto>{
        status: true,
        mensagem: "Usuário cadastrado com sucesso"
      }
    })
    .catch((error) => {
      return <ResultadoDto>{
        status: false,
        mensagem: "Houve um errro ao cadastrar o usuário"
      }
    })    
  }
  
  async findOne(usuario: string): Promise<Usuario | undefined> {
    return this.usuarioRepository.findOneBy({usuario: usuario});
  }

  
  update(id: number, updateUserDto: UpdateUsuarioDto) {
    return this.usuarioRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.usuarioRepository.delete(id);
  }
}
import { PartialType } from '@nestjs/mapped-types';
import { UsuarioCadastrarDto } from './usuario.cadastrar.dto';

export class UpdateUsuarioDto extends PartialType(UsuarioCadastrarDto) {}
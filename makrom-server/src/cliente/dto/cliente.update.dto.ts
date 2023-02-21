import { PartialType } from '@nestjs/mapped-types';
import { ClienteCadastrarDto } from './cliente.cadastrar.dto';

export class UpdateClienteDto extends PartialType(ClienteCadastrarDto) {}
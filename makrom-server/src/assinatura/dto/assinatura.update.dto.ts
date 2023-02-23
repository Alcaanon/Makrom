import { PartialType } from '@nestjs/mapped-types';
import { AssinaturaCadastrarDto } from './assinatura.cadastrar.dto';

export class UpdateAssinaturaDto extends PartialType(AssinaturaCadastrarDto) {}
import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { ClienteCadastrarDto } from './dto/cliente.cadastrar.dto';
import { UpdateClienteDto } from './dto/cliente.update.dto';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
  
  constructor(private readonly clienteService: ClienteService,
    private authService: AuthService) {}



  @Post()
  async sendData(@Body() data: any) {
    return this.clienteService.createCustomers(data);
  }
  
 /* //@UseGuards(JwtAuthGuard)
  @Get('listar')
  async listar(): Promise<Cliente[]>{
      return this.usuarioService.listar()
  }

  @Post('cadastrar')
  async cadastrar(@Body() data: ClienteCadastrarDto): Promise<ResultadoDto>{    
    return this.usuarioService.cadastrar(data)    
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);    
  }

  @Post('login-token')
  async loginToken(@Request() @Body() data) {
    return this.authService.loginToken(data.token);    
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateClienteDto) {
    return this.usuarioService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }*/
}
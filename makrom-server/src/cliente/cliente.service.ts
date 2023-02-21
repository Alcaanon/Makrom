import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { ClienteCadastrarDto } from './dto/cliente.cadastrar.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Cliente } from './cliente.entity';
import { HttpService } from '@nestjs/axios/dist';

@Injectable()
export class ClienteService {

  private readonly asaasApiUrl = 'https://www.asaas.com/api/v3';
  private readonly asaasApiKey: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService
    ) {
    this.asaasApiKey = this.configService.get<string>('ASAAS_API_KEY');
  }

  async createCustomers(data: any): Promise<any> {
    const url = `${this.asaasApiUrl}/customers`;
    const headers = {  access_token: this.asaasApiKey, 'Content-Type': 'application/json' };
    const response = await this.httpService.post(url, data, { headers }).toPromise();
    return response.data;
  }

  async getCustomers() {
    const url = `${this.asaasApiUrl}/customers`;
    const response = await axios.get(url, {
      headers: {
        access_token: this.asaasApiKey,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  }


}
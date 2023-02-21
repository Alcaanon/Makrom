import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AsaasService {
  private readonly asaasApiUrl = 'https://www.asaas.com/api/v3';
  private readonly asaasApiKey: string;

  constructor(private readonly configService: ConfigService) {
    this.asaasApiKey = this.configService.get<string>('ASAAS_API_KEY');
  }

  async getPayments() {
    const url = `${this.asaasApiUrl}/payments`;
    const response = await axios.get(url, {
      headers: {
        access_token: this.asaasApiKey,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  }
}

import axios from 'axios';
import { Controller, Post, Body } from '@nestjs/common';

require('dotenv').config();

const ASAAS_API_KEY = process.env.ASAAS_API_KEY;

@Controller('subscription')
export class AssinaturaController {

  private readonly asaasApiUrl = 'https://www.asaas.com/api/v3';

  constructor() {}

    @Post()
    async createSubscription(@Body() datacliente: any): Promise<any> {
      const url = `${this.asaasApiUrl}/subscription`;
      const headers = {  access_token: ASAAS_API_KEY, 'Content-Type': 'application/json' };
      const response = await axios.post(url, datacliente, { headers });
      return response.data;
    }
 
}
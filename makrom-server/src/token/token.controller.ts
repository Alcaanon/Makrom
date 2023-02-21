import { Body, Controller, Put, Get } from "@nestjs/common";
import { RefreshTokenDto } from "./dto/refresh.token.dto";
import { TokenService } from "./token.service";
import { Token } from './token.entity';

@Controller('token')
export class TokenController{
    constructor(
        private tokenService: TokenService
    ){}

    // @Put('refresh')
    // async refreshToken(@Body() data: RefreshTokenDto){
    //     return this.tokenService.refreshToken(data.oldToken)
    // }

    @Get('listartoken')
    async getToken(): Promise<Token[]>{
      return this.tokenService.getToken()
  }
}
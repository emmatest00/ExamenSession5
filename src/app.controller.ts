import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

//http://localhost:3000/main/hello
@Controller('main') //identificador

export class AppController {

  //constructor llamar service
  constructor(private readonly appService: AppService) {}
 
  @Get('hello')
  getHello1(): string {
    return this.appService.getHello1();
  }

  //API Gateway
  @Get('hello/:id')
  getHello(@Param('id') id:string): string {
    return this.appService.getHello(id);
  }

}

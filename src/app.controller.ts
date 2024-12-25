import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getRoute(): Promise<string> {
    return "/cats";  
  }

  @Get('cats')
  async getHello(): Promise<string> {
    return this.appService.getHello();  
  }
}

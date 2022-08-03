import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('demo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('haii')
  getHello(): string {
    return this.appService.getHello();
  }
  @Post("store")
  create():string{
    return this.appService.post()
  }
}

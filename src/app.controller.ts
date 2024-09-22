import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTestDto } from './create-test.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('test')
  getTest(): string {
    return this.appService.getTest();
  }
  @Get('coba')
  getCoba(): string {
    return 'coba wkwkwk';
  }

  @Post('post')
  postTest(@Body() createTestDto: CreateTestDto): any {
    return `Received message: ${createTestDto.message} number : ${createTestDto.number}`;
  }
}

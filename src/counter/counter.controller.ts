import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CounterService } from './counter.service';

type Counter = {
  persons: Number
}

@Controller()
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @Get('/counter/:id')
  async get(@Param('id') id: String) {
    return this.counterService.getCount(id);
  }

  @Post('/counter')
  async create(@Body() body: Counter) {
    return this.counterService.createPerson(body);
  }

  @Put('/counter/:id')
  async count(@Param('id') id: String, @Body() body: Counter) {
    return this.counterService.countPerson(id, body);
  }
}


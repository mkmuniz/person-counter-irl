import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CounterService } from './counter.service';

type Counter = {
  persons: Number
}

@Controller('counter')
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @Get(':id')
  async get(@Param('id') id: String) {
    return this.counterService.getCount(id);
  }

  @Post()
  async create(@Body() body: Counter) {
    return this.counterService.createPerson(body);
  }

  @Put(':id')
  async count(@Param('id') id: String, @Body() body: Counter) {
    return this.counterService.countPerson(id, body);
  }
}


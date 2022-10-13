import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CounterService } from './counter.service';

type Counter = {
  persons: Number
}

@Controller('counter')
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @Get('')
  async getAll() {
    return this.counterService.getAllCounters();
  }

  @Get(':id')
  async get(@Param('id') id: String) {
    return this.counterService.getCount(id);
  }

  @Post()
  async create(@Body() body: Counter) {
    return this.counterService.createPerson(body);
  }

  @Patch(':id')
  async count(@Param('id') id: String, @Body() body: Counter) {
    return this.counterService.countPerson(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: String) {
    return this.counterService.deleteCount(id);
  }
}


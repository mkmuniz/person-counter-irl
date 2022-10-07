import { Person } from './person.type';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller()
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get('/persons/:id')
  async get(@Param(':id') id: String) {
    return this.personService.getCount(id);
  }

  @Post('/persons')
  async create(@Body() body: Person) {
    return this.personService.createPerson(body);
  }

  @Put('/persons/:id')
  async count(@Param(':id') id: String, @Body() body: Person) {
    return this.personService.countPerson(id, body);
  }
}


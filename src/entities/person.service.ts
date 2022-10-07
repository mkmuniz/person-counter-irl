import { Person } from './person.type';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PersonService {
  constructor(@InjectModel('Person') private readonly personModel) {}

  async getCount(id: String) {
    const result = await this.personModel.findById(id);
    return result;
  }

  async createPerson(body: Person) {
    return await this.personModel(body);
  }

  async countPerson(id: String, body: Person) {
    const user = this.getCount(id);

    return await this.personModel(body);
  }
}

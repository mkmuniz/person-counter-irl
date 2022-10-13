import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

type Counter = {
  persons: Number
}

@Injectable()
export class CounterService {
  constructor(@InjectModel('Counter') private readonly counterModel) {}

  async getAllCounters() {
    const result = await this.counterModel.find().exec();
    return result;
  }

  async getCount(id: String) {
    const result = await this.counterModel.findById(id).exec();
    return result;
  }

  async createPerson(body: Counter) {
    return await this.counterModel(body).save();
  }

  async countPerson(id: String, body: Counter) {
    const user = await this.getCount(id);

    const sum = [user.persons, body.persons];

    console.log(body);
    let total = sum.reduce((total, person) => total + person, 0);

    return await this.counterModel.findByIdAndUpdate(id, { persons: total }).exec();
  }

  async deleteCount(id: String) {
    const result = await this.counterModel.findByIdAndDelete(id).exec();
    return result;
  }
}

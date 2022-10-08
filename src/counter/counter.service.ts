import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

type Counter = {
  persons: Number
}

@Injectable()
export class CounterService {
  constructor(@InjectModel('Counter') private readonly counterModel) {}

  async getCount(id: String) {
    const result = await this.counterModel.findById(id).exec();
    return result;
  }

  async createPerson(body: Counter) {
    return await this.counterModel(body).save();
  }

  async countPerson(id: String, body: Counter) {
    const user = await this.getCount(id);
    return await this.counterModel.findByIdAndUpdate(id, { persons: user.persons + body.persons }).exec();
  }
}

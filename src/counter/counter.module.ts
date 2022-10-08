import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CounterController } from './counter.controller';
import { CounterSchema } from './counter.model';
import { CounterService } from './counter.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Counter', schema: CounterSchema }])],
  controllers: [CounterController],
  providers: [CounterService],
})
export class PersonModule {}

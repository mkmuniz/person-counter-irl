import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonController } from './person.controller';
import { PersonSchema } from './person.model';
import { PersonService } from './person.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Person', schema: PersonSchema }])],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}

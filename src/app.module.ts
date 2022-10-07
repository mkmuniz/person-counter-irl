import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './entities/person.module';

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://123456:lfs123@cluster0.1sv57r9.mongodb.net/?retryWrites=true&w=majority'), PersonModule],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule { }

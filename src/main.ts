import { PersonModule } from './entities/person.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(PersonModule);
  await app.listen(3000);
}
bootstrap();

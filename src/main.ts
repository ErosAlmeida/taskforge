import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  console.log('DATABASE_URL carregada:', Boolean(process.env.DATABASE_URL));

  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();

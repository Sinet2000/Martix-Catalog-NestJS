// src/seed/seed.script.ts
import { NestFactory } from '@nestjs/core';
import { SeedService } from './seed.service';
import { SeedModule } from './seed.module';

async function runSeeder() {
  const app = await NestFactory.create(SeedModule);
  const seedService = app.get(SeedService);
  await seedService.seedCountries();
  await app.close();
}

runSeeder().catch((err) => {
  console.error('Error seeding countries:', err);
  process.exit(1);
});

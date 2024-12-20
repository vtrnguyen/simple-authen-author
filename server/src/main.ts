import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,POST,PUT,DELETE,HEAD,PATCH',
  });

  await app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
  });
}

bootstrap();

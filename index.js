const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/app.module');
const { ValidationPipe } = require('@nestjs/common');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); 
  await app.listen(3000); 
}

bootstrap();

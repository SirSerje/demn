import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const SWAGGER_ENDPOINT = 'api';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
      .setTitle('demn')
      .setDescription('playground description')
      .setVersion('0.1')
      .addTag('cats')
      .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(SWAGGER_ENDPOINT, app, document);


  await app.listen(3000);
}
bootstrap();

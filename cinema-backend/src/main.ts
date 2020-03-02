import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
  });
  app.enableCors();

  app.setGlobalPrefix('api');


  /**
   * Swagger API
   */
  const options = new DocumentBuilder()
    .setTitle('Event Publisher example')
    .setDescription('The Event Publisher API description')
    .setVersion('1.0')
    .addTag('message-queue')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

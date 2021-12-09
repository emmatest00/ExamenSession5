import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() 
{
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  const options = new DocumentBuilder()
  .setTitle('Examen')
  .setDescription('Este api es de preuba')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('db',app,document);
  
  await app.listen(3000);


}


bootstrap();

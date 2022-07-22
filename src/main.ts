import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from './config/configuration';
import * as fs from 'fs';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const options = new DocumentBuilder()
    .setTitle('central_cuentas_crud')
    .setDescription('API CRUD para la gestion de ordenes de pago y relaciones de autorizacion.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  fs.writeFileSync("./swagger.json", JSON.stringify(document, null, 2));
  SwaggerModule.setup('swagger', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.startAllMicroservices();
  await app.listen( parseInt(environment.PORT,10) || 3000);
}
bootstrap();

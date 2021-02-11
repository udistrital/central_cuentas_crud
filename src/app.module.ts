import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Configuration } from './config/configuration';
import { OrdenPagoModule } from './orden-pago/orden-pago.module';
import { FiltersService } from './shared/filters/filters.service';



@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRoot(`mongodb://${Configuration.environment.USER_DB}:${Configuration.environment.PASS_DB}@`+
    `${Configuration.environment.HOST_DB}:${Configuration.environment.PORT_DB}/${Configuration.environment.NAME_DB}?authSource=${Configuration.environment.AUTH_DB}`,
    { useFindAndModify: false }),
    OrdenPagoModule
  ],
  controllers: [AppController],
  providers: [AppService, FiltersService],
})
export class AppModule {}

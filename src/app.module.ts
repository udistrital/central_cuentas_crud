import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './config/configuration';
import { OrdenPagoModule } from './orden-pago/orden-pago.module';
import { FiltersService } from './shared/filters/filters.service';
import { EstadosModule } from './estados/estados.module';
import { AutorizacionGiroModule } from './autorizacion-giro/autorizacion-giro.module';



@Module({
  imports: [
    ConfigModule,
    //MongooseModule.forRoot('mongodb://localhost/prueba-central-cuentas'),
   // `mongodb://${Configuration.environment.USER_DB}:${Configuration.environment.PASS_DB}@`+
    
    MongooseModule.forRoot(`mongodb://${environment.USER_DB}:${environment.PASS_DB}@`+
    `${environment.HOST_DB}:${environment.PORT_DB}/${environment.NAME_DB}?authSource=${environment.AUTH_DB}`,
    { useFindAndModify: false }),
    OrdenPagoModule,
    EstadosModule,
    AutorizacionGiroModule
  ],
  controllers: [AppController],
  providers: [AppService, FiltersService],
})
export class AppModule {}

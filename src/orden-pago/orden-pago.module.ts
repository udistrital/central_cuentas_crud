import { Module } from '@nestjs/common';
import { OrdenPagoController } from './orden-pago.controller';
import { OrdenPagoService } from './orden-pago.service';
import { OrdenPago, OrdenPagoSchema } from './schemas/orden-pago.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { FiltersService } from '../shared/filters/filters.service';

@Module({
  imports: [MongooseModule.forFeature([{name: OrdenPago.name, schema: OrdenPagoSchema}])],
  controllers: [OrdenPagoController],
  providers: [
    OrdenPagoService,
    FiltersService,
  ]
})
export class OrdenPagoModule {}

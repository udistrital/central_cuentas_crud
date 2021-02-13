import { Module } from '@nestjs/common';
import { OrdenPagoController } from './orden-pago.controller';
import { OrdenPagoService } from './orden-pago.service';
import { OrdenPago, OrdenPagoSchema } from './schemas/orden-pago.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { FiltersService } from '../shared/filters/filters.service';
import { EstadosModule } from '../estados/estados.module'

@Module({
  imports: [
    EstadosModule,
    MongooseModule.forFeature([{name: OrdenPago.name, schema: OrdenPagoSchema}]),
    ],
  controllers: [OrdenPagoController],
  providers: [
    OrdenPagoService,
    FiltersService,
    // EstadosService,
  ]
})
export class OrdenPagoModule {}

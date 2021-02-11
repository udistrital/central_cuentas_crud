import { Module } from '@nestjs/common';
import { OrdenPagoController } from './orden-pago.controller';
import { OrdenPagoService } from './orden-pago.service';
import { OrdenPago, OrdenPagoSchema } from './schemas/orden-pago.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: OrdenPago.name, schema: OrdenPagoSchema}])],
  controllers: [OrdenPagoController],
  providers: [OrdenPagoService]
})
export class OrdenPagoModule {}

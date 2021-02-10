import { Module } from '@nestjs/common';
import { OrdenPagoController } from './orden-pago.controller';
import { OrdenPagoService } from './orden-pago.service';

@Module({
  controllers: [OrdenPagoController],
  providers: [OrdenPagoService]
})
export class OrdenPagoModule {}

import { Module } from '@nestjs/common';
import { OrdenDevolucionController } from './orden-devolucion.controller';
import { OrdenDevolucionService } from './orden-devolucion.service';
import { OrdenDevolucion, OrdenDevolucionSchema } from './schemas/orden-devolucion.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { FiltersService } from '../shared/filters/filters.service';
import { EstadosModule } from '../estados/estados.module'

@Module({
  imports: [
    EstadosModule,
    MongooseModule.forFeature([{name: OrdenDevolucion.name, schema: OrdenDevolucionSchema}]),
    ],
  controllers: [OrdenDevolucionController],
  providers: [
    OrdenDevolucionService,
    FiltersService,
  ]
})
export class OrdenDevolucionModule {}

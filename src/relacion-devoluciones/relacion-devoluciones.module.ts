import { Module } from '@nestjs/common';
import { RelacionDevolucionesController } from './relacion-devoluciones.controller';
import { RelacionDevolucionesService } from './relacion-devoluciones.service';
import { RelacionDevoluciones, RelacionDevolucionesSchema } from './schemas/relacion-devoluciones.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { FiltersService } from '../shared/filters/filters.service';
import { EstadosModule } from '../estados/estados.module'

@Module({
  imports: [
    EstadosModule,
    MongooseModule.forFeature([{name: RelacionDevoluciones.name, schema: RelacionDevolucionesSchema}]),
    ],
  controllers: [RelacionDevolucionesController],
  providers: [
    RelacionDevolucionesService,
    FiltersService,
  ]
})
export class RelacionDevolucionesModule {}

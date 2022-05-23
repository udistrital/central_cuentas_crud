import { Module } from '@nestjs/common';
import { DevolucionTributariaController } from './devolucion-tributaria.controller';
import { DevolucionTributariaService } from './devolucion-tributaria.service';
import { DevolucionTributaria, DevolucionTributariaSchema } from './schemas/devolucion-tributaria.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { FiltersService } from '../shared/filters/filters.service';
import { EstadosModule } from '../estados/estados.module'

@Module({
  imports: [
    EstadosModule,
    MongooseModule.forFeature([{name: DevolucionTributaria.name, schema: DevolucionTributariaSchema}]),
    ],
  controllers: [DevolucionTributariaController],
  providers: [
    DevolucionTributariaService,
    FiltersService,
  ]
})
export class DevolucionTributariaModule {}

import { Module } from '@nestjs/common';
import { EstadosController } from './estados.controller';
import { EstadosService } from './estados.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EstadosSchema,Estados } from './schemas/estados.schema'
import { FiltersService } from '../shared/filters/filters.service';

@Module({
  imports: [MongooseModule.forFeature([{name: Estados.name, schema: EstadosSchema}])],
  controllers: [EstadosController],
  providers: [
    EstadosService,
    FiltersService,
  ],
  exports: [EstadosService]
})
export class EstadosModule {}

import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RelacionDevoluciones } from './schemas/relacion-devoluciones.schema';
import { RelacionDevolucionesDto } from './dto/relacion-devoluciones.dto';
import { FilterDto } from '../shared/dto/filter.dto';
import { FiltersService } from '../shared/filters/filters.service';
import { EstadosService } from '../estados/estados.service';
import { EstadosDto } from '../estados/dto/estados.dto'

@Injectable()
export class RelacionDevolucionesService {
  constructor(@InjectModel(RelacionDevoluciones.name) private readonly RelacionDevolucionesModel: Model<RelacionDevoluciones>,
  private estadosService: EstadosService,
  ) { }

  async post(relacionDevolucionesDto: RelacionDevolucionesDto) {
    try {
      const relacionDevoluciones = new this.RelacionDevolucionesModel(relacionDevolucionesDto);
      relacionDevoluciones.Fecha_creacion = new Date();
      relacionDevoluciones.Fecha_modificacion = new Date();
      const postRelacionDevoluciones = await relacionDevoluciones.save();
      return {
        Data: postRelacionDevoluciones,
        Message: "Registration successfull",
        Status: "201",
        Success: true
      }
    } catch (error) {
      throw new HttpException({
        Data: error,
        Message: error.message,
        Status: 400,
        Success: false
      }, 400)

    }
  }
  async getAll(filterDto: FilterDto): Promise<any> {
    try {
      const filtersService = new FiltersService(filterDto);
      const getAll = await this.RelacionDevolucionesModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
        .sort(filtersService.getSortBy())
        .exec();
      return {
        Data: getAll,
        Message: "Request successfull",
        Status: 200,
        Success: true
      }
    } catch (error) {
      throw new HttpException({
        Data: error,
        Message: error.message,
        Status: 404,
        Success: false
      },404);
    }
  }

  async getById(id: string): Promise<RelacionDevoluciones> {
    try {
      return await this.RelacionDevolucionesModel.findById(id).exec();
    } catch (error) {
      return null;
    }
  }

  async put(id: string, relacionDevolucionesDto: RelacionDevolucionesDto): Promise<any> {
    try {
      relacionDevolucionesDto.Fecha_modificacion = new Date();//pendiente definir la actualizacion de fechas de modificacion para todas las colecciones
      await this.RelacionDevolucionesModel.findByIdAndUpdate(id, relacionDevolucionesDto, { new: true }).exec();
      const find = await this.RelacionDevolucionesModel.findById(id).exec();
      return {
        Data: find,
        Message: "Update successfull",
        Status: 200,
        Success: true
      }
    } catch (error) {
      throw new HttpException({
        Data: error,
        Message: error.message,
        Status: 404,
        Success: false
      }, 400);
    }
  }

  async delete(id: string): Promise<any> {
    try {
      const deleteRelacion = await this.RelacionDevolucionesModel.findByIdAndRemove(id).exec();
      return {
        Data: {
          _id: id
        },
        Message: "Delete successfull",
        Status: 200,
        Success: true
      }
    } catch (error) {
      throw new HttpException({
        Data: error,
        Message: error.message,
        Status: 404,
        Success: false
      }, 404);;
    }
  }
}

import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Estados } from './schemas/estados.schema';
import { EstadosDto } from './dto/estados.dto';
import { FilterDto } from '../shared/dto/filter.dto';
import { FiltersService } from '../shared/filters/filters.service';
@Injectable()
export class EstadosService {
    constructor(@InjectModel(Estados.name) private readonly EstadosDtoModel: Model<Estados>) { }

  async post(estadosDto: EstadosDto) {
    try {
      const EstadosDto = new this.EstadosDtoModel(estadosDto);
      EstadosDto.Fecha_creacion = new Date();
      EstadosDto.Fecha_modificacion = new Date();
      const postEstadosDto = await EstadosDto.save();
      return {
        Data: postEstadosDto,
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
      const getAll = await this.EstadosDtoModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
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

  async put(id: string, estadosDto: EstadosDto): Promise<any> {
    try {
      estadosDto.Fecha_modificacion = new Date();//pendiente definir la actualizacion de fechas de modificacion para todas las colecciones
      await this.EstadosDtoModel.findByIdAndUpdate(id, estadosDto, { new: true }).exec();
      const find = await this.EstadosDtoModel.findById(id).exec();
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
      const deleteOrden = await this.EstadosDtoModel.findByIdAndRemove(id).exec();
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
        Success: "holi"
      }, 404);;
    }
  }
}

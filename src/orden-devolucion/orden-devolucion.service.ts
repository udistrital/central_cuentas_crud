import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { OrdenDevolucion } from './schemas/orden-devolucion.schema';
import { OrdenDevolucionDto } from './dto/orden-devolucion.dto';
import { FilterDto } from '../shared/dto/filter.dto';
import { FiltersService } from '../shared/filters/filters.service';
import { EstadosService } from '../estados/estados.service';
import { EstadosDto } from '../estados/dto/estados.dto'

@Injectable()
export class OrdenDevolucionService {
  constructor(@InjectModel(OrdenDevolucion.name) private readonly OrdenDevolucionModel: Model<OrdenDevolucion>,
  private estadosService: EstadosService,
  ) { }

  async post(ordenDevolucionDto: OrdenDevolucionDto) {
    try {
      const ordenDevolucion = new this.OrdenDevolucionModel(ordenDevolucionDto);
      ordenDevolucion.Fecha_creacion = new Date();
      ordenDevolucion.Fecha_modificacion = new Date();
      const postOrdenDevolucion = await ordenDevolucion.save();
      return {
        Data: postOrdenDevolucion,
        Message: "Registration successfull",
        Status: HttpStatus.CREATED,
        Success: true
      }
    } catch (error) {
      throw new HttpException({
        Data: error,
        Message: error.message,
        Status: HttpStatus.BAD_REQUEST,
        Success: false
      }, HttpStatus.BAD_REQUEST)

    }
  }
  async getAll(filterDto: FilterDto): Promise<any> {
    try {
      const filtersService = new FiltersService(filterDto);
      const getAll = await this.OrdenDevolucionModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
        .sort(filtersService.getSortBy())
        .exec();
      return {
        Data: getAll,
        Message: "Request successfull",
        Status: HttpStatus.OK,
        Success: true
      }
    } catch (error) {
      throw new HttpException({
        Data: error,
        Message: error.message,
        Status: HttpStatus.NOT_FOUND,
        Success: false
      },HttpStatus.NOT_FOUND);
    }
  }

  async getById(id: string): Promise<OrdenDevolucion> {
    try {
      return await this.OrdenDevolucionModel.findById(id).exec();
    } catch (error) {
      return null;
    }
  }

  async put(id: string, ordenDevolucionDto: OrdenDevolucionDto): Promise<any> {
    try {
      ordenDevolucionDto.Fecha_modificacion = new Date();//pendiente definir la actualizacion de fechas de modificacion para todas las colecciones
      await this.OrdenDevolucionModel.findByIdAndUpdate(id, ordenDevolucionDto, { new: true }).exec();
      const find = await this.OrdenDevolucionModel.findById(id).exec();
      return {
        Data: find,
        Message: "Update successfull",
        Status: HttpStatus.OK,
        Success: true
      }
    } catch (error) {
      throw new HttpException({
        Data: error,
        Message: error.message,
        Status: HttpStatus.NOT_FOUND,
        Success: false
      }, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<any> {
    try {
      const deleteDevolucion = await this.OrdenDevolucionModel.findByIdAndRemove(id).exec();
      return {
        Data: {
          _id: id
        },
        Message: "Delete successfull",
        Status: HttpStatus.OK,
        Success: true
      }
    } catch (error) {
      throw new HttpException({
        Data: error,
        Message: error.message,
        Status: HttpStatus.NOT_FOUND,
        Success: false
      }, HttpStatus.NOT_FOUND);;
    }
  }
}

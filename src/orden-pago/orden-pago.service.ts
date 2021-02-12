import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { OrdenPago } from './schemas/orden-pago.schema';
import { OrdenPagoDto } from './dto/orden-pago.dto';
import { FilterDto } from '../shared/dto/filter.dto';
import { FiltersService } from '../shared/filters/filters.service';

@Injectable()
export class OrdenPagoService {
  constructor(@InjectModel(OrdenPago.name) private readonly ordenPagoModel: Model<OrdenPago>) { }

  async post(ordenPagoDto: OrdenPagoDto) {
    try {
      const ordenPago = new this.ordenPagoModel(ordenPagoDto);
      ordenPago.Fecha_creacion = new Date();
      ordenPago.Fecha_modificacion = new Date();
      const postOrdenPago = await ordenPago.save();
      return {
        Data: postOrdenPago,
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
      const getAll = await this.ordenPagoModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
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

  async getById(id: string): Promise<OrdenPago> {
    try {
      return await this.ordenPagoModel.findById(id).exec();
    } catch (error) {
      return null;
    }
  }

  async put(id: string, ordenPagoDto: OrdenPagoDto): Promise<any> {
    try {
      ordenPagoDto.Fecha_modificacion = new Date();//pendiente definir la actualizacion de fechas de modificacion para todas las colecciones
      await this.ordenPagoModel.findByIdAndUpdate(id, ordenPagoDto, { new: true }).exec();
      const find = await this.ordenPagoModel.findById(id).exec();
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
      const deleteOrden = await this.ordenPagoModel.findByIdAndRemove(id).exec();
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

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { OrdenPago } from './schemas/orden-pago.schema';
import { OrdenPagoDto } from './dto/orden-pago.dto';
import { FilterDto } from '../shared/dto/filter.dto';
import { FiltersService } from '../shared/filters/filters.service';

@Injectable()
export class OrdenPagoService {
  constructor(@InjectModel(OrdenPago.name) private readonly ordenPagoModel: Model<OrdenPago>) { }

  async post(ordenPagoDto: OrdenPagoDto): Promise<OrdenPagoDto> {
    const ordenPago = new this.ordenPagoModel(ordenPagoDto);
    ordenPago.Fecha_creacion = new Date();
    ordenPago.Fecha_modificacion = new Date();
    return ordenPago.save();
  }
  async getAll(filterDto: FilterDto): Promise<OrdenPago[]> {
    const filtersService = new FiltersService(filterDto);
    return await this.ordenPagoModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
      .sort(filtersService.getSortBy())
      .exec();
  }

  async getById(id: string): Promise<OrdenPago> {
    try {
      return await this.ordenPagoModel.findById(id).exec();
    } catch (error) {
      return null;
    }
  }

  async put(id: string, ordenPagoDto: OrdenPagoDto): Promise<OrdenPago> {
    try {
      ordenPagoDto.Fecha_modificacion = new Date();//pendiente definir la actualizacion de fechas de modificacion para todas las colecciones
      await this.ordenPagoModel.findByIdAndUpdate(id, ordenPagoDto, { new: true }).exec();
      return await this.ordenPagoModel.findById(id).exec();
    } catch (error) {
      return null;
    }
  }

  async delete(id: string): Promise<any> {
    try {
      return await this.ordenPagoModel.findByIdAndRemove(id).exec();
    } catch (error) {
      return null;
    }
  }
}

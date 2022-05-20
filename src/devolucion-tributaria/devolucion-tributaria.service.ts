import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DevolucionTributaria } from './schemas/devolucion-tributaria.schema';
import { DevolucionTributariaDto } from './dto/devolucion-tributaria.dto';
import { FilterDto } from '../shared/dto/filter.dto';
import { FiltersService } from '../shared/filters/filters.service';
import { EstadosService } from '../estados/estados.service';
import { EstadosDto } from '../estados/dto/estados.dto'

@Injectable()
export class DevolucionTributariaService {
  constructor(@InjectModel(DevolucionTributaria.name) private readonly DevolucionTributariaModel: Model<DevolucionTributaria>,
  private estadosService: EstadosService,
  ) { }

  async post(devolucionTributariaDto: DevolucionTributariaDto) {
    try {
      const devolucionTributaria = new this.DevolucionTributariaModel(devolucionTributariaDto);
      devolucionTributaria.Fecha_creacion = new Date();
      devolucionTributaria.Fecha_modificacion = new Date();
      const postDevolucionTributaria = await devolucionTributaria.save();
      return {
        Data: postDevolucionTributaria,
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
      const getAll = await this.DevolucionTributariaModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
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

  async getById(id: string): Promise<DevolucionTributaria> {
    try {
      return await this.DevolucionTributariaModel.findById(id).exec();
    } catch (error) {
      return null;
    }
  }

  async put(id: string, devolucionTributariaDto: DevolucionTributariaDto): Promise<any> {
    try {
      devolucionTributariaDto.Fecha_modificacion = new Date();//pendiente definir la actualizacion de fechas de modificacion para todas las colecciones
      await this.DevolucionTributariaModel.findByIdAndUpdate(id, devolucionTributariaDto, { new: true }).exec();
      const find = await this.DevolucionTributariaModel.findById(id).exec();
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
      const deleteDevolucion = await this.DevolucionTributariaModel.findByIdAndRemove(id).exec();
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

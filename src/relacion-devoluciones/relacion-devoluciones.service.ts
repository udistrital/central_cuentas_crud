import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
  constructor(
    @InjectModel(RelacionDevoluciones.name) private readonly RelacionDevolucionesModel: Model<RelacionDevoluciones>,
    private estadosService: EstadosService,
  ) { }

  async post(relacionDevolucionesDto: RelacionDevolucionesDto) {
    try {
      const relacionDevoluciones = new this.RelacionDevolucionesModel(relacionDevolucionesDto);
      const now = new Date();
      relacionDevoluciones.Fecha_creacion = now;
      relacionDevoluciones.Fecha_modificacion = now;
      const postRelacionDevoluciones = await relacionDevoluciones.save();
      return {
        Data: postRelacionDevoluciones,
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
      const getAll = await this.RelacionDevolucionesModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
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
      },HttpStatus.BAD_REQUEST);
    }
  }

  async getById(id: string): Promise<RelacionDevoluciones> {
    try {
      return await this.RelacionDevolucionesModel.findById(id).exec();
    } catch (error) {
      throw new HttpException({
        Data: error,
        Message: error.message,
        Status: HttpStatus.NOT_FOUND,
        Success: false
      }, HttpStatus.NOT_FOUND);
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
        Status: HttpStatus.OK,
        Success: true
      }
    } catch (error) {
      throw new HttpException({
        Data: error,
        Message: error.message,
        Status: HttpStatus.BAD_REQUEST,
        Success: false
      }, HttpStatus.NOT_FOUND);
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
        Status: HttpStatus.OK,
        Success: true
      }
    } catch (error) {
      throw new HttpException({
        Data: error,
        Message: error.message,
        Status: HttpStatus.NOT_FOUND,
        Success: false
      }, HttpStatus.BAD_REQUEST);;
    }
  }
}

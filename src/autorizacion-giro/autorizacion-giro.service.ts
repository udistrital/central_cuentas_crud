import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AutorizacionGiro } from './schemas/autorizacion-giro.schema';
import { Model } from 'mongoose';
import { AutorizacionGiroDTO } from './dto/autorizacion-giro.dto';
import { FilterDto } from 'src/shared/dto/filter.dto';
import { FiltersService } from 'src/shared/filters/filters.service';

@Injectable()
export class AutorizacionGiroService {
    constructor(@InjectModel(AutorizacionGiro.name) private readonly AutorizacionGiroModel: Model<AutorizacionGiro>) {}
    
    async post(autorizacionGiroDTO: AutorizacionGiroDTO) {
        try {
            const autorizacionGiro = new this.AutorizacionGiroModel(autorizacionGiroDTO);
            autorizacionGiro.Fecha_creacion = new Date();
            autorizacionGiro.Fecha_modificacion = new Date();
            const postAutorizacionGiro = await autorizacionGiro.save();
            return {
                Data: postAutorizacionGiro,
                Message: "Registration Successfull",
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
            const getAll = await this.AutorizacionGiroModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
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
            }, 404)
        }
    }

    async getById(id: string): Promise<AutorizacionGiro> {
        try {
            return await this.AutorizacionGiroModel.findById(id).exec();
        } catch (error) {
            return null;
        }
    }

    async put(id: string, autorizacionGiroDTO: AutorizacionGiroDTO): Promise<any> {
        try {
            autorizacionGiroDTO.Fecha_Modificacion = new Date();
            await this.AutorizacionGiroModel.findByIdAndUpdate(id, autorizacionGiroDTO, { new: true }).exec();
            const find = await this.AutorizacionGiroModel.findById(id).exec();
            return {
                Data: find,
                Message: "Update successfull",
                Status: 200,
                Success: true
            }
        } catch(error) {
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
          const deleteOrden = await this.AutorizacionGiroModel.findByIdAndRemove(id).exec();
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

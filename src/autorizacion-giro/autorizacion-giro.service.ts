import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AutorizacionGiro } from './schemas/autorizacion-giro.schema';
import { Model } from 'mongoose';
import { AutorizacionGiroDTO } from './dto/autorizacion-giro.dto';

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
}

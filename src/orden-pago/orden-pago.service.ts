import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { OrdenPago } from './schemas/orden-pago.schema';
import { OrdenPagoDto } from './dto/orden-pago.dto';
// import { FilterDto } from '../filters/dto/filter.dto';
// import { FiltersService } from '../filters/filters.service';

@Injectable()
export class OrdenPagoService {
    constructor(@InjectModel(OrdenPago.name) private readonly seccionModel: Model<OrdenPago>) { }
    
    async post(ordenPagoDto: OrdenPagoDto): Promise<OrdenPagoDto> {        
        const ordenPago = new this.seccionModel(ordenPagoDto);    
        ordenPago.Fecha_creacion = new Date();    
        return ordenPago.save();
      }
}

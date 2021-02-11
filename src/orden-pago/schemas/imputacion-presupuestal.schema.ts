import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'imputacion_presupuestal' })
export class ImputacionPresupuestal extends Document {

    @Prop({required:false })
    Fecha_creacion: Date;

    @Prop({required:false , default: new Date() })
    Fecha_modificacion: Date;

    @Prop( {required:false , default: true } )
    Activo: boolean
    
    @Prop()
    Numero_cdp: number;
    
    @Prop()
    Numero_rp: number;
    
    @Prop()
    Rubro_presupuestal: string;

    @Prop()
    Valor_aplicado: number;
  
};

export const ImputacionPresupuestalSchema = SchemaFactory.createForClass(ImputacionPresupuestal);
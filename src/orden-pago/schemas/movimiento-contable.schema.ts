import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'imputacion_presupuestal' })
export class MovimientoContable extends Document {

    @Prop({required:false })
    Fecha_creacion: Date;

    @Prop({required:false , default: new Date() })
    Fecha_modificacion: Date;

    @Prop( {required:false , default: true } )
    Activo: boolean
    
    @Prop()
    Retencion_id: number;
    
    @Prop()
    Base_retencion: number;
    
    @Prop({required: false})
    Codigo_contable: string;

    @Prop( {required: false, default: true} )
    Informativo: boolean;
  
};

export const MovimientoContableSchema = SchemaFactory.createForClass(MovimientoContable);
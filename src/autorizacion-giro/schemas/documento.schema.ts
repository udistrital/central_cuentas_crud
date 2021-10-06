import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'autorizacion_giro' })
export class Documento extends Document {

    @Prop({required:false })
    Fecha_creacion: Date;

    @Prop({required:false , default: new Date() })
    Fecha_modificacion: Date;

    @Prop( {required:false , default: true } )
    Activo: boolean
    
    @Prop()
    Documento: string;  
};

export const DocumentoSchema = SchemaFactory.createForClass(Documento);
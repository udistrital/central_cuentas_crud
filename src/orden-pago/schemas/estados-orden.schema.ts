import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'estados' })
export class EstadoOrden extends Document {

    @Prop()
    Fecha_creacion: Date;

    @Prop({ default: new Date() })
    Fecha_modificacion: Date;

    @Prop( { default: true } )
    Activo: boolean
    
    @Prop()
    Nombre: string;
    
    @Prop()
    Estado_id: number;
    
    @Prop()
    Descripcion: string;
};

export const EstadoOrdenSchema = SchemaFactory.createForClass(EstadoOrden);
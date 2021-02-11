import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'estados' })
export class Estados extends Document {

    @Prop()
    Fecha_creacion: Date;

    @Prop({ default: new Date() })
    Fecha_modificacion: Date;

    @Prop( { default: true } )
    Activo: boolean
    
    @Prop()
    Nombre: string;
    
    @Prop()
    Descripcion: string;
};

export const EstadosSchema = SchemaFactory.createForClass(Estados);
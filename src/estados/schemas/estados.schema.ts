import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
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
    Estado_id: number;
    
    @Prop()
    Descripcion: string;

    @Prop(raw({
        Coleccion: { type: String },
        Documento_id: { type: String },
    }))
    Documento:Record<string, any>
};

export const EstadosSchema = SchemaFactory.createForClass(Estados);
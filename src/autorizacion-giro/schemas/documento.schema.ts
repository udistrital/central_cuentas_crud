import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'autorizacion_giro' })
export class Documento extends Document {
    @Prop()
    NombreDocumento: string;

    @Prop()
    NombreArchivo: string;

    @Prop()
    UID: string
};

export const DocumentoSchema = SchemaFactory.createForClass(Documento);

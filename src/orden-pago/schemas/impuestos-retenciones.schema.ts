import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'impuestos-retenciones' })
export class ImpuestosRetenciones extends Document {

    @Prop()
    Base: number;

    @Prop()
    Codigo: string;

    @Prop()
    Descuento: string;

    @Prop()
    Nombre: string;

    @Prop()
    Valor: number;

};

export const ImpuestosRetencionesSchema = SchemaFactory.createForClass(ImpuestosRetenciones);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'movimiento_contable' })
export class MovimientoContable extends Document {

    @Prop()
    Codigo: string;

    @Prop()
    Nombre: string;

    @Prop()
    Valor: number;
};

export const MovimientoContableSchema = SchemaFactory.createForClass(MovimientoContable);

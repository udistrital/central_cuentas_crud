import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'movimiento_contable' })
export class MovimientoContable extends Document {

    @Prop()
    Codigo: string;

    @Prop()
    Tercero: string;

    @Prop()
    NombreMovimiento: string;

    @Prop()
    Detalle: string;

    @Prop()
    Nombre: string;

    @Prop()
    Debito: number;

    @Prop()
    Credito: number;

    @Prop()
    Naturaleza: string;
};

export const MovimientoContableSchema = SchemaFactory.createForClass(MovimientoContable);

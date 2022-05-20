import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema( { collection: 'movimiento_contable'})
export class MovimientoContable extends Document {// Movimiento contable
    @Prop()
    Codigo: string

    @Prop()
    Nombre: string

    @Prop()
    PorcentajeRetencion: number

    @Prop()
    BaseRetencion: number

    @Prop()
    Naturaleza: string
}

export const MovimientoContableSchema = SchemaFactory.createForClass(MovimientoContable);

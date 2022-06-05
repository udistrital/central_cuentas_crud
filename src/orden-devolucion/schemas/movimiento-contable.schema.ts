import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema( { collection: 'orden_devolucion'})
export class MovimientoContableOrDev extends Document {// Movimiento contable
    @Prop()
    Secuencia: number

    @Prop()
    Codigo: string

    @Prop()
    Nombre: string

    @Prop()
    Naturaleza: string

    @Prop({default: 0})
    Credito: number

    @Prop({default: 0})
    Debito: number

    @Prop()
    Tercero: string
}

export const MovimientoContableOrDevSchema = SchemaFactory.createForClass(MovimientoContableOrDev);

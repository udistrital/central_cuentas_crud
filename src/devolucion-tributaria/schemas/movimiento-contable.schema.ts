import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema( { collection: 'movimiento_contable'})
export class MovimientoContableDevTri extends Document {// Movimiento contable
    @Prop()
    Secuencia: number

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

    @Prop({default: 0})
    Credito: number

    @Prop({default: 0})
    Debito: number

    @Prop()
    Tercero: string
}

export const MovimientoContableDevTriSchema = SchemaFactory.createForClass(MovimientoContableDevTri);

import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema( { collection: 'ordenes_devolucion'})
export class OrdenesDevolucion extends Document {// Ordenes pago
    @Prop()
    Consecutivo: number

    @Prop()
    Beneficiario: string

    @Prop()
    TipoDocumento: string

    @Prop()
    NumeroDocumento: string

    @Prop()
    FormaPago: string

    @Prop()
    Banco: string

    @Prop()
    TipoCuenta: string

    @Prop()
    NumeroCuenta: string

    @Prop()
    Valor: string
}

export const OrdenesDevolucionSchema = SchemaFactory.createForClass(OrdenesDevolucion);

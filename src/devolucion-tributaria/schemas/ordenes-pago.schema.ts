import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema( { collection: 'ordenes_pago'})
export class OrdenesPago extends Document {// Ordenes pago
    @Prop()
    Consecutivo: number
}

export const OrdenesPagoSchema = SchemaFactory.createForClass(OrdenesPago);

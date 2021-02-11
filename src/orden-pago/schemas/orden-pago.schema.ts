import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ImputacionPresupuestal } from './imputacion-presupuestal.schema';
import { MovimientoContable } from './movimiento-contable.schema';
import * as mongoose from 'mongoose';

@Schema( { collection: 'orden_pago' } )
export class OrdenPago extends Document { // OrdenPago
    // @Prop()
    // _id: String
    @Prop()
    Fecha_creacion: Date;

    @Prop({ default: new Date() })
    Fecha_modificacion: Date;

    @Prop( { default: true } )
    Activo: boolean

    @Prop()
    Numero: number;

    @Prop()
    Solicitante_id: number;

    @Prop()
    Beneficiario_id: number;

    @Prop()
    Tipo_compromiso_id: number;

    @Prop()
    Numero_compromiso: number;

    @Prop()
    Vigencia: number;

    @Prop()
    Area_funcional: string;

    @Prop()
    Concepto_id: string;
    // @Prop()
    @Prop( { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ImputacionPresupuestal' }] } )
    Imputacion_presupuestal: ImputacionPresupuestal[];
    @Prop( { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MovimientoContable' }] } )
    Imputacion_preMovimiento_contablesupuestal: MovimientoContable[];
}

export const OrdenPagoSchema = SchemaFactory.createForClass(OrdenPago);
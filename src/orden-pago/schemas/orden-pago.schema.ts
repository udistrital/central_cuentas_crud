import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ImputacionPresupuestal,ImputacionPresupuestalSchema } from './imputacion-presupuestal.schema';
import { MovimientoContable,MovimientoContableSchema } from './movimiento-contable.schema';
import { EstadoOrdenSchema, EstadoOrden } from './estados-orden.schema';

@Schema( { collection: 'orden_pago' } )
export class OrdenPago extends Document { // OrdenPago
    // @Prop()
    // _id: String
    @Prop({required:false })
    Fecha_creacion: Date;

    @Prop({required:false , default: new Date() })
    Fecha_modificacion: Date;

    @Prop( {required:false , default: true } )
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

    @Prop( { type: [EstadoOrdenSchema] } )
    Estados: EstadoOrden[];

    @Prop( { type: [{ type: ImputacionPresupuestalSchema, ref: 'ImputacionPresupuestal' }] } )
    Imputacion_presupuestal: ImputacionPresupuestal[];

    @Prop( { type: [{ type: MovimientoContableSchema, ref: 'MovimientoContable' }] } )
    Movimiento_contable: MovimientoContable[];
}

export const OrdenPagoSchema = SchemaFactory.createForClass(OrdenPago);
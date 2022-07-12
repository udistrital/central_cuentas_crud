import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ImputacionPresupuestal,ImputacionPresupuestalSchema } from './imputacion-presupuestal.schema';
import { MovimientoContable, MovimientoContableSchema } from './movimiento-contable.schema';
import { ImpuestosRetenciones, ImpuestosRetencionesSchema } from './impuestos-retenciones.schema';

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
    AreaFuncional: number;

    @Prop()
    Consecutivo: string;

    @Prop()
    SolicitudGiro: string;

    @Prop()
    Vigencia: number;

    @Prop()
    DocumentoBeneficiario: string;

    @Prop()
    NombreBeneficiario: string;

    @Prop()
    Compromiso: number;

    @Prop()
    NumeroCompromiso: number;

    @Prop()
    Supervisor: string;

    @Prop()
    Detalle: string;

    @Prop()
    TipoConvenio: string;

    @Prop()
    Convenio: string;

    @Prop()
    TipoOrdenPago: number;

    @Prop()
    ActaRecibido: string;

    @Prop()
    Endoso: boolean;

    @Prop()
    BeneficiarioEndoso: string;

    @Prop()
    ValorEndoso: number;

    @Prop()
    CuentaEndoso: string;

    @Prop()
    CuentaEndosoId: string;

    @Prop()
    CuentaEndosoNaturaleza: string;

    @Prop()
    ValorOP: number;

    @Prop()
    Estado: string;

    @Prop( { type: [{ type: ImputacionPresupuestalSchema, ref: 'ImputacionPresupuestal' }] } )
    ImputacionPresupuestal: ImputacionPresupuestal[];

    @Prop()
    Concepto: string;

    @Prop( { type: [{ type: ImpuestosRetencionesSchema, ref: 'ImpuestosRetenciones' }] } )
    ImpuestosRetenciones: ImpuestosRetenciones[];

    @Prop()
    CuentaValorNeto: string;

    @Prop()
    CuentaValorNetoId: string;

    @Prop()
    CuentaValorNetoNaturaleza: string;

    @Prop( {type: [{ type: MovimientoContableSchema, ref: 'MovimientoContable'}]})
    MovimientoContable: MovimientoContable[];
}

export const OrdenPagoSchema = SchemaFactory.createForClass(OrdenPago);

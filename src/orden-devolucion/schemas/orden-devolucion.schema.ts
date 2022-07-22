import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MovimientoContableOrDev, MovimientoContableOrDevSchema } from './movimiento-contable.schema';
import { DocumentosBeneficiario, DocumentosBeneficiarioSchema } from './documentos-beneficiario.schema';

@Schema( { collection: 'orden_devolucion' } )
export class OrdenDevolucion extends Document { // Devolucion Tributaria
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
    TipoDocumentoSolicitante: number;

    @Prop()
    NumeroDocumentoSolicitante: string;

    @Prop()
    FechaRequerimiento: Date;

    @Prop()
    NombreSolicitante: string;

    @Prop()
    Cargo: string;

    @Prop()
    NumeroRequerimiento: number;

    @Prop()
    Concepto: string;

    @Prop()
    RazonDevolucion: number;

    @Prop()
    ValorDevolucion: number;

    @Prop()
    TipoDocumentoBeneficiario: number;

    @Prop()
    NumeroDocumentoBeneficiario: string;

    @Prop()
    NombreBeneficiario: string;

    @Prop()
    Banco: number;

    @Prop()
    TipoCuenta: number;

    @Prop()
    NumeroCuenta: string;

    @Prop()
    FormaPago: number;

    @Prop( { type: [{ type: DocumentosBeneficiarioSchema, ref: 'DocumentosBeneficiario' }] } )
    DocumentosBeneficiario: DocumentosBeneficiario[];

    @Prop()
    TipoComprobante: string;

    @Prop()
    NumeroComprobante: number;

    @Prop()
    Consecutivo: number;

    @Prop()
    Estado: string;

    @Prop( {type: [{ type: MovimientoContableOrDevSchema, ref: 'MovimientoContableOrDev'}]})
    MovimientoContable: MovimientoContableOrDev[];
}

export const OrdenDevolucionSchema = SchemaFactory.createForClass(OrdenDevolucion);

import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MovimientoContable, MovimientoContableSchema } from './movimiento-contable.schema';
import { OrdenesPago, OrdenesPagoSchema } from './ordenes-pago.schema';

@Schema( { collection: 'devolucion_tributaria' } )
export class DevolucionTributaria extends Document { // Devolucion Tributaria
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
    NumeroRequerimiento: number;

    @Prop()
    FechaSolicitud: Date;

    @Prop()
    DocumentoBeneficiario: string;

    @Prop()
    NombreBeneficiario: string;

    @Prop()
    Concepto: string;

    @Prop()
    RazonDevolucion: string;

    @Prop()
    TipoComprobante: string;

    @Prop()
    NumeroComprobante: string;

    @Prop()
    ValorDevolucion: number;

    @Prop()
    Estado: string;

    @Prop( { type: [{ type: OrdenesPagoSchema, ref: 'OrdenesPago' }] } )
    OrdenesPago: OrdenesPago[];

    @Prop( {type: [{ type: MovimientoContableSchema, ref: 'MovimientoContable'}]})
    MovimientoContable: MovimientoContable[];
}

export const DevolucionTributariaSchema = SchemaFactory.createForClass(DevolucionTributaria);

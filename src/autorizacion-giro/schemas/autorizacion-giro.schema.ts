import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Documento, DocumentoSchema } from './documento.schema';

@Schema( { collection: 'autorizacion_giro' } )
export class AutorizacionGiro extends Document {
    @Prop({required:false })
    Fecha_creacion: Date;

    @Prop({required:false , default: new Date() })
    Fecha_modificacion: Date;

    @Prop( {required:false , default: true } )
    Activo: boolean

    @Prop()
    Numero_Solicitud: number;

    @Prop()
    Area_Funcional: number;

    @Prop()
    Concepto: string;

    @Prop()
    Documento_Solicitante: string;

    @Prop()
    Tipo_Doc_Beneficiario: number;

    @Prop()
    Documento_Beneficiario: string;

    @Prop()
    Nombre_Beneficiario: string;

    @Prop()
    Rubro: string;

    @Prop()
    Valor_Letras: string;

    @Prop()
    Valor_Numeros: number;

    @Prop()
    Estado: string;

    @Prop()
    Motivo_Rechazo: string;

    @Prop( { type: [{ type: DocumentoSchema, ref: 'DocumentoSchema' }] } )
    Documentos: Documento[];
}

export const AutorizacionGiroSchema = SchemaFactory.createForClass(AutorizacionGiro);

import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema( { collection: 'orden_devolucion'})
export class DocumentosBeneficiario extends Document {// Ordenes pago
    @Prop()
    NombreArchivo: string

    @Prop()
    TamañoArchivo: string

    @Prop()
    UID: string

    @Prop()
    Estado: string
}

export const DocumentosBeneficiarioSchema = SchemaFactory.createForClass(DocumentosBeneficiario);

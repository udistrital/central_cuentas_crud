import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { OrdenesDevolucion, OrdenesDevolucionSchema } from './ordenes-devolucion.schema';

@Schema( { collection: 'relacion_devoluciones' } )
export class RelacionDevoluciones extends Document { // Devolucion Tributaria
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
    FechaInicio: Date;

    @Prop()
    FechaFin: Date;

    @Prop()
    Consecutivo: number;

    @Prop( { type: [{ type: OrdenesDevolucionSchema, ref: 'OrdenesDevolucion' }] } )
    OrdenesDevolucion: OrdenesDevolucion[];
}

export const RelacionDevolucionesSchema = SchemaFactory.createForClass(RelacionDevoluciones);

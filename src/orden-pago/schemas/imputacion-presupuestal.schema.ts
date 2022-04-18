import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'imputacion_presupuestal' })
export class ImputacionPresupuestal extends Document {

    @Prop()
    Codigo: string;

    @Prop()
    Disponibilidad: string;

    @Prop()
    Nombre: string;

    @Prop()
    Registro: number;

    @Prop()
    Valor: number;

};

export const ImputacionPresupuestalSchema = SchemaFactory.createForClass(ImputacionPresupuestal);

import { ApiProperty } from "@nestjs/swagger";

export class DocumentoDTO {
    @ApiProperty({required: false})
    readonly Fecha_Creacion: Date;
    @ApiProperty({required: false, default: new Date()})
    readonly Fecha_Modificacion: Date;
    @ApiProperty({ required: false, default: true })
    readonly Activo: boolean;
    @ApiProperty()
    readonly Documento: string;
}
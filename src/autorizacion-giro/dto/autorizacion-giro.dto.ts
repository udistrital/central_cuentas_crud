import { ApiProperty } from "@nestjs/swagger";
import { DocumentoDTO } from "./documento.dto";

export class AutorizacionGiroDTO {
    @ApiProperty({required: false})
    readonly Fecha_Creacion: Date;
    @ApiProperty({required: false, default: new Date()})
    Fecha_Modificacion: Date;
    @ApiProperty({ required: false, default: true })
    readonly Activo: boolean;
    @ApiProperty()
    readonly Numero_Solicitud: number;
    @ApiProperty()
    readonly Area_Funcional: string;
    @ApiProperty()
    readonly Concepto: string;
    @ApiProperty()
    readonly Documento_Solicitante: string;
    @ApiProperty()
    readonly Documento_Beneficiario: string;
    @ApiProperty()
    readonly Rubro: string;
    @ApiProperty()
    readonly Valor_Letras: string;
    @ApiProperty()
    readonly Valor_Numeros: number
    @ApiProperty()
    readonly Estado: string
    @ApiProperty({ type: DocumentoDTO, isArray: true})
    readonly Documentos: DocumentoDTO[];
}
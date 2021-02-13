import { ApiProperty } from '@nestjs/swagger';
import { DocumentoDto } from './documento.dto'

export class EstadosDto {
    @ApiProperty({required:false })
    readonly Fecha_creacion: Date;
    @ApiProperty({required:false , default: new Date() })
    readonly Fecha_modificacion: Date;
    @ApiProperty({ required:false ,default: true })
    readonly Activo: boolean;
    @ApiProperty()
    readonly Estado_id: string;
    @ApiProperty( {required:false} )
    readonly Descripcion: string;
    @ApiProperty()
    Documento: DocumentoDto;
}
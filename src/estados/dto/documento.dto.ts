import { ApiProperty } from '@nestjs/swagger';

export class DocumentoDto {
    @ApiProperty()
    Coleccion: string
    @ApiProperty()
    Documento_id: string
}
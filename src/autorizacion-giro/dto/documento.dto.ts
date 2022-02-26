import { ApiProperty } from "@nestjs/swagger";

export class DocumentoDTO {
    @ApiProperty()
    NombreDocumento: string;
    @ApiProperty()
    NombreArchivo: string;
    @ApiProperty()
    UID: string;
}
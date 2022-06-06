import { ApiProperty } from '@nestjs/swagger';


export class DocumentosBeneficiarioDto{
    @ApiProperty()
    readonly NombreArchivo: string;
    @ApiProperty()
    readonly TamañoArchivo: string;
    @ApiProperty()
    readonly UID: string;
    @ApiProperty()
    readonly Estado: string;
}

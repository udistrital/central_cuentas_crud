import { ApiProperty } from '@nestjs/swagger';


export class ImpuestosRetencionesDto {
    @ApiProperty()
    readonly Base: number;
    @ApiProperty()
    readonly Codigo: string;
    @ApiProperty()
    readonly Descuento: string;
    @ApiProperty()
    readonly Nombre: string;
    @ApiProperty()
    readonly Valor: number
}

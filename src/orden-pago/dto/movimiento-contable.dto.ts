import { ApiProperty } from '@nestjs/swagger';


export class MovimientoContableDto {
    @ApiProperty()
    readonly Codigo: string;
    @ApiProperty()
    readonly Nombre: string;
    @ApiProperty()
    readonly Valor: number;
}

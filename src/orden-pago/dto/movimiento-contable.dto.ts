import { ApiProperty } from '@nestjs/swagger';


export class MovimientoContableDto {
    @ApiProperty()
    readonly Codigo: string;
    @ApiProperty()
    readonly Tercero: string;
    @ApiProperty()
    readonly NombreMovimiento: string;
    @ApiProperty()
    readonly Detalle: string;
    @ApiProperty()
    readonly Nombre: string;
    @ApiProperty()
    readonly Debito: number;
    @ApiProperty()
    readonly Credito: number;
    @ApiProperty()
    readonly Naturaleza: string;
    @ApiProperty()
    readonly CuentaContableId: string;
}

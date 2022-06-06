import { ApiProperty } from '@nestjs/swagger';


export class MovimientoContableOrDevDto {
    @ApiProperty()
    readonly Secuencia: number;
    @ApiProperty()
    readonly Codigo: string;
    @ApiProperty()
    readonly Nombre: string;
    @ApiProperty()
    readonly Naturaleza: string;
    @ApiProperty({default: 0})
    readonly Credito: number;
    @ApiProperty({default: 0})
    readonly Debito: number;
    @ApiProperty()
    readonly Tercero: string;
}

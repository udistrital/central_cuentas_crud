import { ApiProperty } from '@nestjs/swagger';


export class MovimientoContableDto {
    @ApiProperty()
    readonly Codigo: string;
    @ApiProperty()
    readonly Nombre: string;
    @ApiProperty()
    readonly PorcentajeRetencion: number;
    @ApiProperty()
    readonly BaseRetencion: number;
    @ApiProperty()
    readonly Naturaleza: string;
}

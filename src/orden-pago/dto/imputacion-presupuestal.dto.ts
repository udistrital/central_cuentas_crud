import { ApiProperty } from '@nestjs/swagger';


export class ImputacionPresupuestalDto {
    @ApiProperty()
    readonly Codigo: string;
    @ApiProperty()
    readonly Disponibilidad: string;
    @ApiProperty()
    readonly Nombre: string;
    @ApiProperty()
    readonly Registro: number;
    @ApiProperty()
    readonly Valor: number
}

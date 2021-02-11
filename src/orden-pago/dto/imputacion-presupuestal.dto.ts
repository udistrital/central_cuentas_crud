import { ApiProperty } from '@nestjs/swagger';


export class ImputacionPresupuestalDto {
    @ApiProperty()
    readonly Fecha_creacion: Date;

    @ApiProperty()
    Fecha_modificacion: Date;
    @ApiProperty({ default: true })
    readonly Activo: boolean;
    @ApiProperty()
    readonly Numero_cdp: number;
    @ApiProperty()
    readonly Numero_rp: number;
    @ApiProperty()
    readonly Rubro_presupuestal: string;
    @ApiProperty()
    readonly Valor_aplicado: number
}
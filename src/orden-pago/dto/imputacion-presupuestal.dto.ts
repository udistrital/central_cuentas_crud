import { ApiProperty } from '@nestjs/swagger';


export class ImputacionPresupuestalDto {
    @ApiProperty( {default: true } )
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
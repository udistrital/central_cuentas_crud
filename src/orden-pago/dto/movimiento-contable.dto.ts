import { ApiProperty } from '@nestjs/swagger';


export class MovimientoContableDto {
    @ApiProperty({default: true })
    readonly Activo: boolean;
    @ApiProperty()
    readonly Retencion_id: number;
    @ApiProperty()
    readonly Base_retencion: number;
    @ApiProperty( {required: false} )
    readonly Codigo_contable: string
    @ApiProperty( {required: false, default:true} )
    readonly Informativo: boolean
}
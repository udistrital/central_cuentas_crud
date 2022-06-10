import { ApiProperty } from '@nestjs/swagger';


export class OrdenesDevolucionDto
{
    @ApiProperty()
    readonly Consecutivo: number;
    @ApiProperty()
    readonly Beneficiario: string;
    @ApiProperty()
    readonly TipoDocumento: string;
    @ApiProperty()
    readonly NumeroDocumento: string;
    @ApiProperty()
    readonly FormaPago: string;
    @ApiProperty()
    readonly Banco: string;
    @ApiProperty()
    readonly TipoCuenta: string;
    @ApiProperty()
    readonly NumeroCuenta: string;
    @ApiProperty()
    readonly Valor: string;
}

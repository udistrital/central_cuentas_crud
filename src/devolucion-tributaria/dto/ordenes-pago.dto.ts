import { ApiProperty } from '@nestjs/swagger';


export class OrdenesPagoDto{
    @ApiProperty()
    readonly Consecutivo: number;
}

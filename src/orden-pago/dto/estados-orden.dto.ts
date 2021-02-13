import { ApiProperty } from '@nestjs/swagger';

export class EstadosOrdenDto {
    @ApiProperty({required:false })
    readonly Fecha_creacion: Date;
    @ApiProperty({required:false , default: new Date() })
    readonly Fecha_modificacion: Date;
    @ApiProperty({ required:false ,default: true })
    readonly Activo: boolean;
    @ApiProperty()
    readonly Nombre: string;
    @ApiProperty( {required:false} )
    readonly Descripcion: string;
}
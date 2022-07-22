import { ApiProperty } from '@nestjs/swagger';
import { OrdenesDevolucionDto } from './ordenes-devolucion';

export class RelacionDevolucionesDto {
  @ApiProperty({ required: false })
  readonly Fecha_creacion: Date;
  @ApiProperty({ required: false, default: new Date() })
  Fecha_modificacion: Date;
  @ApiProperty({ required: false, default: true })
  readonly Activo: boolean;
  @ApiProperty()
  readonly AreaFuncional: number;
  @ApiProperty()
  readonly FechaInicio: Date;
  @ApiProperty()
  readonly FechaFin: Date;
  @ApiProperty()
  readonly Consecutivo: number;
  @ApiProperty()
  readonly Estado: string;
  @ApiProperty({ type: OrdenesDevolucionDto, isArray: true })
  readonly OrdenesDevolucion: OrdenesDevolucionDto[];
}

import { ApiProperty } from '@nestjs/swagger';
import { MovimientoContableDevTriDto } from './movimiento-contable.dto';
import { OrdenesPagoDto } from './ordenes-pago.dto';

export class DevolucionTributariaDto {
  @ApiProperty({ required: false })
  readonly Fecha_creacion: Date;
  @ApiProperty({ required: false, default: new Date() })
  Fecha_modificacion: Date;
  @ApiProperty({ required: false, default: true })
  readonly Activo: boolean;
  @ApiProperty()
  readonly AreaFuncional: number;
  @ApiProperty()
  readonly Consecutivo: string;
  @ApiProperty()
  readonly NumeroRequerimiento: number;
  @ApiProperty()
  readonly FechaSolicitud: Date;
  @ApiProperty()
  readonly DocumentoBeneficiario: string;
  @ApiProperty()
  readonly NombreBeneficiario: string;
  @ApiProperty()
  readonly Concepto: string;
  @ApiProperty()
  readonly RazonDevolucion: string;
  @ApiProperty()
  readonly TipoComprobante: string;
  @ApiProperty()
  readonly NumeroComprobante: string;
  @ApiProperty()
  readonly ValorDevolucion: number;
  @ApiProperty()
  readonly Estado: string;
  @ApiProperty({ type: OrdenesPagoDto, isArray: true })
  readonly OrdenesPago: OrdenesPagoDto[];
  @ApiProperty({ type: MovimientoContableDevTriDto, isArray: true })
  readonly MovimientoContable: MovimientoContableDevTriDto[];
}

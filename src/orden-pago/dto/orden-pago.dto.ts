import { ApiProperty } from '@nestjs/swagger';
import { ImputacionPresupuestalDto } from './imputacion-presupuestal.dto';
import { MovimientoContableDto } from './movimiento-contable.dto'

export class OrdenPagoDto {
  @ApiProperty()
  readonly Fecha_creacion: Date;

  @ApiProperty()
  Fecha_modificacion: Date;
  
  @ApiProperty({ default: true })
  readonly Activo: boolean;
  @ApiProperty()
  readonly Numero: number;
  @ApiProperty()
  readonly Solicitante_id: number;
  @ApiProperty()
  readonly Beneficiario_id: number;
  @ApiProperty()
  readonly Tipo_compromiso_id: number;
  @ApiProperty()
  readonly Numero_compromiso: number;
  @ApiProperty()
  readonly Vigencia: number;
  @ApiProperty()
  readonly Area_funcional: string;
  @ApiProperty()
  readonly Concepto_id: string;
  // @ApiProperty()
  // readonly estados
  @ApiProperty({ type: ImputacionPresupuestalDto, isArray: true })
  readonly Imputacion_presupuestal: ImputacionPresupuestalDto[];
  @ApiProperty({ type: MovimientoContableDto, isArray: true })
  readonly Movimiento_contable: MovimientoContableDto[];
}
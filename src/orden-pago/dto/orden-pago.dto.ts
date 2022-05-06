import { ApiProperty } from '@nestjs/swagger';
import { ImputacionPresupuestalDto } from './imputacion-presupuestal.dto';
import { MovimientoContableDto } from './movimiento-contable.dto';
import { ImpuestosRetencionesDto } from './impuestos-retenciones.dto';

export class OrdenPagoDto {
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
  readonly SolicitudGiro: string;
  @ApiProperty()
  readonly Vigencia: number;
  @ApiProperty()
  readonly DocumentoBeneficiario: string;
  @ApiProperty()
  readonly NombreBeneficiario: string;
  @ApiProperty()
  readonly Compromiso: number;
  @ApiProperty()
  readonly NumeroCompromiso: number;
  @ApiProperty()
  readonly Supervisor: string;
  @ApiProperty()
  readonly Detalle: string;
  @ApiProperty()
  readonly TipoConvenio: string;
  @ApiProperty()
  readonly Convenio: string;
  @ApiProperty()
  readonly TipoOrdenPago: number;
  @ApiProperty()
  readonly ActaRecibido: string;
  @ApiProperty()
  readonly Endoso: boolean;
  @ApiProperty()
  readonly BeneficiarioEndoso: string;
  @ApiProperty()
  readonly ValorEndoso: number;
  @ApiProperty()
  readonly CuentaEndoso: string;
  @ApiProperty()
  readonly ValorOP: number;
  @ApiProperty()
  readonly Estado: string;
  @ApiProperty({ type: ImputacionPresupuestalDto, isArray: true })
  readonly ImputacionPresupuestal: ImputacionPresupuestalDto[];
  @ApiProperty()
  readonly Concepto: string;
  @ApiProperty({ type: ImpuestosRetencionesDto, isArray: true })
  readonly ImpuestosRetenciones: ImpuestosRetencionesDto[];
  @ApiProperty()
  readonly CuentaValorNeto: string;
  @ApiProperty({ type: MovimientoContableDto, isArray: true })
  readonly MovimientoContable: MovimientoContableDto[];
}

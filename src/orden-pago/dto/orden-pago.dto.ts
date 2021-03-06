import { ApiProperty } from '@nestjs/swagger';
import { ImputacionPresupuestalDto } from './imputacion-presupuestal.dto';
import { MovimientoContableDto } from './movimiento-contable.dto'
import { EstadosOrdenDto } from './estados-orden.dto';

export class OrdenPagoDto {
  @ApiProperty({ required: false })
  readonly Fecha_creacion: Date;

  @ApiProperty({ required: false, default: new Date() })
  Fecha_modificacion: Date;

  @ApiProperty({ required: false, default: true })
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
  @ApiProperty({
    type: EstadosOrdenDto, required: true,
    default: {
      Fecha_creacion: new Date(),
      Fecha_modificacion: new Date(),
      Activo: true,
      Nombre: 'Elaborada',
      Estado_id: 317
    }
  })
  readonly Estados: EstadosOrdenDto;
  @ApiProperty({ type: ImputacionPresupuestalDto, isArray: true })
  readonly Imputacion_presupuestal: ImputacionPresupuestalDto[];
  @ApiProperty({ type: MovimientoContableDto, isArray: true })
  readonly Movimiento_contable: MovimientoContableDto[];
}
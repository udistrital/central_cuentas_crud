import { ApiProperty } from '@nestjs/swagger';
import { MovimientoContableOrDevDto } from './movimiento-contable.dto';
import { DocumentosBeneficiarioDto } from './documentos-beneficiario.dto';

export class OrdenDevolucionDto {
  @ApiProperty({ required: false })
  readonly Fecha_creacion: Date;
  @ApiProperty({ required: false, default: new Date() })
  Fecha_modificacion: Date;
  @ApiProperty({ required: false, default: true })
  readonly Activo: boolean;
  @ApiProperty()
  readonly AreaFuncional: number;
  @ApiProperty()
  readonly TipoDocumentoSolicitante: number;
  @ApiProperty()
  readonly NumeroDocumentoSolicitante: string;
  @ApiProperty()
  readonly FechaRequerimiento: Date;
  @ApiProperty()
  readonly NombreSolicitante: string;
  @ApiProperty()
  readonly Cargo: string;
  @ApiProperty()
  readonly NumeroRequerimiento: number;
  @ApiProperty()
  readonly Concepto: string;
  @ApiProperty()
  readonly RazonDevolucion: number;
  @ApiProperty()
  readonly ValorDevolucion: number;
  @ApiProperty()
  readonly TipoDocumentoBeneficiario: number;
  @ApiProperty()
  readonly NumeroDocumentoBeneficiario: string;
  @ApiProperty()
  readonly NombreBeneficiario: string;
  @ApiProperty()
  readonly Banco: number;
  @ApiProperty()
  readonly TipoCuenta: number;
  @ApiProperty()
  readonly NumeroCuenta: string;
  @ApiProperty()
  readonly FormaPago: number;
  @ApiProperty({ type: DocumentosBeneficiarioDto, isArray: true })
  readonly DocumentosBeneficiario: DocumentosBeneficiarioDto[];
  @ApiProperty()
  readonly TipoComprobante: string;
  @ApiProperty()
  readonly NumeroComprobante: number;
  @ApiProperty()
  readonly Consecutivo: number;
  @ApiProperty()
  readonly Estado: string
  @ApiProperty({ type: MovimientoContableOrDevDto, isArray: true })
  readonly MovimientoContable: MovimientoContableOrDevDto[];
}

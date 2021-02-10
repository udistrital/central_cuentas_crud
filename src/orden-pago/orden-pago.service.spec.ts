import { Test, TestingModule } from '@nestjs/testing';
import { OrdenPagoService } from './orden-pago.service';

describe('OrdenPagoService', () => {
  let service: OrdenPagoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdenPagoService],
    }).compile();

    service = module.get<OrdenPagoService>(OrdenPagoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

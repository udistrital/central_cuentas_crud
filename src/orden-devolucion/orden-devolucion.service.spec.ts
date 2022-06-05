import { Test, TestingModule } from '@nestjs/testing';
import { OrdenDevolucionService } from './orden-devolucion.service';

describe('OrdenDevolucionService', () => {
  let service: OrdenDevolucionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdenDevolucionService],
    }).compile();

    service = module.get<OrdenDevolucionService>(OrdenDevolucionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

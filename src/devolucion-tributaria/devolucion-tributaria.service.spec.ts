import { Test, TestingModule } from '@nestjs/testing';
import { DevolucionTributariaService } from './devolucion-tributaria.service';

describe('DevolucionTributariaService', () => {
  let service: DevolucionTributariaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevolucionTributariaService],
    }).compile();

    service = module.get<DevolucionTributariaService>(DevolucionTributariaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

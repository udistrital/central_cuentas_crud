import { Test, TestingModule } from '@nestjs/testing';
import { RelacionDevolucionesService } from './relacion-devoluciones.service';

describe('RelacionDevolucionesService', () => {
  let service: RelacionDevolucionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelacionDevolucionesService],
    }).compile();

    service = module.get<RelacionDevolucionesService>(RelacionDevolucionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

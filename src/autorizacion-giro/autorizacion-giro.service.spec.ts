import { Test, TestingModule } from '@nestjs/testing';
import { AutorizacionGiroService } from './autorizacion-giro.service';

describe('AutorizacionGiroService', () => {
  let service: AutorizacionGiroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutorizacionGiroService],
    }).compile();

    service = module.get<AutorizacionGiroService>(AutorizacionGiroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

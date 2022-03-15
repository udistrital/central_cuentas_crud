import { Test, TestingModule } from '@nestjs/testing';
import { AutorizacionGiroController } from './autorizacion-giro.controller';

describe('AutorizacionGiroController', () => {
  let controller: AutorizacionGiroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutorizacionGiroController],
    }).compile();

    controller = module.get<AutorizacionGiroController>(AutorizacionGiroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

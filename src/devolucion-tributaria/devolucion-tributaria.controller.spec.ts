import { Test, TestingModule } from '@nestjs/testing';
import { DevolucionTributariaController } from './devolucion-tributaria.controller';

describe('DevolucionTributariaController', () => {
  let controller: DevolucionTributariaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevolucionTributariaController],
    }).compile();

    controller = module.get<DevolucionTributariaController>(DevolucionTributariaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

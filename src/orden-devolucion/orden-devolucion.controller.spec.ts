import { Test, TestingModule } from '@nestjs/testing';
import { OrdenDevolucionController } from './orden-devolucion.controller';

describe('OrdenDevolucionController', () => {
  let controller: OrdenDevolucionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdenDevolucionController],
    }).compile();

    controller = module.get<OrdenDevolucionController>(OrdenDevolucionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

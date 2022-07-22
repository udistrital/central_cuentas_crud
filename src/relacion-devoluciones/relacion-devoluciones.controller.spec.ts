import { Test, TestingModule } from '@nestjs/testing';
import { RelacionDevolucionesController } from './relacion-devoluciones.controller';

describe('OrdenDevolucionController', () => {
  let controller: RelacionDevolucionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelacionDevolucionesController],
    }).compile();

    controller = module.get<RelacionDevolucionesController>(RelacionDevolucionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

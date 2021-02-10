import { Test, TestingModule } from '@nestjs/testing';
import { OrdenPagoController } from './orden-pago.controller';

describe('OrdenPagoController', () => {
  let controller: OrdenPagoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdenPagoController],
    }).compile();

    controller = module.get<OrdenPagoController>(OrdenPagoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

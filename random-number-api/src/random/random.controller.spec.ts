import { Test, TestingModule } from '@nestjs/testing';
import { RandomController } from './random.controller';

describe('RandomController', () => {
  let controller: RandomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RandomController],
    }).compile();

    controller = module.get<RandomController>(RandomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getRandomNumber', () => {
    it('should return an object with a value between 1 and 100', () => {
      const result = controller.getRandomNumber();
      expect(result).toHaveProperty('value');
      expect(result.value).toBeGreaterThanOrEqual(1);
      expect(result.value).toBeLessThanOrEqual(100);
    });
  });
});

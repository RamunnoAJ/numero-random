import { Controller, Post } from '@nestjs/common';

@Controller('random')
export class RandomController {
  @Post()
  getRandomNumber(): { value: number } {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return { value: randomNumber };
  }
}

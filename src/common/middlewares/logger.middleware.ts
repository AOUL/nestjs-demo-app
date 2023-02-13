import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class LoggerMiddleware implements NestMiddleware {
  numberRun = 1;

  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Logger middleware run: ${this.numberRun++}`);
    next();
  }
}

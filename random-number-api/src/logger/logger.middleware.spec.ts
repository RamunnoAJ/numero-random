import { LoggerMiddleware } from './logger.middleware';
import { Request, Response, NextFunction } from 'express';

describe('LoggerMiddleware', () => {
  let middleware: LoggerMiddleware;
  let mockRequest: Request;
  let mockResponse: Response;
  let nextFunction: NextFunction;

  beforeEach(async () => {
    middleware = new LoggerMiddleware();
    mockRequest = {} as Request;
    mockResponse = {} as Response;
    nextFunction = jest.fn();
  });

  it('should be defined', () => {
    expect(middleware).toBeDefined();
  });

  it('should log the request time', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    middleware.use(mockRequest, mockResponse, nextFunction);

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy.mock.calls[0][0]).toMatch(
      /^Request... \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/,
    );

    consoleSpy.mockRestore();
  });

  it('should call next function', () => {
    middleware.use(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toHaveBeenCalled();
  });
});

import { Request, Response, NextFunction } from 'express';

const catchAsyncErrors = (theFunc: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(theFunc(req, res, next)).catch(next);

export default catchAsyncErrors;
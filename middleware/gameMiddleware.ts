import { NextFunction, Request, Response } from "express";
import { CustomError } from "../model/error";

export const validatePlayerAddress = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  if (!req.query.player) {
    return next(new CustomError(400, "Player address is required"));
  }

  next();
};

export const validateGameData = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const { address, player1, player2, stake, random_value } = req.body;

  if (!address || !player1 || !player2 || !stake || !random_value) {
    return next(new CustomError(400, "Missing required game data"));
  }

  next();
};

export const validateGameAddress = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  if (!req.params.gameAddress) {
    return next(new CustomError(400, "Game address is required"));
  }

  next();
};

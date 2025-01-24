import express, { NextFunction, Request, Response } from "express";
import {
  createGame,
  deleteGame,
  getGameByPlayerAddress,
} from "../controller/gameController";
import {
  validateGameAddress,
  validateGameData,
  validatePlayerAddress,
} from "../middleware/gameMiddleware";

const gameRouter = express.Router();

gameRouter.get(
  "/",
  validatePlayerAddress,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json(await getGameByPlayerAddress(req.query.player as string));
    } catch (error) {
      next(error);
    }
  }
);

gameRouter.post(
  "/",
  validateGameData,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(await createGame(req.body));
    } catch (error) {
      next(error);
    }
  }
);

gameRouter.delete(
  "/:gameAddress",
  validateGameAddress,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(await deleteGame(req.params.gameAddress));
    } catch (error) {
      next(error);
    }
  }
);

export default gameRouter;

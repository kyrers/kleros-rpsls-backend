import express, { Request, Response } from "express";
import {
  createGame,
  deleteGame,
  getGameByPlayerAddress,
} from "../controller/gameController";

const gameRouter = express.Router();

gameRouter.get("/", async (req: Request, res: Response) => {
  const { player } = req.query;
  if (!player) {
    res.status(400).send("Player address is required");
    return;
  }

  res.send(await getGameByPlayerAddress(player as string));
});

gameRouter.post("/", async (req: Request, res: Response) => {
  res.send(await createGame(req.body));
});

gameRouter.delete("/:gameAddress", async (req: Request, res: Response) => {
  res.send(await deleteGame(req.params.gameAddress));
});

export default gameRouter;

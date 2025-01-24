import { database } from "../db";
import { CustomError } from "../model/error";
import { Game } from "../model/game";
import {
  CREATE_GAME_QUERY,
  DELETE_GAME_QUERY,
  SELECT_GAME_BY_PAYER_ADDRESS_QUERY,
} from "../utils/queries";

export const getGameByPlayerAddress = async (playerAddress: string) => {
  try {
    const { rows } = await database.query<Game>(
      SELECT_GAME_BY_PAYER_ADDRESS_QUERY,
      [playerAddress]
    );

    return rows[0] ?? null;
  } catch (error: any) {
    throw new CustomError(
      400,
      error.detail ?? "An error occurred getting the game."
    );
  }
};

export const createGame = async (game: Game) => {
  try {
    const { rows } = await database.query<Game>(CREATE_GAME_QUERY, [
      game.address,
      game.player1,
      game.player2,
      game.stake,
      game.random_value,
    ]);

    return rows[0];
  } catch (error: any) {
    throw new CustomError(400, error.detail ?? "Failed to create game");
  }
};

export const deleteGame = async (address: string) => {
  try {
    const { rowCount } = await database.query<Game>(DELETE_GAME_QUERY, [
      address,
    ]);

    if (!rowCount) {
      throw new CustomError(404, "Game not found");
    }

    return rowCount;
  } catch (error: any) {
    throw new CustomError(400, error.detail ?? "Failed to delete game");
  }
};

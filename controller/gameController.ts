import { database } from "../db";
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
    return rows[0];
  } catch (_) {
    return `An error occurred getting the game.`;
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
  } catch (err: any) {
    return err.detail
      ? err.detail
      : "Unexpected error occurred, please try again.";
  }
};

export const deleteGame = async (address: string) => {
  try {
    const { rowCount } = await database.query<Game>(DELETE_GAME_QUERY, [
      address,
    ]);

    if (rowCount && rowCount > 0) {
      return "Game deleted successfully.";
    }

    return "Unable to delete game.";
  } catch (err: any) {
    return err.detail
      ? err.detail
      : "Unexpected error occurred, please try again.";
  }
};

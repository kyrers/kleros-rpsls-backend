export const SELECT_GAME_BY_PAYER_ADDRESS_QUERY =
  "SELECT * FROM games WHERE player1 = $1 OR player2 = $1";

export const CREATE_GAME_QUERY = `
  INSERT INTO games (address, player1, player2, stake, random_value)
  VALUES($1, $2, $3, $4, $5)
  RETURNING *;
`;

export const DELETE_GAME_QUERY = "DELETE FROM games WHERE address = $1";

# kleros-rpsls-backend

A simple backend for the Kleros RPSLS game. This was deployed to Vercel and uses a [Neon Serverless Postgres](https://vercel.com/marketplace/neon) database.

### Endpoints

1. Create game:

```
curl 'http://localhost:3000/games' \
--header 'Content-Type: application/json' \
--data '{
    "address": "THE_GAME_ADDRESS",
    "player1": "PLAYER_1_ADDRESS",
    "player2": "PLAYER_2_ADDRESS",
    "stake":"THE_GAME_STAKE",
    "random_value":"THE_RANDOM_VALUE_USED_FOR_GENERATING_THE_SALT"
}'
```

2. Get game by player address:

```
curl 'http://localhost:3000/games?player=THE_PLAYER_ADDRESS'
```

3. Delete game:

```
curl --request DELETE 'http://localhost:3000/games/THE_GAME_ADDRESS'
```

### Running locally

First, create the `env` file and then fill the needed variables:

```sh
cp .env.example .env
```

Then, install the dependencies.

```sh
npm install
```

Finally, run the server with

```sh
npm run dev
```

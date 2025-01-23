import express, { Express } from "express";
import dotenv from "dotenv";
import gameRouter from "./routers/gameRouter";
dotenv.config();

const app: Express = express();

app.use(express.json());

app.use("/games", gameRouter);

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running locally on port ${PORT}`);
  });
}

export default app;
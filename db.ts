import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

let database: Pool;

const connectDb = async () => {
  try {
    database = new Pool({
      connectionString: process.env.DATABASE_CONNECTION_STRING,
    });

    database.on("error", (err: any) =>
      console.log("### DATABASE CONNECT ERROR ###\n", err)
    );
  } catch (error) {
    console.log(error);
  }
};

const closeConnection = async (_: any) => {
  //Needs _ argument, otherwise it would be called after server start for some reason...
  if (database) {
    await database.end();
  }

  process.exit();
};

connectDb();
process.once("SIGTERM", closeConnection);
process.once("SIGINT", closeConnection);

export { database };

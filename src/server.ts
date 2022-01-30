import "reflect-metadata";
import "dotenv/config";
import { createConnection } from "typeorm";
import express, { response } from "express";
import cors from "cors";
import config from "./ormconfig";
import routes from "./routes";

const start = async () => {
  try {
    console.log("----------------------------------------");
    console.log(__dirname);
    await createConnection(config);
    console.log("Database connected");

    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use("/v1", routes);

    app.listen(3333, () => {
      console.log("Listening on port 3333");
    });
  } catch (error) {
    console.log(`Error while connecting to the database! ${error.message}`);
  }
};

start();

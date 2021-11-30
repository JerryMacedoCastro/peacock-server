import express from "express";
import { createConnection } from "typeorm";
import config from "../ormconfig";
const app = express();

app.use(express.json());

app.listen(3333, async () => {
  try {
    await createConnection(config);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database");
    console.log(error);
  }

  console.log("🚀 Server started on port 3333!");
});

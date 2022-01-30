import path from "path";
import { ConnectionOptions } from "typeorm";
import "dotenv/config";

const config: ConnectionOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [
    `${__dirname}/../**/*.entity{.ts,.js}`,
    path.join(__dirname, "./src/repositories/**/*.entity.ts"),
    path.join(__dirname, "**/*.entity.js"),
  ],
  migrations: ["./src/database/migrations/**.ts"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
  subscribers: ["src/subscriber/**/*.ts"],
  synchronize: true,
  ssl: { rejectUnauthorized: false },
};

export default config;

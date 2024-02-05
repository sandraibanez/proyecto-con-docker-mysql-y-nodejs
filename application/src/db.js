import { createPool } from "mysql2/promise";
import { config } from "dotenv";

config();

export const pool = createPool({
  port: "3306",
  host: "database",
  user: "root",
  password: "1234",
  database: "crudnodejsmysql",
});

pool.on("connection", () => console.log("DB Connected!"));
import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const poolConnection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "drizzleapp",
});

// or if you need client connection
async function main() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "drizzleapp",
  });
  const db = drizzle({ client: connection });
}
main();
export const db = drizzle(poolConnection);

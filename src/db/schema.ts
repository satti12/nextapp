import { int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
export const users = mysqlTable("users", {
  id: int("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }),
  age: int("age"),
  email: varchar("email", { length: 255 }).notNull().unique(),
});

export const data = mysqlTable("data", {
  id: int("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }),
  age: int("age"),
});

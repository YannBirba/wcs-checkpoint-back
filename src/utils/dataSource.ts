import { DataSource } from "typeorm";
import { Country } from "../entities/Country/Country";
import { Continent } from "../entities/Continent/Continent";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sql",
  synchronize: true,
  entities: [Country, Continent],
});

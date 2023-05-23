import { Continent } from "../entities/Continent/Continent";
import { dataSource } from "../utils/dataSource";

export const continentRepository = dataSource.getRepository(Continent);

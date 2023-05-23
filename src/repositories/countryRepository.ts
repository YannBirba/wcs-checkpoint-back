import { Country } from "../entities/Country/Country";
import { dataSource } from "../utils/dataSource";

export const countryRepository = dataSource.getRepository(Country);

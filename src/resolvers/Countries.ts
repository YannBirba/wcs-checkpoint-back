import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { countryRepository } from "../repositories/countryRepository";
import { Country } from "../entities/Country/Country";
import { CountryCreateInput } from "../entities/Country/CountryCreateInput";
import { continentRepository } from "../repositories/continentRepository";

@Resolver()
export class CountryResolver {
  @Query(() => [Country])
  async getCountries(): Promise<Country[]> {
    const countries = await countryRepository.find();
    return countries;
  }

  // get by id
  @Query(() => Country, { nullable: true })
  async getCountry(@Arg("code") code: string): Promise<Country | null> {
    const country = await countryRepository.findOne({
      where: { code },
    });
    if (!country) {
      return null;
    }

    return country;
  }

  // create
  @Mutation(() => Country)
  async createCountry(
    @Arg("data") data: CountryCreateInput
  ): Promise<Country | null> {
    const continent = await continentRepository.findOne({
      where: { code: data.continentCode },
    });

    if (!continent) {
      return null;
    }

    const newCountry = {
      ...data,
      continent,
    };

    const result = await countryRepository.save(newCountry);
    return result;
  }
}

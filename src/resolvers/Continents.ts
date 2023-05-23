import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { continentRepository } from "../repositories/continentRepository";
import { Continent } from "../entities/Continent/Continent";
import { ContinentCreateInput } from "../entities/Continent/ContinentCreateInput";

@Resolver()
export class ContinentResolver {
  @Query(() => [Continent])
  async getContinents(): Promise<Continent[]> {
    const countries = await continentRepository.find();
    return countries;
  }

  // get by id
  @Query(() => Continent, { nullable: true })
  async getContinent(@Arg("code") code: string): Promise<Continent | null> {
    const continent = await continentRepository.findOne({
      where: { code },
    });
    if (!continent) {
      return null;
    }

    return continent;
  }

  // create
  @Mutation(() => Continent)
  async createContinent(
    @Arg("data") data: ContinentCreateInput
  ): Promise<Continent | null> {
    const result = await continentRepository.save(data);
    return result;
  }
}

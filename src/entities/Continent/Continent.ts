import { ObjectType, Field } from "type-graphql";
import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Country } from "../Country/Country";

@Entity()
@ObjectType()
export class Continent {
  @PrimaryColumn()
  @Field()
  code: string;

  @Column()
  @Field()
  name: string;

  @Field(() => [Country])
  @OneToMany(() => Country, (country) => country.continent)
  countries: Country[];
}

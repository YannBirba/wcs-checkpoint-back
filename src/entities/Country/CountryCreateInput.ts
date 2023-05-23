import { Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CountryCreateInput {
  @Field()
  @Length(2, 2)
  code: string;

  @Field()
  @Length(2, 50)
  name: string;

  @Field()
  @Length(2, 50)
  emoji: string;

  @Field()
  @Length(2, 2)
  continentCode: string;
}

import { Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class ContinentCreateInput {
  @Field()
  @Length(2, 2)
  code: string;

  @Field()
  @Length(2, 50)
  name: string;
}

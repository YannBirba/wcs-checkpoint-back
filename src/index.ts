import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { GraphQLSchema } from "graphql";
import { dataSource } from "./utils/dataSource";
import { CountryResolver } from "./resolvers/Countries";
import { ContinentResolver } from "./resolvers/Continents";

const GRAPHQL_PORT = 8000;
let schema: GraphQLSchema;

export const bootstrap = async () => {
  schema = await buildSchema({
    resolvers: [CountryResolver, ContinentResolver],
  });

  const server = new ApolloServer({
    schema,
    cors: true,
  });

  // Start the server
  const { url } = await server.listen(GRAPHQL_PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);

  try {
    await dataSource.initialize();
    console.log("Connected !");
  } catch (err) {
    console.log("Connection failed");
    console.error(err);
  }
};

bootstrap()
  .then(() => {
    console.log("Server is running");
  })
  .catch((err) => console.error(err));

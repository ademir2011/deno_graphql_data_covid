import { Application } from "https://deno.land/x/oak/mod.ts";
import { applyGraphQL } from "https://deno.land/x/oak_graphql/mod.ts";
import { schema } from "./schemas/schema.ts";
import { resolvers } from "./resolvers/query.ts";

const app = new Application();

const GraphQLService = await applyGraphQL({
  typeDefs: schema,
  resolvers,
});

app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

await app.listen("localhost:3000");

import { itemResolvers } from "./item/resolver.js";
import { itemTypeDefs } from "./item/typeDefs.js";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const rootTypeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Query {
    activeServer: Boolean
  }
`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const rootResolvers = {
  Query: {
    activeServer: () => true,
  },
}


export const resolvers = [
  rootResolvers,
  itemResolvers
]

export const typeDefs = [
  rootTypeDefs,
  itemTypeDefs
]

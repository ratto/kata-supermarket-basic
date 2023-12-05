export const itemTypeDefs = `#graphql
  type Item {
    id: ID!
    name: String
    description: String
  }

  extend type Query {
    items: [Item!]!
    item: Item!
  }
`

const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const FoodType = new GraphQLObjectType({
  name: "FoodType",
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

module.exports = FoodType;

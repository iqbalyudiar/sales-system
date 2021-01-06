const graphql = require("graphql");
const { GraphQLInputObjectType, GraphQLString } = graphql;

const FoodInput = new GraphQLInputObjectType({
  name: "FoodInput",
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

module.exports = FoodInput;

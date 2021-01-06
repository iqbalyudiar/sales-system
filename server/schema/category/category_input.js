const graphql = require("graphql");
const { GraphQLInputObjectType, GraphQLString } = graphql;

const CategoryInput = new GraphQLInputObjectType({
  name: "CategoryInput",
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

module.exports = CategoryInput;

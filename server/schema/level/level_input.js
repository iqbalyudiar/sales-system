const graphql = require("graphql");
const { GraphQLInputObjectType, GraphQLString } = graphql;

const LevelInput = new GraphQLInputObjectType({
  name: "LevelInput",
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

module.exports = LevelInput;

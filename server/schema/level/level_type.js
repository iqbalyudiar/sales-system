const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const LevelType = new GraphQLObjectType({
  name: "LevelType",
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

module.exports = LevelType;

const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const PackageType = new GraphQLObjectType({
  name: "PackageType",
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

module.exports = PackageType;

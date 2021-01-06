const graphql = require("graphql");
const { GraphQLInputObjectType, GraphQLString } = graphql;

const PackageInput = new GraphQLInputObjectType({
  name: "PackageInput",
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

module.exports = PackageInput;

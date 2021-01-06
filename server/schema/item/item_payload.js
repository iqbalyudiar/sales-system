const { GraphQLObjectType, GraphQLList } = require("graphql");
const ItemType = require("./item_type");

const ItemsPayload = new GraphQLObjectType({
  name: "ItemPayload",
  description: "User type definition",
  fields: () => ({
    items: {
      type: new GraphQLList(ItemType),
    },
  }),
});

module.exports = ItemsPayload;

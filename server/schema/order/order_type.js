const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = graphql;
const GraphQLDate = require("graphql-date");
const ItemType = require("../item/item_type");
const ItemInputType = require("../item/item_input");
const { ItemModel } = require("../../models");

const OrderType = new GraphQLObjectType({
  name: "OrderType",
  fields: () => ({
    _id: { type: GraphQLString },
    items: {
      type: new GraphQLList(ItemType),
      resolve(parent, args) {
        return [ItemModel.findById(parent.itemId)];
      },
    },
    totalPrice: { type: GraphQLInt },
    updatedDate: { type: GraphQLDate },
  }),
});

module.exports = OrderType;

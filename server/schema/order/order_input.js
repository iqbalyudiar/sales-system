const graphql = require("graphql");
const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = graphql;
const GraphQLDate = require("graphql-date");
const ItemType = require("../item/item_type");
const { ItemModel } = require("../../models");
const ItemInput = require("../item/item_input");

const OrderInput = new GraphQLInputObjectType({
  name: "OrderInput",
  fields: () => ({
    _id: { type: GraphQLString },
    items: {
      type: new GraphQLList(ItemInput),
    },
    totalPrice: { type: GraphQLInt },
    updatedDate: { type: GraphQLDate },
  }),
});

module.exports = OrderInput;

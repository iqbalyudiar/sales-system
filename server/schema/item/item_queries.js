const { GraphQLList, GraphQLNonNull, GraphQLString } = require("graphql");
const ItemType = require("./item_type");
const { ItemModel } = require("../../models");

const ItemQueries = {
  items: {
    type: new GraphQLList(ItemType),
    resolve(parent, args) {
      const items = ItemModel.find().exec();
      if (!items) {
        throw new Error("Error");
      }
      return items;
    },
  },
  item: {
    type: ItemType,
    args: {
      id: {
        name: "_id",
        type: GraphQLNonNull(GraphQLString),
      },
    },
    resolve(parent, args) {
      const itemDetails = ItemModel.findById(args.id).exec();
      if (!itemDetails) {
        throw new Error("Error");
      }
      return itemDetails;
    },
  },
};

module.exports = ItemQueries;

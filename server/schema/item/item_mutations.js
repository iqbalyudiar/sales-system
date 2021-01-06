const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");
const ItemInput = require("./item_input");
const ItemPayload = require("./item_payload");
const ItemType = require("./item_type");
const { ItemModel } = require("../../models");

const ItemMutations = {
  addItem: {
    type: ItemType,
    args: {
      input: {
        type: ItemInput,
      },
    },
    resolve(parent, { input }) {
      const { food, category, level, package, quantity } = input;
      let price;

      category._id == "5ee0fb71c1d3b8563ca7b90f"
        ? (price = 30000)
        : (price = 20000);
      price *= quantity;

      let foodId = food._id;
      let categoryId = category._id;
      let levelId = level._id;
      let packageId = package._id;

      return ItemModel({
        foodId,
        categoryId,
        levelId,
        packageId,
        quantity,
        price,
      }).save();
    },
  },
  updateItem: {
    type: ItemType,
    args: {
      id: {
        name: "id",
        type: new GraphQLNonNull(GraphQLString),
      },
      input: { type: ItemInput },
    },
    resolve(parent, { id, input }) {
      const { food, category, level, package, quantity } = input;
      category._id == "5ee0fb71c1d3b8563ca7b90f"
        ? (price = 30000)
        : (price = 20000);
      // console.log(price);
      price *= quantity;

      let foodId = food._id;
      let categoryId = category._id;
      let levelId = level._id;
      let packageId = package._id;

      return ItemModel.findByIdAndUpdate(
        id,
        { foodId, categoryId, levelId, packageId, quantity, price },
        (err) => {
          if (err) {
            return next(err);
          }
        }
      );
    },
  },
  deleteItem: {
    type: ItemType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parent, args) {
      const delItem = ItemModel.findByIdAndRemove(args.id).exec();
      if (!delItem) {
        throw new Error("Error");
      }
      return delItem;
    },
  },
};

module.exports = ItemMutations;

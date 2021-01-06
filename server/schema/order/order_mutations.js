const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");
const OrderType = require("./order_type");
const { OrderModel, ItemModel } = require("../../models");
const ItemInput = require("../item/item_input");
const OrderInput = require("./order_input");

const OrderMutations = {
  addOrder: {
    type: OrderType,
    args: {
      input: { type: new GraphQLList(OrderInput) },
      totalPrice: { type: GraphQLInt },
    },
    resolve(parent, { input, totalPrice }) {
      const itemMap = input.map((item) => {
        return new OrderModel({ itemId: item._id }).save();
      });
      console.log(itemMap);
      return itemMap;
    },
  },
  updateOrder: {
    type: OrderType,
    args: {
      id: {
        name: "id",
        type: new GraphQLNonNull(GraphQLString),
      },
      input: { type: new GraphQLList(OrderInput) },
    },
    resolve(parent, { id, input }) {
      const itemMap = input.map((item) => item._id);
      return OrderModel.findByIdAndUpdate(
        id,
        { itemId: itemMap, updatedDate: new Date() },
        (err) => {
          if (err) {
            return next(err);
          }
        }
      );
    },
  },
  deleteOrder: {
    type: OrderType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parent, args) {
      const delOrder = OrderModel.findByIdAndRemove(args.id).exec();
      if (!delOrder) {
        throw new Error("Error");
      }
      return delOrder;
    },
  },
};

module.exports = OrderMutations;

const { GraphQLList, GraphQLNonNull, GraphQLString } = require("graphql");
const OrderType = require("./order_type");
const { OrderModel } = require("../../models");

const OrderQueries = {
  orders: {
    type: new GraphQLList(OrderType),
    resolve(parent, args) {
      const orders = OrderModel.find().exec();
      if (!orders) {
        throw new Error("Error");
      }
      return orders;
    },
  },
  order: {
    type: OrderType,
    args: {
      id: {
        name: "_id",
        type: GraphQLNonNull(GraphQLString),
      },
    },
    resolve(parent, args) {
      const orderDetails = OrderModel.findById(args.id).exec();
      if (!orderDetails) {
        throw new Error("Error");
      }
      return orderDetails;
    },
  },
};

module.exports = OrderQueries;

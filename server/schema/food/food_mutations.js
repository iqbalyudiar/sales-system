const { GraphQLNonNull, GraphQLString } = require("graphql");
const FoodType = require("./food_type");
const FoodInput = require("./food_input");
const { FoodModel } = require("../../models");

const FoodMutations = {
  addFood: {
    type: FoodType,
    args: {
      input: { type: FoodInput },
    },
    resolve(parent, { input }) {
      const { name } = input;
      return new FoodModel({ name }).save();
    },
  },
  updateFood: {
    type: FoodType,
    args: {
      id: {
        name: "id",
        type: new GraphQLNonNull(GraphQLString),
      },
      input: { type: FoodInput },
    },
    resolve(parent, { id, input }) {
      const { name } = input;

      return FoodModel.findByIdAndUpdate(id, { name }, (err) => {
        if (err) {
          return next(err);
        }
      });
    },
  },
  deleteFood: {
    type: FoodType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parent, args) {
      const delFood = FoodModel.findByIdAndRemove(args.id).exec();
      if (!delFood) {
        throw new Error("Error");
      }
      return delFood;
    },
  },
};

module.exports = FoodMutations;

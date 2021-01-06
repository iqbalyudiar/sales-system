const { GraphQLList, GraphQLNonNull, GraphQLString } = require("graphql");
const FoodType = require("./food_type");
const { FoodModel } = require("../../models");

const FoodQueries = {
  foods: {
    type: new GraphQLList(FoodType),
    resolve(parent, args) {
      const foods = FoodModel.find().exec();
      if (!foods) {
        throw new Error("Error");
      }
      return foods;
    },
  },
  food: {
    type: FoodType,
    args: {
      id: {
        name: "_id",
        type: GraphQLNonNull(GraphQLString),
      },
    },
    resolve(parent, args) {
      const foodDetails = FoodModel.findById(args.id).exec();
      if (!foodDetails) {
        throw new Error("Error");
      }
      return foodDetails;
    },
  },
};

module.exports = FoodQueries;

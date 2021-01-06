const graphql = require("graphql");
const { GraphQLInputObjectType, GraphQLString, GraphQLInt } = graphql;
const FoodType = require("../food/food_type");
const CategoryType = require("../category/category_type");
const LevelType = require("../level/level_type");
const PackageType = require("../package/package_type");
const {
  FoodModel,
  CategoryModel,
  LevelModel,
  PackageModel,
} = require("../../models");
const FoodInput = require("../food/food_input");
const CategoryInput = require("../category/category_input");
const LevelInput = require("../level/level_input");
const PackageInput = require("../package/package_input");

const ItemInput = new GraphQLInputObjectType({
  name: "ItemInput",
  fields: () => ({
    _id: {
      type: GraphQLString,
    },
    food: {
      type: FoodInput,
    },
    category: {
      type: CategoryInput,
    },
    level: {
      type: LevelInput,
    },
    package: {
      type: PackageInput,
    },
    quantity: { type: GraphQLInt },
    price: { type: GraphQLInt },
  }),
});

module.exports = ItemInput;

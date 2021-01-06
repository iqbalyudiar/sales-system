const { GraphQLObjectType } = require("graphql");

const FoodMutations = require("./food/food_mutations");
const CategoryMutations = require("./category/category_mutations");
const LevelMutations = require("./level/level_mutations");
const PackageMutations = require("./package/package_mutations");
const ItemMutations = require("./item/item_mutations");
const OrderMutations = require("./order/order_mutations");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...FoodMutations,
    ...CategoryMutations,
    ...LevelMutations,
    ...PackageMutations,
    ...ItemMutations,
    ...OrderMutations,
  },
});

module.exports = mutation;

const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;
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

const ItemType = new GraphQLObjectType({
  name: "ItemType",
  fields: () => ({
    _id: { type: GraphQLString },
    food: {
      type: FoodType,
      resolve(parent, args) {
        // console.log(parent.foodId);
        return FoodModel.findById(parent.foodId);
      },
    },
    category: {
      type: CategoryType,
      resolve(parent, args) {
        return CategoryModel.findById(parent.categoryId);
      },
    },
    level: {
      type: LevelType,
      resolve(parent, args) {
        return LevelModel.findById(parent.levelId);
      },
    },
    package: {
      type: PackageType,
      resolve(parent, args) {
        return PackageModel.findById(parent.packageId);
      },
    },
    quantity: { type: GraphQLInt },
    price: { type: GraphQLInt },
  }),
});

module.exports = ItemType;

// const ItemTemplate = (name) => {
//   return {
//     name: name,
//     fields: () => ({
//       _id: { type: GraphQLString },
//       food: {
//         type: FoodType,
//         resolve(parent, args) {
//           return FoodModel.findById(parent.foodId);
//         },
//       },
//       category: {
//         type: CategoryType,
//         resolve(parent, args) {
//           return CategoryModel.findById(parent.categoryId);
//         },
//       },
//       level: {
//         type: LevelType,
//         resolve(parent, args) {
//           return LevelModel.findById(parent.levelId);
//         },
//       },
//       package: {
//         type: PackageType,
//         resolve(parent, args) {
//           return PackageModel.findById(parent.packageId);
//         },
//       },
//       quantity: { type: GraphQLInt },
//       price: { type: GraphQLInt },
//     }),
//   };
// };

// const ItemType = {
//   input: new GraphQLInputObjectType(ItemTemplate("ItemInput")),
//   output: new GraphQLObjectType(ItemTemplate("ItemOutput")),
// };

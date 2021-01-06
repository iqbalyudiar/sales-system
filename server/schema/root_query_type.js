const { GraphQLObjectType } = require("graphql");

const FoodQueries = require("./food/food_queries");
const CategoryQueries = require("./category/category_queries");
const LevelQueries = require("./level/level_queries");
const PackageQueries = require("./package/package_queries");
const ItemQueries = require("./item/item_queries");
const OrderQueries = require("./order/order_queries");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    ...FoodQueries,
    ...CategoryQueries,
    ...LevelQueries,
    ...PackageQueries,
    ...ItemQueries,
    ...OrderQueries,
  }),
});

module.exports = RootQuery;

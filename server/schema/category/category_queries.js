const { GraphQLList, GraphQLNonNull, GraphQLString } = require("graphql");
const CategoryType = require("./category_type");
const { CategoryModel } = require("../../models");

const CategoryQueries = {
  categories: {
    type: new GraphQLList(CategoryType),
    resolve(parent, args) {
      const categories = CategoryModel.find().exec();
      if (!categories) {
        throw new Error("Error");
      }
      return categories;
    },
  },
  category: {
    type: CategoryType,
    args: {
      id: {
        name: "_id",
        type: GraphQLNonNull(GraphQLString),
      },
    },
    resolve(parent, args) {
      const categoryDetails = CategoryModel.findById(args.id).exec();
      if (!categoryDetails) {
        throw new Error("Error");
      }
      return categoryDetails;
    },
  },
};

module.exports = CategoryQueries;

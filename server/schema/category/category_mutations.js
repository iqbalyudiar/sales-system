const { GraphQLNonNull, GraphQLString } = require("graphql");
const CategoryType = require("./category_type");
const CategoryInput = require("./category_input");
const { CategoryModel } = require("../../models");

const CategoryMutations = {
  addCategory: {
    type: CategoryType,
    args: {
      input: { type: CategoryInput },
    },
    resolve(parent, { input }) {
      const { name } = input;
      return new CategoryModel({ name }).save();
    },
  },
  updateCategory: {
    type: CategoryType,
    args: {
      id: {
        name: "id",
        type: new GraphQLNonNull(GraphQLString),
      },
      input: { type: CategoryInput },
    },
    resolve(parent, { id, input }) {
      const { name } = input;
      return CategoryModel.findByIdAndUpdate(id, { name }, (err) => {
        if (err) {
          return next(err);
        }
      });
    },
  },
  deleteCategory: {
    type: CategoryType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parent, args) {
      const delCategory = CategoryModel.findByIdAndRemove(args.id).exec();
      if (!delCategory) {
        throw new Error("Error");
      }
      return delCategory;
    },
  },
};

module.exports = CategoryMutations;

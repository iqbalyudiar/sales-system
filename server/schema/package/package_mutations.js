const { GraphQLNonNull, GraphQLString } = require("graphql");
const PackageType = require("./package_type");
const PackageInput = require("./package_input");
const { PackageModel } = require("../../models");

const PackageMutations = {
  addPackage: {
    type: PackageType,
    args: {
      input: { type: PackageInput },
    },
    resolve(parent, { input }) {
      const { name } = input;
      return new PackageModel({ name }).save();
    },
  },
  updatePackage: {
    type: PackageType,
    args: {
      id: {
        name: "id",
        type: new GraphQLNonNull(GraphQLString),
      },
      input: { type: PackageInput },
    },
    resolve(parent, { id, input }) {
      const { name } = input;
      return PackageModel.findByIdAndUpdate(id, { name }, (err) => {
        if (err) {
          return next(err);
        }
      });
    },
  },
  deletePackage: {
    type: PackageType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parent, args) {
      const delPackage = PackageModel.findByIdAndRemove(args.id).exec();
      if (!delPackage) {
        throw new Error("Error");
      }
      return delPackage;
    },
  },
};

module.exports = PackageMutations;

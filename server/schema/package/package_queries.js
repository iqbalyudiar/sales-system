const { GraphQLList, GraphQLNonNull, GraphQLString } = require("graphql");
const PackageType = require("./package_type");
const { PackageModel } = require("../../models");

const PackageQueries = {
  packages: {
    type: new GraphQLList(PackageType),
    resolve(parent, args) {
      const packages = PackageModel.find().exec();
      if (!packages) {
        throw new Error("Error");
      }
      return packages;
    },
  },
  package: {
    type: PackageType,
    args: {
      id: {
        name: "_id",
        type: GraphQLNonNull(GraphQLString),
      },
    },
    resolve(parent, args) {
      const packageDetails = PackageModel.findById(args.id).exec();
      if (!packageDetails) {
        throw new Error("Error");
      }
      return packageDetails;
    },
  },
};

module.exports = PackageQueries;

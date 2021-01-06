const { GraphQLList, GraphQLNonNull, GraphQLString } = require("graphql");
const LevelType = require("./level_type");
const { LevelModel } = require("../../models");

const LevelQueries = {
  levels: {
    type: new GraphQLList(LevelType),
    resolve(parent, args) {
      const levels = LevelModel.find().exec();
      if (!levels) {
        throw new Error("Error");
      }
      return levels;
    },
  },
  level: {
    type: LevelType,
    args: {
      id: {
        name: "_id",
        type: GraphQLNonNull(GraphQLString),
      },
    },
    resolve(parent, args) {
      const levelDetails = LevelModel.findById(args.id).exec();
      if (!levelDetails) {
        throw new Error("Error");
      }
      return levelDetails;
    },
  },
};

module.exports = LevelQueries;

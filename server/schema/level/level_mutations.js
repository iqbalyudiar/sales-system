const { GraphQLNonNull, GraphQLString } = require("graphql");
const LevelType = require("./level_type");
const LevelInput = require("./level_input");
const { LevelModel } = require("../../models");

const LevelMutations = {
  addLevel: {
    type: LevelType,
    args: {
      input: { type: LevelInput },
    },
    resolve(parent, { input }) {
      const { name } = input;
      return new LevelModel({ name }).save();
    },
  },
  updateLevel: {
    type: LevelType,
    args: {
      id: {
        name: "id",
        type: new GraphQLNonNull(GraphQLString),
      },
      input: { type: LevelInput },
    },
    resolve(parent, { id, input }) {
      const { name } = input;
      return LevelModel.findByIdAndUpdate(id, { name }, (err) => {
        if (err) {
          return next(err);
        }
      });
    },
  },
  deleteLevel: {
    type: LevelType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parent, args) {
      const delLevel = LevelModel.findByIdAndRemove(args.id).exec();
      if (!delLevel) {
        throw new Error("Error");
      }
      return delLevel;
    },
  },
};

module.exports = LevelMutations;

const express = require("express");
const app = express();
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");
const schema = require("./schema/schema");

// Database
const MONGO_URI = "mongodb://localhost/sistem-penjualan-sambal-kemasan";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log("COnnected to the MongoDB"))
  .catch((err) => console.error(err));

app.use("*", cors());

// Graphql
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
  })
);
const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config");
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;

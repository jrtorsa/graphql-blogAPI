"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require("express-graphql");

var _schema = require("./schema");

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use("/graphql", (0, _expressGraphql.graphqlHTTP)({
  schema: _schema2.default,
  graphiql: true
}));

app.listen(4000);
console.log("Starting the server...");
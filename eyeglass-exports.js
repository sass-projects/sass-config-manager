"use strict";

var path = require("path");

module.exports = function(eyeglass, sass) {
  return {
    sassDir: path.resolve(__dirname, "sass"),
    functions: {}
  };
};

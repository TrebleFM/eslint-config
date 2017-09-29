"use strict";

const include = require("./lib/include");
include.register(module);

module.exports = {
    "extends": [
        "./rules/eslint/env/node.js",
        "./lib/baseline.js",
        "./rules/plugins/import.js",
        "./rules/plugins/node.js"
    ]
};

"use strict";

require("./lib/include");

module.exports = {
    "extends": [
        "./rules/eslint/env/node.js",
        "./lib/baseline.js",
        "./rules/plugins/import.js",
        "./rules/plugins/node.js"
    ]
};

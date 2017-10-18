"use strict";

require("./lib/include");

module.exports = {
    "extends": [
        "./rules/eslint/env/react-native.js",
        "./lib/baseline.js",
        "./rules/plugins/import.js",
        "./rules/plugins/react-jsx.js",
        "./rules/plugins/react-native.js"
    ]
};

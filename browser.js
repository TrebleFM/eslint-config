"use strict";

require("./lib/include");
const restrictedGlobals = require("eslint-restricted-globals");

module.exports = {
    "extends": [
        "./rules/eslint/env/browser.js",
        "./lib/baseline.js"
    ],
    "rules": {
        "strict": 2,
        "no-restricted-globals": [2].concat(restrictedGlobals)
    }
};

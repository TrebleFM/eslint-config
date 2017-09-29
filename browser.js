"use strict";

const include = require("./lib/include");
include.register(module);

module.exports = {
    "extends": [
        "./rules/eslint/env/browser.js",
        "./lib/baseline.js"
    ],
    "rules": {
        "strict": 2
    }
};

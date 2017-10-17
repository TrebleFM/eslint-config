"use strict";

require("./lib/include");

module.exports = {
    "extends": [
        "./rules/eslint/env/browser.js",
        "./lib/baseline.js"
    ],
    "rules": {
        "strict": 2
    }
};

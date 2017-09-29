"use strict";

const include = require("./lib/include");
include.register(module);

module.exports = {
    "extends": [
        "./rules/plugins/react-jsx.js",
        "./rules/plugins/typescript.js"
    ]
};

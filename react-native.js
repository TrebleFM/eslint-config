"use strict";

const include = require("./lib/include");
include.register(module);

module.exports = {
    "extends": [
        "./rules/eslint/env/react-native.js",
        "./lib/baseline.js",
        "./rules/plugins/import.js",
        "./rules/plugins/react-jsx.js",
        "./rules/plugins/react-native.js"
    ],
    "settings": {
        "import/resolver": {
            node: {
                // Note: will not complain if only _one_ of these files exists.
                extensions: [".js", ".web.js", ".ios.js", ".android.js"]
            }
        }
    }
};

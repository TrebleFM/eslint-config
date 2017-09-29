"use strict";

module.exports = {
    "extends": [
        "../rules/eslint/best-practices.js",
        "../rules/eslint/errors.js",
        "../rules/eslint/es6.js",
        "../rules/eslint/strict.js",
        "../rules/eslint/style.js",
        "../rules/eslint/variables.js",

        "../rules/plugins/graphql.js",
        "../rules/plugins/html.js",
        "../rules/plugins/react.js"
    ]
};

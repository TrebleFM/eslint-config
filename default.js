module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "./baseline.js",
        "./rules/eslint/es6.js",
        "./rules/eslint/node.js",
        "./rules/plugins/babel.js",
        "./rules/plugins/flowtype.js",
        "./rules/plugins/node.js"
    ]
};

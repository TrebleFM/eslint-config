module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "./rules/eslint/best-practices.js",
        "./rules/eslint/errors.js",
        "./rules/eslint/es6.js",
        "./rules/eslint/node.js",
        "./rules/eslint/strict.js",
        "./rules/eslint/style.js",
        "./rules/eslint/variables.js",
        "./rules/plugins/babel.js",
        "./rules/plugins/flowtype.js",
        "./rules/plugins/node.js"
    ]
};

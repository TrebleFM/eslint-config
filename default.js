module.exports = {
    "parser": "babel-eslint",
    "plugins": [
        "babel",
        "flowtype",
        "node"
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "extends": [
        "./rules/eslint/best-practices.js",
        "./rules/eslint/errors.js",
        "./rules/eslint/es6.js",
        "./rules/eslint/node.js",
        "./rules/eslint/strict.js",
        "./rules/eslint/style.js",
        "./rules/eslint/variables.js",
        "./rules/plugins/babel.js",
        "./rules/plugins/node.js"
    ]
};

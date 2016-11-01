module.exports = {
    "parser": "babel-eslint",
    "plugins": [
        "babel"
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "extends": [
        "@treblefm/rules/eslint/best-practices",
        "@treblefm/rules/eslint/errors",
        "@treblefm/rules/eslint/es6",
        "@treblefm/rules/eslint/node",
        "@treblefm/rules/eslint/strict",
        "@treblefm/rules/eslint/style",
        "@treblefm/rules/eslint/variables",
        "@treblefm/rules/babel"
    ]
};

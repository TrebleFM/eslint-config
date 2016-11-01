module.exports = {
    "parser": "babel-eslint",
    "plugins": [
        "babel"
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "extends": [
        "@treblefm/eslint-config/rules/eslint/best-practices",
        "@treblefm/eslint-config/rules/eslint/errors",
        "@treblefm/eslint-config/rules/eslint/es6",
        "@treblefm/eslint-config/rules/eslint/node",
        "@treblefm/eslint-config/rules/eslint/strict",
        "@treblefm/eslint-config/rules/eslint/style",
        "@treblefm/eslint-config/rules/eslint/variables",
        "@treblefm/eslint-config/rules/babel"
    ]
};

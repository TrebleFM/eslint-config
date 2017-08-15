module.exports = {
    "parser": "typescript-eslint-parser",
    "extends": "./default.js",

    // https://github.com/eslint/typescript-eslint-parser/issues/77
    "rules": {
        "no-undef": 0,
        "no-unused-vars": 0,
        "no-useless-constructor": 0
    }
};

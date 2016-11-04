module.exports = {
    "extends": [
        "./rules/eslint/best-practices.js",
        "./rules/eslint/errors.js",
        "./rules/eslint/strict.js",
        "./rules/eslint/style.js",
        "./rules/eslint/variables.js"
    ],
    "plugins": [
        "html"
    ],
    "rules": {
        "comma-dangle": [2, "never"]
    },
    "env": {
        "es6": false,
        "node": false,
        "browser": true,
        "jquery": true
    },
    "parserOptions": {
        "ecmaVersion": 5,
        "sourceType": "script"
    }
};

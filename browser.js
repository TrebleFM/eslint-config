module.exports = {
    "parserOptions": {
        "ecmaVersion": 5,
        "sourceType": "script"
    },
    "env": {
        "es6": false,
        "node": false,
        "browser": true,
        "jquery": true
    },
    "extends": [
        "./rules/eslint/best-practices.js",
        "./rules/eslint/errors.js",
        "./rules/eslint/strict.js",
        "./rules/eslint/style.js",
        "./rules/eslint/variables.js",
        "./rules/plugins/html.js"
    ],
    "rules": {
        "strict": 2
    }
};

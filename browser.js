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
        "./baseline.js",
        "./rules/plugins/html.js"
    ],
    "rules": {
        "strict": 2
    }
};

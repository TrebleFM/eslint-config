module.exports = {
    "parser": "babel-eslint",
    "env": {
        "node": false,
        "browser": true,
        "jquery": true
    },
    "extends": [
        "./baseline.js",
        "./rules/eslint/es6.js",
        "./rules/plugins/babel.js",
        "./rules/plugins/flowtype.js",
        "./rules/plugins/html.js"
    ]
};

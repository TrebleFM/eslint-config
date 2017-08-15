module.exports = {
    "env": {
        "node": false,
        "browser": true,
        "jquery": true
    },
    "extends": [
        "./baseline.js",
        "./rules/eslint/es6.js",
        "./rules/plugins/html.js",
        "./rules/plugins/typescript.js"
    ]
};
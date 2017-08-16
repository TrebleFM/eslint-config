module.exports = {
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": [
        "./default.js",
        "./rules/plugins/react.js",
        "./rules/plugins/react-jsx.js",
        "./rules/plugins/react-native.js"
    ]
};

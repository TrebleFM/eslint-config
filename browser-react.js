module.exports = {
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": [
        "./browser-babel.js",
        "./rules/plugins/react.js",
        "./rules/plugins/react-jsx.js",
        "./rules/plugins/react-native.js"
    ]
};
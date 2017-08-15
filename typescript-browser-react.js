module.exports = {
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": [
        "./typescript-browser.js",
        "./rules/plugins/react.js",
        "./rules/plugins/react-jsx.js",
        "./rules/plugins/react-native.js"
    ]
};
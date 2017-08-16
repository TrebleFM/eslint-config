module.exports = {
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": [
        "./typescript.js",
        "./rules/plugins/react.js",
        "./rules/plugins/react-jsx.js",
        "./rules/plugins/react-native.js"
    ]
};

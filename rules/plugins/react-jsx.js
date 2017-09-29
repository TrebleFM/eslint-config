"use strict";

const include = require("../../lib/include");
const react = include("eslint-plugin-react");

if (react) {
    // JSX rules from eslint-plugin-react
    module.exports = {
        "parserOptions": {
            "ecmaFeatures": {
                "jsx": true
            }
        },
        "plugins": ["react"],
        "rules": {
            // Enforce boolean attributes notation in JSX (fixable)
            "react/jsx-boolean-value": 0,
            // Validate closing bracket location in JSX (fixable)
            "react/jsx-closing-bracket-location": 1,
            // Validate closing tag location in JSX (fixable)
            "react/jsx-closing-tag-location": 1,
            // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions (fixable)
            "react/jsx-curly-spacing": 1,
            // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
            "react/jsx-equals-spacing": 1,
            // Restrict file extensions that may contain JSX
            "react/jsx-filename-extension": [2, { "extensions": [".jsx", ".tsx"] }],
            // Enforce position of the first prop in JSX (fixable)
            "react/jsx-first-prop-new-line": 1,
            // Enforce event handler naming conventions in JSX
            "react/jsx-handler-names": 1,
            // Validate JSX indentation (fixable)
            "react/jsx-indent": 1,
            // Validate props indentation in JSX (fixable)
            "react/jsx-indent-props": 1,
            // Validate JSX has key prop when in array or iterator
            "react/jsx-key": 2,
            // Limit maximum of props on a single line in JSX (fixable)
            "react/jsx-max-props-per-line": [2, { "when": "multiline" }],
            // Prevent usage of .bind() and arrow functions in JSX props
            "react/jsx-no-bind": 2,
            // Prevent comments from being inserted as text nodes
            "react/jsx-no-comment-textnodes": 2,
            // Prevent duplicate props in JSX
            "react/jsx-no-duplicate-props": 2,
            // Prevent usage of unwrapped JSX strings
            "react/jsx-no-literals": 0,
            // Prevent usage of unsafe target='_blank'
            "react/jsx-no-target-blank": 2,
            // Disallow undeclared variables in JSX
            "react/jsx-no-undef": [2, { "allowGlobals": true }],
            // Enforce curly braces or disallow unnecessary curly braces in JSX
            "react/jsx-curly-brace-presence": 1,
            // Enforce PascalCase for user-defined JSX components
            "react/jsx-pascal-case": 2,
            // Enforce props alphabetical sorting (fixable)
            "react/jsx-sort-props": 0,
            // Validate whitespace in and around the JSX opening and closing brackets (fixable)
            "react/jsx-tag-spacing": 1,
            // Prevent React to be incorrectly marked as unused
            "react/jsx-uses-react": 2,
            // Prevent variables used in JSX to be incorrectly marked as unused
            "react/jsx-uses-vars": 2,
            // Prevent missing parentheses around multilines JSX (fixable)
            "react/jsx-wrap-multilines": 2
        }
    };
}

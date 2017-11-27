"use strict";

const include = require("../../lib/include");
const react = include("eslint-plugin-react");

if (react) {
    // Non-JSX rules from eslint-plugin-react
    module.exports = {
        "plugins": ["react"],
        "rules": {
            // Enforces consistent naming for boolean props
            "react/boolean-prop-naming": 1,
            // Forbid "button" element without an explicit "type" attribute
            "react/button-has-type": 2,
            // Prevent extraneous defaultProps on components
            "react/default-props-match-prop-types": 2,
            // Rule enforces consistent usage of destructuring assignment in component
            "react/destructuring-assignment": 0,
            // Prevent missing displayName in a React component definition
            "react/display-name": 1,
            // Forbid certain props on Components
            "react/forbid-component-props": 2,
            // Forbid certain elements
            "react/forbid-elements": 0,
            // Forbid certain propTypes
            "react/forbid-prop-types": 0,
            // Forbid foreign propTypes
            "react/forbid-foreign-prop-types": 2,
            // Prevent using this.state inside this.setState
            "react/no-access-state-in-setstate": 2,
            // Prevent using Array index in key props
            "react/no-array-index-key": 2,
            // Prevent passing children as props
            "react/no-children-prop": 2,
            // Prevent usage of dangerous JSX properties
            "react/no-danger": 2,
            // Prevent problem with children and props.dangerouslySetInnerHTML
            "react/no-danger-with-children": 2,
            // Prevent usage of deprecated methods
            "react/no-deprecated": 2,
            // Prevent usage of setState in componentDidMount
            "react/no-did-mount-set-state": 2,
            // Prevent usage of setState in componentDidUpdate
            "react/no-did-update-set-state": 2,
            // Prevent direct mutation of this.state
            "react/no-direct-mutation-state": 2,
            // Prevent usage of findDOMNode
            "react/no-find-dom-node": 2,
            // Prevent usage of isMounted
            "react/no-is-mounted": 2,
            // Prevent multiple component definition per file
            "react/no-multi-comp": 0,
            // Prevent usage of shouldComponentUpdate when extending React.PureComponent
            "react/no-redundant-should-component-update": 1,
            // Prevent usage of the return value of React.render
            "react/no-render-return-value": 2,
            // Prevent usage of setState
            "react/no-set-state": 0,
            // Prevent common casing typos
            "react/no-typos": 2,
            // Prevent using string references in ref attribute
            "react/no-string-refs": 2,
            // Prevent invalid characters from appearing in markup
            "react/no-unescaped-entities": 2,
            // Prevent usage of unknown DOM property (fixable)
            "react/no-unknown-property": 2,
            // Prevent definitions of unused prop types
            "react/no-unused-prop-types": 2,
            // Prevent usage of setState in componentWillUpdate
            "react/no-will-update-set-state": 2,
            // Enforce ES5 or ES6 class for React Components
            "react/prefer-es6-class": 2,
            // Enforce stateless React Components to be written as a pure function
            "react/prefer-stateless-function": 1,
            // Prevent missing props validation in a React component definition
            "react/prop-types": 2,
            // Prevent missing React when using JSX
            "react/react-in-jsx-scope": 2,
            // Enforce a defaultProps definition for every prop that is not a required prop
            "react/require-default-props": 1,
            // Enforce React components to have a shouldComponentUpdate method
            "react/require-optimization": 1,
            // Enforce ES5 or ES6 class for returning value in render function
            "react/require-render-return": 2,
            // Prevent extra closing tags for components without children (fixable)
            "react/self-closing-comp": 1,
            // Enforce component methods order
            "react/sort-comp": 1,
            // Enforce propTypes declarations alphabetical sorting
            "react/sort-prop-types": 0,
            // Enforce style prop value being an object
            "react/style-prop-object": 2,
            // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
            "react/void-dom-elements-no-children": 2
        }
    };
}

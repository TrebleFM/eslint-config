"use strict";

module.exports = {
    "rules": {
        // enforce “for” loop update clause moving the counter in the right direction
        "for-direction": 1,
        // enforce return statements in getters
        "getter-return": 2,
        // disallow await inside of loops
        "no-await-in-loop": 2,
        // disallow comparing against -0
        "no-compare-neg-zero": 2,
        // disallow assignment in conditional expressions
        "no-cond-assign": 2,
        // disallow use of console
        "no-console": 1,
        // disallow use of constant expressions in conditions
        "no-constant-condition": 2,
        // disallow control characters in regular expressions
        "no-control-regex": 2,
        // disallow use of debugger
        "no-debugger": 2,
        // disallow duplicate arguments in functions
        "no-dupe-args": 2,
        // disallow duplicate keys when creating object literals
        "no-dupe-keys": 2,
        // disallow a duplicate case label.
        "no-duplicate-case": 2,
        // disallow the use of empty character classes in regular expressions
        "no-empty-character-class": 2,
        // disallow empty statements
        "no-empty": 2,
        // disallow assigning to the exception in a catch block
        "no-ex-assign": 2,
        // disallow double-negation boolean casts in a boolean context
        "no-extra-boolean-cast": 2,
        // disallow unnecessary parentheses
        "no-extra-parens": 0,
        // disallow unnecessary semicolons
        "no-extra-semi": 1,
        // disallow overwriting functions written as function declarations
        "no-func-assign": 2,
        // disallow function or variable declarations in nested blocks
        "no-inner-declarations": 2,
        // disallow invalid regular expression strings in the RegExp constructor
        "no-invalid-regexp": 2,
        // disallow irregular whitespace outside of strings and comments
        "no-irregular-whitespace": 2,
        // disallow the use of object properties of the global object (Math and JSON) as functions
        "no-obj-calls": 2,
        // disallow calling some Object.prototype methods directly on objects
        "no-prototype-builtins": 0,
        // disallow multiple spaces in a regular expression literal
        "no-regex-spaces": 2,
        // disallow sparse arrays
        "no-sparse-arrays": 2,
        // disallow template literal placeholder syntax in regular strings
        "no-template-curly-in-string": 2,
        // disallow confusing multiline expressions
        "no-unexpected-multiline": 2,
        // disallow unreachable statements after a return, throw, continue, or break statement
        "no-unreachable": 2,
        // disallow control flow statements in finally blocks
        "no-unsafe-finally": 2,
        // disallow negating the left operand of relational operators
        "no-unsafe-negation": 2,
        // require calls to isNaN() when checking for NaN
        "use-isnan": 2,
        // ensure JSDoc comments are valid
        "valid-jsdoc": 0,
        // ensure that the results of typeof are compared against a valid string
        "valid-typeof": 2
    }
};

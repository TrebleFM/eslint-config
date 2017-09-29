"use strict";

module.exports = {
    "env": {
        "es6": true
    },
    "rules": {
        // require braces in arrow function body
        "arrow-body-style": 1,
        // require parens in arrow function arguments
        "arrow-parens": 2,
        // require space before/after arrow function's arrow
        "arrow-spacing": 1,
        // verify super() callings in constructors
        "constructor-super": 2,
        // enforce the spacing around the * in generator functions
        "generator-star-spacing": [2, {
            "named": "after",
            "anonymous": "after",
            "method": "before"
        }],
        // disallow modifying variables of class declarations
        "no-class-assign": 2,
        // disallow arrow functions where they could be confused with comparisons
        "no-confusing-arrow": 1,
        // disallow modifying variables that are declared using const
        "no-const-assign": 2,
        // disallow duplicate name in class members
        "no-dupe-class-members": 2,
        // disallow duplicate module imports
        "no-duplicate-imports": 0,
        // disallow new operators with the Symbol object
        "no-new-symbol": 2,
        // disallow specified modules when loaded by import
        "no-restricted-imports": 0,
        // disallow to use this/super before super() calling in constructors.
        "no-this-before-super": 2,
        // disallow unnecessary computed property keys in object literals
        "no-useless-computed-key": 1,
        // disallow unnecessary constructors
        "no-useless-constructor": 1,
        // disallow renaming import, export, and destructured assignments to the same name
        "no-useless-rename": 1,
        // require let or const instead of var
        "no-var": 0,
        // require method and property shorthand syntax for object literals
        "object-shorthand": 0,
        // suggest using arrow functions as callbacks
        "prefer-arrow-callback": 1,
        // suggest using of const declaration for variables that are never modified after declared
        "prefer-const": 0,
        // require destructuring from arrays and/or objects
        "prefer-destructuring": 0,
        // disallow parseInt() in favor of binary, octal, and hexadecimal literals
        "prefer-numeric-literals": 1,
        // require rest parameters instead of arguments
        "prefer-rest-params": 1,
        // require spread operators instead of .apply()
        "prefer-spread": 1,
        // suggest using template literals instead of strings concatenation
        "prefer-template": 1,
        // disallow generator functions that do not have yield
        "require-yield": 2,
        // enforce spacing between rest and spread operators and their expressions
        "rest-spread-spacing": 2,
        // enforce sorted import declarations within modules
        "sort-imports": 0,
        // require symbol descriptions
        "symbol-description": 1,
        // require or disallow spacing around embedded expressions of template strings
        "template-curly-spacing": 1,
        // require or disallow spacing around the * in yield* expressions
        "yield-star-spacing": 2
    }
};

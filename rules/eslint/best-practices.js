module.exports = {
    "rules": {
        // enforce getter and setter pairs in objects
        "accessor-pairs": 0,
        // enforce return statements in callbacks of array methods
        "array-callback-return": 1,
        // treat var statements as if they were block scoped
        "block-scoped-var": 0,
        // enforce that class methods utilize this
        "class-methods-use-this": 0,
        // specify the maximum cyclomatic complexity allowed in a program
        "complexity": 1,
        // require return statements to either always or never specify values
        "consistent-return": 1,
        // specify curly brace conventions for all control statements
        "curly": 2,
        // require default case in switch statements
        "default-case": 2,
        // enforces consistent newlines before or after dots
        "dot-location": [1, "property"],
        // encourages use of dot notation whenever possible
        "dot-notation": [1, {"allowKeywords": true}],
        // require the use of === and !==
        "eqeqeq": 2,
        // make sure for-in loops have an if statement
        "guard-for-in": 1,
        // disallow the use of alert, confirm, and prompt
        "no-alert": 2,
        // disallow use of arguments.caller or arguments.callee
        "no-caller": 0,
        // disallow lexical declarations in case clauses
        "no-case-declarations": 0,
        // disallow division operators explicitly at beginning of regular expression
        "no-div-regex": 0,
        // disallow else after a return in an if
        "no-else-return": 0,
        // disallow use of empty destructuring patterns
        "no-empty-pattern": 2,
        // disallow comparisons to null without a type-checking operator
        "no-eq-null": 0,
        // disallow use of eval()
        "no-eval": 2,
        // disallow adding to native types
        "no-extend-native": 0,
        // disallow unnecessary function binding
        "no-extra-bind": 0,
        // disallow unnecessary labels
        "no-extra-label": 1,
        // disallow fallthrough of case statements
        "no-fallthrough": 2,
        // disallow the use of leading or trailing decimal points in numeric literals
        "no-floating-decimal": 0,
        // disallow assignments to native objects or read-only global variables
        "no-global-assign": 1,
        // disallow the type conversions with shorter notations
        "no-implicit-coercion": 0,
        // disallow variable and function declarations in the global scope
        "no-implicit-globals": 0,
        // disallow use of eval()-like methods
        "no-implied-eval": 2,
        // disallow this keywords outside of classes or class-like objects
        "no-invalid-this": 0, // NOTE - DO NOT TOUCH. Use rule in babel.js
        // disallow usage of __iterator__ property
        "no-iterator": 0,
        // disallow use of labels for anything other then loops and switches
        "no-labels": [2, {"allowLoop": true, "allowSwitch": true}],
        // disallow unnecessary nested blocks
        "no-lone-blocks": 0,
        // disallow creation of functions within loops
        "no-loop-func": 1,
        // disallow the use of magic numbers
        "no-magic-numbers": [1, {"ignore": [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 24, 60, 100, 365, 1000, 1024]}],
        // disallow use of multiple spaces
        "no-multi-spaces": 1,
        // disallow use of multiline strings
        "no-multi-str": 2,
        // disallow use of new operator for Function object
        "no-new-func": 0,
        // disallows creating new instances of String,Number, and Boolean
        "no-new-wrappers": 0,
        // disallow use of new operator when not part of the assignment or comparison
        "no-new": 0,
        // disallow use of octal escape sequences in string literals, such as:  var foo = 'Copyright \251';
        "no-octal-escape": 0,
        // disallow use of (old style) octal literals
        "no-octal": 2,
        // disallow reassignment of function parameters
        "no-param-reassign": 0,
        // disallow usage of __proto__ property
        "no-proto": 0,
        // disallow declaring the same variable more then once
        "no-redeclare": 2,
        // disallow certain properties on certain objects
        "no-restricted-properties": 0,
        // disallow use of assignment in return statement
        "no-return-assign": 0,
        // disallow unnecessary return await
        "no-return-await": 2,
        // disallow use of `javascript:` urls.
        "no-script-url": 1,
        // disallow comparisons where both sides are exactly the same
        "no-self-compare": 2,
        // disallow use of comma operator
        "no-sequences": 0,
        // restrict what can be thrown as an exception
        "no-throw-literal": 2,
        // disallow unmodified loop conditions
        "no-unmodified-loop-condition": 1,
        // disallow usage of expressions in statement position
        "no-unused-expressions": 1,
        // disallow unused labels
        "no-unused-labels": 1,
        // disallow unnecessary .call() and .apply()
        "no-useless-call": 0,
        // disallow unnecessary concatenation of literals or template literals
        "no-useless-concat": 1,
        // disallow unnecessary escape characters
        "no-useless-escape": 0,
        // disallow redundant return statements
        "no-useless-return": 0,
        // disallow use of void operator
        "no-void": 0,
        // disallow usage of configurable warning terms in comments: e.g. todo
        "no-warning-comments": 0,
        // disallow use of the with statement
        "no-with": 0,
        // require using Error objects as Promise rejection reasons
        "prefer-promise-reject-errors": 2,
        // require use of the second argument for parseInt()
        "radix": 0,
        // disallow async functions which have no await expression
        "require-await": 2,
        // requires to declare all vars on top of their containing scope
        "vars-on-top": 0,
        // require immediate function invocation to be wrapped in parentheses
        "wrap-iife": 0,
        // require or disallow Yoda conditions
        "yoda": 0
    }
};

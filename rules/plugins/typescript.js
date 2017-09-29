"use strict";

// Rules from eslint-plugin-typescript
module.exports = {
    "parser": "typescript-eslint-parser",
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": ["typescript"],
    "rules": {
        // enforces one space after the colon and zero spaces before the colon of a type annotation
        "typescript/type-annotation-spacing": 1,
        // enforces accessibility modifiers on class properties and methods
        "typescript/explicit-member-accessibility": 2,
        // enforces interface names are prefixed
        "typescript/interface-name-prefix": [2, "always"],
        // enforces /// <reference /> is not used
        "typescript/no-triple-slash-reference": 2,
        // enforces the any type is not used
        "typescript/no-explicit-any": 0,
        // enforces the use of as Type assertions instead of <Type> assertions
        "typescript/no-angle-bracket-type-assertion": 2,
        // disallows the use of custom TypeScript modules and namespaces
        "typescript/no-namespace": 2,
        // disallows the use of variables before they are defined
        "typescript/no-use-before-define": 2,
        // enforces the use of the keyword namespace over module to declare custom TypeScript modules
        "typescript/prefer-namespace-keyword": 0,
        // disallows the use of type aliases
        "typescript/no-type-alias": 0,
        // enforces a standard member declaration order
        "typescript/member-ordering": 1,
        // prevents TypeScript-specific constructs from being erroneously flagged as unused
        "typescript/no-unused-vars": 2,
        // enforces member overloads to be consecutive
        "typescript/adjacent-overload-signatures": 1,

        // TODO - Need to disable certain ESLint rules that cause issues until issue is fixed
        // https://github.com/eslint/typescript-eslint-parser/issues/77
        "no-undef": 0,
        "no-useless-constructor": 0
    }
};

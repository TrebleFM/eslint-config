// Rules from eslint-plugin-flowtype
module.exports = {
    "plugins": ["flowtype"],
    "rules": {
        // enforces a particular style for boolean type annotations
        "flowtype/boolean-style": 2,
        // marks Flow type identifiers as defined
        "flowtype/define-flow-type": 1,
        // enforces consistent use of trailing commas in Object and Tuple annotations
        "flowtype/delimiter-dangle": 2,
        // enforces consistent spacing within generic type annotation parameters
        "flowtype/generic-spacing": 2,
        // checks for duplicate properties in Object annotations
        "flowtype/no-dupe-keys": 2,
        // disallows use of primitive constructors as types, such as Boolean, Number and String
        "flowtype/no-primitive-constructor-types": 2,
        // disallows Flow type imports, exports, aliases, and annotations in files missing a valid Flow file declaration (or a @noflow annotation)
        "flowtype/no-types-missing-file-annotation": 2,
        // warns against weak type annotations any, Object and Function
        "flowtype/no-weak-types": 1,
        // enforces consistent separators between properties in Flow object types
        "flowtype/object-type-delimiter": 2,
        // requires that all function parameters have type annotations
        "flowtype/require-parameter-type": 1,
        // requires that functions have return type annotation
        "flowtype/require-return-type": 1,
        // validates Flow file annotations
        "flowtype/require-valid-file-annotation": 2,
        // requires that all variable declarators have type annotations
        "flowtype/require-variable-type": 0,
        // enforces consistent use of semicolons after type aliases
        "flowtype/semi": 2,
        // enforces sorting of Object annotations
        "flowtype/sort-keys": 0,
        // enforces consistent spacing after the type annotation colon
        "flowtype/space-after-type-colon": 2,
        // enforces consistent spacing before the opening < of generic type annotation parameters
        "flowtype/space-before-generic-bracket": 2,
        // enforces consistent spacing before the type annotation colon
        "flowtype/space-before-type-colon": 2,
        // enforces a consistent naming pattern for type aliases
        "flowtype/type-id-match": 0,
        // enforces consistent spacing around union and intersection type separators (| and &)
        "flowtype/union-intersection-spacing": 2,
        // marks Flow type alias declarations as used
        "flowtype/use-flow-type": 1
    },
    "settings": {
        "flowtype": {
            // only checks files with a @flow annotation in the first comment
            "onlyFilesWithFlowAnnotation": true
        }
    }
};

"use strict";

// Rules from eslint-plugin-import
module.exports = {
    "plugins": ["import"],
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        }
    },
    "rules": {
        /* Static Analysis */
        // Ensure imports point to a file/module that can be resolved
        "import/no-unresolved": 2,
        // Ensure named imports correspond to a named export in the remote file
        "import/named": 2,
        // Ensure a default export is present, given a default import
        "import/default": 2,
        // Ensure imported namespaces contain dereferenced properties as they are dereferenced
        "import/namespace": 2,
        // Restrict which files can be imported in a given folder
        "import/no-restricted-paths": 0,
        // Forbid import of modules using absolute paths
        "import/no-absolute-path": 2,
        // Forbid require() calls with expressions
        "import/no-dynamic-require": 2,
        // Prevent importing the submodules of other modules
        "import/no-internal-modules": 0,
        // Forbid Webpack loader syntax in imports
        "import/no-webpack-loader-syntax": 0,

        /* Helpful Warnings */
        // Report any invalid exports, i.e. re-export of the same name
        "import/export": 2,
        // Report use of exported name as identifier of default export
        "import/no-named-as-default": 2,
        // Report use of exported name as property of default export
        "import/no-named-as-default-member": 1,
        // Report imported names marked with @deprecated documentation tag
        "import/no-deprecated": 1,
        // Forbid the use of extraneous packages
        "import/no-extraneous-dependencies": [2, { "devDependencies": false }],
        // Forbid the use of mutable exports with var or let
        "import/no-mutable-exports": 1,

        /* Module Systems */
        // Report potentially ambiguous parse goal (script vs. module)
        "import/unambiguous": 0,
        // Report CommonJS require calls and module.exports or exports.*
        "import/no-commonjs": 0,
        // Report AMD require and define calls
        "import/no-amd": 0,
        // No Node.js builtin modules
        "import/no-nodejs-modules": 0,

        /* Style Guide */
        // Ensure all imports appear before other statements
        "import/first": [2, "absolute-first"],
        // Ensure all exports appear after other statements
        "import/exports-last": 0,
        // Report repeated import of the same module in multiple places
        "import/no-duplicates": 2,
        // Report namespace imports
        "import/no-namespace": 0,
        // Ensure consistent use of file extension within the import path
        "import/extensions": 0,
        // Enforce a convention in module import order
        "import/order": 0,
        // Enforce a newline after import statements
        "import/newline-after-import": 0,
        // Prefer a default export if module exports a single name
        "import/prefer-default-export": 1,
        // Limit the maximum number of dependencies a module can have
        "import/max-dependencies": 0,
        // Forbid unassigned imports
        "import/no-unassigned-import": 0,
        // Forbid named default exports
        "import/no-named-default": 0,
        // Forbid anonymous values as default exports
        "import/no-anonymous-default-export": 0
    },
    "settings": {
        // A list of file extensions that will be parsed as modules and inspected for exports
        "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
        // A list of regex strings that, if matched by a path, will not report the matching module if no exports are found
        // "import/ignore": [],
        // An array of additional modules to consider as "core" modules - modules that should be considered resolved but have no path on the filesystem
        // "import/core-modules": [],
        // An array of folders. Resolved modules only from those folders will be considered as "external"
        // "import/external-module-folders": [],
        // A map from parsers to file extension arrays. If a file extension is matched, the dependency parser will require and use the map key as the parser instead of the configured ESLint parser
        "import/parsers": {
            "typescript-eslint-parser": [".ts", ".tsx"]
        },
        // https://github.com/benmosher/eslint-plugin-import#resolvers
        "import/resolver": {
            "node": true,
            "eslint-import-resolver-typescript": {
                "extensions": [".ts", ".tsx", ".d.ts"]
            },
            "react-native": {
                "platform": "any"
            }
        }
        // https://github.com/benmosher/eslint-plugin-import#importcache
        // "import/cache": { "lifetime": 30 }
    }
};

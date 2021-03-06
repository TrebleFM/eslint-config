"use strict";

const include = require("../../lib/include");
const graphql = include("eslint-plugin-graphql");

if (graphql) {
    // Rules from eslint-plugin-graphql
    module.exports = {
        "plugins": ["graphql"],
        "rules": {
            // validates queries in template strings or files against a schema
            "graphql/template-strings": [0, {
                // env,
                // schemaJson,
                // validators: [/* GraphQL's `specifiedRules` */]
            }],
            // validates that all operations are named (valuable for including in server-side logs and debugging)
            "graphql/named-operations": [0, {
                // env,
                // schemaJson
            }],
            // validates that any specified required field is part of the query, but only if that field is available in schema (useful to ensure that query results are cached properly in the client)
            "graphql/required-fields": [0, {
                // env,
                // schemaJson,
                // requiredFields: [/* id */]
            }],
            // enforces that first letter of types is capitalized
            "graphql/capitalized-type-name": [0, {
                // env,
                // schemaJson
            }],
            // validates that no deprecated fields are part of the query (useful to discover fields that have been marked as deprecated and shouldn't be used)
            "graphql/no-deprecated-fields": [0, {
                // env,
                // schemaJson
            }]
        }
    };
}

// Rules from eslint-plugin-node
module.exports = {
    "rules": {
        // Enforce either module.exports or exports
        "exports-style": 2,
        // Disallow deprecated API
        "node/no-deprecated-api": 2,
        // Disallow import declarations for files that don't exist
        "node/no-missing-import": 2,
        // Disallow require()s for files that don't exist
        "node/no-missing-require": 2,
        // Disallow bin files that npm ignores
        "node/no-unpublished-bin": 2,
        // Disallow import declarations for files that npm ignores
        "node/no-unpublished-import": 2,
        // Disallow require()s for files that npm ignores
        "node/no-unpublished-require": 2,
        // Disallow unsupported ECMAScript features on the specified version
        "node/no-unsupported-features": 2,
        // Make the same code path as throw at process.exit()
        "node/process-exit-as-throw": 2,
        // Suggest correct usage of shebang
        "node/shebang": 2
    }
};

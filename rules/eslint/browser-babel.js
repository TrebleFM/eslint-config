// Modified version of ./node.js rules
module.exports = {
    "extends": "./browser.js",
    "env": {
        "commonjs": true
    },
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module"
    }
};

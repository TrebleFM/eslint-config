"use strict";

const codependency = require("codependency");

// PHP require() is to Node require() as PHP include() is to this
let includeFn;
function include(name) {
    return includeFn(name);
}

let alreadyRegistered = false;
include.register = function register(rootModule) {
    if (alreadyRegistered) {
        return;
    }
    alreadyRegistered = true;

    const requirePeer = codependency.register(rootModule);
    includeFn = function (name) {
        return requirePeer(name, { optional: true });
    };
};

module.exports = include;

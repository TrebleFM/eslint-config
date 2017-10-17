"use strict";

const codependency = require("./codependency");

const requirePeer = codependency.register(module, {
    index: ["devDependencies"]
});

// PHP require() is to Node require() as PHP include() is to this
module.exports = function include(name) {
    return requirePeer(name, { optional: true });
}

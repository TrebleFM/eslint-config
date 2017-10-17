"use strict";

const findRoot = require("find-root");
module.exports = require("codependency");

module.exports.findPackage = function (baseModule) {
    let pkgPath = findRoot(baseModule.filename);
    // eslint-disable-next-line global-require,import/no-dynamic-require
    return require(`${pkgPath}/package.json`);
};

"use strict";

const include = require("../../lib/include");
const html = include("eslint-plugin-html");

if (html) {
    // Rules from eslint-plugin-html
    module.exports = {
        "plugins": ["html"],
        "settings": {
            // Consider files ending with these extensions as HTML
            // "html/html-extensions": [],
            // Consider files ending with these extensions as XML
            // "html/xml-extensions": [],
            // Ensure that every script tags follow an uniform indentation
            "html/indent": "+4",
            // By default, this plugin won't warn if it encounters a problematic indentation, use in conjunction with the indent rule
            "html/report-bad-indent": 1
            // Customize the types that should be considered as JavaScript by providing one or multiple MIME types. If a MIME type starts with a /, it will be considered as RegExp
            // "html/javascript-mime-types": []
        }
    };
}

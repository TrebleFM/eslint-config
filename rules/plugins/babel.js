// Rules from eslint-plugin-babel
module.exports = {
    "parser": "babel-eslint",
    "plugins": ["babel"],
    "rules": {
        // Ignores capitalized decorators (@Decorator)
        "babel/new-cap": 0,
        // Doesn't complain about export x from "mod"; or export * as x from "mod";
        "babel/object-curly-spacing": 0,
        // Doesn't fail when inside class properties ( `class A { a = this.b; }` )
        "babel/no-invalid-this": 0,
        // Includes class properties
        "babel/semi": 2
    }
};

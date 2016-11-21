// Rules from eslint-plugin-babel
module.exports = {
    "rules": {
        // Ignores capitalized decorators (@Decorator)
        "babel/new-cap": 0,
        // Doesn't complain about export x from "mod"; or export * as x from "mod";
        "babel/object-curly-spacing": 0,
        // Guard against awaiting async functions inside of a loop
        "babel/no-await-in-loop": 0,
        // Require a particular separator between properties in Flow object types
        "babel/flow-object-type": 0,
        // Doesn't fail when inside class properties ( `class A { a = this.b; }` )
        "babel/no-invalid-this": 0
    }
};

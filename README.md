# @treblefm/eslint-config

Shared ESLint config for Treble.fm

## Quick Install

(Copy/paste into your terminal)
```sh
npm install --save-dev \
  @treblefm/eslint-config \
  eslint@4 \
  eslint-plugin-import@2 \
  eslint-plugin-node@5
```

## Dependencies

This config requires the following peer dependencies:
- `eslint@4.x` (obviously)
- `eslint-plugin-import@2.x`
- `eslint-plugin-node@5.x`

Additionally, these optional peer dependencies will automatically be used if installed:
- `eslint-plugin-graphql@1.x` <sup>1</sup>
- `eslint-plugin-html@3.x`
- `eslint-plugin-react@7.x` <sup>2</sup>
- `eslint-plugin-react-native@3.x` <sup>3</sup>
- `eslint-plugin-typescript@0.8.x` <sup>4</sup>
- `typescript@2.5.x` <sup>4</sup>
- `typescript-eslint-parser@8` <sup>4</sup>

<sub>
1: See additional notes below<br />
2: JSX parsing and related rules are only enabled in the React Native and TypeScript configs<br />
3: Required by the React Native config<br />
4: Required by the TypeScript config
</sub>

-------------------

## Usage

By default, this config assumes a Node.js project with ES2017 syntax (though unsupported features will be reported as errors by `eslint-plugin-node`):
```json5
{
  "extends": "@treblefm"
}
```

Browser (ES6):
```json5
{
  "extends": "@treblefm/eslint-config/browser"
}
```

React Native:
```json5
{
  "extends": "@treblefm/eslint-config/react-native"
}
```

TypeScript support can be added to any of the above configs:
```json5
{
  "extends": [
    "@treblefm",
    "@treblefm/eslint-config/typescript"
  ]
}
```

-------------------

## Note about GraphQL

While GraphQL is supported, the rules are disabled by default and some configuration is required ([click here for more info](https://github.com/apollographql/eslint-plugin-graphql)).

[`.graphqlconfig`](https://github.com/graphcool/graphql-config)
```json5
{
  "schemaPath": "./path/to/schema.json"
}
```

`.eslintrc`
```json5
{
  "extends": "@treblefm",
  "rules": {
    "graphql/template-strings": [2, {
      "env": "apollo",
      // "validators": [/* see GraphQL's `specifiedRules` */]
    }],
    "graphql/named-operations": [2, {
      "env": "apollo"
    }],
    "graphql/required-fields": [2, {
      "env": "apollo",
      "requiredFields": ["id"]
    }],
    "graphql/capitalized-type-name": [2, {
      "env": "apollo"
    }]
  }
}
```

# @treblefm/eslint-config

Shared ESLint config for Treble.fm

## Install

```
$ npm install @treblefm/eslint-config --save-dev
```

You must also `npm install` the following peer dependencies:
- `eslint@4.x` (obviously)
- `babel-eslint@7.x`
- `eslint-plugin-babel@4.x`
- `eslint-plugin-flowtype@2.x`
- `eslint-plugin-graphql@1.x`
- `eslint-plugin-node@5.x`

The browser configs additionally require:
- `eslint-plugin-html@3.x`

The React configs additionally require:
- `eslint-plugin-react@7.x`
- `eslint-plugin-react-native@3.x`

The TypeScript config additionally requires:
- `eslint-plugin-typescript@0.7.x`
- `typescript-eslint-parser@7.x`
- `typescript@2.4.x`

By default, this config assumes a Node.js project using Babel and Flowtype.

## Usage

`.eslintrc`
```json
{
  "extends": "@treblefm"
}
```

For Mocha tests
```json
{
  "extends": "@treblefm/eslint-config/test"
}
```

### GraphQL

While this config provides support for GraphQL in all rulesets, the rules are disabled by default and some configuration is required.

[`.graphqlconfig`](https://github.com/graphcool/graphql-config)
```json
{
  "schemaPath": "./path/to/schema.json"
}
```

Example `.eslintrc`
```json
{
  "extends": "@treblefm",
  "rules": {
    "graphql/template-strings": [2, {
      env: "apollo",
      // validators: [/* see GraphQL's `specifiedRules` */]
    }],
    "graphql/named-operations": [2, {
      env: "apollo"
    }],
    "graphql/required-fields": [2, {
      env: "apollo",
      requiredFields: ["id"]
    }],
    "graphql/capitalized-type-name": [2, {
      env: "apollo"
    }]
  }
}
```

### Browsers

For browsers (ES5)
```json
{
  "extends": "@treblefm/eslint-config/browser"
}
```

For browsers via Babel
```json
{
  "extends": "@treblefm/eslint-config/browser-babel"
}
```

### React

For server-side React
```json
{
  "extends": "@treblefm/eslint-config/react"
}
```

For client-side React via Babel
```json
{
  "extends": "@treblefm/eslint-config/browser-react"
}
```

### TypeScript ([experimental](https://github.com/eslint/typescript-eslint-parser))

For TypeScript
```json
{
  "extends": "@treblefm/eslint-config/typescript"
}
```

For browsers via TypeScript
```json
{
  "extends": "@treblefm/eslint-config/typescript-browser"
}
```

For server-side React via TypeScript
```json
{
  "extends": "@treblefm/eslint-config/typescript-react"
}
```

For client-side React via TypeScript
```json
{
  "extends": "@treblefm/eslint-config/typescript-browser-react"
}
```

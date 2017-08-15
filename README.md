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
- `eslint-plugin-node@5.x`

The browser configs additionally require:
- `eslint-plugin-html@3.x`

The React configs additionally require:
- `eslint-plugin-react@7.x`
- `eslint-plugin-react-native@3.x`

The TypeScript config additionally requires:
- `eslint-plugin-typescript@0.5.x`
- `typescript-eslint-parser@5.x`
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
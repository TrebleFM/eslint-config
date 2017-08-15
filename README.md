# @treblefm/eslint-config
Shared ESLint config for Treble.fm

### Install
```
$ npm install @treblefm/eslint-config --save-dev
```

You must also `npm install` the following peer dependencies:
- `eslint@4.x` (obviously)
- `babel-eslint@7.x`
- `eslint-plugin-babel@4.x`
- `eslint-plugin-flowtype@2.x`
- `eslint-plugin-node@5.x`

The browser config additionally requires:
- `eslint-plugin-html@3.x`

### Usage
`.eslintrc`
```json
{
  "extends": "@treblefm"
}
```

`.eslintrc` for Mocha tests
```json
{
  "extends": "@treblefm/eslint-config/test"
}
```

`.eslintrc` for browsers
```json
{
  "extends": "@treblefm/eslint-config/browser"
}
```

`.eslintrc` for browsers via Babel
```json
{
  "extends": "@treblefm/eslint-config/browser-babel"
}
```

`.eslintrc` for TypeScript ([experimental](https://github.com/eslint/typescript-eslint-parser))
```json
{
  "extends": "@treblefm/eslint-config/typescript"
}
```

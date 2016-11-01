# @treblefm/eslint-config
Shared ESLint config for Treble.fm

### Install
```
$ npm install @treblefm/eslint-config --save-dev
```

You must also `npm install` the following peer dependencies:
- `eslint@3.x` (obviously)
- `babel-eslint@7.x`
- `eslint-plugin-babel@3.x`

The browser config additionally requires:
- `eslint-plugin-html@1.x`

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

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [ "airbnb-typescript" ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    "@typescript-eslint/no-dupe-class-members": 0
  }
}

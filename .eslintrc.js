module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [ "airbnb-typescript" ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: [ "jsx" ]
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    "@typescript-eslint/no-dupe-class-members": 0
  },
  settings:  {
    react:  {
      version:  'detect'
    }
  }
}

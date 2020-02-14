module.exports = {
	parser: "@typescript-eslint/parser",
  extends: [ "plugin:@typescript-eslint/recommended", "plugin:react/recommended", "plugin:prettier/recommended" ],
  plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y"],
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: "module",
		ecmaFeatures: [ "jsx" ]
	},
	rules: {
		"@typescript-eslint/no-empty-function": 0,
		"@typescript-eslint/no-use-before-define": 0,
		"@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-var-requires": 0,
		"react/prop-types": 0,
		"no-console": 2,
		"react-hooks/rules-of-hooks": 2,
		"react-hooks/exhaustive-deps": 1,
		"jsx-a11y/rule-name": 1
  },
  settings:  {
    react:  {
      version:  'detect'
    }
  }
}

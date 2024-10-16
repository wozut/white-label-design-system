import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import tseslintParser from '@typescript-eslint/parser'

export default tseslint.config(
  { ignores: ['dist', '.storybook'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.strictTypeChecked, ...tseslint.configs.stylisticTypeChecked],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslintParser,
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.app.json", "./tsconfig.lib.json", "./tsconfig.node.json"]
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "eqeqeq": "error",
      "prefer-arrow-callback": "error",
      "prefer-template": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/require-await": "warn",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/restrict-plus-operands": ["error", {
        "allowAny": false,
        "allowBoolean": false,
        "allowNullish": false,
        "allowNumberAndString": false,
        "allowRegExp": false,
      }],
      "@typescript-eslint/restrict-template-expressions": "warn",
      "@typescript-eslint/strict-boolean-expressions": ["error", {
        "allowNumber": false,
        "allowString": false,
      }],
      "@typescript-eslint/use-unknown-in-catch-callback-variable": "error",
    },
  },
)

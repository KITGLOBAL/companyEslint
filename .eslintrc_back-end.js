{
  "env": {
    "browser": false,
    "es2021": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint", "import", "unused-imports"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended"
  ],
  "rules": {
    "quotes": ["warn", "single"],
    "semi": ["error", "always"],
    "eqeqeq": "off",
    "constructor-super": "error",
    "no-cond-assign": "error",
    "no-constant-binary-expression": "warn",
    "no-constant-condition": "warn",
    "no-irregular-whitespace": "warn",
    "no-this-before-super": "warn",
    "func-style": [
      "error",
      "declaration",
      {
        "allowArrowFunctions": true
      }
    ],
    "max-classes-per-file": "off",
    "no-else-return": "warn",
    "no-return-await": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-console": [
      "warn",
      {
        "allow": ["warn", "error"]
      }
    ],
    "prefer-const": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "alphabetize": { "order": "asc", "caseInsensitive": true },
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type"
        ]
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "typescript": true,
      "node": true
    }
  }
}

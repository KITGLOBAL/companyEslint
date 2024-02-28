module.exports = {
  env: {
    jest: true,
  },
  plugins: ['import', '@typescript-eslint', 'prettier', 'prefer-arrow'],
  extends: [
    '@react-native-community',
    'prettier',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    JSX: true,
    TS: true,
    TSX: true,
  },
  ignorePatterns: ['Pods/', 'acceptableUsePolicy.ts'],
  parser: '@typescript-eslint/parser',
  root: true,
  rules: {
    'react/no-unstable-nested-components': [
      'off',
      {
        allowAsProps: false,
      },
    ],
    'no-empty': 'off',
    'no-unused-vars': 'off',
    'no-empty-function': 'off',
    'import/no-unresolved': 'off',
    'import/no-duplicates': 'off',
    'import/named': 'off',
    'no-extra-boolean-cast': 'off',
    'no-empty-pattern': 'off',

    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',

    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-empty-function': 'off',

    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-shadow': 'error',
    'jest/no-disabled-tests': 'off',
    'no-shadow': 'off',
    'no-var': 'error',
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        classPropertiesAllowed: false,
        disallowPrototype: true,
        singleReturnOnly: false,
      },
    ],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react-native/no-inline-styles': 'error',
    'react/self-closing-comp': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'multiline-ternary': ['error', 'always-multiline'],
    'no-nested-ternary': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        alphabetize: {
          order: 'asc',
          orderImportKind: 'asc',
          caseInsensitive: true,
        },

        pathGroups: [
          {
            pattern: 'react{,-native}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@assets{,/**}',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/app{,/**}',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/widgets{,/**}',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/features{,/**}',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/entities{,/**}',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/shared{,/**}',
            group: 'internal',
            position: 'after',
          },
        ],

        pathGroupsExcludedImportTypes: ['react{,-native}'],

        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
}

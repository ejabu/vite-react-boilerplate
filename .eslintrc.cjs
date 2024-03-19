module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  plugins: ['react', '@typescript-eslint', 'promise', 'sonarjs'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  overrides: [],
  ignorePatterns: ['dist', 'config', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: '.',
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/destructuring-assignment': [1],
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'sonarjs/prefer-immediate-return': 'off',
    'sonarjs/no-gratuitous-expressions': 'warn',
    'no-constant-condition': 'warn',
    'no-console': 'warn',
    'no-return-await': 'error',
    'newline-after-var': ['error', 'always'],
    'newline-before-return': 'error',
    'no-implicit-coercion': [
      'error',
      {
        boolean: false,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsFor: ['draft'],
        ignorePropertyModificationsForRegex: ['Draft$'],
        props: true,
      },
    ],
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    '@typescript-eslint/require-await': 'off',
    'no-await-in-loop': 'off',
    'promise/prefer-await-to-then': 'warn',
    "@typescript-eslint/no-floating-promises": ["error"],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-key': ['error'],
    'react/self-closing-comp': ['error'],
    'unicorn/numeric-separators-style': [
      'error',
      {
        number: {
          groupLength: 3,
          minimumDigits: 0,
        },
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['PascalCase'],
        selector: ['interface'],
      },
      {
        selector: ['variable', 'function'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: ['variable'],
        format: ['PascalCase'],
        types: ['boolean'],
        prefix: ['is', 'has', 'are', 'can', 'should', 'did', 'will'],
      },
      {
        selector: ['variable'],
        format: ['camelCase'],
        types: ['array'],
        suffix: ['s'],
      },
      {
        selector: ['enum', 'enumMember'],
        format: ['PascalCase'],
      },
      {
        custom: {
          match: true,
          regex: '^[TI][A-Z]',
        },
        format: ['PascalCase'],
        selector: ['typeAlias'],
      },
    ],
  },
  settings: {
    react: {
      version: '17.0.2',
    },
  },
};

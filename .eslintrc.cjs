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
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': ['warn'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['PascalCase'],
        selector: ['interface', 'typeAlias'],
      },
      {
        selector: ['variable', 'function'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
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
    ],
    'sonarjs/prefer-immediate-return': 'off',
    'sonarjs/no-gratuitous-expressions': 'warn',
    'class-methods-use-this': 'off',
    'no-constant-condition': 'warn',
    'no-console': 'warn',
    'no-return-await': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: 'return' },
    ],
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
    'no-await-in-loop': 'off',
    'promise/prefer-await-to-then': 'warn',
    'unicorn/prevent-abbreviations': 'off',
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
          onlyIfContainsSeparator: false,
          groupLength: 3,
          minimumDigits: 6,
        },
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: ['^FOOBAR\\.js$', '^(B|b)az', '.tsx$', /^vendor/i],
      },
    ],
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'unicorn/consistent-function-scoping': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: '17.0.2',
    },
  },
};

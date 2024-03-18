module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.node.json'],
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2024,
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true,
      jsx: true,
    },
    extraFileExtensions: ['.vue'],
  },
  ignorePatterns: ['node_modules', 'dist', '**/*.html', '**/*.[cm]js'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    // common
    'newline-per-chained-call': 'off',
    'require-await': 'warn',
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 0,
      maxBOF: 0,
    }],
    // vue
    'vue/multi-word-component-names': 'off',
    // import
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/newline-after-import': ['error'],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'unknown'],
        pathGroups: [
          {
            pattern: 'vue',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'vue'],
      },
    ],
    // typescript
    '@typescript-eslint/member-delimiter-style': 'warn',
    '@typescript-eslint/no-misused-promises': [
      'warn',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        ignoredNodes: ['PropertyDefinition', 'TSTypeParameterInstantiation'],
        SwitchCase: 1,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports',
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'no-undef': 'off',
        'vue/no-v-html': 'off',
        'vue/component-name-in-template-casing': [
          'error',
          'PascalCase',
          {
            registeredComponentsOnly: false,
          },
        ],
        'max-len': [
          'error',
          {
            code: 120,
            tabWidth: 2,
            ignoreStrings: true,
            ignoreUrls: true,
            ignoreRegExpLiterals: true,
            ignoreTemplateLiterals: true,
            ignorePattern: 'd="([\\s\\S]*?)"',
          },
        ],
        'vue/max-len': [
          'error',
          {
            code: 120,
            template: 120,
            tabWidth: 2,
            ignoreHTMLAttributeValues: true,
          },
        ],
        'vue/max-attributes-per-line': ['error', {
          singleline: {
            max: 1,
          },
          multiline: {
            max: 1,
          },
        }],
        'vue/first-attribute-linebreak': ['error', {
          singleline: 'beside',
          multiline: 'below',
        }],
        'vue/padding-line-between-blocks': ['error'],
        "vue/block-order": ["error", {
          "order": [ "script", "template", "style" ]
        }],
      },
    },
  ],
};

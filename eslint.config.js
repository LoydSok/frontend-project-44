import stylistic from '@stylistic/eslint-plugin';
import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node, // Это разрешает использование console, process и т.д.
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
module.exports = {
  root: false,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  plugins: ['prettier', 'react-hooks', 'simple-import-sort', '@typescript-eslint', 'react-native'],
  extends: [
    'prettier',
    'plugin:prettier/recommended', // Make sure this is always the last element in the array.
  ],
  rules: {
    'prettier/prettier': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    'react-hooks/exhaustive-deps': 'warn', // temporary warning, will be error soon
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'react-native/no-inline-styles': 'warn',
  },
};

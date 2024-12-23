module.exports = {
  extends: ['next', 'eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  settings: {
    next: {
      rootDir: 'apps/next/',
    },
  },
  root: true,
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'off',
    'no-console': 'warn',
  },
  overrides: [
    {
      files: ['./**/*.ts', './**/*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
      },
    },
  ],
}

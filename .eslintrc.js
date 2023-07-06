module.exports = {
  env: {
      browser: true,
      es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  parserOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      ecmaFeatures: {
          jsx: true,
      },
  },
  rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts'] }],
  },
  plugins: ['prettier', 'react'],
};
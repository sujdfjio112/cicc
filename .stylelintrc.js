export default {
  rules: {
    'no-console': 'error',
    'no-unused-vars': 'warn',
    'semi': 'error'
  },
  'extends': 'eslint:recommended',
  'env': {
    'browser': true,
    'es6': true
  }, 
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
};

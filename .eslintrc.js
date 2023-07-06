export default {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    // 指定要使用的规则
    "no-console": "error",
    "no-unused-vars": "warn",
    "semi": "error"
  }
};
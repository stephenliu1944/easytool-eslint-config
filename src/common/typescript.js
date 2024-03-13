module.exports = {
  extends: [require.resolve('./es'), 'plugin:@typescript-eslint/recommended'],
  // ts解析器
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/ban-types': 'off',          // 使用指定的类型
    '@typescript-eslint/no-empty-function': 'off',  // 函数定义中存在空语句块
    '@typescript-eslint/no-explicit-any': 'off',    // 使用 any 类型
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 在模块中使用显式的类型声明
    '@typescript-eslint/no-unused-vars': 'off',     // 未使用的变量
    '@typescript-eslint/ban-ts-comment': 'off',     // 使用ts注释
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-shadow': 'off'           // 禁止变量声明覆盖外层作用域的变量
  }
};
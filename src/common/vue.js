module.exports = {
  extends: [require.resolve('./es'), 'plugin:vue/recommended'],
  // vue解析器
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    // js 类型用 @babel/eslint-parser 解析, 解决 export default from 报错问题.
    sourceType: 'module',
    parser: '@babel/eslint-parser'
  },
  // plugins: ['vue'],
  rules: { 
    /* Vue */
    'vue/no-mutating-props': 'off', // 禁止修改 props
    'vue/require-default-prop': 'off', // 禁止缺少 default 属性
    'vue/require-prop-types': 'off', // 禁止缺少 propTypes
    'vue/order-in-components': 'off', // 组件内的 prop 必须按照顺序排列
    'vue/prop-name-casing': 'off', // 属性名称必须使用驼峰式命名
    'vue/no-v-html': 'off', // 禁止使用 v-html
    'vue/no-template-shadow': 'off', // 禁止使用模板字符串中的变量
    'vue/max-attributes-per-line': 'off', // 禁止单行上的属性数量超过最大值
    'vue/html-self-closing': 'off', // 禁止自闭和标签
    'vue/component-definition-name-casing': 'off', // 组件名称必须使用驼峰式命名
    'vue/comment-directive': 'off', // 禁止使用注释指令
    'vue/no-unused-components': 'off'
  }
};
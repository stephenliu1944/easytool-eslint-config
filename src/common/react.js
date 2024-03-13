module.exports = {
  // react解析器
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6, // ECMAScript 版本
    sourceType: 'module', // 'script'(默认) ｜ 'module' (ECMAScript 模块)
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  extends: [require.resolve('./es'), 'plugin:react/recommended'],
  plugins: ['react-hooks', 'react'],
  rules: {
    /* React */
    'jsx-quotes': 'error',                    // 引号规则
    'react/no-deprecated': 'error',           // 使用 React 旧版语法
    'react/no-find-dom-node': 'error',        // 使用 findDOMNode
    'react/no-is-mounted': 'error',           // 使用 isMounted
    'react/no-string-refs': 'error',          // 使用字符串作为ref
    'react/prefer-es6-class': 'error',        // 使用es5类
    'react/jsx-uses-vars': 'warn',            // 在 JSX 中使用变量
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],      // 'tag-aligned' 在(<H情况下, >关闭标签无法对齐, 可能会导致webpack持续刷新
    // 'react/jsx-closing-tag-location': 'error',                         // 可能出现 TS2322 错误(antd-mobile > <Modal>), 导致webpack持续刷新.
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
    'react/jsx-wrap-multilines': ['error'],   // 禁止多行 JSX 的变量声明和赋值
    'react/prop-types': 'off',                // 使用 prop-types
    'react/react-in-jsx-scope': 'off',        // 使用 React 旧版语法
    'react/display-name': 'off',
    'react/no-array-index-key': 'off',        // 使用数组索引作为 key
    /* Hooks */
    'react-hooks/rules-of-hooks': 'error'     // 检查 Hook 的规则
    // 'react-hooks/exhaustive-deps': 'warn',
  }
};
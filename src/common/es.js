module.exports = {
  env: {
    es6: true, // 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
    browser: true, // 浏览器环境中的全局变量
    commonjs: true, // CommonJS 全局变量和 CommonJS 作用域 (用于 Browserify/WebPack 打包的只在浏览器中运行的代码)
    node: true // Node.js 全局变量和 Node.js 作用域
    // shared-node-browser, //  Node.js 和 Browser 通用全局变量
    // worker: true, // Web Workers 全局变量
    // amd: true, // 将 require() 和 define() 定义为像 amd 一样的全局变量
    // jquery: true, // jQuery 全局变量
    // mocha: true, // 测试环境中的全局变量
    // jasmine: true,
    // jest: true,
  },
  extends: ['eslint:recommended'],
  plugins: ['simple-import-sort'],
  rules: {
    'no-cond-assign': 'error', // 禁止条件表达式中出现赋值操作符
    'no-constant-condition': 'error', // 禁止在条件中使用常量表达式
    'no-dupe-args': 'error', // 禁止在 function 定义中出现重复的参数
    'no-dupe-keys': 'error', // 禁止在对象字面量中出现重复的 key
    'no-duplicate-case': 'error', // 禁止重复的 case 标签
    'no-duplicate-imports': 'error',  // 禁止重复import文件
    'no-empty-character-class': 'error', // 禁止在正则表达式中使用空字符集
    'no-empty': 'error',      // 禁止出现空语句块
    'no-ex-assign': 'error', // 禁止对 catch 子句的参数重新赋值
    'no-extra-boolean-cast': 'error', // 禁止不必要的布尔转换
    'no-extra-semi': 'error', // 禁止多余的分号
    'no-func-assign': 'error', // 禁止对 function 声明重新赋值
    'no-inner-declarations': 'error', // 禁止在嵌套的块中出现变量声明或 function 声明
    'no-invalid-regexp': 'error', //  禁止RegExp 构造函数中存在无效的正则表达式字符串
    'no-irregular-whitespace': 'error', // 禁止在字符串和注释之外不规则的空白
    'no-obj-calls': 'error', // 禁止把全局对象作为函数调用
    'no-regex-spaces': 'error', // 禁止在正则表达式字面量中使用多个空格 /foo bar/
    'no-sparse-arrays': 'error', // 禁止稀疏数组， [1,,2]
    'no-unexpected-multiline': 'error', // 禁止出现令人困惑的多行表达式
    'no-unreachable': 'warn', // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
    'no-unsafe-finally': 'error', // 禁止在 finally 语句块中出现控制流语句
    'no-caller': 'error', // 禁止使用 arguments.caller 或 arguments.callee
    'no-case-declarations': 'warn', // 禁止在 case 子句中使用词法声明变量
    'no-else-return': 'error', //  禁止if 语句中 return 语句之后出现 else 块
    'no-empty-pattern': 'error', // 禁止使用空解构模式
    'no-redeclare': 'error', // 禁止多次声明同一变量
    'no-delete-var': 'error', //  禁止delete 对变量使用
    'no-lonely-if': 'error', //  禁止if 语句中存在不会被执行的 else 块
    'no-self-assign': 'error', // 禁止自我赋值
    'no-multi-spaces': ['error', { 'ignoreEOLComments': true }], // 禁止使用多个空格
    'no-multiple-empty-lines': ['error', { 'max': 1 }], // 禁止出现多行空行
    'no-debugger': 'error',
    'no-alert': 'error',
    'no-eval': 'error',
    'no-trailing-spaces': 'error', // 禁止行尾空格
    'no-console': ['error', { 'allow': ['error'] }],  // 使用 console
    'accessor-pairs': 'error', // 在对象中使用属性名和属性值之间有空格
    'arrow-spacing': 'error', // 箭头函数的箭头前后有空格
    'array-bracket-spacing': ['error', 'never'], // 在数组中使用空格
    'comma-dangle': ['warn', 'always-multiline'], // 对象字面量中最后一个逗号
    'comma-spacing': 'error', // 在逗号前后有空格
    'comma-style': 'error', // 使用逗号操作符
    'curly': 'error', // 使用单行表达式
    'eqeqeq': 'error', // 使用等于号，必须使用全等    
    'indent': ['error', 2, { 'SwitchCase': 1, 'MemberExpression': 1, 'ignoredNodes': ['TemplateLiteral', 'JSXElement', 'JSXElement *'] }],  // 在模板字符串中使用tab缩进
    'key-spacing': 'error', // 在对象字面量中使用空格
    'keyword-spacing': 'error', // 使用关键字前后有空格
    'max-classes-per-file': 1, // 类的数量限制
    'max-statements-per-line': ['error', { 'max': 1 }], // 禁止一行有多个语句
    'object-curly-spacing': ['error', 'always'], // 在对象字面量中使用空格
    'quotes': ['error', 'single'], // 使用引号
    'radix': 'error', // 使用parseInt()时使用前缀和基数
    'semi': 'error', // 强制使用分号
    'semi-spacing': 'error', // 在语句末尾加分号
    'space-before-blocks': ['error', 'always'], // 在代码块前使用空格
    'space-before-function-paren': ['error', 'never'], // 在函数定义时使用空格
    'space-in-parens': 'error', // 在括号中使用空格
    'space-infix-ops': 'error', // 在 boolean 表达式中使用空格
    'space-unary-ops': ['error', { 'words': true, 'nonwords': false }], // 在一元操作符前后有空格
    'use-isnan': 'error', // 比较时使用NaN，只能用isNaN()
    'valid-typeof': 'error', // 对void 0 进行比较    
    'simple-import-sort/imports': ['error', { // 导入排序
      'groups': [[
        // Side effect imports.
        '^\\u0000', 
        // 图片,字体,资源文件
        '^.+\\.(bmp|png|jpg|jpeg|gif|svg|pdf|woff|woff2|eot|ttf|json)$',
        // 样式文件
        '^.+\\.(c|sc|sa|le)ss$',
        // 第三方包
        // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
        '^@?\\w', 
        // 未匹配到的包
        '^',
        /**
         * 内部包 
         */ 
        // @/xxx
        '^@\\/',
        // Component/xxx 
        '^(Components|Config|Constants|Contexts|Fonts|Hooks|Images|Layouts|Pages|Public|Services|Styles|Utils)(/.*|$)',
        // ./xxx或../xxx
        '^\\.'
      ]]
    }],
    'simple-import-sort/exports': 'error',  // 导出排序
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-prototype-builtins': 'off',         // 使用指定的类型
    'no-param-reassign': 'off',             // 禁止对函数参数进行重新赋值
    'no-shadow': 'off'                      // 禁止变量声明覆盖外层作用域的变量
  }
};
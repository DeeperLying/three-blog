/*
 * @Author: Lee
 * @Date: 2022-12-03 22:23:36
 * @LastEditTime: 2023-06-23 18:40:20
 * @LastEditors: Lee
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  overrides: [],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  /*
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    // semi: 2, // 行末分号，根据编码习惯选择添加，这里配置的加分号
    'no-console': 1, // 禁用 console
    'comma-dangle': [2, 'never'], // 对象字面量项尾不能有逗号(always-multiline是有逗号)
    'max-len': 0, // 强制一行的最大长度，可以是[1, 200]限制长度
    'max-lines': 0, // 强制最大行数
    'max-params': 0, // 强制 function 定义中最多允许的参数数量，可以用[1, 7]限制数量
    'max-statements': 0, // 强制 function 块最多允许的的语句数量，可以用[1, 200]限制数量
    'max-statements-per-line': 0, // 强制每一行中所允许的最大语句数量
    'space-before-function-paren': [0, 'always'], // 强制在 function的左括号之前使用一致的空格
    'no-param-reassign': 1, // 不允许对 function 的参数进行重新赋值
    camelcase: 0, // 强制驼峰法命名
    'no-const-assign': 2, // 禁止修改const声明的变量
    'no-unused-vars': [1, { vars: 'all', args: 'after-used' }], // 不能有声明后未被使用的变量或参数
    'no-underscore-dangle': 0, // 标识符不能以_开头或结尾
    'no-alert': 2, // 禁止使用alert confirm prompt
    'no-lone-blocks': 0, // 禁止不必要的嵌套块
    'no-class-assign': 2, // 禁止给类赋值
    'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
    'no-delete-var': 2, // 不能对var声明的变量使用delete操作符
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复
    'no-duplicate-case': 2, // switch中的case标签不能重复
    'no-dupe-args': 2, // 函数参数不能重复
    'no-empty': 2, // 块语句中的内容不能为空
    'no-func-assign': 2, // 禁止重复的函数声明
    'no-invalid-this': 0, // 禁止无效的this，只能用在构造器，类，对象字面量
    'no-redeclare': 2, // 禁止重复声明变量
    'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
    'no-this-before-super': 0, // 在调用super()之前不能使用this或super
    'no-undef': 0, // 不能有未定义的变量
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-empty-interface': 1,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/camelcase': ['off', { properties: 'always' }], // 强制驼峰法命名（ts）
    '@typescript-eslint/no-use-before-define': 1,
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/no-var-requires': 0,
    'react-hooks/rules-of-hooks': 'error', // 非react组件中使用hooks语法这样的语法错误
    'react-hooks/exhaustive-deps': 'warn',
    'no-debugger': 1
  }
}

# @easytool/eslint-config
通用eslint配置文件.

## Install
```sh
yarn add -D @easytool/eslint-config
```

## Usage
### JavaScript 项目
#### 生产环境
```js
module.exports = {
  extends: ['@easytool/eslint-config/es']
}
```
#### 开发环境
```js
module.exports = {
  extends: ['@easytool/eslint-config/es-dev']
}
```

### Typescript 项目
#### 生产环境
```js
module.exports = {
  extends: ['@easytool/eslint-config/typescript']
}
```
#### 开发环境
```js
module.exports = {
  extends: ['@easytool/eslint-config/typescript-dev']
}
```

### React 项目
#### 生产环境
```js
module.exports = {
  extends: ['@easytool/eslint-config/react']
}
```
#### 开发环境
```js
module.exports = {
  extends: ['@easytool/eslint-config/react-dev']
}
```

### React + Typescript 项目
#### 生产环境
```js
module.exports = {
  extends: ['@easytool/eslint-config']
}
```
#### 开发环境
```js
module.exports = {
  extends: ['@easytool/eslint-config/dev']
}
```

### Vue 项目
#### 生产环境
```js
module.exports = {
  extends: ['@easytool/eslint-config/vue']
}
```
#### 开发环境
```js
module.exports = {
  extends: ['@easytool/eslint-config/vue-dev']
}
```
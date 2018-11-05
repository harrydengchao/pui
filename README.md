# pui
一个简单的，兼容IE6的UI，依赖jQuery

---

## 须知

- 依赖 `jQuery >= 1.7`
- 兼容 `IE6`

---

## development

- 需要 `node` 环境支持
- 环境安装：`npm install -g fis3 fis3-hook-commonjs fis-parser-node-sass`
- 预处理器：`npm install -g fis3-preprocessor-js-require-file fis3-preprocessor-js-require-css fis3-preprocessor-autoprefixer fis3-postpackager-loader`
- 适配单位转换：`npm install -g fis-postprocessor-px2rem`
- 对产出的文件做文件替换：`npm install -g fis3-deploy-replace`
- 进入项目根目录下，执行 `npm install`
- 执行开发环境构建与实时监听，打开控制台一，执行 `npm run build-dev`
- 预览项目，打开控制台二，执行 `npm run dev-server`
- 构建生产包，执行 `npm run build`
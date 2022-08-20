# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### also use "craco" package to revise project's setting
#### use craco to 文件资源引入起别名
- if you use CRA5 ,then you should npm i @craco/craco@alpha -D
- else you can npm i @craco/craco -D
1. 根目录创建craco.config.js文件
2. 添加如下配置  
- const path = require('path')
- module.exports = {
-  // webpack 配置
-  webpack: {
-    // 配置别名
-    alias: {
-      // 约定：使用 @ 表示 src 文件所在路径
-      '@': path.resolve(__dirname, 'src')
-    }
-  }
- }

3. 修改package.json中的script属性
    "scripts": {
      "start": "craco start",
      "build": "craco build",
      "test": "craco test",
      "eject": "react-scripts eject"
    }
#### add jsconfig.json  to help VsCode Prompt for file path according to @(帮助vscode提根据@进行文件路径提示)
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

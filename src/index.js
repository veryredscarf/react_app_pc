import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 导入antd样式文件
import 'antd/dist/antd.min.css'
import App from './App';
// import "@/static/styles/index.scss"
import "@/static/styles/index.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

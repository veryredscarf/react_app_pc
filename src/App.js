import {BrowserRouter,Route,Routes} from "react-router-dom"



import './App.css';
import Login from "./pages/Login";
import Layout from "./pages/Layout";


function App() {
  return (

    // 路由配置
    <BrowserRouter>
      <div className="App">
        
        <Routes>  {/* 路由出口 */}
          {/* 创建路由对应关系 */}
          <Route path="/login" element={<Login></Login>} ></Route>
          <Route path="/" element={<Layout></Layout>} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

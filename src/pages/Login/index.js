import {Card} from "antd"
import loginImg from "@/static/img/logo.png"
import "./index.scss"
function Login(){
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={loginImg} alt=""/>
      </Card>
    </div>
  )
}




export default Login 
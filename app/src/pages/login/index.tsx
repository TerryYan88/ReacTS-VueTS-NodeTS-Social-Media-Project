import { useHistory } from "react-router";

import {LoginContainer} from "./style/Login";

const Login = ()=>{
    const {push} = useHistory();
    return (
        <LoginContainer>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lamasocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Lamasocial
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="email" placeholder="Email" className="loginInput"/>
                        <input type="password" placeholder="Password" className="loginInput"/>
                        <button className="loginButton"
                            onClick={()=>push("/")}
                        >Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton"
                            onClick={()=>push("/register")}
                        >Create a New Account</button>
                    </div>
                </div>
            </div>
        </LoginContainer>
    )
}

export default Login;
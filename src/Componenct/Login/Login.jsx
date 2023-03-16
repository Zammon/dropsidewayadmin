//React import
import React, { useEffect, useState } from "react";
//CSS import
import './Login.css'
//Axios import
import axios from "axios";
//Image import
import bglogin from '../../bg_login.jpg'
import { useContext } from "react";
import { AuthContext } from "../UseContexts/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const { setStatusAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const Login = async() => {
        await axios.post("https://localhost:7113/api/DropsidewayAdmin/Login",
        {
            "accout": username,
            "password": password
        })
        .then((data)=>{
            localStorage.setItem("token", JSON.stringify(data.data.token));
            localStorage.setItem("userId", JSON.stringify(data.data.userId));
            setStatusAuth(false);
            navigate('/');
        })
        .catch((error) => console.log(error))
    };

     useEffect(()=>{
        console.log(`username: ${username}`);
        console.log(`possword: ${password}`);
    },[username, password])
    
    // ***Return this page***
    return(
        <> 
            <div className="container-loginpage">
                <div className="area-loginpage">
                    <div className="title-loginpage">
                       DropSideWay <div className="title-text-loginpage">Admin Management </div>
                    </div>
                    <div className="details-loginpage">
                        This website is for management DropSideDown
                    </div>
                    <div className="area-input-loginpage">
                        <label className="label-loginpage">ID Admin or Name Admin</label>
                        <input className="input-loginpage" value={username} onChange={(e)=>{setUserName(e.target.value)}} />
                        <label className="label-loginpage" >Password</label>
                        <input className="input-loginpage" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                        <button className="button-loginpage" onClick={Login}>sign in</button>
                    </div>
                </div>
            </div>
        </>
    )
} 
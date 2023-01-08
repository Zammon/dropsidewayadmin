//React import
import React, { useEffect, useState } from "react";
//CSS import
import './Login.css'
//Axios import
import axios from "axios";
//Image import
import bglogin from '../../bg_login.jpg'


export default function Login(props) {
    // Disassemble of Props 
    const {login, status} = props;

    // useState: ID Admin + Password
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    // useState: 
    const [statusAccout, setStatusAccout] = useState();

    // useState: Alert! Please check id or password again
    const [statusAlert,setStatusAlert] = useState(true);

    // Get return from api accout
    // const CheckAccout = (error) =>{
    //    if(error===""){
    //         if((statusAccout && statusAccout.data.type!==null)&&(statusAccout && statusAccout.data.firstname!==null)&&(statusAccout && statusAccout.data.lastname!==null)){
    //             setStatusAlert(false);
    //             console.log(false);
    //         }else{
    //             setStatusAlert(true);
    //             console.log(true);
    //         }
    //    } else {
    //     setStatusAlert(false);
    //    }
    // }

    // Set API : 
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // [HTTPGet]
    const Accouts = async () => {
        const data = await axios.get(`https://localhost:7228/api/HomeAdmin/login/AdminLogin?accoutname=${username}&password=${password}`)
        .then(
            result => setStatusAccout(result)
        )
        // .catch(
        //     data => CheckAccout(data)
        // )
        
        console.log(`https://localhost:7228/api/HomeAdmin/login/AdminLogin?accoutname=${username}&password=${password}`);
    }
    // [HTTPPost]
    // [HTTPpPath]
    // [HTTPDelete]
    
    // useEffect: Console.log username, password
     useEffect(()=>{
        console.log(`username: ${username}`);
        console.log(`possword: ${password}`);
    },[username, password])
   
    // useEffect: Return values from API to "App.js"
    // useEffect(()=>{
    //     if((statusAccout && statusAccout.data.type!==null)
    //     &&(statusAccout && statusAccout.data.firstname!==null)
    //     &&(statusAccout && statusAccout.data.lastname!==null)){
    //         console.log(`check: ${true}`)
    //         login(statusAccout);
    //         status(true);
    //     } else {
    //         status(false);
    //     }
    // },[statusAccout])
    
    // ***Return this page***
    return(
        <> 
            <div className="container-loginpage">
                {/* Alert, ID + Password Something Wrong */}
                {statusAlert ? "":<div className="alert-loginpage">กรุณาตรวจสอบแอดมินไอดีกับรหัสผ่านใหม่! </div>}
                <div className="area-loginpage">
                    {/* Title Login */}
                    <div className="title-loginpage">
                       DropSideWay <div className="title-text-loginpage">Admin Management </div>
                    </div>
                    <div className="details-loginpage">
                        This website is for management DropSideDown
                    </div>
                    <div className="area-input-loginpage">
                        {/* ID Admin */}
                        <label className="label-loginpage">ID Admin or Name Admin</label>
                        <input className="input-loginpage" value={username} onChange={(e)=>{setUserName(e.target.value)}} placeholder="Please input your accoutname"/>
                        {/* Password */}
                        <label className="label-loginpage" >Password</label>
                        <input className="input-loginpage" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Please input your password"/>
                        {/* Button: Send API */}
                        <button className="button-loginpage">sign in</button>
                    </div>
                </div>
                {/* Background Loginpage */}
                <img className="bg-image-loginpage" src={bglogin}/>
            </div>
        </>
    )
} 
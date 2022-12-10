import React, { useEffect, useState } from "react";
import '../../CSS/Admincss/Login.css'
import axios from "axios";
import bglogin from '../../bg_login.jpg'
export default function Loginpage(props) {
    const {login, status} = props;
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [statusAccout, setStatusAccout] = useState(); 
    const [statusAlert,setStatusAlert] = useState(true);
    const calllogin = async () => {
        const data = await axios.get(`https://localhost:7228/api/HomeAdmin/login/AdminLogin?accoutname=${username}&password=${password}`)
        .then(result=>setStatusAccout(result))
        .catch(data=>checkaccout(data))
        
        console.log(`https://localhost:7228/api/HomeAdmin/login/AdminLogin?accoutname=${username}&password=${password}`);
    }

    const checkaccout = (error) =>{
       if(error===""){
            if((statusAccout && statusAccout.data.type!==null)&&(statusAccout && statusAccout.data.firstname!==null)&&(statusAccout && statusAccout.data.lastname!==null)){
                setStatusAlert(false);
                console.log(false);
            }else{
                setStatusAlert(true);
                console.log(true);
            }
       } else {
        setStatusAlert(false);
       }
    }

    useEffect(()=>{
        console.log(`username: ${username}`);
        console.log(`possword: ${password}`);
    },[username, password])
    
    useEffect(()=>{
        if((statusAccout && statusAccout.data.type!==null)&&(statusAccout && statusAccout.data.firstname!==null)&&(statusAccout && statusAccout.data.lastname!==null)){
            console.log(statusAccout.data.type)
            console.log(statusAccout.data.firstname)
            console.log(statusAccout.data.lastname)
            console.log(`check: ${true}`)
            login(statusAccout);
            status(true);
        } else {
            status(false);
        }
    },[statusAccout])

    return(
        <>  
            
            <div className="container-loginpage">
                {statusAlert ? "":<div className="alert-loginpage">กรุณาตรวจสอบแอดมินไอดีกับรหัสผ่านใหม่! </div>}
                <div className="area-loginpage">
                    <div className="title-loginpage">
                       DropSideWay <div className="title-text-loginpage">Admin Management </div>
                    </div>
                    <div className="details-loginpage">
                        This website is for management DropSideDown
                    </div>
                    <div className="area-input-loginpage">
                        <label className="label-loginpage">ID Admin or Name Admin</label>
                        <input className="input-loginpage" value={username} onChange={(e)=>{setUserName(e.target.value)}} placeholder="Please input your accoutname"/>
                        <label className="label-loginpage" >Password</label>
                        <input className="input-loginpage" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Please input your password"/>
                        <button className="button-loginpage" onClick={calllogin}>sign in</button>
                    </div>
                </div>
                <img className="bg-image-loginpage" src={bglogin}/>
            </div>
        </>
    )
} 
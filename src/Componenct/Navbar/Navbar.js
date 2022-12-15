//React import
import React, { useEffect, useState } from "react";
//CSS import
import './Navbar.css'
//React-Router-Dom import
import { Link } from "react-router-dom";
//Axios import
import axios from "axios";

//Component import
import MenuInNavbar from "../MenuInNavbar/MenuInNavbar";

export default function Navbar(props) {
    const [accout, setaccout] = useState();

    const Accouts = async () =>{
      const data = await axios.get("https://localhost:7228/api/HomeAdmin/login/AdminLogin?accoutname=staff01&password=123456")
      setaccout(data);
      console.log(`Data: ${data} and app.js runing`)
    }
    
    useEffect(()=>{
        Accouts();
    },[])

    return(
        <div className="container-main">
            <div className="container-navbar">
                <div className="area-logo-navbar">
                    DropSideWay Admin Management
                </div>
                <div className="area-menu-top-navbar">
                    <MenuInNavbar menu="Home" link="/" status={true} />
                    <MenuInNavbar menu="Create Post" link="/createpost" status={true}/>
                    <MenuInNavbar menu="Manage Post" link="/managepost" icon="" status={true}/>
                </div>
                <div className="area-menu-bottom-navbar">
                    <div className="area-menu-bottom">
                        <div className="container-menuinnavbar">
                            <div className="area-icon-logout-menuinnavbar">
                                <img className="images-full" src={accout && accout.data.profile} />
                            </div>
                            <Link className="link-set-default-navbar" to="/profile">
                                <div className="area-name-color-active-menuinnavbar area-name-color-none-active-menuinnavbar">
                                    {`${accout && accout.data.firstname} ${accout && accout.data.lastname}`}
                                </div>
                            </Link>
                        </div>
                        <MenuInNavbar menu="Manage Admin" link="/manageadmin" status={true} />
                        <MenuInNavbar menu="Logout" link="/login" /> 
                    </div>
                </div>
            </div>
            <div className="container-content">
                <div className="area-navbar-navbar">
                    <div className="area-rank-admin-navbar">
                        {`${accout && accout.data.type}`}
                    </div>
                    <div className="area-name-admin-navbar">
                        {`${accout && accout.data.firstname} ${accout && accout.data.lastname}`}
                    </div>
                    <div className="area-id-admin-navbar">
                        {`Admin ID : ${accout && accout.data.idAccout}`}
                    </div>
                </div>
                {props.children}  
            </div>
        </div>
    )
}
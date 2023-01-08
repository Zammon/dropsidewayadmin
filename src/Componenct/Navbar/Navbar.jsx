//React import
import React, { useEffect, useState } from "react";
//CSS import
import './Navbar.css'
//React-Router-Dom import
import { Link } from "react-router-dom";
//Axios import
import axios from "axios";
//Service API import
import { Accoutapi } from "../../Service/RequestAPI.service";

//Component import
import MenuInNavbar from "../MenuInNavbar/MenuInNavbar";

export default function Navbar(props) {
    const [accout, setaccout] = useState();
    const [statusadmin, setStatusAdmin] = useState(null);

    const Accouts = async () =>{
      const data = await axios.post("https://localhost:7113/api/DropsidewayAdmin/Login",
      {
        "accout": "test",
        "password": "test"
      }
      )
      setaccout(data);
    }
    
    useEffect(()=>{
        Accouts();
        
    },[])

    useEffect(()=>{
        if(accout&&accout.data.type === "Super Admin"){
            setStatusAdmin(true);
          } else if(accout&&accout.data.type === "Admin") {
             setStatusAdmin(false);
          }
    },[accout&&accout.data.type])

    return(
        <div className="container-main">
            <div className="container-navbar">
                <div className="area-logo-navbar">
                    DropSideWay Admin Management
                </div>
                <div className="area-menu-top-navbar">
                    <MenuInNavbar menu="หน้าหลัก" link="/" status={true} />
                    <MenuInNavbar menu="สร้างโพส" link="/createpost" status={true}/>
                    <MenuInNavbar menu="จัดการโพส" link="/managepost" icon="" status={true}/>
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
                        <MenuInNavbar menu="จัดการผู้ใช้" link="/manageadmin" status={true} />
                        <MenuInNavbar menu="ออกจากระบบ" link="/login" /> 
                    </div>
                </div>
            </div>
            <div style={{height: `${window.innerHeight-50}px!important`}} className="container-content">
                <div className="area-navbar-navbar">
                    <div className={`area-rank-admin-navbar default-admin-color-navbar ${statusadmin ? "superadmin-color-navbar":"admin-color-navbar"}`}>
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
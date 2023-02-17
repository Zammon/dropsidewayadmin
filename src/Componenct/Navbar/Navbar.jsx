import React, { useEffect, useState, useContext} from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../UseContexts/AuthContext';
import MenuInNavbar from "../MenuInNavbar/MenuInNavbar";

export default function Navbar(props) {
    const { userdetail } = useContext(AuthContext);
    const [colorType, setColorType] = useState("unknow-color-navprofile");
    const getDetailUser = () => {
        const data = axios.post("https://localhost:7113/api/DropsidewayAdmin/AccoutDetail", 
        {
           'idAccout': JSON.parse(localStorage.getItem("userId"))
        }, 
        {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })}

    useEffect(()=>{
        if(userdetail.type==="SuperAdmin"){
            setColorType("superadmin-color-navprofile");
        } else if (userdetail.type==="Admin"){
            setColorType("admin-color-navprofile");
        }
    },[userdetail.type])

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
                                <img className="images-full" src={userdetail.profile} alt=""/>
                            </div>
                            <Link className="link-set-default-navbar" to="/profile">
                                <div className="area-name-color-active-menuinnavbar area-name-color-none-active-menuinnavbar">
                                    {userdetail.name}
                                </div>
                            </Link>
                        </div>
                        <MenuInNavbar menu="จัดการผู้ใช้" link="/manageadmin" status={true} />
                        <MenuInNavbar menu="ออกจากระบบ" link="/login" /> 
                    </div>
                </div>
            </div>
            <div className="container-content">
                <div className="area-navbar-navbar">
                    <div className={`area-rank-admin-navbar ${colorType}`}>
                        {userdetail.type}
                    </div>
                    <div className="area-name-admin-navbar">
                        {userdetail.name}
                    </div>
                    <div className="area-id-admin-navbar">
                        {`Admin ID : ${userdetail.id}`}
                    </div>
                </div>
                {props.children} 
            </div>
        </div>
    )
}
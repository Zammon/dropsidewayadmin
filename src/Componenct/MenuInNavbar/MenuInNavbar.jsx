//React import
import React, { useContext, useEffect, useState } from "react";
//CSS import
import './MenuInNavbar.css'
//React-Router-Dom
import { NavLink, Link } from "react-router-dom";

//React-Icon import
import { AiFillHome } from 'react-icons/ai'
import { BsFillPlusSquareFill, BsFillGrid1X2Fill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { AuthContext } from "../../Contexts/AuthContext";

export default function MenuInNavbar(props) {
    const { menu, link, status } = props;
    const [statusLogout, setStatusLogout] = useState();
    const [icons, setIcons] = useState();
    const { statusAuth ,setStatusAuth } = useContext(AuthContext);
    const remove = () =>{
        if(statusAuth === false) {
            setStatusAuth(true)
            localStorage.removeItem("userId");
            localStorage.removeItem("token");
        }
    }

    // Check: Menu Logout
    useEffect(()=>{
        if(menu==="ออกจากระบบ"){
            setStatusLogout(true)
        }else{
            setStatusLogout(false)
        }
    },[menu])

    //Check: Menu Icon
    useEffect(()=>{
        if(menu==="หน้าหลัก") {
            setIcons(<AiFillHome size="18px" fill={`${status ? "#193B56":"#fff"}`} />);
        } else if(menu==="สร้างโพสต์") {
            setIcons(<BsFillPlusSquareFill size="14px" fill={`${status ? "#193B56":"#fff"}`} />);
        } else if(menu==="จัดการโพสต์") {
            setIcons(<BsFillGrid1X2Fill size="13.5px" fill={`${status ? "#193B56":"#fff"}`} />);
        } else if(menu==="จัดการผู้ใช้") {
            setIcons(<MdOutlineManageAccounts size="20px" fill={`${status ? "#193B56":"#fff"}`} />);
        } else if(menu==="ออกจากระบบ") {
            setIcons(<BiLogOut size="20px" fill="#fff" />);
        } else {
            setIcons("");
        }
    },[menu, status])


    return(
        <>
            <div className={`container-menuinnavbar ${statusLogout ? "area-menu-none-activ" : status ? "area-menu-active":"area-menu-none-active"}`}>
                <div className={`${statusLogout ? "area-icon-logout-menuinnavbar" : `area-icon-menuinnavbar ${status ? "area-icon-color-active-menunavbar":"area-icon-color-none-active-menunavbar"}`}`}>
                   {icons}
                </div>
                <Link className="link-set-default-menuinnavbar" to={link??'#'} onClick={()=>{menu==="ออกจากระบบ" ? remove() : <></>}}>
                    <div className={`${statusLogout ? "area-name-menu-menuinnavbar logout" : `area-name-menu-menuinnavbar ${status ? "area-name-color-active-menuinnavbar":"area-name-color-none-active-menuinnavbar"}`}`}>
                        {menu}
                    </div>
                </Link>
            </div>
        </>
    )
}
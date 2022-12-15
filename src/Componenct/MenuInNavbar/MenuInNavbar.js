//React import
import React, { useEffect, useState } from "react";
//CSS import
import './MenuInNavbar.css'
//React-Router-Dom
import { Link } from "react-router-dom";

//React-Icon import
import { AiFillHome } from 'react-icons/ai'
import { BsFillPlusSquareFill, BsFillGrid1X2Fill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import { MdOutlineManageAccounts } from 'react-icons/md'

export default function MenuInNavbar(props) {
    const { menu, link, image } = props;
    const [statusLogout, setStatusLogout] = useState();
    const [icons, setIcons] = useState();

    // Check: Menu Logout
    useEffect(()=>{
        if(menu==="Logout"){
            setStatusLogout(true)
        }else{
            setStatusLogout(false)
        }
    },[menu])

    //Check: Menu Icon
    useEffect(()=>{
        if(menu==="Home") {
            setIcons(<AiFillHome size="18px" fill={`${menu==="Home"?"#193B56":"#fff"}`} />);
        } else if(menu==="Create Post") {
            setIcons(<BsFillPlusSquareFill size="14px" fill={`${menu==="Home"?"#193B56":"#fff"}`} />);
        } else if(menu==="Manage Post") {
            setIcons(<BsFillGrid1X2Fill size="13.5px" fill={`${menu==="Home"?"#193B56":"#fff"}`} />);
        } else if(menu==="Manage Admin") {
            setIcons(<MdOutlineManageAccounts size="20px" fill={`${menu==="Home"?"#193B56":"#fff"}`} />);
        } else if(menu==="Logout") {
            setIcons(<BiLogOut size="20px" fill="#fff" />);
        } else {
            setIcons("");
        }
        
    },[menu])


    return(
        <>
            <div className={`container-menuinnavbar ${statusLogout ? "area-menu-none-activ" : `${menu==="Home"?"area-menu-active":"area-menu-none-active"}`}`}>
                <div className={`${statusLogout ? "area-icon-logout-menuinnavbar" : `area-icon-menuinnavbar ${menu==="Home"?" area-icon-color-active-menunavbar":"area-icon-color-none-active-menunavbar"}`}`}>
                   {icons}
                </div>
                <Link className="link-set-default-menuinnavbar" to={link}>
                    <div className={`${statusLogout ? "area-name-menu-menuinnavbar logout" : `area-name-menu-menuinnavbar ${menu==="Home"?"area-name-color-active-menuinnavbar":"area-name-color-none-active-menuinnavbar"}`}`}>
                        {menu}
                    </div>
                </Link>
            </div>
        </>
    )
}
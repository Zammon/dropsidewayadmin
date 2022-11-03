import React, { useState, useEffect } from "react";
import "../../../CSS/Admincss/Sidebar.css"
import { BsTextLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Sidebar(props) {
    let [Slide,setSlide] = useState(-277);
    let [StatusSlide,setstatusSlide] = useState(false);
    let [styleSlide,setStyleSilde] = useState("bg-modal-close");

    function ChangSlide(props) {
            if(props){
                setSlide(0);
                setstatusSlide(props);
                setStyleSilde("bg-modal-open")
                // console.log(props)
            } else {
                setSlide(-277);
                setstatusSlide(props);
                setStyleSilde("bg-modal-close");
                // console.log(props)
            }
        }


    return(
        <div className="area-slide">  
            {/* Container Main */}
            <div className="container-menu" style={{ transform: `translate3d(${Slide}px, 0, 0)` }} >
                <div className="menu-admin">
                    {/* LOGO MENU */}
                    <div className="logo-admin">
                        <div className="text-title logo">
                            DropSideWay Admin Managemen
                        </div>
                    </div>
                    {/* TOP MENU */}
                    <div className="top-menu-admin">
                        <div className="search-admin">
                            <div className="image-icon"></div>
                            <input className="inputs" placeholder="Search something is here"/>
                        </div>
                            <div className="items-menu">
                                <div className="image-icon"></div>
                                <Link to="/">
                                    <div className="text-item" onClick={()=>ChangSlide(false)}>Home</div>
                                </Link>
                            </div>
                            <div className="items-menu">
                                <div className="image-icon"></div> 
                                <Link to="/managepost">
                                    <div className="text-item" onClick={()=>ChangSlide(false)}>Manage Post</div>
                                </Link>
                            </div>
                            <div className="items-menu">
                                <div className="image-icon"></div>
                                <Link to="/manageuser">
                                    <div className="text-item" onClick={()=>ChangSlide(false)}>Manage User</div>
                                </Link>
                             </div>
                            <div className="items-menu">
                                <div className="image-icon"></div> 
                                <Link to="/managereport">
                                    <div className="text-item" onClick={()=>ChangSlide(false)}>Manage Report</div>
                                </Link>
                            </div>
                    </div>
                    {/* BOTTOM MENU */}
                    <div className="bottom-menu-admin">
                        <div className="items-menu">
                            <div className="image-icon"></div>
                            <div className="text-item" onMouseDown={()=>ChangSlide(false)}>Profile Admin</div>
                        </div>
                        <div className="items-menu">
                            <div className="image-icon"></div>
                            <div className="text-item" onMouseDown={()=>ChangSlide(false)}>Manage Admin</div>
                        </div>
                        <div className="items-menu">
                            <div className="image-icon"></div>
                            <div className="text-item" onMouseDown={()=>ChangSlide(false)}>Register Admin</div>
                        </div>
                        <div className="items-menu">
                            <div className="image-icon"></div>
                            <div className="text-item" onMouseDown={()=>ChangSlide(false)}>Log out</div>
                        </div>
                    </div>
                </div>
                {/* <div className="bg-transparent" onClick={()=>ChangSlide(false)}></div> */}
                <div className="bg-transparent">
                        <div className={`menu-switch-open`} onClick={()=>ChangSlide(!StatusSlide)}>
                            <BsTextLeft size="1.8rem" fill={`#999999`}/>
                        </div>
                </div>
            </div>
            {/* Background Modal Menu */}
            <div className={`${styleSlide}`} onClick={()=>ChangSlide(false)}></div>
        </div>
    )
}

export default Sidebar;
import React, { useState, useEffect } from "react";
import "../../../CSS/Admincss/Sidebar.css"
import { BsTextLeft } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { BiSearch, BiMessageSquareEdit } from 'react-icons/bi'
import { BsFillFilePostFill } from 'react-icons/bs'
import { MdLogout, MdAdminPanelSettings} from 'react-icons/md'
import Loginpage from "../../Login/Login";

function Sidebar(props) {
    const { admin ,status } = props;
    let [Slide,setSlide] = useState(-277);
    let [StatusSlide,setstatusSlide] = useState(false);
    let [styleSlide,setStyleSilde] = useState("bg-modal-close");
    const [checkRankAdmin,setCheckRankAdmin] = useState(false);
    const navigate = useNavigate()
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

        useEffect(()=>{
            if(admin.data.type==='Super Admin'){
                setCheckRankAdmin(true);
            } else {
                setCheckRankAdmin(false);
            }
        },[admin])

        function calllogin() {
            status(false);
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
                            <div className="image-icon">
                                <BiSearch fill="#ffffff" />
                            </div>
                            <input className="inputs" placeholder="Search something is here"/>
                        </div>
                            <div className="items-menu">
                                <div className="image-icon">
                                    <AiFillHome fill="#ffffff"/>
                                </div>
                                <Link className="setting-normal-router" to="/" onClick={()=>ChangSlide(false)}>
                                    <div className="text-item">Home</div>
                                </Link>
                            </div>
                            <div className="items-menu">
                                <div className="image-icon">
                                    <BsFillFilePostFill size="16px" fill="#ffffff" />  
                                </div>
                                    <Link className="setting-normal-router" to="/createpost" onClick={()=>ChangSlide(false)}>
                                        <div className="text-item">Create Post</div>
                                    </Link>
                            </div>

                            <div className="items-menu">
                                <div className="image-icon">
                                    <BiMessageSquareEdit size="18px" fill="#ffffff" />
                                </div> 
                                <Link className="setting-normal-router" to="/managepost" onClick={()=>ChangSlide(false)}>
                                    <div className="text-item">Manage Post</div>
                                </Link>
                            </div>
                           
                            {/* <div className="items-menu">
                                <div className="image-icon"></div>
                                <Link className="setting-normal-router" to="/managereport" onClick={()=>ChangSlide(false)}>
                                    <div className="text-item">Manage Report</div>
                                </Link>
                            </div> */}
                    </div>
                    {/* BOTTOM MENU */}
                    <div className="bottom-menu-admin">
                        <div className="items-menu">
                            <div className="image-icon">
                                <img className="images-full" src={admin.data.profile}/>
                            </div>
                            <Link className="setting-normal-router" to="/profile" onClick={()=>ChangSlide(false)}>
                               <div className="text-item text-name">{`${admin.data.firstname} ${admin.data.lastname}`}</div> 
                            </Link>
                        </div>
                        
                        {checkRankAdmin ? <>
                        <div className="items-menu">
                            <div className="image-icon">
                                <MdAdminPanelSettings fill="#ffff" />
                            </div>
                            <Link className="setting-normal-router" to="/manageadmin" onClick={()=>ChangSlide(false)}>
                                <div className="text-item">Manage Admin</div>
                            </Link>
                        </div>
                        </>
                        :""}
                        
                        <div className="items-menu">
                            <div className="image-icon logout-area">
                                <MdLogout fill="#ffffff"/>
                            </div>
                            <Link className="setting-normal-router" to="/" onClick={calllogin}>
                                <div className="text-item logout-text" onClick={()=>{ChangSlide(false)}}>Log out</div>
                            </Link>
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
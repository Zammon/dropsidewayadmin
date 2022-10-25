import React, { useState, useEffect } from "react";
import "../CSS/Admincss/Navbaradmin.css"

function Navbar() {
    const App = () => {
        useEffect(()=>{
                const width = document.getElementById('width').clientWidth;
                console.log({ width });
            }, []);
            
            return(
                <div id="width" />
            );
        }
    

    let [Slide,setSlide] = useState(-277);
    let [StatusSlide,setstatusSlide] = useState(true);

    function ChangSlide(props) {
        if(props){
            setSlide(0);
            setstatusSlide(props);
            console.log(props)
        } else {
            setSlide(-277);
            setstatusSlide(props);
        }
        
    }

    return(
        <>
            <div className="container-menu" style={{ transform: `translate3d(${Slide}px, 0, 0)` }}>
                <div className="menu-admin">
                    {/* LOGO MENU */}
                    <div className="logo-admin">
                        <div className="text-title logo">
                            DropSideWay Admin Management
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
                            <div className="text-item">Home</div>
                        </div>
                        <div className="items-menu">
                            <div className="image-icon"></div>
                            <div className="text-item">Manage Post</div>
                        </div>
                        <div className="items-menu">
                            <div className="image-icon"></div>
                            <div className="text-item">Manage User</div>
                        </div>
                        <div className="items-menu">
                            <div className="image-icon"></div>
                            <div className="text-item">Manage Report</div>
                        </div>
                        <div className="items-menu">
                            <div className="image-icon"></div>
                            <div className="text-item">Manage FAQ</div>
                        </div>
                        <div className="items-menu">
                            <div className="image-icon"></div>
                            <div className="text-item">Manage AD</div>
                        </div>
                    </div>
                    {/* BOTTOM MENU */}
                    <div className="bottom-menu-admin">
                        <div className="items-menu">
                            <div className="image-icon"></div>
                            <div className="text-item">Profile Admin</div>
                        </div>
                        <div className="items-menu">
                            <div className="image-icon"></div>
                            <div className="text-item">Manage Admin</div>
                        </div>
                        <div className="items-menu">
                            <div className="image-icon"></div>
                            <div className="text-item">Register Admin</div>
                        </div>
                        <div className="items-menu">
                            <div className="image-icon"></div>
                            <div className="text-item">Log out</div>
                        </div>
                    </div>
                </div>
                <div className="menu-switch" onClick={()=>ChangSlide(!StatusSlide)}></div>
            </div>
        </>
    )
}

export default Navbar;
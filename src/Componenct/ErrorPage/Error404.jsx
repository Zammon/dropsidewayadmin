//React import
import React from "react";
///Css import
import './Error404.css'
import { Link } from "react-router-dom";

function Error404() {
    return(
    <>
        <div className="container-mains" style={{display:'flex', flexDirection: 'column',width: '100%',  height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
            <div className="">
                Error 404 : ...
            </div>
            <div className="">
                <Link to="/">
                    กลับหน้าแรก
                </Link>
            </div>
        </div>
    </>
    );
}

export default Error404;
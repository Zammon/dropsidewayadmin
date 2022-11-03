import React, { useEffect, useState } from "react";
import "../../../CSS/Admincss/Navbar.css";


function Navbar(props) {
    const { admin } = props;

    return(
        <>
            <div className="container-navbar" >
                <div className="box-rank-admin">
                    {admin[0].rank_admin}
                </div>
                <div className="box-name-admin">
                    {admin[0].name}
                </div>
                <div className="box-id-admin" >
                    Admin ID : {admin[0].id_admin}
                </div>
            </div>
        </>
        )
    }

export default Navbar;
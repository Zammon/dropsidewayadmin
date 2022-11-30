import React, { useEffect, useState } from "react";
import "../../../CSS/Admincss/Navbar.css";


function Navbar(props) {
    const { admin } = props;

    return(
        <>
            <div className="container-navbar" >
                <div className="box-rank-admin" style={{backgroundColor: admin.admin_rank.color_rank}}>
                    {admin.admin_rank.name_rank}
                </div>
                <div className="box-name-admin">
                    {admin.admin_name}
                </div>
                <div className="box-id-admin" >
                    Admin ID : {admin.admin_id}
                </div>
            </div>
        </>
        )
    }

export default Navbar;
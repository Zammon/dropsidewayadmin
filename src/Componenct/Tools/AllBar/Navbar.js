import React, { useEffect, useState } from "react";
import "../../../CSS/Admincss/Navbar.css";


function Navbar(props) {
    const { admin } = props;
    const [colorRank, setColorRank] = useState();

    useEffect(()=>{
        if(admin.data.type === "Super Admin") {
            setColorRank(true);
        } else if(admin.data.type === "Admin") {
            setColorRank(false);
        }
    },[colorRank])

    return(
        <>
            <div className="container-navbar" >
                <div className={`box-rank-admin ${colorRank ? "superadmin":"admin"}`}>
                    {admin.data.type}
                </div>
                <div className="box-name-admin">
                    {`${admin.data.firstname} ${admin.data.lastname}`}
                </div>
                <div className="box-id-admin" >
                     {`Admin ID : ${admin.data.idAccout}`}
                </div>
                <div className="">
                    
                </div>
            </div>
        </>
        )
    }

export default Navbar;
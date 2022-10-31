import React from "react";
import Slidebar from "../Tools/Slidebar";
import Navbar from "../Tools/Navbar";
import admins from "../../Model/Admins";

function ManageReport() {
    return(
        <>
            <Slidebar />
            <Navbar admin={admins}/>
            <div className="bg-color-main">
            MANAGEREPORT ADMINS PAGE 
            <div className=""></div>
        </div>
        </>
    );
}

export default ManageReport;
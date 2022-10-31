import React from "react";
import Slidebar from "../Tools/Slidebar";
import Navbar from "../Tools/Navbar";
import admins from "../../Model/Admins";

function ManageUser() {
    return(
        <>
            <Slidebar />
            <Navbar admin={admins}/>
            <div className="bg-color-main">
            MANAGEUSER ADMINS PAGE 
            <div className=""></div>
        </div>
        </>
    );
}

export default ManageUser;
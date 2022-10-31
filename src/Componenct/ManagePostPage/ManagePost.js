import React from "react";
import Slidebar from "../Tools/Slidebar";
import Navbar from "../Tools/Navbar";
import admins from "../../Model/Admins";

function ManagePost() {
    return(
        <>
            <Slidebar />
            <Navbar admin={admins}/>
            <div className="bg-color-main">
            MANAGEPOST ADMINS PAGE 
            <div className=""></div>
        </div>
        </>
    );
}

export default ManagePost;
//React import
import React from "react";
import NavProfile from "../NavProfile/NavProfile";
//CSS import
import './ManageAdmin.css'

//Component import

function ManageAdmin(props) {
    // Disassemble of Props

    return(
        <> 
            <div className="container-page">
                <NavProfile />
            </div>
        </>
    )
}

export default ManageAdmin;
import React from "react";
import admins from "../../Model/Admins";
import BoxProfile from "../Tools/AllBoxandArea/BoxAdminProfile";

function AdminManage(props) {
    const { admin } = props;

    return(
        <> 
            <BoxProfile data={admin}/>
            <div className="bg-color-main">
                AdminManage
            </div>
        </>
    )
}

export default AdminManage;
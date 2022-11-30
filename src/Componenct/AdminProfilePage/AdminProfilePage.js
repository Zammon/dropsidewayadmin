import React from "react";
import BoxProfile from "../Tools/AllBoxandArea/BoxAdminProfile";
import admins from "../../Model/Admins";
import '../../CSS/Admincss/AdminProfile.css'
import '../../CSS/Admincss/ManageUser.css'
import admin from "../../Model/Admins";
import Boxitems from "../Tools/AllBoxandArea/Boxitems";
import BoxitemHistory from "../Tools/AllBoxandArea/Boxitemhistory";
import TypeHistoryButton from "../Tools/AllButton/TypeHistoryButton";


function AdminProfile() {
    
    
    return(
        <>  
            <BoxProfile />
            <div className="bg-color-main">
                <div className="admin-title-page">
                    <div className="admin-title-name">
                        Histroy
                    </div>
                    <div className="admin-title-description">
                        History Manage by 
                        <div className="admin-title-by-name">
                            {admin[0].admin_name}
                        </div>
                    </div>
                </div>
                <div className="area-history">
                    <div className="box-history-admin">
                        <div className="area-title-name">
                            
                            </div>
                            <div className="area-items">
                                <BoxitemHistory />
                                <BoxitemHistory />
                                <BoxitemHistory />
                                <BoxitemHistory />
                                <BoxitemHistory />
                                <BoxitemHistory />
                            </div>
                    </div>
                    <div className="area-type-history-admin">
                        <div className="area-title-name-type-history-admin">
                            Type History Admin
                        </div>
                        <div className="area-chioce-type-history-admin">
                            <TypeHistoryButton choices="History by Manage User" />
                            <TypeHistoryButton choices="History by Manage Post" />
                            <TypeHistoryButton choices="History by Manage Report" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminProfile;
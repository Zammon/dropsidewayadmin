import React, { useState } from "react";
import BoxProfile from "../Tools/AllBoxandArea/BoxAdminProfile";
import admins from "../../Model/Admins";
import '../../CSS/Admincss/AdminProfile.css'
import '../../CSS/Admincss/ManageUser.css'
import admin from "../../Model/Admins";
import Boxitems from "../Tools/AllBoxandArea/Boxitems";
import BoxitemHistory from "../Tools/AllBoxandArea/Boxitemhistory";
import TypeHistoryButton from "../Tools/AllButton/TypeHistoryButton";
import axios from "axios";


function AdminProfile(props) {
    const { admin } = props;
    const [posts, setPosts] = useState();
    const callapi = async () =>{
        const data = axios.get("");
        setPosts(data);
    };
    
    return(
        <>  
            <BoxProfile data={admin}/>
            <div className="bg-color-main">
                <div className="admin-title-page">
                    <div className="admin-title-name">
                        {"My post ($)"}
                   </div>
                    <div className="admin-title-description">
                        Post to find lost items by 
                        <div className="admin-title-by-name">
                            {`${admin.data.firstname} ${admin.data.lastname}`}
                        </div>
                    </div>
                    <div className="area--admin-profile">
                        
                    </div>
                </div>
                {/* <div className="area-history">
                    <div className="box-history-admin">
                        <div className="area-title-name">
                            
                            </div>
                            <div className="area-items">
                                <div className="">
                                    Not a items.
                                </div>
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
                </div> */}
            </div>
        </>
    )
}

export default AdminProfile;
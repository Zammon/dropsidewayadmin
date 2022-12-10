import React,{useEffect, useState} from "react";
import '../../../CSS/Admincss/BoxAdminProfile.css'

import admin from "../../../Model/Admins";


function BoxProfile(props) {
    const { data } = props;
    const [statusRank, setStatusRank] = useState();
    useEffect(()=>{
        if(data.data.type==="Super Admin"){
            setStatusRank(true);
        }else{
            setStatusRank(false)
        }
    },[])

    return(
        <>
                <div className="area-profile box-shadow">
                    <div className="area-img-profile">
                        <img className="img-full-frame" src={data.data.profile} />
                    </div>
                    <div className="area-bio">
                        <div className="area-admin-name">
                            <div className="admin-name">{`${data.data.firstname} ${data.data.lastname}`}</div>
                            <div className="admin-id">#{data.data.idAccout}</div>
                        </div>
                        <div className="area-admin-bio">
                            <div className="area-admin-col">
                                <div className="area-admin-row">
                                    Register date: {admin[0].admin_register_date.day} {admin[0].admin_register_date.month} {admin[0].admin_register_date.year}
                                </div>
                                <div className="area-admin-row">
                                    Birthday: {admin[0].admin_birthday.day} {admin[0].admin_birthday.month} {admin[0].admin_birthday.year}
                                </div>
                            </div>
                            <div className="area-admin-col">
                                <div className="area-admin-row">
                                    Gender: {admin[0].admin_gender}
                                </div>
                                <div className="area-admin-row">
                                    Phone Number: {admin[0].admin_phonenumber}
                                </div>
                            </div>
                            <div className="area-admin-col">
                                <div className="area-admin-row">
                                    ID Card Number: {data.data.idAccout}
                                </div>
                                <div className="area-admin-row">
                                    Address: {admin[0].admin_address}
                                </div>
                            </div>
                        </div>
                        <div className="area-admin-rank">
                            <div className={`box-admin-rank ${statusRank ? "superadmin":"admin"}`}>
                                {data.data.type}
                            </div>
                        </div>  
                    </div>
                </div>
        </>
    )
}

export default BoxProfile;
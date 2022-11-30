import React from "react";
import '../../../CSS/Admincss/BoxAdminProfile.css'

import admin from "../../../Model/Admins";


function BoxProfile() {
    return(
        <>
                <div className="area-profile box-shadow">
                    <div className="area-img-profile">
                        <img className="img-full-frame" src={admin[0].admin_profile} />
                    </div>
                    <div className="area-bio">
                        <div className="area-admin-name">
                            <div className="admin-name">{admin[0].admin_name}</div>
                            <div className="admin-id">#{admin[0].admin_id}</div>
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
                                    ID Card Number: {admin[0].admin_id}
                                </div>
                                <div className="area-admin-row">
                                    Address: {admin[0].admin_address}
                                </div>
                            </div>
                        </div>
                        <div className="area-admin-rank">
                            <div className="box-admin-rank" style={{backgroundColor: admin[0].admin_rank.color_rank}}>
                                {admin[0].admin_rank.name_rank}
                            </div>
                        </div>  
                    </div>
                </div>
        </>
    )
}

export default BoxProfile;
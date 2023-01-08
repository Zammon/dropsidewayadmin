import React from 'react';
import './NavProfile.css'
import userProfile from '../../user_1.jpg'

export default function NavProfile() {
    return (
        <>
            <div className="container-navprofile">
                <div className="content-navprofile">
                    <div className="profile-navprofile">
                        <img src={userProfile} alt="No Images" className="images-full" />
                    </div>
                    <div className="contect-item-navprofile">
                        <div className="content-top-navprofile">
                            Sahaphap Vorasan 
                            <div className="area-type-admin-navprofile superadmin-color-navprofile">
                                Super Admin
                            </div>
                        </div>
                        <div className="content-bottom-navprofile">
                            <div className="item-bio-navprofile">
                                <div className=''>{`วันที่สมัครเข้าสู่ระบบ: `}</div>
                                <div className=''>{`วันเกิด: `}</div>
                            </div>
                            <div className="item-bio-navprofile">
                                <div className=''>{`เพศ:`}</div>
                                <div className=''>{`เบอร์โทรศัทพ์: `}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

import React, { useContext, useState } from 'react';
import './NavProfile.css'
import userProfile from '../../user_1.jpg'
import { AuthContext } from '../UseContexts/AuthContext';
import { useEffect } from 'react';



export default function NavProfile() {

    const { userdetail } = useContext(AuthContext);
    const [colorType, setColorType] = useState("unknow-color-navprofile");

    useEffect(()=>{
        if(userdetail.type==="Super Admin"){
            setColorType("superadmin-color-navprofile");
        } else if (userdetail.type==="Admin"){
            setColorType("admin-color-navprofile");
        }
    },[userdetail.type])

    return (
        <>
            <div className="container-navprofile">
                <div className="content-navprofile">
                    <div className="profile-navprofile">
                        <img src={userdetail.profile} alt="No Images" className="images-full" />
                    </div>
                    <div className="contect-item-navprofile">
                        <div className="content-top-navprofile">
                            {userdetail.name}
                            <div className={`area-type-admin-navprofile ${colorType}`}>
                                {userdetail.type}
                            </div>
                        </div>
                        <div className="content-bottom-navprofile">
                            <div className="item-bio-navprofile">
                                <div className=''>{`วันที่สมัครเข้าสู่ระบบ: ${userdetail.createAt}`}</div>
                                <div className=''>{`วันเกิด: ${userdetail.birthday}`}</div>
                            </div>
                            <div className="item-bio-navprofile">
                                <div className=''>{`เพศ: ${userdetail.gender}`}</div>
                                <div className=''>{`เบอร์โทรศัทพ์: ${userdetail.tel}`}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

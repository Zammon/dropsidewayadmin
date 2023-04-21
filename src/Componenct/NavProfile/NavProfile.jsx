import React, { useContext, useState } from 'react';
import './NavProfile.css'
import { CutDate, CutTel } from '../../Service/cut.service';
import { AuthContext } from '../../Contexts/AuthContext';
import { useEffect } from 'react';



export default function NavProfile() {
    const { userdetail } = useContext(AuthContext);
    const [colorType, setColorType] = useState("unknow-color-navprofile");

    useEffect(()=>{
        if(userdetail.type==="SuperAdmin"){
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
                            {userdetail.username}
                            <div className={`area-type-admin-navprofile ${colorType}`}>
                                {userdetail.type}
                            </div>
                        </div>
                        <div className="content-bottom-navprofile">
                            <div className="item-bio-navprofile">
                                <div className=''>{`วันที่สมัครเข้าสู่ระบบ: ${CutDate(userdetail.createAt) ?? ''}`}</div>
                                <div className=''>{`วันเกิด: ${CutDate(userdetail.birthday) ?? ''}`}</div>
                            </div>
                            <div className="item-bio-navprofile">
                                <div className=''>{`เพศ: ${userdetail.gender}`}</div>
                                <div className=''>{`เบอร์โทรศัทพ์: ${CutTel(userdetail.tel)  ?? ''}`}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

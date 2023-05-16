import React, { useContext, useState } from 'react';
import './NavProfile.css'
import { CutDate, CutTel } from '../../Service/cut.service';
import { AuthContext } from '../../Contexts/AuthContext';
import { useEffect } from 'react';
import { BsImageAlt } from 'react-icons/bs';

export default function NavProfile(props) {
    const { profile, type, statusProfile, username, gender, birthDate, created, tel } = props;
    const { userdetail } = useContext(AuthContext);
    const [colorType, setColorType] = useState("unknow-color-navprofile");

    useEffect(()=>{
        if(type) {
            if(type==="SuperAdmin"){
                setColorType("superadmin-color-navprofile");
                return;
            } else if (type==="Admin"){
                setColorType("admin-color-navprofile");
                return;
            }
        }
        if(userdetail.type==="SuperAdmin"){
            setColorType("superadmin-color-navprofile");
            return;
        } else if (userdetail.type==="Admin"){
            setColorType("admin-color-navprofile");
            return;
        }
    },[userdetail.type, type])

    return (
        <>
            <div className="container-navprofile">
                <div className="content-navprofile">
                    <div className="profile-navprofile">
                        {
                            statusProfile ?
                            (
                                <img 
                                src={profile ?? userdetail.profile}
                                alt="No Images" 
                                className="images-full" />
                            )
                            :
                            (
                                profile ?
                                    <img 
                                    src={profile}
                                    alt="No Images" 
                                    className="images-full" />
                                    :
                                    <BsImageAlt color="#5F5F5F"/>
                                
                            )
                            
                        }
                    </div>
                    <div className="contect-item-navprofile">
                        <div className="content-top-navprofile">
                            {username ?? userdetail.username}
                            <div className={`area-type-admin-navprofile ${colorType}`}>
                                {type ?? userdetail.type}
                            </div>
                        </div>
                        <div className="content-bottom-navprofile">
                            <div className="item-bio-navprofile">
                                <div className=''>{`วันที่สมัครเข้าสู่ระบบ: ${CutDate(birthDate ?? userdetail.createAt) ?? ''}`}</div>
                                <div className=''>{`วันเกิด: ${CutDate(created ?? userdetail.birthday) ?? ''}`}</div>
                            </div>
                            <div className="item-bio-navprofile">
                                <div className=''>{`เพศ: ${gender ?? userdetail.gender}`}</div>
                                <div className=''>{`เบอร์โทรศัพท์: ${CutTel(tel ?? userdetail.tel)  ?? ''}`}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

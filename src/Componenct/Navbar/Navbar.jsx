import React, { useEffect, useState, useContext, useRef} from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import { AuthContext } from '../../Contexts/AuthContext';
import MenuInNavbar from "../MenuInNavbar/MenuInNavbar";
import { AlertContext, AlertType } from "../../Contexts/AlertContext";
import ButtonModal from "../Buttons/ButtonModal";
import { RxCross2 } from 'react-icons/rx';
import { RegisterContext } from "../../Contexts/RegisterContext";
import { MdPhotoCamera } from "react-icons/md";
import { DaySelect, GenderSelect, MonthSelect, YearSelect } from "../../Contexts/SelectContext";
import { PostCreateAccout } from "../../Contexts/Fetchs/PostCreateAccout";

export default function Navbar(props) {
    const { userdetail } = useContext(AuthContext);
    const { 
        typeModal, 
        showModal, 
        setShowModal,
        titleModal,
        detailModal,
        keepButtonCorrect,
        setTypeModal,
        setTitleModal,
        setDetailModal,
    } = useContext(AlertContext);
    const {
        showModalRegister, setShowModalRegister,
        firstName, setFirstName,
        lastName, setLastName,
        gender, setgender,
        day, setDay,
        month, setMonth,
        year, setYear,
        typeAdmin, setTypeAdmin,
        tel, setTel,
        idCard, setidCard,
        profile, setProfile,
        email, setEmail
    } = useContext(RegisterContext);
    const Years = YearSelect();
    const Day = DaySelect();
    const selectDay = Day.map((data, index)=>{
        return(
            <option key={index} value={data.value}>
                {data.title}
            </option>
        )
    })
    const selectMonth = MonthSelect.map((data, index)=>{
        return(
            <option key={index} value={data.value}>
                {data.title}
            </option>
        )
    })
    const selectYear = Years.map((data, index)=>{
        return(
            <option key={index} value={data}>
                {data}
            </option>
        )
    })
    const selectGender = GenderSelect.map((data, index)=>{
        return(
            <option key={index} value={data.value}>
                {data.title}
            </option>
        )
    })
    const [hoverProfile, setHoverProfile] = useState(false);
    const uploadProfileRef = useRef(null);
    const [checkType, setCheckType] = useState();
    const [colorType, setColorType] = useState("unknow-color-navprofile");
    useEffect(()=>{
        if(userdetail.type==="SuperAdmin"){
            setColorType("superadmin-color-navprofile");
            setCheckType(true)
        } else if (userdetail.type==="Admin"){
            setColorType("admin-color-navprofile");
            setCheckType(false)
        }
    },[userdetail.type])

    const AlertCreateAccoutComplete = () => {
        setTypeModal(AlertType.Alert);
        setTitleModal("สร้างบัญชีสำเร็จ");
        setDetailModal("สร้างบัญชีสำเร็จแล้ว สามารถเข้าใจงานบัญชีได้ทันที");
        setShowModal(true);
    }

    const AlertCreateAccoutFail = () => {
        setTypeModal(AlertType.Alert);
        setTitleModal("สร้างบัญชีสำเร็จ");
        setDetailModal("สร้างบัญชีสำเร็จแล้ว สามารถเข้าใจงานบัญชีได้ทันที");
        setShowModal(true);
    }

    const hadleCreatePost = (e) => {
        const Dates = new Date(`${year}-${month}-${day}`);
        e.preventDefault();
        const bodyFormData = new FormData();
        bodyFormData.append("firstname", firstName);
        bodyFormData.append("lastname", lastName);
        bodyFormData.append("gender", gender);
        bodyFormData.append("birthDay", Dates);
        bodyFormData.append("type", typeAdmin);
        bodyFormData.append("Tag", tel);
        bodyFormData.append("email", email);
        bodyFormData.append("accout", email);
        bodyFormData.append("password", tel);
        bodyFormData.append("pofile", profile[0]);
        bodyFormData.append("Image", email);
        //เหลือแก้ชื่อหัวข้อของ + ทดลองสร้างแอคเค้าท์ดูจริงๆ ปล.อาจจะแก้ฟอร์มหน่อยนึงตรงที่อาจจะให้กรอก accout / password เพิ่มได้ด้วย
        PostCreateAccout(Dates, AlertCreateAccoutComplete, AlertCreateAccoutFail)
    }

    const hadleResetValue = () => {
        setShowModalRegister(false);
        setFirstName('')
        setLastName('')
        setgender('ชาย')
        setDay('01')
        setMonth('01')
        setYear('2023')
        setTypeAdmin('Admin')
        setTel('')
        setidCard('')
        setProfile([])
    }

    return(
        <div className="container-main">
            {
                showModal ?
                (
                    <div className="modal-container-main">
                        <div className="modal-item-main" style={{minHeight: `${typeModal===AlertType.Confirm ? '220px':''}`}}>
                            {
                                typeModal === AlertType.Warning ?
                                (
                                    <div style={{
                                        display: 'flex', 
                                        justifyContent: 'center', 
                                        alignItems: 'center', 
                                        width: '60px', 
                                        minWidth: '60px', 
                                        height: '60px', 
                                        backgroundColor: 'green',
                                        margin: '0 28px 0 0'    
                                    }}>
                                        
                                    </div>
                                )
                                :
                                (
                                    <></>   
                                )
                            }
                            <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',  
                                    position: 'absolute', 
                                    right: '10px', 
                                    top: '16px', 
                                    margin: '0 10px 0 0', 
                                    cursor: 'pointer'
                                    }} 
                                onClick={()=>{setShowModal(false)}}
                            >
                                <RxCross2 size={24} />
                            </div>
                            <div style={{
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    width: '100%', 
                                    // backgroundColor: 'red'
                                    }}
                            >
                                <div style={{fontSize: '20px', margin: '0 0 10px 0'}}>
                                    {titleModal}
                                </div>
                                <div style={{
                                    display: 'flex',
                                    width: '100%', 
                                    fontSize: '16px', 
                                    fontWeight: '300'
                                }}>
                                    {detailModal}
                                </div>
                                {
                                typeModal === AlertType.Confirm ?
                                    (
                                        <div style={{
                                            display: 'flex', 
                                            justifyContent: 'space-between',
                                            height: 'auto', 
                                            position: 'absolute', 
                                            bottom: '21px', 
                                            right: '20px',
                                            width: '270px',
                                            }}>
                                            {
                                               keepButtonCorrect?.map((data,index)=>{
                                                    return(
                                                        <ButtonModal
                                                        key={index}
                                                        title={data.title}
                                                        className={data.className} 
                                                        OnClick={()=>{data.hadler()}}
                                                        />
                                                    );
                                               })
                                            }
                                        </div>
                                    )
                                :
                                    (
                                        <></>   
                                    )
                                }
                            </div>
                        </div>
                        <div className="modal-background-main" onClick={()=>{setShowModal(false)}}></div>
                    </div>
                )
                :
                (
                    <></>
                )
            }

            {
                showModalRegister ?
                (
                    <div className="modal-container-main">
                        <div className="modal-item-register-main">
                            <div className="title-form-modal-register-main">
                                สร้างบัญชีผู้ใช้ใหม่
                            </div>
                            {
                                profile && profile.length !== 0 ?
                                (
                                <div className="modal-image-profile-main">
                                    <div className="modal-image-profile-item-main"
                                        onMouseEnter={()=>{setHoverProfile(true)}}
                                        onMouseLeave={()=>{setHoverProfile(false)}}
                                        onClick={(e)=>{
                                            e.preventDefault();
                                            uploadProfileRef.current.click();
                                        }}>
                                        <div className={`${hoverProfile? 'hover-image-profile-active-main':'hover-image-profile-disable-main'}`}>
                                            <MdPhotoCamera style={{
                                                position: 'absolute',
                                                zIndex: '99',
                                                transition: 'all .3s ease'
                                                }} 
                                                size="50px" 
                                                fill={`${hoverProfile ? '#fff' :  'rgba(128, 128, 128, 0)' }`}
                                            />
                                            <div style={{
                                                display: 'flex',
                                                position: 'absolute',
                                                zIndex: '98',
                                                width: '105%',
                                                height: '105%',
                                                backgroundColor: `${hoverProfile ? 'rgba(78, 78, 78, 0.457)' :  'rgba(128, 128, 128, 0)'}`}}>
                                            </div>
                                            <img style={{
                                                display: 'flex',
                                                width: '105%',
                                                height: '105%',
                                                objectFit: 'cover',
                                                position: 'absolute',
                                                zIndex: '97',
                                            }} 
                                            alt="" 
                                            src={URL.createObjectURL(profile[0])} />
                                        </div>
                                    </div>
                                </div>
                                )
                                :
                                (
                                <div className="modal-image-profile-main">
                                    <div className="modal-image-profile-item-main"
                                    onClick={(e)=>{
                                        e.preventDefault();
                                        uploadProfileRef.current.click();
                                    }}>
                                        <div className="hover-image-profile-active-main">
                                            <MdPhotoCamera size="50px" fill='#fff' />
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                            
                            <div className="rows-form-create-admin">
                                <label className="label-form-create-admin">ชื่อจริง</label>
                                <input className="input-form-create-admin" type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} placeholder="กรุณากรอกชื่อจริง"/>
                            </div>
                            <div className="rows-form-create-admin">
                                <label className="label-form-create-admin">นามสกุล</label>
                                <input className="input-form-create-admin" type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} placeholder="กรุณากรอกนามสกุล"/>
                            </div>
                            <div className="rows-form-create-admin">
                                <label className="label-form-create-admin">เพศ</label>
                                <select style={{minWidth: '100%'}} className="select-form-register" value={gender} onChange={(e)=>{setgender(e.target.value)}}>
                                    {selectGender}
                                </select>
                            </div>
                            <div className="rows-form-create-admin">
                                <label className="label-form-create-admin">วัน/เดือน/ปีเกิด (กรอกเป็นตัวเลข)</label>
                                <div className="rows-form-date-admin">
                                    <div style={{marginTop: '0'}} className="rows-form-create-admin">
                                        <select  style={{minWidth: '65px'}} className="select-form-register"  value={day} onChange={(e)=>{setDay(e.target.value)}}>
                                            {selectDay}
                                        </select>
                                    </div>
                                    <div style={{marginTop: '0'}} className="rows-form-create-admin">
                                        <select style={{minWidth: '150px'}} className="select-form-register"  value={month} onChange={(e)=>{setMonth(e.target.value)}}>
                                            {selectMonth}
                                        </select>
                                    </div>
                                    <div style={{marginTop: '0'}} className="rows-form-create-admin">
                                        <select style={{minWidth: '120px'}} className="select-form-register"  value={year} onChange={(e)=>{setYear(e.target.value)}}>
                                            {selectYear}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="rows-form-create-admin">
                                <label className="label-form-create-admin">ระดับแอดมิน</label>
                                <div className="rows-form-date-admin">
                                    <div className="rows-form-date-admin" style={{alignItems: 'center', width: '120px'}}>
                                        <input name="type_person" style={{margin: '0 5px 0 0'}} className="input-form-create-admin" defaultChecked={true} type="radio" value="Admin" onChange={(e)=>{setTypeAdmin(e.target.value)}}/>
                                        <label className="label-form-create-admin" >
                                            Admin
                                        </label>
                                    </div>
                                    <div className="rows-form-date-admin"  style={{alignItems: 'center', width: '120px'}}>
                                        <input name="type_person" style={{margin: '0 5px 0 0'}} className="input-form-create-admin" type="radio" value="SuperAdmin" onChange={(e)=>{setTypeAdmin(e.target.value)}} placeholder="เลือกประเภทแอดมิน"/>
                                        <label className="label-form-create-admin">
                                            SuperAdmin
                                        </label>
                                    </div>

                                </div>
                            </div>
                            <div className="rows-form-create-admin">
                                <label className="label-form-create-admin">เบอร์โทร</label>
                                <input className="input-form-create-admin" type="text" value={tel} onChange={(e)=>{setTel(e.target.value)}} placeholder="กรุณากรอกเบอร์โทร"/>
                            </div>
                            <div className="rows-form-create-admin">
                                <label className="label-form-create-admin">อีเมลล์</label>
                                <input className="input-form-create-admin" type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="กรุณากรอก e-mail"/>
                            </div>
                            <div className="rows-form-create-admin">
                                <label className="label-form-create-admin">เลขบัตรประชาชน</label>
                                <input className="input-form-create-admin" type="text" value={idCard} onChange={(e)=>{setidCard(e.target.value)}} placeholder="กรุณากรอกเลขบัตรประชาชน"/>
                            </div>
                            <div className="rows-form-create-admin">
                                <button style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center', 
                                    width: '100%', 
                                    height: '40px', 
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '8px',
                                    marginTop: '15px',
                                    backgroundColor: '#FFBE36',
                                    cursor: 'pointer'
                                }}
                                onClick={()=>{hadleCreatePost()}}
                                >
                                    สร้างบัญชี
                                </button>
                            </div>
                        </div>
                        <div className="modal-background-main" onClick={()=>{hadleResetValue()}}></div>
                    </div>
                ):
                (
                    <></>
                )
            }
            <input style={{display: 'none'}} accept="image/*" ref={uploadProfileRef} type="file" 
            onChange={(e)=>{
                e.preventDefault();
                setProfile(e.target.files)}}
            />
            <div className="container-navbar">
                <div className="area-logo-navbar">
                    DropSideWay Admin Management
                </div>
                <div className="area-menu-top-navbar">
                    <MenuInNavbar menu="หน้าหลัก" link="/" status={true} />
                    <MenuInNavbar menu="สร้างโพส" link="/createpost" status={true}/>
                    <MenuInNavbar menu="จัดการโพส" link="/managepost" icon="" status={true}/>
                </div>
                <div className="area-menu-bottom-navbar">
                    <div className="area-menu-bottom">
                        <div className="container-menuinnavbar">
                            <div className="area-icon-logout-menuinnavbar">
                                <img className="images-full" src={userdetail.profile} alt=""/>
                            </div>
                            <Link className="link-set-default-navbar" to="/profile">
                                <div className="area-name-color-active-menuinnavbar area-name-color-none-active-menuinnavbar">
                                    {userdetail.username}
                                </div>
                            </Link>
                        </div>
                        {
                            checkType ?
                            <MenuInNavbar menu="จัดการผู้ใช้" link="/manageadmin" status={true} />
                            :
                            <></>
                        }
                        <MenuInNavbar menu="ออกจากระบบ" link="/" /> 
                    </div>
                </div>
            </div>
            <div className="container-content">
                <div className="area-navbar-navbar">
                    <div className={`area-rank-admin-navbar ${colorType}`}>
                        {userdetail.type}
                    </div>
                    <div className="area-name-admin-navbar">
                        {userdetail.username}
                    </div>
                    <div className="area-id-admin-navbar">
                        {`Admin ID : ${userdetail.id}`}
                    </div>
                </div>
                {props.children} 
            </div>
        </div>
    )
}
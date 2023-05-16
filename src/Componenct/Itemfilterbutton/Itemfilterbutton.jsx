import React, { useContext, useEffect, useState } from "react";
import './Itemfilterbutton.css'
import { Link } from 'react-router-dom';
import { HiEye, HiEyeOff} from 'react-icons/hi'
import { AiFillDelete, AiOutlineFileSearch } from 'react-icons/ai'
import AxiosFetch from "../../Contexts/Fetchs/AxiosFetch";
import {AlertContext, AlertType} from "../../Contexts/AlertContext";
import { TableTypeButton } from "../../Contexts/ButtonContext";
import { MdAccountCircle } from "react-icons/md";
import { HiLockClosed,  HiLockOpen} from "react-icons/hi"

function Editbutton({id, status, type}) {
    const [statuspost, setStatusPost] = useState("");
    const [openview, setOpenview] = useState(true);
    const EditStatusPost = async(e)=>{
        await AxiosFetch.patch("DropsidewayAdmin/ChangeStatusPost",
        {
            "idPost" : id,
            "statuspost" : e
        }
        ).then(result=>console.log(result))
        .catch(error=>console.log(error));
    };

    const EditStatusAccout = async(e)=>{
        await AxiosFetch.patch("DropsidewayAdmin/ChangeStatusAccout",
        {
            "idAccout" : id,
            "statusAccout" : e
        }
        ).then(result=>console.log(result))
        .catch(error=>console.log(error));
    };

    const handlerChangeOpenview =(e)=> {
        if(type === TableTypeButton.MANAGE_POST) {
            setOpenview(!openview);
            if(e==="1"){
                setStatusPost("2");
                EditStatusPost("2");
            } else if(e==="2"){
                setStatusPost("1");
                EditStatusPost("1");
            } else return
        }
        else if(type === TableTypeButton.MANAGE_ADMIN) {
            setOpenview(!openview);
            if(e==="1"){
                console.log('test status "1"');
                setStatusPost("2");
                EditStatusAccout("2");
            } else if(e==="2"){
                console.log('test status "2"');
                setStatusPost("1");
                EditStatusAccout("1");
            } else return
        }
    }
    
    useEffect(()=>{
        setStatusPost(status);
    },[status])

    useEffect(()=>{
        if(status==="1"){
            setOpenview(true);
        } else if (status==="2") {
            setOpenview(false);
        }
    },[status])

    return(
        <div 
            className={`${openview?"container-itemfilterbutton edit":"container-itemfilterbutton-active"}`} 
            onClick={()=>handlerChangeOpenview(statuspost)}>
            {openview?
            <div className="area-icon-itemfilterbutton">
                {
                    type === TableTypeButton.MANAGE_POST ?
                    (
                        <HiEye size="20px" fill="#fff" />
                    )
                    :
                    (
                        <HiLockOpen size="20px" fill="#fff" />
                    )
                }
                
            </div>
            : 
            <div className="area-icon-itemfilterbutton">
                {
                    type === TableTypeButton.MANAGE_POST ?
                    (
                        <HiEyeOff size="20px" fill="#344553" />
                    )
                    :
                    (
                        <HiLockClosed size="20px" fill="#344553" />
                    )
                }
            </div>}
        </div>
    )
}

function Deletebutton({id, deletes, type}) {
    const { setTypeModal, setShowModal, setTitleModal, setDetailModal, setKeepButtonCorrect } = useContext(AlertContext);   
    const hadleAlertComplete = () => {
        setTimeout(()=>{
            setTypeModal(AlertType.Alert);
            setTitleModal("ลบโพสต์เรียบร้อยแล้ว");
            setDetailModal("ได้ทำการลบโพสต์ของจากหน้าเว็บไซต์เรียบร้อยแล้ว");
            setShowModal(true);
        },100)
    }
    const PatchDeletePost = async ()=>{
        await AxiosFetch.patch("DropsidewayAdmin/ChangeStatusPost",
        {
            "idPost": id,
            "statuspost": "0"
        }
        ).then(req=>{
            if(req.data === 'change status a post completed') {
                deletes(true)
                setShowModal(false);
                hadleAlertComplete();
            }
            console.log('delete req: ',req);
            
        })
        .catch(err=>{
            console.log(err)
            hadleAlertErr(err.code, `${err.name} ${err.message}`)
        });
    };

    const PatchDeleteAccout = async ()=>{
        await AxiosFetch.patch("DropsidewayAdmin/ChangeStatusAccout",
        {
            "idAccout": id,
            "statusAccout": "0"
        }
        ).then(req=>{
            if(req.data === 'change status a accout completed') {
                deletes(true)
                setShowModal(false);
                hadleAlertComplete();
            }
            console.log('delete req: ',req);
            
        })
        .catch(err=>{
            console.log(err)
            hadleAlertErr(err.code, `${err.name} ${err.message}`)
        });
    };

    const CancelShowModal = ()=> {
        setShowModal(false);
    }

    const ButtonsModal = [
        {
        title: 'ยกเลิก',
        className: 'button-modal-main-cancel',
        hadler: CancelShowModal
        },
        {
        title: 'ยืนยัน',
        className: 'button-modal-main-confirm',
        hadler: type === TableTypeButton.MANAGE_POST ? PatchDeletePost : PatchDeleteAccout
        }
    ]

    const hadleAlertErr = (err, detail)=> {
        setTypeModal(AlertType.Alert);
        setTitleModal(`เกิดข้อผิดพลาด ${err}`);
        setDetailModal(detail);
        setShowModal(true);
    }

    const hadleConfirmDelete = () => {
        setTypeModal(AlertType.Confirm);
        setTitleModal(type === TableTypeButton.MANAGE_POST ? "คุณต้องการลบรายการนี้ใช่หรือไม่?" : "คุณต้องการลบบัญชีนี้ใช่หรือไม่?");
        setDetailModal(type === TableTypeButton.MANAGE_POST ? "เมื่อทำการลบแล้วจะทำการนำเอาโพสต์ดังกล่าวออกจากหน้าเว็บไซต์" : "เมื่อบัญชีไปแล้วจะไม่สามารถเรียกบัญชีกลับมาได้ ทำให้แน่ใจว่าคุณต้องการลบจริงๆและดำเนินการต่อ");
        setKeepButtonCorrect(ButtonsModal);
        setShowModal(true);
    }


    return(
        <>
            <div className="container-itemfilterbutton delete" onClick={()=>{hadleConfirmDelete()}}>
                <div className="area-icon-itemfilterbutton">
                    <AiFillDelete size="20px" fill="#fff" />
                </div>
            </div>
        </>
    )
}

function Detailbutton({id, status, type}) {
    return(
        <>
            <Link to={type === TableTypeButton.MANAGE_POST ? `/review-post/${id}`: `/profile/${id}`}>
                <div className="container-itemfilterbutton detail">
                    <div className="area-icon-itemfilterbutton">
                        {
                            type === TableTypeButton.MANAGE_POST ?
                            (
                                <AiOutlineFileSearch size="22px" fill="#fff" />
                            )
                            :
                            (
                                <MdAccountCircle size="22px" fill="#fff"/>
                            )
                        }
                        
                    </div>
                </div>
            </Link>
        </>
    )
}

export {Editbutton, Deletebutton, Detailbutton };
import React, { useEffect, useState } from "react";
import './Itemfilterbutton.css'
import { Link } from 'react-router-dom';
import { HiEye, HiEyeOff} from 'react-icons/hi'
import { AiFillDelete, AiOutlineFileSearch } from 'react-icons/ai'
import axios from "axios";

function Editbutton(props) {
    const { idpost, status } = props;
    const [statuspost, setStatusPost] = useState("");
    const [openview, setOpenview] = useState(true);
    
    const EditStatus = async(e)=>{
        const data = await axios.patch("https://localhost:7113/api/DropsidewayAdmin/Changestatus",
        {
            "idPost" : idpost,
            "statuspost" : e
        }
        ).then(result=>console.log(result))
        .catch(error=>console.log(error));
    };

    const handlerChangeOpenview =(e)=> {
            setOpenview(!openview);
            if(e==="1"){
                setStatusPost("2");
                EditStatus("2");
            } else if(e==="2"){
                setStatusPost("1");
                EditStatus("1");
            } else return
            
        };
    
    useEffect(()=>{
        setStatusPost(status);
        console.log(status);
    },[status])

    useEffect(()=>{
        if(status==="1"){
            setOpenview(true);
        } else if (status==="2") {
            setOpenview(false);
        }
    },[status])

    return(
        <div className={`${openview?"container-itemfilterbutton edit":"container-itemfilterbutton-active"}`} onClick={()=>handlerChangeOpenview(statuspost)}>
            {openview?
            <div className="area-icon-itemfilterbutton">
                <HiEye size="20px" fill="#fff" />
            </div>
            : 
            <div className="area-icon-itemfilterbutton">
                <HiEyeOff size="20px" fill="#344553" />
            </div>}
        </div>
    )
}

function Deletebutton(props) {
    const { idpost, statusDel } = props;

    const [checkdelete ,setCheckDelete] = useState(false);    
    
    const DeleteStatus = async ()=>{
        const data = await axios.patch("https://localhost:7113/api/DropsidewayAdmin/Changestatus",
        {
            "idPost": idpost,
            "statuspost": "0"
        }
        ).then(result=>console.log(result))
        .catch(error=>console.log(error));
        setCheckDelete(false);
        statusDel();
    };

    const ModelDelete = () => {
        return (
        <div className={`${checkdelete?"area-modal-delete-open-itemfilterbutton":"area-modal-delete-close-itemfilterbutton"}`} >
            <div className="area-modal-title-itemfilterbutton">
                Are you sure to Delete?
            </div>
            <div className="area-modal-description-itemfilterbutton">
                Description
            </div>
            <div className="area-modal-button-itemfilterbutton">
                <button onClick={()=>{setCheckDelete(false)}}>CLOSE</button>
                <button onClick={DeleteStatus}>DELETE</button>
            </div>
        </div>
        )
    }

    


    return(
        <>
            <div className={`${checkdelete?"modal-delete-open-itemfilterbutton":"modal-delete-close-itemfilterbutton"}`}>
                <ModelDelete />
                <div className="modal-backgroup" onClick={()=>{setCheckDelete(false)}}></div>
            </div>

            <div className="container-itemfilterbutton delete" onClick={()=>{setCheckDelete(true)}}>
                <div className="area-icon-itemfilterbutton">
                    <AiFillDelete size="20px" fill="#fff" />
                </div>
            </div>
        </>
    )
}

function Detailbutton(props) {
    const { idpost } = props;

    return(
        <>
            <Link to="">
                <div className="container-itemfilterbutton detail">
                    <div className="area-icon-itemfilterbutton">
                        <AiOutlineFileSearch size="22px" fill="#fff" />
                    </div>
                </div>
            </Link>
        </>
    )
}

export {Editbutton, Deletebutton, Detailbutton};
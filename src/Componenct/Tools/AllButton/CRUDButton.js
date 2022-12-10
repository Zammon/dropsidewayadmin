import React, { useState } from "react";
import '../../../CSS/Admincss/CrudButton.css'
import { BsZoomIn,BsFillEyeFill,BsFillEyeSlashFill } from 'react-icons/bs'
import { IoTrashBin } from 'react-icons/io'
import { MdCancel } from 'react-icons/md'

function DetailButton(props) {
    return(
        <>
            <div className="detail-container short">
                <BsZoomIn size="18px" fill="#FFFFFF"/>
            </div>
        </>
    )
}

function ViewButton(props) {
    const { admin } = props;

    const [statusView,setStatusView] = useState(true);

    function changstatusView() {

    }

    return(
        <>
            <div className="view-container-open short">
                <BsFillEyeFill size="19px" fill="#FFFFFF"/>
            </div>
        </>
    )
}

function DeleteButton(props) {
    return(
        <>
            <div className="delete-container short">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.875 3H12.375V1.4375C12.375 0.748047 11.8145 0.1875 11.125 0.1875H4.875C4.18555 0.1875 3.625 0.748047 3.625 1.4375V3H1.125C0.779297 3 0.5 3.2793 0.5 3.625V4.25C0.5 4.33594 0.570312 4.40625 0.65625 4.40625H1.83594L2.31836 14.6211C2.34961 15.2871 2.90039 15.8125 3.56641 15.8125H12.4336C13.1016 15.8125 13.6504 15.2891 13.6816 14.6211L14.1641 4.40625H15.3438C15.4297 4.40625 15.5 4.33594 15.5 4.25V3.625C15.5 3.2793 15.2207 3 14.875 3ZM10.9688 3H5.03125V1.59375H10.9688V3Z" fill="white"/>
                </svg>
            </div>
        </>
    )
}

function CancelButton() {
    return(
        <>
            <div className="cancel-container short">
                <MdCancel size="1.5rem" fill="#989898" />
            </div>
        </>
    )
}

export {DetailButton, ViewButton, DeleteButton, CancelButton};
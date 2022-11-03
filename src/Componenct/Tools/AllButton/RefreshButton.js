import React from "react";
import '../../../CSS/Admincss/Refresh.css'
import { BsArrowClockwise } from 'react-icons/bs'

function RefreshBT() {
return(
    <>
        <div className="refresh-button">
            <div className="area-icon-refresh">
                <BsArrowClockwise size="1rem" fill="#C9C9C9" />
            </div>
            <div className="area-name-refresh">
                Refresh
            </div>
        </div>
    </>
    )
}

export default RefreshBT;
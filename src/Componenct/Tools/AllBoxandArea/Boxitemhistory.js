import React from "react";
import { DetailButton,CancelButton } from '../../Tools/AllButton/CRUDButton'
import '../../../CSS/Admincss/Boxitems.css'

function BoxitemHistory() {
    return(
        <>
            <div className="item-list">
                
                <div className="area-button-crud-history">
                    <DetailButton />
                    <CancelButton />
                </div>
            </div>
        </>
    )
}

export default BoxitemHistory;
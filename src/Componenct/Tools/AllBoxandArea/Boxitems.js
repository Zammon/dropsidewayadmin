import React from "react";
import '../../../CSS/Admincss/Boxitems.css'
import {DetailButton, ViewButton, DeleteButton} from '../../Tools/AllButton/CRUDButton'

function Boxitems(props) {
    return(
        <>
        <div className="item-list">
            
            <div className="area-button-crud">
                <DetailButton />
                <ViewButton />
                <DeleteButton />
            </div>
        </div>
        </>
    )
}

export default Boxitems;
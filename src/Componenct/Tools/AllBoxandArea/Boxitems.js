import React from "react";
import '../../../CSS/Admincss/Boxitems.css'

function Boxitems(props) {
    return(
        <>
        <div className="item-list">
            {props.children}
        </div>
        </>
    )
}

export default Boxitems;
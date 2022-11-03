import React from "react";
import '../../../CSS/Admincss/BoxHistory.css'

function BoxHistory(props) {
    return(
        <>
            <div className="boxhistory-container box-shadow">
                {props.children}
            </div>
        </>
    )
}

export default BoxHistory;
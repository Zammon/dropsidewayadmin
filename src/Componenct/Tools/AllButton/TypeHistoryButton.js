import React from "react";
import '../../../CSS/Admincss/TypeHistoryButton.css'

function TypeHistoryButton(props) {
    const { choices } = props;

    return(
        <>
            <div className="area-choice-history">
                <div className="point-check">
                    
                </div>
                <div className="name-choice">
                    {choices}
                </div>
            </div>
        </>
    )
}

export default TypeHistoryButton;
import React from "react";

function BoxNull(props) {
    const { titles } = props;

    return(
        <>
            <div className="area-null-items">
                {titles}
            </div>
        </>
    )
}

export default BoxNull;
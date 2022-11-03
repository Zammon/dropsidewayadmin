import React from "react";
import '../../../CSS/Admincss/InputSort.css'
import { BsFillCaretDownFill } from 'react-icons/bs'

function InputSort(props) {
    const { NameInput } = props;
    return(
    <>
        <div className="sort-container">
            <div className="sort-item-names">
                {NameInput}
            </div>
            <div className="sort-icon-area">
                <BsFillCaretDownFill size="10px" fill="#D9D9D9"/>
            </div>
        </div>
    </>
    )
}

export default InputSort;
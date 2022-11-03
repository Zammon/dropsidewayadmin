import React from "react";
import '../../../CSS/Admincss/InputSearch.css';
import { BsSearch } from "react-icons/bs";

function InputSearch() {
    return(
        <>
         <div className="search-container">
            <div className="area-icon">
                <BsSearch size="14px" fill="#FFFFFF"/>
            </div>
            <input className="input-managesearch" placeholder="Search user name tag type" />
         </div>
        </>
    )
}

export default InputSearch;
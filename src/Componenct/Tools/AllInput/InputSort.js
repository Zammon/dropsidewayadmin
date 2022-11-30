import React, { useEffect, useState } from "react";
import '../../../CSS/Admincss/InputSort.css'
import { BsFillCaretDownFill } from 'react-icons/bs'

function InputSort(props) {
    const { nametypes } = props;
    const [statusSortClick,setStatusSortClick] = useState(false);
    const [statusSortHover,setStatusSortHover] = useState(false);
    useEffect(()=>{
        // if(){

        // }else{

        // }
    },[])

    function opendropdownsort(props) {
        setStatusSortClick(props);
    }

    return(
    <>
        <div className={`sort-container ${statusSortClick ? 'sort-color-open':'sort-color-close'}`} onClick={()=>{opendropdownsort(!statusSortClick)}}>
            <div className="sort-item-names">
                {nametypes}
            </div>
            <div className="sort-icon-area">
                <BsFillCaretDownFill size="10px" fill={`${statusSortClick ? '#838383':'#C9C9C9'}`}/>
            </div>
        </div>
    </>
    )
}

export default InputSort;
import React, { useState } from "react";
import '../../../CSS/Admincss/Inputdropdown.css'
import InputSort from "./InputSort";


function InputDropdown(props) {
    
    const [statusOpenDropdown,setStatusOpenDropdown] = useState(false);
    const { Names, ItemsList } = props;
    
    function opendropdownsort(props) {
        if(props) {
            setStatusOpenDropdown(true)
            console.log(props)
        } else {
            setStatusOpenDropdown(false)
            console.log(props)
        }
    }

    function ItemDropdown(props) {
        return(
            <>
                <div className="inputDropdown-area-list">
                    a
                </div>
            </>
        )
    }   
    
    return(
        <>
            <div className="inputDropdown-container">
                <div className="inputDropdown-area-types" onClick={()=>{opendropdownsort(!statusOpenDropdown)}}>
                    <InputSort NameInput={Names} />
                </div>
                {statusOpenDropdown ? <div className="inputDropdown-area-box">
                        <ItemDropdown />
                        <ItemDropdown />
                        <ItemDropdown />
                        <ItemDropdown />
                    </div> : ""
                }
            </div>
        </>
    )
}

export default InputDropdown;
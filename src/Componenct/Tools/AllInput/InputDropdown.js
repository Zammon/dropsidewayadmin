import React, { useState } from "react";
import '../../../CSS/Admincss/Inputdropdown.css'
import InputSort from "./InputSort";


function InputDropdown(props) {
    
    const [statusOpenDropdown,setStatusOpenDropdown] = useState(false);
    const [sendName,setSendName] = useState();
    const { Ojects } = props;
    
    const mapsOjects = Ojects.list_in_type.map((list,index)=>{
        return ( 
        <ItemDropdown key={index}>
            {list.item}
        </ItemDropdown>
        )
    });

    function opendropdownsort(props) {
        if(props) {
            setStatusOpenDropdown(props)
            console.log(props)
        } else {
            setStatusOpenDropdown(props)
            console.log(props)
        }
    }

    function changNameType(props){
        setSendName(props)
        console.log(props);
    }

    function ItemDropdown(props) {
        return(
            <>
                <div className="inputDropdown-area-list">
                    {props.children}
                </div>
            </>
        )
    }   
    
    return(
        <>
            <div className="inputDropdown-container">
                <div className="inputDropdown-area-types" onClick={()=>{opendropdownsort(!statusOpenDropdown)}}>
                    <InputSort nametypes={Ojects.name_type} />
                </div>
                {statusOpenDropdown ? 
                    <div style={{minHeight: Ojects.minheight}} className="inputDropdown-area-box" >
                        {mapsOjects}
                    </div> 
                    : 
                    ""
                }
            </div>
        </>
    )
}

export default InputDropdown;
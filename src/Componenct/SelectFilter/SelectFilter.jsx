import React from 'react'
import './SelectFilter.css'
import { HiOutlineRefresh } from 'react-icons/hi'

export default function SelectFilter({label, optionObject, filters}) {
    return(
        <select className="select-container" onChange={filters}>
            <option>{label}</option>
            {optionObject?.map((e,i)=>{
            return  <option key={i} value={e}>
                {e}
            </option>
            })}
        </select>
    )
}

export function RefreshButton({onClick}) {
    return(
        <div className="container-refresh-button" onClick={onClick}>
            <div className='icon-refresh'>
                <HiOutlineRefresh />
            </div>
            รีเฟรช
        </div>
    )
}
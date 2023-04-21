import React from 'react'
import './SelectFilter.css'
import { HiOutlineRefresh } from 'react-icons/hi'

export default function SelectFilter({label, value, optionObject, filters}) {
    return(
        <select className="select-container" value={value} onChange={filters}>
            <option value=''>{label}</option>
            {optionObject?.map((e,i)=>{
            if(e === 'เปิดการใช้งาน') {
                return  (
                <option key={i} value={1}>
                    {e}
                </option>
            )} else if (e === 'ปิดการใช้งาน') {
                return (
                <option key={i} value={2}>
                    {e}
                </option>
            )}
            
            return (
                <option key={i} value={e}>
                    {e}
                </option>
            )
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
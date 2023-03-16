//React import
import React, { useState, useEffect, useContext } from "react";
//CSS import
import "./Home.css";
//Axios import
import axios from "axios";
import { SelectsContext } from "../UseContexts/SelectContext";

export function CardStatusLength(props) {
    const { label, color, length } = props;
    return (
        <div className="card-status-length-container" style={{color: `${color??'#000'}`}}>
            <div className="length-status-container" style={{border: `7px solid ${color}`}}>
                {length}
            </div>
            <div className="label-status-container">
                {label}
            </div>
        </div>
    )
}

export default function Home() {
    const { selectTypePost } = useContext(SelectsContext);

    return(
       <>
        <div className="container-page">
            <div className="row-contailer-homepage">
                <div className="left-container-homepage">
                    <CardStatusLength label="จำนวนโพสที่รับแจ้งในวันนี้" color="#E50158" length="10"/>
                    <CardStatusLength label="จำนวนผู้ที่เข้ามาของหาย" color="#F8AD11" length="5"/>
                    <CardStatusLength label="จำนวนโพสที่ยังไม่มีผู้เข้ามารับของคืน" color="#193B56" length="5"/>
                </div>
                <div className="center-container-homepage">
                    <>Center</>
                </div>
                <div className="right-container-homepage">
                    <>Right</>
                </div>
            </div>
            <div className="bottom-container-homepage">
                <>Bottom</>
            </div>
        </div>
       </>
    )
}
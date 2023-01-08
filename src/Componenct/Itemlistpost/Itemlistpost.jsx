import React, { useEffect, useState } from "react";
import { Deletebutton, Detailbutton, Editbutton } from "../Itemfilterbutton/Itemfilterbutton";
import './Itemlistpost.css'


export default function Itemlistpost(props) {
    const { targetpost, statuspost, img, title, type, categoryitem, tag, area, profile, firstname, lastname,date, time } = props;
    
    const [statusType, setStatusType] = useState();

    const [statusDelete, setStatusDelete] = useState("");
    

    const handlerDelete = ()=>{
        setStatusDelete("opacity");
    }

    useEffect(()=>{
        if(type === "ตามหาเจ้าของ"){
            setStatusType(true);
        }else {
            setStatusType(false);
        }
    },[type])
    
    useEffect(()=>{
        setStatusDelete("")
    },[props])

    return(
        <div className={`container-item-open-itemlistpost ${statusDelete}`}>
            <div className="area-imgs-itemlistpost">
                <img className="images-full" src={img} />
            </div>
            <div className="area-title-itemlistpost">
                {title}
            </div>
            <div className={`area-type-itemlistpost ${statusType?"meet":"find"}`}>
                <div className="frame-type-post-itemlistpost">
                    {type}
                </div>
            </div>
            <div className="area-categoryitem-itemlistpost">
                {categoryitem}
            </div>
            <div className="area-tag-itemlistpost">
                <div className="area-frame-itemlistpost">
                    {tag}
                </div>
            </div>
            <div className="area-lost-itemlistpost">
                <div className="area-frame-itemlistpost">
                    {area}
                </div>
            </div>
            <div className="area-posted-itemlistpost">
                <div className="area-img-itemlistpost">
                    <img className="images-full" src={profile}/>
                </div>
                <div className="area-name-itemlistpost">
                    {`${firstname} ${lastname}`}
                </div>
            </div>
            <div className="area-date-time-itemlistpost">
                {`${date} ${time}`}
            </div>
            <div className="area-crud-itemlistpost">
                <Detailbutton idpost={targetpost}/>
                <Editbutton idpost={targetpost} status={statuspost}/>
                <Deletebutton idpost={targetpost} statusDel={handlerDelete}/>
            </div>
        </div>
    )
}
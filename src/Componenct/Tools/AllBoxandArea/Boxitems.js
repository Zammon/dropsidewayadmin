import React, { useEffect, useState } from "react";
import '../../../CSS/Admincss/Boxitems.css'
import {DetailButton, ViewButton, DeleteButton} from '../../Tools/AllButton/CRUDButton'

import { CutDate, CutTime } from "../../../Service/CutdatatimeService";

function Boxitems(props) {
    const { List } = props;
    const [statusTypePost, setStatusTypePost] = useState();

    useEffect(()=>{
        if(List.type==="ตามหาเจ้าของ"){
            setStatusTypePost(true);
        }else {
            setStatusTypePost(false);
        }
    },[])

    return(
        <>
        <div className="item-list">
            <div className="area-image-item-boxitems">
                <div className="area-image-listpost">
                    <img className="images-full" src={List.nameImage} />
                </div>
            </div>
            <div className="area-title-post-boxitems">
                {List.title}
            </div>
            <div className="area-type-post-boxitems">
                <div className={`frame-type-post ${statusTypePost?"meet":"find"}`}>
                    {List.type}
                </div>
            </div>
            <div className="area-category-item-boxitems">
                {List.categoryItem}
            </div>
            <div className="area-tag-boxitems">
                <div className="frame-tag-post">
                    {List.tagsPost}
                </div>
            </div>
            <div className="area-lost-or-meet-boxitems">
                <div className="">
                    {List.areaLost}
                </div>
            </div>
            <div className="area-post-by-boxitems">
                <div className="area-image-admin-listpost">
                    <img className="images-full" src={List.profileAccout}/>
                </div>
                <div className="area-name-admin-listpost">
                    {`${List.firstname} ${List.lastname}`}
                </div>
            </div>
            <div className="area-post-date-time-boxitems">
                {`${CutDate(List.datePost)}  ${CutTime(List.timePost)}`}
            </div>
            <div className="area-button-crud">
                <DetailButton />
                <ViewButton />
                <DeleteButton />
            </div>
        </div>
        </>
    )
}

export default Boxitems;
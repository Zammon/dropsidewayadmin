import { useEffect, useState } from "react"
import { CutTime, CutDate } from "../../../../Service/cut.service"
import { Deletebutton, Detailbutton, Editbutton } from "../../../Itemfilterbutton/Itemfilterbutton";
import { BsImageAlt } from 'react-icons/bs';
import './ItemManagePost.css'
import { TableTypeButton } from "../../../../Contexts/ButtonContext";

export default function ItemManagePost({
        id,
        image,
        title,
        type,
        categoryItem,
        tag,
        area,
        datePost,
        timePost,
        status,
        profile,
        firstname,
        lastname,
        header,
    }) {
        const [ typecolor, setTypeColor ] = useState();
        const [ deletes, setDeletes ] = useState(false);
        useEffect(()=>{
            if(type.toLowerCase() === "ตามหาเจ้าของ") {
                setTypeColor(true)
            } else {
                setTypeColor(false)
            }
        },[type])

        return(
            <div className="container-item-managepost" style={{display: deletes?'none':'flex'}}>
                <div className="image-post">
                    {
                        image ?
                            <img className="images-full" src={image} alt="" />
                        :
                            <BsImageAlt color="#5F5F5F"/>
                    }
                </div>
                <div className="text-overflow" style={{height: "100%", width: header[1].width}}>
                    <div className="text-overflow"  style={{width: header[1].width, maxWidth: header[1].width,}}>
                        {title}
                    </div>
                </div>
                <div style={{height: "100%", justifyContent:  header[2].center? "center" : "flex-start",width: header[2].width}}>
                    <div className={`border-type-post ${typecolor? "meet" : "find"}`}>
                       {type} 
                    </div>
                </div>
                <div style={{height: "100%", width: header[3].width, maxWidth: header[3].width,}}>
                    <div className="text-overflow"  style={{width: header[3].width, maxWidth: header[3].width,}}>
                        {categoryItem}
                    </div>
                </div>
                <div style={{height: "100%",justifyContent:  header[4].center? "center" : "flex-start", width: header[4].width}}>
                    <div className="tags">
                        {tag}
                    </div>
                </div>
                <div style={{height: "100%",justifyContent:  header[5].center? "center" : "flex-start", width: header[5].width}}>
                    <div className="tags">
                        {area}
                    </div>
                </div>
                <div style={{height: "100%", justifyContent:  header[6].center? "center" : "flex-start", width: header[6].width}}>
                    <div className="profile-post" style={{marginRight: "10px"}}>
                        <img className="images-full" src={profile} alt="" />
                    </div>
                    <div className="text-overflow" style={{width: header[6].width - 50}}>
                        {`${firstname} ${lastname}`}
                    </div>
                </div>
                <div style={{height: "100%", justifyContent:  header[7].center? "center" : "flex-start", width: header[7].width}}>
                    <div className="display-flex" style={{height: "100%", width: header[7].width}}>
                        {`${CutDate(datePost)} | ${CutTime(timePost)}`}
                    </div>
                </div>
                <div style={{height: "100%", justifyContent: "space-evenly", width: header[8].width}}>
                    <Detailbutton id={id} status={status} type={TableTypeButton.MANAGE_POST}/> 
                    <Editbutton id={id} status={status} type={TableTypeButton.MANAGE_POST}/>
                    <Deletebutton id={id} deletes={setDeletes} type={TableTypeButton.MANAGE_POST}/>
                </div>
            </div>
        )
}
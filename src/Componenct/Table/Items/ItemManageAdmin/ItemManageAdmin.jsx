import { useEffect, useState } from "react"
import { CutDate, CutTel } from "../../../../Service/cut.service"
import { Deletebutton, Detailbutton, Editbutton } from "../../../Itemfilterbutton/Itemfilterbutton"
import './ItemManageAdmin.css'
import profileNone from '../../../../userIconProfile.png'

export default function ItemManageAdmin({
        id,
        type,
        profile,
        firstname,
        lastname,
        gender,
        tel,
        date,
        createAt,
        status,
        header,
    }) {
        const [typColor,setTypeColor] = useState();
        
        useEffect(()=>{
            if(type.toLowerCase()==="superadmin"){
                setTypeColor(false);
            } else {
                setTypeColor(true)
            }
        },[type])

        return(
            <div className="container-item-manageadmin">
                <div className="profile-admin margin-right">
                        <img className="images-full" src={profile ? profile : profileNone} alt="" />
                </div>
                <div className="margin-right" style={{height: "100%", justifyContent:  header[1].center? "center" : "flex-start", minWidth: header[1].width}}>
                    <div className={`type-admin ${typColor ? "admin-color-navprofile":"superadmin-color-navprofile"}`}>
                        {type}
                    </div>
                </div>
                <div className="margin-right" style={{height: "100%", justifyContent:  header[2].center? "center" : "flex-start", minWidth: header[2].width}}>
                    <div>
                        {`${firstname} ${lastname}`}
                    </div>
                </div>
                <div className="margin-right" style={{height: "100%", justifyContent:  header[3].center? "center" : "flex-start", minWidth: header[3].width}}>
                    <div>
                        {`#${id}`}
                    </div>
                </div>
                <div className="margin-right" style={{height: "100%", justifyContent:  header[4].center? "center" : "flex-start", minWidth: header[4].width}}>
                    {gender}
                </div>
                <div className="margin-right" style={{height: "100%", justifyContent:  header[5].center? "center" : "flex-start", minWidth: header[5].width}}>
                    {CutTel(tel)}
                </div>
                <div className="margin-right" style={{height: "100%", justifyContent:  header[6].center? "center" : "flex-start", minWidth: header[6].width}}>
                    {CutDate(date)}
                </div>
                <div style={{height: "100%", justifyContent:  header[7].center? "center" : "flex-start", minWidth: header[7].width}}>
                    {CutDate(createAt)}
                </div>
                <div style={{height: "100%", justifyContent:  "space-evenly", minWidth: header[8].width}}>
                    <Detailbutton id={id} status={status} />
                    <Editbutton id={id} status={status}/>
                    <Deletebutton id={id} status={status}/>
                </div>
            </div>
        )
}
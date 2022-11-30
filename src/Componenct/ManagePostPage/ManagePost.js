import { useState, useEffect } from "react";
/* Component */
import ManageSearch from "../Tools/AllInput/InputSearch";
import BoxHistory from "../Tools/AllBoxandArea/BoxHistory";
import RefreshBT from "../Tools/AllButton/RefreshButton";
import Boxitems from "../Tools/AllBoxandArea/Boxitems";
import InputSort from "../Tools/AllInput/InputSort";
import InputDropdown from "../Tools/AllInput/InputDropdown";
import BoxNull from "../Tools/AllBoxandArea/BoxNull";

/* CSS */
import '../../CSS/Admincss/ManageUser.css'

/* Model */
import { managepostPage } from '../../Model/settingPages'
import { historyUsers, historyPosts } from "../../Model/History";
import BoxitemHistory from "../Tools/AllBoxandArea/Boxitemhistory";


function ManagePost(){ 
    const [checkHistoryPost,setCheckHistoryPost] = useState();
    const historymap = historyPosts.map((h,index)=>{
        return(
        <BoxHistory key={index} Object={h} />
        );
    })

    useEffect(()=>{
        if(historyUsers.length === 0) {
            setCheckHistoryPost(false)
        console.log(false)
        } else {
            setCheckHistoryPost(true)
        console.log(true)
        }
    },[])

    return(
        <>
        <div className="bg-color-main">
            {/* MANAGE POST ADMINS PAGE  */}
            <div className="area-title-manages">
                {/* top area */}
                <div className="area-title-top">
                    <div className="manage-title-page">
                        Manage Posts
                    </div>
                    <ManageSearch />
                </div>
                {/* bottom area */}
                <div className="area-description">
                This page is for managing user accout on the website.
                </div>
            </div>
            <div className="area-history-latest">
                <div className="area-description" style={{padding: "0 0 0 16px"}} >
                    History View Latest :
                </div>
                <div className={`area-box-history${checkHistoryPost?'-not-null':'-null'}`}>
                    {checkHistoryPost ? historymap : <BoxNull titles="There are no searches in your search history." />}
                </div>
            </div>
            <div className="area-list-item-manageuser">
                <div className="area-list-left">
                    <div className="area-input-filter-left">
                        <div className="jus-description area-title-box-menu">
                            Menu Manage Posts :
                        </div>
                        <div className="area-input-sort ">
                            <InputDropdown Ojects={managepostPage[0]}/>
                            <InputDropdown Ojects={managepostPage[1]}/>
                            <InputDropdown Ojects={managepostPage[2]}/>
                            <RefreshBT />
                        </div>
                    </div>
                    <div className="box-list-left">
                        <div className="area-title-name">
                            
                        </div>
                        <div className="area-items">
                            <Boxitems />
                            <Boxitems />
                            <Boxitems />
                            <Boxitems />
                            <Boxitems />
                            <Boxitems />
                        </div>
                    </div>
                </div>
                <div className="area-list-right">
                    <div className="area-input-filter-right">
                        <div className="jus-description">
                            History Manage Posts :
                        </div>
                            <RefreshBT />
                    </div>
                    <div className="box-list-right">
                        <div className="area-title-name">
                            
                        </div>
                        <div className="area-items">
                            <BoxitemHistory />
                            <BoxitemHistory />
                            <BoxitemHistory />
                            <BoxitemHistory />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ManagePost;
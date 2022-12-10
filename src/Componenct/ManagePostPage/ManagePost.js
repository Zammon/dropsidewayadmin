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
import axios from "axios";


function ManagePost(){ 
    /* api:get */
    const [ListPost,setListPost] = useState();
    const listpost = async ()=> {
        const data = await axios.get("https://localhost:7228/api/HomeAdmin/get/GetListPost");
        setListPost(data);
    }

    useEffect(()=>{
        listpost();
    },[])

    /* map + component */
    const mapListPost = ListPost && ListPost.data.map((data,index)=>{
        return <Boxitems key={index} List={data&&data}/>
    });

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
                            <div className="area-image-item-managepost">ImageItem</div>
                            <div className="area-title-post-managepost">Title Post</div>
                            <div className="area-type-post-managepost">Type Post</div>
                            <div className="area-category-item-managepost">CategoryItem</div>
                            <div className="area-tag-managepost">Tag</div>
                            <div className="area-lost-or-meet-managepost">Area</div>
                            <div className="area-post-by-managepost">Posted by</div>
                            <div className="area-post-date-time-managepost">Posted Date and Time</div>
                            <div className="area-button-crud-managepost"></div>
                        </div>
                        <div className="area-items">
                            {mapListPost}
                        </div>
                    </div>
                </div>
                {/* <div className="area-list-right">
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
                </div> */}
            </div>
        </div>
        </>
    );
}

export default ManagePost;
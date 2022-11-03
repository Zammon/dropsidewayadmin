import React from "react";
import ManageSearch from "../Tools/AllInput/InputSearch";
import BoxHistory from "../Tools/AllBoxandArea/BoxHistory";
import RefreshBT from "../Tools/AllButton/RefreshButton";
import '../../CSS/Admincss/ManageUser.css'
import Boxitems from "../Tools/AllBoxandArea/Boxitems";
import InputSort from "../Tools/AllInput/InputSort";
import InputDropdown from "../Tools/AllInput/InputDropdown";

function ManageUser() {
    return(
        <>
        <div className="bg-color-main">
            {/* MANAGE POST ADMINS PAGE  */}
            <div className="area-title-manages">
                {/* top area */}
                <div className="area-title-top">
                    <div className="manage-title-page">
                        Manage User
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
                <div className="area-box-history">
                    <BoxHistory />
                    <BoxHistory />
                    <BoxHistory />
                    <BoxHistory />
                </div>
            </div>
            <div className="area-list-item-manageuser">
                <div className="area-list-left">
                    <div className="area-input-filter-left">
                        <div className="jus-description area-title-box-menu">
                            Menu Manage Posts :
                        </div>
                        <div className="area-input-sort ">
                            <InputDropdown Names="select type user"/>
                            <InputDropdown Names="select type gender"/>
                            <InputDropdown Names="select status user"/>
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
                            <Boxitems />
                            <Boxitems />
                            <Boxitems />
                            <Boxitems />
                            <Boxitems />
                            <Boxitems />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ManageUser;
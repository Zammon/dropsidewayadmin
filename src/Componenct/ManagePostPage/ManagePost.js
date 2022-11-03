import React from "react";
import '../../CSS/Admincss/ManagePost.css'
import ManageSearch from "../Tools/AllInput/InputSearch";
import BoxHistory from "../Tools/AllBoxandArea/BoxHistory";

function ManagePost() {
    return(
        <>
        <div className="bg-color-main">
            {/* MANAGE POST ADMINS PAGE  */}
            <div className="area-title-manages">
                {/* top area */}
                <div className="area-title-top">
                    <div className="manage-title-page">
                        Manage Post
                    </div>
                    <ManageSearch />
                </div>
                {/* bottom area */}
                <div className="area-description">
                This page is for managing user posts on the website.
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
            <div className="">

            </div>
        </div>
        </>
    );
}

export default ManagePost;
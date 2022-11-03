import React from "react";
import ManageSearch from "../Tools/AllInput/InputSearch";

function ManageReport() {
    return(
        <>
        <div className="bg-color-main">
            {/* MANAGE POST ADMINS PAGE  */}
            <div className="area-title-manages">
                {/* top area */}
                <div className="area-title-top">
                    <div className="manage-title-page">
                        Manage Report
                    </div>
                    <ManageSearch />
                </div>
                {/* bottom area */}
                <div className="area-description">
                This page is for managing user accout on the website.
                </div>
            </div>
            <div className="area-history-latest">
                
            </div>
        </div>
        </>
    );
}

export default ManageReport;
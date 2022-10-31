import React from "react";
import Slidebar from "../Tools/Slidebar";
import Navbar from "../Tools/Navbar"
import admins from "../../Model/Admins";
import "../../CSS/Admincss/Home.css"

function Home() {
    return(
       <>
        <Slidebar />
        <Navbar admin={admins}/>
        <div className="bg-color-main">
            <div className="area-box-reports">
                <div className="box-reports">
                    <div className="amount-reports post-active">
                       <text className="amount-numbers text-post-active">15</text> 
                    </div>
                    <div className="area-text-reports">
                        <div className="title-text-reports ">Post active to day</div>
                        <div className="detail-text-reports">This card shows the status of the post on the website today.</div>
                    </div>
                </div>
                <div className="box-reports">
                    <div className="amount-reports report-active">
                        <text className="amount-numbers text-report-active">9</text>
                    </div>
                    <div className="area-text-reports">
                        <div className="title-text-reports">Report active to day</div>
                        <div className="detail-text-reports">This card shows the status of the report on the website today.</div>
                    </div>
                </div>
                <div className="box-reports">
                    <div className="amount-reports recomment-active">
                        <text className="amount-numbers text-recomment-active">11</text>
                    </div>
                    <div className="area-text-reports">
                        <div className="title-text-reports">Recomment by user</div>
                        <div className="detail-text-reports">This card shows the status of the report on the website today.</div>
                    </div>
                </div>
            </div>
            
        </div>
       </>
    )
}

export default Home;

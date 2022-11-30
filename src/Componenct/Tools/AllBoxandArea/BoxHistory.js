import React, { useEffect, useState } from "react";
import '../../../CSS/Admincss/BoxHistory.css'

function BoxHistory(props) {
    const { Object } = props;
    const [boxhistorys,setBoxhistorys] = useState();
    
    useEffect(()=>{
        if(Object.typePage === 1) {
            setBoxhistorys(<UserPage />);
            console.log(Object.typePage)
        }else if (Object.typePage === 2) {
            setBoxhistorys(<PostPage />);
            console.log(Object.typePage)
        }
    },[])

    function UserPage() {
        return(
        <>
            <div className="boxhistory-container box-shadow">
                <div className="box-history-user-top">
                    <div className="box-history-user-top-left">
                        <img className="img-full-frame" src={Object.user_profile} alt="" />
                    </div>
                    <div className="box-history-user-top-right">
                        <div className="box-history-user-top-right-top">
                            {Object.user_name}
                        </div>
                        <div className="box-history-user-top-left-bottom">
                            E-Mail: {Object.user_email}
                        </div>
                    </div>
                </div>
                <div className="box-history-user-bottom">
                    <div className="box-history-user-top-right">
                            <div className="box-history-user-bottom-right-top">
                                BirthDay: {Object.user_bd}
                            </div>
                            <div className="box-history-user-bottom-left-bottom">
                                Active accout: {Object.active_accout}
                            </div>
                    </div>
                </div>
            </div>
        </>
        )
    }

    function PostPage() {
        return(
        <>
            <div className="boxhistory-container box-shadow">
                <div className="box-history-post-top">
                    <div className="box-history-post-top-left">
                        <div className="area-history-profile">
                            <img className="img-full-frame" src={Object.user_profile} />
                        </div>
                        <div className="area-history-name">
                            {Object.user_name}
                        </div>
                    </div>
                    <div className="box-history-post-top-right">
                        {`Posted: ${Object.user_post.posted.date} ${Object.user_post.posted.time}`}
                    </div>
                </div>
                <div className="box-history-post-bottom">
                    <div className="area-texts-post">
                        {Object.user_post.target}
                    </div>
                </div>
            </div>
        </>
        )
    }

    return(
        <>
            {boxhistorys}
        </>
    )
}

export default BoxHistory;
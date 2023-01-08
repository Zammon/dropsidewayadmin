//React import
import React, { useEffect, useState } from "react";
//CSS import
import './ProfileAdmin.css'
//Axois import
import axios from "axios";
import NavProfile from "../NavProfile/NavProfile";
import CardPost from "../CardPost/CardPost";

//Component import

function ProfileAdmin(props) {
    // Disassemble of Props 
    // useState: Keep from api
    const [posts, setPosts] = useState();
    // Set API :
    // [HTTPGet]
    const PostOfAdmin = async () =>{
        const data = await axios.post("https://localhost:7113/api/DropsidewayAdmin/Getlistposttarget",
        {
            "idAccout": "620108020009"
        }
        );
        setPosts(data);
    };
    const mapCardPost = posts&&posts.data.map((e,i)=>{
        return <CardPost key={i} id={ posts && e.idPost} title={ posts && e.title} img={ posts && e.nameImage } type={ posts && e.type } tag={ posts && e.tagsPost} area={ posts && e.areaLost} date={ posts && e.datePost} time={ posts && e.timePost}/>
    });
    
    useEffect(()=>{
        PostOfAdmin();
    },[])

    // ***Return this page***
    return(
        <>  
            <div className="container-page">
                <NavProfile />
                <div className="container-profileadmin">
                    <div className="title-profileadmin">
                        {`โพสทั้งหมด(${posts?posts&&posts.data.length:"-"})`}
                    </div>
                    <div className="description-profileadmin">
                        {`โดย`}
                        <div className="name-admin-profileadmin">
                            {`Sahahphap Vorasan`}
                        </div>
                    </div>
                    <div className="select-type-post-profileadmin">
                        ประเภทของโพส : 
                    </div>
                    <div className="area-list-post-profileadmin">
                        {posts?mapCardPost:<div className="none-item">ยังไม่มีการโพส</div>}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileAdmin;
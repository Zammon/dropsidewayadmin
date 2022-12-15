//React import
import React, { useState } from "react";
//CSS import
import './ProfileAdmin.css'
//Axois import
import axios from "axios";

//Component import



function ProfileAdmin(props) {
    // Disassemble of Props 
    // useState: Keep from api
    const [posts, setPosts] = useState();
    // Set API :
    // [HTTPGet]
    const PostOfAdmin = async () =>{
        const data = axios.get("");
        setPosts(data);
    };
    
    
    // ***Return this page***
    return(
        <>  
            <div className="container-page">
                Admin profile
            </div>
        </>
    )
}

export default ProfileAdmin;
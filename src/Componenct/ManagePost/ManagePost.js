//React import
import { useState, useEffect } from "react";
//CSS import
import './ManagePost.css'
//Axios import
import axios from "axios";

//Component import


function ManagePost(){ 
    const [ListPost,setListPost] = useState();
    const listpost = async ()=> {
        const data = await axios.get("https://localhost:7228/api/HomeAdmin/get/GetListPost");
        setListPost(data);
    }

    useEffect(()=>{
        listpost();
    },[])

    return(
        <>
            <div className="container-page">
                Manage Post
            </div>
        </>
    );
}

export default ManagePost;
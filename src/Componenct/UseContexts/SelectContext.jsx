import React,{ useState } from 'react';
import { useEffect } from 'react';
import { Areapostapi, Categorypostapi, Tagpostapi, Typepostapi } from '../../Service/RequestAPI.service';
import axios from 'axios';

export const SelectsContext = React.createContext();

export default function SelectContextProvider({ children }) {
    
    const [selectTypePost, setSelectTypePost] = useState();
    const [selectTypeArea, setSelectTypeArea] = useState();
    const [selectTypeCategory, setSelectTypeCategory] = useState();
    const [selectTypeTags, setSelectTypeTags] = useState();

const locallhost = "localhost:7113";

// Accout
const Accoutapi = async ()=>{
     return await axios.get(`https://${locallhost}/api/HomeAdmin/login/AdminLogin?accoutname=staff01&password=123456`)
}

// Typepost
const Typepostapi = async () =>{
    const values = await axios.get(`https://${locallhost}/api/DropsidewayWebsite/Findtype/ประเภทโพส`)
    console.log(values);
    if((values&&values.data.length!==0)&&values&&values.request.status===200){
        return setSelectTypePost(values);
    }else return setSelectTypePost("No any items.");
}

// Categorypost
const Categorypostapi = async () =>{
    const values = await axios.get(`https://${locallhost}/api/DropsidewayWebsite/Findtype/ประเภทสิ่งของหาย`)
    console.log(values);
    if((values&&values.data.length!==0)&&values&&values.request.status===200){
        return setSelectTypeCategory(values);
    }else return setSelectTypeCategory("No any items.");
}


// Tagpost
const Tagpostapi = async () =>{
    const values = await axios.get(`https://${locallhost}/api/DropsidewayWebsite/Findtype/แท็กของที่หาย`)
    console.log(values);
    if((values&&values.data.length!==0)&&values&&values.request.status===200){
        return setSelectTypeTags(values);
    }else return setSelectTypeTags("No any items.");
}

// Area missing or meetting lost item post
const Areapostapi = async () =>{
    const values = await axios.get(`https://${locallhost}/api/DropsidewayWebsite/Findtype/บริเวณพื้นที่พบเจอของหาย`)
    console.log(values);
    if((values&&values.data.length!==0)&&values&&values.request.status===200){
        return setSelectTypeArea(values);
    }else return setSelectTypeArea("No any items.");
}

// Create Post CreatePost.page
const CreateNewpostapi = async (data) => {
    const values = await axios.post(`https://${locallhost}/api/DropsidewayAdmin/CreatePosts`,data)
    console.log(values);
}


// List Item Post ManagePost.page
const Listpostmanageapi = async () => {
    const values = await axios.get(`https://${locallhost}/api/DropsidewayAdmin/GetListPost`)
    console.log(values);
    if((values&&values.data.length!==0)&&values&&values.request.status===200){
        return values
    }else return "No any items."
}

useEffect( ()=>{
    Typepostapi();
    Categorypostapi();
    Tagpostapi();
    Areapostapi();
},[])
    
    return(
        <SelectsContext.Provider 
            value={{
                selectTypePost,setSelectTypePost,
                selectTypeArea,setSelectTypeArea,
                selectTypeCategory,setSelectTypeCategory,
                selectTypeTags,setSelectTypeTags
                }}
        >
            {children}
        </SelectsContext.Provider>
    );
}
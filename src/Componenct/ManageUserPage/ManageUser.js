import React, { useEffect, useState } from "react";
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
import { manageuserPage } from '../../Model/settingPages'
import {historyUsers, historyPosts} from "../../Model/History";
import BoxitemHistory from "../Tools/AllBoxandArea/Boxitemhistory";
import axios from "axios";

function ManageUser(props) {
    const { admin } = props;
    
    const createNewPost = async (e) => {
        e.preventDefault();
        const bodyFormData = new FormData();
        bodyFormData.values("IdAccout",IdAccout);
        bodyFormData.values("Type",Type);
        bodyFormData.values("Title",Title);
        bodyFormData.values("Directory",Directory);
        bodyFormData.values("CategoryItem",CategoryItem);
        bodyFormData.values("Tag",Tag);
        bodyFormData.values("Area",Area);
        bodyFormData.values("DirectoryArealost",DirectoryArealost);
        bodyFormData.append("NameImage",Image);
        await axios.post('https://localhost:7228/api/HomeAdmin/create/Posts',bodyFormData,{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }
   const [IdAccout,setIdAccout] = useState('');
   const [Type, setType] = useState("ตามหาเจ้าของ");
   const [Title, setTitle] = useState("ทดสอบหน้าเว็บ 1");
   const [Directory, setDirectory] = useState("- - -");
   const [CategoryItem, setCategoryItem] = useState("อุปกรณ์อีเล็กทรอนิกส์");
   const [Tag, setTag] = useState("แท็บเล็ต");
   const [Area, setArea] = useState("อาคาร 4");
   const [DirectoryArealost, setDirectoryArealost] = useState("- - -");
   const [Image, setImage] = useState(null);

    const [Typepost,setTypePost] = useState();
    const [Typetags,setTypetags] = useState();
    const [TypeArea,setTypeArea] = useState();
    const [Typeitems,setTypeItems] = useState();
    
    const maptypepost = Typepost&&Typepost.data.nameItemFilter.map((e,i)=>{
        return<option key={i} value={Typepost&&e}>{Typepost&&e}</option>
    })

    const maptypetags = TypeArea&&TypeArea.data.nameItemFilter.map((e,i)=>{
        return<option key={i} value={Typetags&&e}>{Typetags&&e}</option>
    })

    const maptypearea = TypeArea&&TypeArea.data.nameItemFilter.map((e,i)=>{
        return<option key={i} value={TypeArea&&e}>{TypeArea&&e}</option>
    })

    const maptypeitem = Typeitems&&Typeitems.data.nameItemFilter.map((e,i)=>{
        return<option key={i} value={Typeitems&&e}>{Typeitems&&e}</option>
    })

   const typepost = async () => {
    const data = await axios.get(`https://localhost:7228/api/Filters/find/FindType/ประเภทโพส`);
        setTypePost(data);
        console.log(data);
    }

    const typetag = async () => {
        const data = await axios.get(`https://localhost:7228/api/Filters/find/FindType/แท็กของที่หาย`);
            setTypetags(data);
            console.log(data);
        }
    

    const typearea = async () => {
        const data = await axios.get(`https://localhost:7228/api/Filters/find/FindType/บริเวณพื้นที่พบเจอของหาย`);
        setTypeArea(data);
        console.log(data);
    }

    const typeitems = async () => {
        const data = await axios.get(`https://localhost:7228/api/Filters/find/FindType/ประเภทสิ่งของหาย`);
        setTypeItems(data);
        console.log(data);
    }
    /* Create new post (Without Image) */
    // const createNewPostNoneImage = async (e)=>{
    //     e.preventDefault();
    //     await axios.post(`https://localhost:7228/api/HomeAdmin/create/PostsNoneImage`,
    //         {
    //             "idAccout": IdAccout,
    //             "type": Type,
    //             "title": Title,
    //             "directory": Directory,
    //             "categoryItem": CategoryItem,
    //             "tag": Tag,
    //             "area": Area,
    //             "directoryArealost": DirectoryArealost
    //           })
    // .then(result => console.log(result))
    // .catch(error => console.log(error))}

   useEffect(()=>{
    typearea();
    typetag();
    typepost();
    typeitems();
    setIdAccout(admin.data.idAccout);
    // console.log(bodyFormData);
   },[])

//    useEffect(()=>{
//     // bodyFormData.append("IdAccout",IdAccout);
//     // bodyFormData.append("Type",Type);
//     // bodyFormData.append("Title",Title);
//     // bodyFormData.append("Directory",Directory);
//     // bodyFormData.append("CategoryItem",CategoryItem);
//     // bodyFormData.append("Tag",Tag);
//     // bodyFormData.append("Area",Area);
//     // bodyFormData.append("DirectoryArealost",DirectoryArealost);
//     // bodyFormData.append("NameImage",Image);
//    },[Image])

    return(
        <>
        <div className="bg-color-main">
            {/* MANAGE POST ADMINS PAGE  */}
            <div className="area-title-manages">
                {/* top area */}
                <div className="area-title-top">
                    <div className="manage-title-page">
                        Create Post
                    </div>
                    {/* <ManageSearch /> */}
                </div>
                {/* bottom area */}
                <div className="area-description">
                This page is for create post about lostitem or meetingitem on the website.
                </div>
                <form className="form-create-post" onSubmit={createNewPost}>
                    <label>Type</label>
                    <select className="input-create-post" value={Type} onChange={(e)=>{setType(e.target.value)}}>
                        <option value="">{`กรุณาเลือก${Typepost&&Typepost.data.nameFilter}`}</option>
                        {maptypepost}
                    </select>
                    {/* <input className="input-create-post" name="Type" value={Type} onChange={(e)=>{setType(e.target.value)}}/> */}
                    <label>Title</label>
                    <input className="input-create-post" name="Title" value={Title} onChange={(e)=>{setTitle(e.target.value)}}/>
                    <label>Directory</label>
                    <input className="input-create-post" name="Directory" value={Directory} onChange={(e)=>{setDirectory(e.target.value)}}/>
                    <label>CategoryItem</label>
                    <select className="input-create-post" value={Area} onChange={(e)=>{setCategoryItem(e.target.value)}}>
                        <option value="">{`กรุณาเลือก${Typeitems&&Typeitems.data.nameFilter}`}</option>
                        {maptypeitem}
                    </select>
                    {/* <input className="input-create-post" name="CategoryItem" value={CategoryItem} onChange={(e)=>{setCategoryItem(e.target.value)}}/> */}
                    <label>Tag</label>
                    <select className="input-create-post" value={Tag} onChange={(e)=>{setTag(e.target.value)}}>
                        <option value="">{`กรุณาเลือก${Typetags&&Typetags.data.nameFilter}`}</option>
                        {maptypetags}
                    </select>
                    {/* <input className="input-create-post" name="Tag" value={Tag} onChange={(e)=>{setTag(e.target.value)}}/> */}
                    <label>Area</label>
                    <select className="input-create-post" value={Area} onChange={(e)=>{setArea(e.target.value)}}>
                        <option value="">{`กรุณาเลือก${TypeArea&&TypeArea.data.nameFilter}`}</option>
                        {maptypearea}
                    </select>
                    {/* <input className="input-create-post" name="Area" value={Area} onChange={(e)=>{setArea(e.target.value)}}/> */}
                    <label>DirectoryAreaLost</label>
                    <input className="input-create-post" name="DirectoryAreaLost" value={DirectoryArealost} onChange={(e)=>{setDirectoryArealost(e.target.value)}}/>
                    <label>Image</label>
                    <input name="Image" type="file" onChange={(e)=>{setImage(e.target.files)}}/>
                    <button className="button-create-post" onClick={createNewPost}>Create Post</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default ManageUser;
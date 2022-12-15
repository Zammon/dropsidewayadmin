// React import
import React, { useEffect, useState } from "react";
//CSS import
import './CreatePost.css'
//Axois import
import axios from "axios";

// Component


function CreatePost(props) {
    // Disassemble of Props 
    const { admin } = props;

    // Set API :
    // [HTTPGet]
        // Get api Type Post
        const typepost = async () => {
            const data = await axios.get(`https://localhost:7228/api/Filters/find/FindType/ประเภทโพส`);
                setTypePost(data);
                console.log(data);
            }
        // Get api Tag Post
        const typetag = async () => {
            const data = await axios.get(`https://localhost:7228/api/Filters/find/FindType/แท็กของที่หาย`);
                setTypetags(data);
                console.log(data);
            }
        // Get api CategoryItem
        const typeitems = async () => {
            const data = await axios.get(`https://localhost:7228/api/Filters/find/FindType/ประเภทสิ่งของหาย`);
                setTypeItems(data);
                console.log(data);
            }
        // Get api Area
            const typearea = async () => {
                    const data = await axios.get(`https://localhost:7228/api/Filters/find/FindType/บริเวณพื้นที่พบเจอของหาย`);
                    setTypeArea(data);
                    console.log(data);
                }

            // useState: Set data from api get
            const [Typepost,setTypePost] = useState();
            const [Typetags,setTypetags] = useState();
            const [TypeArea,setTypeArea] = useState();
            const [Typeitems,setTypeItems] = useState();

                // Map(): Filter Item in <Option> 
                const maptypepost = Typepost&&Typepost.data.nameItemFilter.map((e,i)=>{
                    return<option key={i} value={Typepost&&e}>{Typepost&&e}</option>
                })
            
                const maptypetags = Typetags&&Typetags.data.nameItemFilter.map((e,i)=>{
                    return<option key={i} value={Typetags&&e}>{Typetags&&e}</option>
                })
            
                const maptypearea = TypeArea&&TypeArea.data.nameItemFilter.map((e,i)=>{
                    return<option key={i} value={TypeArea&&e}>{TypeArea&&e}</option>
                })
            
                const maptypeitem = Typeitems&&Typeitems.data.nameItemFilter.map((e,i)=>{
                    return<option key={i} value={Typeitems&&e}>{Typeitems&&e}</option>
                })

                    // useEffect: Call api filter 
                    useEffect(()=>{
                        typearea();
                        typetag();
                        typepost();
                        typeitems();
                        Accouts();
                    },[])
    
        const Accouts = async () =>{
            const data = await axios.get("https://localhost:7228/api/HomeAdmin/login/AdminLogin?accoutname=staff01&password=123456")
            setIdAccout(data);
            console.log(`Data: ${data} and app.js runing`)
        }
                
    // [HTTPPost]
        // Create New Post
        const createNewPost = async (e) => {
                e.preventDefault();
                const bodyFormData = new FormData();
                bodyFormData.append("IdAccout",IdAccout.data.idAccout);
                bodyFormData.append("Type",Type);
                bodyFormData.append("Title",Title);
                bodyFormData.append("Directory",Directory);
                bodyFormData.append("CategoryItem",CategoryItem);
                bodyFormData.append("Tag",Tag);
                bodyFormData.append("Area",Area);
                bodyFormData.append("DirectoryArealost",DirectoryArealost);
                bodyFormData.append("NameImage",Image);
                console.log(...bodyFormData);
                await axios.post('https://localhost:7228/api/HomeAdmin/create/Posts',bodyFormData)
                .then(result => console.log(result))
                .catch(error => {
                    console.log(error.response.data) 
                    console.log(error.response.status) 
                    console.log(error.response.headers)
                })
            }

            const [newpost, setNewpost] = useState(
                {
                    IdAccout: "",
                    Type: "",
                    Title: "",
                    Directory: "",
                    CategoryItem: "",
                    Tag: "",
                    Area: "",
                    Directory: "",
                    Image: {}
                }
            )

            // useState: Data New Post
            const [IdAccout,setIdAccout] = useState("");
            const [Type, setType] = useState("ตามหาเจ้าของ");
            const [Title, setTitle] = useState("");
            const [Directory, setDirectory] = useState("");
            const [CategoryItem, setCategoryItem] = useState("");
            const [Tag, setTag] = useState("");
            const [Area, setArea] = useState("");
            const [DirectoryArealost, setDirectoryArealost] = useState("");
            const [Image, setImage] = useState([]);
        
            useEffect(()=>{
                console.log(`iaaccout: ${IdAccout && IdAccout.data.idAccout}`);
                console.log(`type: ${Type}`);
                console.log(`title: ${Title}`);
                console.log(`directory: ${Directory}`);
                console.log(`category item: ${CategoryItem}`);
                console.log(`tag: ${Tag}`);
                console.log(`area: ${Area}`);
                console.log(`diretory area lost: ${DirectoryArealost}`);
                console.log(`image: ${Image && Image.name}`);
            },[IdAccout,Type,Title,Directory,CategoryItem,Tag,Area,DirectoryArealost,Image])
            
    // ***Return this page***
    return(
        <>
        <div className="container-page">
            <div className="content-top-createpost">
                <div className="content-top-title-createpost">
                    Create Post
                </div>
                <div className="content-top-description-createpost">
                    This page is for creating posts on lost and found items.
                </div>
            </div>
            <div className="content-bottom-createpost">
                {/* Left content */}
                <div className="content-createpost">
                    <div className="area-input-createpost">
                        <label className="label-createpost">หัวข้อกะทู้</label>
                        <input className="" name="title" value={Title} onChange={(e)=>{setTitle(e.target.value)}}/>
                    </div>
                    <div className="area-input-createpost">
                        <label className="label-createpost">รายละเอียดเพิ่มเติม</label>
                        <textarea className="" name="directory" value={Directory} onChange={(e)=>{setDirectory(e.target.value)}}/>
                    </div>
                    <div className="area-input-createpost">
                        <label className="label-createpost">ประเภทของโพส</label>
                        <div className="area-content-right-createpost">
                            <div className="">
                                <div className="content-text-top-createpost">
                                    <input className="area-input-radio-createpost" type="radio" name="typepost" value="ตามหาเจ้าของ" onChange={(e)=>{setType(e.target.value)}} defaultChecked={true} />
                                    <label className="label-createpost">ตามหาเจ้าของ</label>
                                </div>
                                <div className="content-text-bottom-createpost">
                                    คือโพสส์ที่คุณต้องการประกาศหาเจ้าของของหายที่คุณเจอมาแล้วต้องการนำส่งเจ้าของ
                                </div>
                            </div>
                            <div className="">
                                <div className="content-text-top-createpost">
                                    <input className="area-input-radio-createpost" type="radio" name="typepost" value="ตามหาของหาย" onChange={(e)=>{setType(e.target.value)}}/>
                                    <label className="label-createpost">ตามหาของหาย</label>
                                </div>
                                <div className="content-text-bottom-createpost">
                                    คือโพสส์ที่คุณต้องการประกาศหาของที่คุณทำหายหรือของที่คุณกำลังตามหาอยู่
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="area-input-createpost">
                        <div className="area-label-createpost">
                            <label className="label-createpost">รูปภาพประกอบ</label>
                            <div className="directory-comment-createpost">{`(สามารถอัปโหลดได้มากสุด 4 รูป)`}</div>
                        </div>
                        <div className="area-input-images-createpost">
                            <input className="" name="images" type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
                            <div className="area-interface-upload-createpost">
                                <div className="">
                                    ไอคอน
                                </div>
                                <div className="">
                                    Upload Image
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="area-input-createpost">
                        <label className="label-createpost">หมวดหมู่ของหาย</label>
                        {/* <input className="" name="categoryItem" value={CategoryItem} onChange={(e)=>{setCategoryItem(e.target.value)}}/> */}
                        <select value={CategoryItem} onChange={(e)=>{setCategoryItem(e.target.value)}}>
                            <option className="" value=""> {`[ Plese select category item ]`} </option>
                            {maptypeitem}
                        </select>
                    </div>
                    <div className="area-input-createpost">
                        <div className="area-label-createpost">
                            <label className="label-createpost">แท็กเพิ่มเติม</label>
                            <div className="directory-comment-createpost">{`(สามารถเลือกแท็กได้มากสุด 3 แท็ก)`}</div>
                        </div>
                        {/* <input className="" name="tag" value={Tag} onChange={(e)=>{setTag(e.target.value)}}/> */}
                        <select value={Tag} onChange={(e)=>{setTag(e.target.value)}}>
                            <option className="" value=""> {`[ Plese select tag item ]`} </option>
                            {maptypetags}
                        </select>
                    </div>
                    <div className="area-input-createpost">
                        <label className="label-createpost">บริเวณที่เจอสิ่งของ/คาดว่าทำของหาย</label>
                        {/* <input className="" name="area" value={Area} onChange={(e)=>{setArea(e.target.value)}} /> */}
                        <select value={Area} onChange={(e)=>{setArea(e.target.value)}}>
                            <option className="" value=""> {`[ Plese select area lost ]`} </option>
                            {maptypearea}
                        </select>
                    </div>
                    <div className="area-input-createpost">
                        <label className="label-createpost">รายละเอียดที่เพิ่มเติม</label>
                        <textarea className="" name="directoryarea" value={DirectoryArealost} onChange={(e)=>{setDirectoryArealost(e.target.value)}}/>
                    </div>
                    <div className="area-input-createpost">
                        <button onClick={createNewPost}>Create Post</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default CreatePost;
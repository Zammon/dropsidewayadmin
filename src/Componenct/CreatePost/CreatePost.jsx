// React import
import React, { useContext, useEffect, useRef, useState } from "react";
//CSS import
import './CreatePost.css'
//Axois import
import axios from "axios";
import { ImCross } from "react-icons/im"
import { BsPlusSquareFill } from "react-icons/bs"
// Component
import { SelectsContext } from "../UseContexts/SelectContext";
import { Typepostapi } from "../../Service/RequestAPI.service";

function CreatePost(props) {
  // Disassemble of Props
  const { admin } = props;
  const { selectTypeArea, selectTypeCategory, selectTypeTags } = useContext(SelectsContext);

  // useState: Data New Post
  const [IdAccout, setIdAccout] = useState("");
  const [Type, setType] = useState("ตามหาของหาย");
  const [Title, setTitle] = useState("");
  const [Directory, setDirectory] = useState("");
  const [CategoryItem, setCategoryItem] = useState("");
  const [Tag, setTag] = useState("");
  const [Area, setArea] = useState("");
  const [DirectoryArealost, setDirectoryArealost] = useState("");
  const [Images, setImage] = useState([]);

  // useState: Data Person Report 
  const [firstname,setFirstName] = useState("");
  const [lastname,setLastName] = useState("");
  const [nickname,setNickName] = useState("");
  const [studentid,setStudentID] = useState("");
  const [typeperson,setTypePerson] = useState("User");
  const [tels,setTels] = useState("");
  const [email,setEmail] = useState("");

  //useRef: Input Type File images
  const inputImagesRef = useRef();

  useEffect(() => {
    console.log(`iaaccout: ${IdAccout && IdAccout.data.idAccout}`);
    console.log(`type: ${Type}`);
    console.log(`title: ${Title}`);
    console.log(`directory: ${Directory}`);
    console.log(`category item: ${CategoryItem}`);
    console.log(`tag: ${Tag}`);
    console.log(`area: ${Area}`);
    console.log(`diretory area lost: ${DirectoryArealost}`);
    console.log("-------------------------------");
    Images.map((e, i) => {
      console.log(e);
    });
    console.log("-------------------------------");
    console.log(`firstname: ${firstname}`);
    console.log(`lastname: ${lastname}`);
    console.log(`nickname: ${nickname}`);
    console.log(`studentID: ${studentid}`);
    console.log(`type: ${typeperson}`);
    console.log(`tel.: ${tels}`);
    console.log(`email: ${email}`);
    console.log("*********************************");
  }, [IdAccout,Type,Title,Directory
    ,CategoryItem,Tag,Area,DirectoryArealost
    ,Images,firstname,lastname,nickname
    ,studentid,typeperson,tels,email
  ]);
  
  const [typeReport, setTypeReport] = useState(true);
  
  //Upload Image More one
  const handleChange = (event) => {
    event.preventDefault();
    if (Images.length + event.target.files.length <= 4) {
      if (Images) {
        setImage([...Images, ...event.target.files]);
        console.log(Images[0]);
      } else {
        setImage(event.target.files);
        console.log(event.target.files);
      }
    } else return;
  };

  //Delete Target Image
  const delImage = (index) => {
    const newImage = [...Images];
    newImage.splice(index, 1);
    setImage(newImage);
  };

 

  const maptypetags =
    selectTypeTags && selectTypeTags.data.nameItemFilter.map((e, i) => {
      return (
        <option key={i} value={selectTypeTags && e}>
          {selectTypeTags && e}
        </option>
      );
    });

  const maptypearea =
    selectTypeArea && selectTypeArea.data.nameItemFilter.map((e, i) => {
      return (
        <option key={i} value={selectTypeArea && e}>
          {selectTypeArea && e}
        </option>
      );
    });

  const maptypeitem =
    selectTypeCategory && selectTypeCategory.data.nameItemFilter.map((e, i) => {
      return (
        <option key={i} value={selectTypeCategory && e}>
          {selectTypeCategory && e}
        </option>
      );
    });

  // Create New Post
  const createNewPost = async (e) => {
    e.preventDefault();
    const bodyFormData = new FormData();
    bodyFormData.append("IdAccout", IdAccout.data.idAccout);
    bodyFormData.append("Type", Type);
    bodyFormData.append("Title", Title);
    bodyFormData.append("Directory", Directory);
    bodyFormData.append("CategoryItem", CategoryItem);
    bodyFormData.append("Tag", Tag);
    bodyFormData.append("Area", Area);
    bodyFormData.append("DirectoryArealost", DirectoryArealost);
    
    bodyFormData.append("FirstName", firstname);
    bodyFormData.append("LastName", lastname);
    bodyFormData.append("NickName", nickname);
    bodyFormData.append("StudentID", studentid);
    bodyFormData.append("TypePerson", typeperson);
    bodyFormData.append("Tel", tels);
    bodyFormData.append("Email", email);

    Images.forEach((Img) => {
      bodyFormData.append("NameImage", Img);
    });
    await axios
      .post("https://localhost:7228/api/HomeAdmin/create/Posts", bodyFormData)
      .then((result) => {
        if (result.data === "Complete") {
          // inputTypePostRef.current.click();
          setTitle("");
          setDirectory("");
          setCategoryItem("");
          setTag("");
          setArea("");
          setDirectoryArealost("");
          setImage([]);
        }
        console.log(result);
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      });
  };

  // ***Return this page***
  return (
    <>
      <div className="container-page">
        <div className="content-top-createpost">
          <div className="content-top-title-createpost">Create Post</div>
          <div className="content-top-description-createpost">
            This page is for creating posts on lost and found items.
          </div>
        </div>
        <div className="content-bottom-createpost">
          <div className="area-content-top-createpost">
            <div className="item-left-content-createpost">
              <div className="item-left-first-line-createpost">
                <div className="title-post-createpost">
                  หัวข้อโพส
                  <input type="text" value={Title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="กรอกหัวข้อโพส..." />
                </div>
                <div className="type-post-createpost">
                  ประเภทของโพส
                  <div className="area-input-type-post-createpost">
                    <div className="">
                      <input
                        name="typepost"
                        type="radio"
                        defaultChecked={true}
                        value="ตามหาของหาย"
                        onChange={(e)=>{setType(e.target.value)}}
                      />
                      ตามหาของหาย
                    </div>
                    <div className="">
                      <input name="typepost" type="radio"  value="ตามหาเจ้าของ" onChange={(e)=>{setType(e.target.value)}}/>
                      ตามหาเจ้าของ
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-left-second-line-createpost">
                รายละเอียดโพส
                <textarea value={Directory} onChange={(e)=>{setDirectory(e.target.value)}} placeholder="กรอกรายละเอียดของโพส..." />
              </div>
              <div className="item-left-third-line-createpost">
                <div className="category-post-createpost">
                  หมวดหมู่ของหาย
                  <select value={CategoryItem} onChange={(e)=>{setCategoryItem(e.target.value)}}>
                    <option value="">{`[กรุณาเลือกหมวดหมู่ของสิ่งของ]`}</option>
                    {maptypeitem}
                  </select>
                </div>
                <div className="tag-post-createpost">
                  ขนิดของของหาย
                  <select value={Tag} onChange={(e)=>{setTag(e.target.value)}}>
                    <option value="">{`[กรุณาเลือกชนิดสิ่งของที่หาย]`}</option>
                    {maptypetags}
                  </select>
                </div>
              </div>
            </div>

            <div className="item-right-content-createpost">
              <div className="item-left-first-line-createpost">
                บริเวณที่พบเจอของหายหรือคาดว่าทำของหาย
                <select value={Area} onChange={(e)=>{setArea(e.target.value)}}>
                  <option value="">{`[กรุณาเลือกสถานที่ที่พบเจอของหาย หรือ คาดว่าของจะหาย]`}</option>
                  {maptypearea}
                </select>
              </div>
              <div className="item-left-second-line-createpost">
                รายละเอียดสถานที่พบเจอของหายหรือคาดว่าทำของหาย
                <textarea value={DirectoryArealost} onChange={(e)=>{setDirectoryArealost(e.target.value)}} placeholder="กรอกรายละเอียดบริเวณที่เจอของหาย..." />
              </div>
              <div className="item-left-third-line-createpost">
                อัปโหลดรูปภาพ
                <div className="area-upload-img-createpost">
                  <div className="upload-imgae-createpost">
                  {Images.length!==0? 
                      <div className="area-image-createpost">
                      {Images.length!=0 && Images.map((e,i)=>{
                        return(
                          <div className="area-images-createpost"key={i}>
                            <div className="area-icon-del-createpost" onClick={()=>delImage(i)}>
                              <ImCross size="15px" fill="#b4b4b4"/>
                            </div>
                            <img className="images-full" src={URL.createObjectURL(e)} />
                          </div>
                        )
                      })}

                      {Images.length<=4?
                        <div className="area-upload-images-createpost" 
                        onClick={(e) => {
                          e.preventDefault();
                          inputImagesRef.current.click();
                        }}>
                            <div className="">
                              <BsPlusSquareFill fill="#D9D9D9" size="100%"/>
                            </div>
                            <div className="">
                              อัพโหลดรูปภาพ    
                            </div>
                        </div>
                      :""}
                    </div>

                    : <div className="area-none-image-createpost" 
                        onClick={(e) => {
                          e.preventDefault();
                          inputImagesRef.current.click();
                        }}>
                          <div className="">
                            <BsPlusSquareFill fill="#D9D9D9" size="100%"/>
                          </div>
                          <div className="">
                            อัพโหลดรูปภาพ    
                          </div>
                      </div>
                    }

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="area-content-bottom-createpost">
            <div className="item-top-content-createpost">
              <div className="area-input-createpost">
                ชื่อจริง
                <input type="text" value={firstname} onChange={(e)=>{setFirstName(e.target.value)}} placeholder="กรอกชื่อจริงผู้แจ้ง..." />
              </div>
              <div className="area-input-createpost">
                นามสกุล
                <input type="text" value={lastname} onChange={(e)=>{setLastName(e.target.value)}} placeholder="กรอกนามสกุลผู้แจ้ง..." />
              </div>
              <div className="area-input-createpost">
                ชื่อเล่น
                <input type="text" value={nickname} onChange={(e)=>{setNickName(e.target.value)}} placeholder="กรอกชื่อเล่นผู้แจ้ง..." />
              </div>
              <div className="area-input-createpost">
                รหัสนักศึกษา
                <input
                  type="text"
                  value={studentid} 
                  onChange={(e)=>{setStudentID(e.target.value)}}
                  placeholder="กรอกรายรหัสนักศึกษาผู้แจ้ง..."
                  disabled={typeReport}
                />
              </div>
            </div>
            <div className="item-bottom-content-createpost">
              <div className="area-input-createpost">
                ประเภทผู้แจ้ง
                <div className="area-input-type-createpost">
                  <div className="input-type-radio-createpost">
                    <input type="radio" name="reportpersontype" value="User" onChange={(e)=>{setTypePerson(e.target.value); setTypeReport(true)}} defaultChecked={true}/>
                    ผู้ใช้ทั่วไป
                  </div>
                  <div className="input-type-radio-createpost">
                    <input type="radio" name="reportpersontype" value="Student" onChange={(e)=>{setTypePerson(e.target.value); setTypeReport(false)}}/>
                    นักศึกษา
                  </div>
                </div>
              </div>
              <div className="area-input-createpost">
                เบอร์โทรศัทพ์
                <input type="text" value={tels} onChange={(e)=>{setTels(e.target.value)}} placeholder="กรอกเบอร์โทรศัพท์ผู้แจ้ง..." />
              </div>
              <div className="area-input-createpost">
                อีเมล
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="กรอกอีเมลผู้แจ้ง..." />
              </div>
              <input
                style={{display: "none"}}
                ref={inputImagesRef}
                className=""
                name="images"
                type="file"
                accept="image/*"
                onChange={handleChange}
                multiple
              />
            </div>
          </div>
          <button className="" onClick={createNewPost}>สร้างโพส</button>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
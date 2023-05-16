import React, { useContext, useEffect, useRef, useState } from "react";
import './CreatePost.css'
import { ImCross } from "react-icons/im"
import { BsPlusSquareFill } from "react-icons/bs"
import { SelectsContext } from "../../Contexts/SelectContext";
import AxiosFetch from "../../Contexts/Fetchs/AxiosFetch";
import { AlertContext, AlertType } from "../../Contexts/AlertContext";

function CreatePost(props) {
  // Disassemble of Props
  const userID = JSON.parse(localStorage.getItem('userId'));
  const { selectTypeArea, selectTypeCategory, selectTypeTags } = useContext(SelectsContext);
  const { 
    setTypeModal, 
    setShowModal,
    setTitleModal,
    setDetailModal,
} = useContext(AlertContext);
  // useState: Data New Post
  const [Type, setType] = useState("ตามหาของหาย");
  const [Title, setTitle] = useState("");
  const [Directory, setDirectory] = useState("");
  const [CategoryItem, setCategoryItem] = useState("");
  const [tagSelect, setTagSeleect] = useState([]);
  const [Tag, setTag] = useState("");
  const [Area, setArea] = useState("");
  const [DirectoryArealost, setDirectoryArealost] = useState("");
  const [Images, setImage] = useState([]);
  const [disableTags, setDisableTags] = useState(true);

  // useState: Data Person Report 
  const [firstname,setFirstName] = useState("");
  const [lastname,setLastName] = useState("");
  const [nickname,setNickName] = useState("");
  const [studentid,setStudentID] = useState("");
  const [typeperson, setTypePerson] = useState("User");
  const [tels,setTels] = useState("");
  const [email,setEmail] = useState("");
  // varidations
  const [titleValidation,setTitleValidation] = useState(false);
  const [directoryValidation,setDirectoryValidation] = useState(false);
  const [catectoryValidation,setCatectoryValidation] = useState(false);
  const [tagValidation,setTagValidation] = useState(false);
  const [areaValidation,setAreaValidation] = useState(false);
  const [directoryAreaValidation,setDirectoryAreaValidation] = useState(false);
  const [imagesValidation,setImagesValidation] = useState(false);
  const [firstnameValidation,setFirstnameValidation] = useState(false);
  const [lastnameValidation,setLastnameValidation] = useState(false);
  const [nicknameValidation,setNicknameValidation] = useState(false);
  const [studentIdValidation,setStudentIdValidation] = useState(false);
  const [statusInformer, setStatusInformer] = useState(false);
  const [resetStatus, setResetStatus] = useState();
  
  const hadleAlterCompleted = () => {
    setTypeModal(AlertType.Alert);
    setTitleModal("สร้างโพสต์สำเร็จ");
    setDetailModal("โพสต์ใหม่ได้ทำการอัพเดทขึ้นบนเว็บไซต์เป็นที่เรียบร้อยแล้ว");
    setShowModal(true);
  }

  const hadleAlterValidation = () => {
    setTypeModal(AlertType.Alert);
    setTitleModal("กรุณาตรวจสอบข้อมูลอีกครั้งก่อนโพสต์");
    setDetailModal("ตรวจเช็คข้อมูลว่ากรอกข้อมูลครบท่อนหรือไม่ ก่อนทำการกดโพสต์ใหม่อีกครั้ง");
    setShowModal(true);
  }

  const hadleAlterFailed = () => {
    setTypeModal(AlertType.Alert);
    setTitleModal("การสร้างโพสต์มีปัญหา!");
    setDetailModal("เกิดข้อผิดพลาดระหว่างการสร้างโพสต์ กรุณาตรวจสอยเครือข่ายของท่านให้เรียบร้อนเสียก่อน");
    setShowModal(true);
  }
  
  useEffect(()=>{
    console.log("images: ", Images)
  },[Images])

  //useRef: Input Type File images
  const inputImagesRef = useRef();
  
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
  tagSelect && tagSelect?.itemFilters?.map((e, i) => {
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
    let checkAfterSendData = false;
    const setTimeToDefault = () => {
      setTimeout(()=>{
          setResetStatus(null);
      },10)
    }

    if(!Title) {
      setTitleValidation(true)
      checkAfterSendData = true;
    } else {
      setTitleValidation(false);
    }

    if(!Directory) {
      setDirectoryValidation(true)
      checkAfterSendData = true;
    }else {
      setDirectoryValidation(false);
    }

    if(!CategoryItem) {
      setCatectoryValidation(true)
      checkAfterSendData = true;
    }else {
      setCatectoryValidation(false);
    }

    if(!Tag) {
      setTagValidation(true)
      checkAfterSendData = true;
    }else {
      setTagValidation(false);
    }

    if(!Area) {
      setAreaValidation(true)
      checkAfterSendData = true;
    }else {
      setAreaValidation(false);
    }

    if(!DirectoryArealost) {
      setDirectoryAreaValidation(true)
      checkAfterSendData = true;
    }else {
      setDirectoryAreaValidation(false);
    }

    if(Images.length === 0) {
      setImagesValidation(true)
      checkAfterSendData = true;
    }else {
      setImagesValidation(false);
    }

    if(statusInformer) {
      if(!firstname) {
        setFirstnameValidation(true)
        checkAfterSendData = true;
      }else {
        setFirstnameValidation(false);
      }

      if(!lastname) {
        setLastnameValidation(true)
        checkAfterSendData = true;
      }else {
        setLastnameValidation(false);
      }

      if(!nickname) {
        setNicknameValidation(true)
        checkAfterSendData = true;
      }else {
        setNicknameValidation(false);
      }

      if(!typeReport) {
        if(!studentid) {
          setStudentIdValidation(true)
          checkAfterSendData = true;
        }else {
          setStudentIdValidation(false);
        }
      }
    }

    if(checkAfterSendData) {
      hadleAlterValidation();
      return;
    }

    e.preventDefault();
    const bodyFormData = new FormData();
    bodyFormData.append("IdAccout", userID);
    bodyFormData.append("Type", Type);
    bodyFormData.append("Title", Title);
    bodyFormData.append("Directory", Directory);
    bodyFormData.append("CategoryItem", CategoryItem);
    bodyFormData.append("Tag", Tag);
    bodyFormData.append("Area", Area);
    bodyFormData.append("DirectoryArea", DirectoryArealost);
    Images.forEach((Img) => {
      bodyFormData.append("Image", Img);
    });

    if(statusInformer) {
      bodyFormData.append("FirstName", firstname);
      bodyFormData.append("LastName", lastname);
      bodyFormData.append("NickName", nickname);
      bodyFormData.append("StudentID", studentid);
      bodyFormData.append("TypePerson", typeperson);
      bodyFormData.append("Tel", tels);
      bodyFormData.append("Email", email);
    }

    await AxiosFetch.post("DropsidewayAdmin/CreatePost", bodyFormData)
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
          setFirstName("");
          setLastName("");
          setNickName("");
          setStudentID("");
          setTypePerson("User");
          setTels("");
          setEmail("");
          setStatusInformer(false);
          setResetStatus(true);
          setTimeToDefault();
          // reset validations
          setTitleValidation(false)
          setDirectoryValidation(false);
          setCatectoryValidation(false)
          setTagValidation(false)
          setAreaValidation(false)
          setDirectoryAreaValidation(false)
          setImagesValidation(false)
          setFirstnameValidation(false)
          setLastnameValidation(false)
          setNicknameValidation(false)
          setStudentIdValidation(false)
        }
        hadleAlterCompleted()
      })
      .catch((error) => {
        hadleAlterFailed()
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      });
  };

  useEffect(()=>{
    const FetchItemFilters = async ()=> {
        await AxiosFetch.get("DropsidewayAdmin/GetFilterCategory",{
          params: {
            name:  CategoryItem
          },
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
          }
        })
        .then(req => setTagSeleect(req.data))
        .catch(err => console.log(err))
    }

    if(!CategoryItem) return;
    FetchItemFilters()
  },[CategoryItem])

  useEffect(()=>{
    if(!CategoryItem){
      setDisableTags(true);
      setTag('');
      return;
    }
    if(tagSelect.length === 0) {
      setDisableTags(true);
      return;
    }
    setDisableTags(false);
  },[CategoryItem,tagSelect])

  useEffect(()=>{
    if(typeReport === true) {
      setStudentID('')
    }
  },[typeReport])

  return (
    <>
      <div className="container-page">
        <div className="content-top-createpost">
          <div className="content-top-title-createpost">สร้างโพสต์</div>
          <div className="content-top-description-createpost">
            หน้าสำหรับสร้างโพสต์ของหายในเว็บไซต์
          </div>
        </div>
        <div className="content-bottom-createpost">
          <div style={{display: 'flex', marginTop: '0'}} className="title-card-createpost">
            <div className="title-createpost">รายละเอียด</div>
            <div className="directory-createpost">(จำเป็นต้องกรอกข้อมูล)</div>
          </div>
          <div className="area-content-top-createpost">
            <div className="item-left-content-createpost">
              <div className="item-left-first-line-createpost">
                <div className="title-post-createpost">
                  <div className="box-title-validation-createpost">
                    หัวข้อโพสต์
                    {
                      titleValidation ?
                      <div className="validation-createpost">*กรุณากรอกชื่อหัวข้อโพสต์</div>
                      :
                      (<></>)
                    }
                  </div>
                  <input type="text" value={Title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="กรอกหัวข้อโพสต์..." />
                </div>
                <div className="type-post-createpost">
                  ประเภทของโพสต์
                  <div className="area-input-type-post-createpost">
                    <div className="">
                      <input
                        name="typepost"
                        type="radio"
                        defaultChecked={true}
                        checked={resetStatus}
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
                <div className="box-title-validation-createpost">
                  รายละเอียดโพส
                  {
                      directoryValidation ?
                      <div className="validation-createpost">*กรุณากรอกรายละเอียดของของที่นำมาแจ้ง</div>
                      :
                      (<></>)
                    }
                </div>
                <textarea value={Directory} onChange={(e)=>{setDirectory(e.target.value)}} placeholder="กรอกรายละเอียดของโพสต์..." />
              </div>
              <div className="item-left-third-line-createpost">
                <div className="category-post-createpost">
                  <div className="box-title-validation-createpost">
                    หมวดหมู่ของหาย
                    {
                      catectoryValidation ?
                      <div className="validation-createpost">*กรุณาเลือกหมวดหมู่สิ่งของ...</div>
                      :
                      (<></>)
                    }
                  </div>
                  <select value={CategoryItem} onChange={(e)=>{setCategoryItem(e.target.value)}}>
                    <option value="">{`[กรุณาเลือกหมวดหมู่ของสิ่งของ]`}</option>
                    {maptypeitem}
                  </select>
                </div>
                <div className="tag-post-createpost">
                  <div className="box-title-validation-createpost">
                  ขนิดของของหาย
                  {
                      tagValidation ?
                      <div className="validation-createpost">*กรุณาเลือกแท็กของสิ่งของ</div>
                      :
                      (<></>)
                    }
                </div>
                  <select value={Tag} onChange={(e)=>{setTag(e.target.value)}} disabled={disableTags}>
                    <option value="">{`[กรุณาเลือกชนิดสิ่งของที่หาย]`}</option>
                    {maptypetags}
                  </select>
                </div>
              </div>
            </div>

            <div className="item-right-content-createpost">
              <div className="item-left-first-line-createpost">
                <div className="box-title-validation-createpost">
                  บริเวณที่พบเจอของหายหรือคาดว่าทำของหาย
                  {
                      areaValidation ?
                      <div className="validation-createpost">*กรุณาเลือกสถานที่ที่พบหรือคาดว่าทำของหาย...</div>
                      :
                      (<></>)
                    }
                </div>
                <select value={Area} onChange={(e)=>{setArea(e.target.value)}}>
                  <option value="">{`[กรุณาเลือกสถานที่ที่พบเจอของหาย หรือ คาดว่าของจะหาย]`}</option>
                  {maptypearea}
                </select>
              </div>
              <div className="item-left-second-line-createpost">
                <div className="box-title-validation-createpost">
                  รายละเอียดสถานที่พบเจอของหายหรือคาดว่าทำของหาย
                  {
                      directoryAreaValidation ?
                      <div className="validation-createpost">*กรุณากรอกรายละเอียดของสถานที่...</div>
                      :
                      (<></>)
                    }
                </div>
                <textarea value={DirectoryArealost} onChange={(e)=>{setDirectoryArealost(e.target.value)}} placeholder="กรอกรายละเอียดบริเวณที่เจอของหาย..." />
              </div>
              <div className="item-left-third-line-createpost">
                <div className="box-title-validation-createpost">
                  อัปโหลดรูปภาพ 
                    {
                      imagesValidation ?
                      <div className="validation-createpost">*กรุณาเลือกอัพโหลดรูปอย่างน้อย 1 - 2 รูป</div>
                      :
                      (<></>)
                    }
                </div>
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
                              อัปโหลดรูปภาพ    
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
                            อัปโหลดรูปภาพ    
                          </div>
                      </div>
                    }

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{display: 'flex'}} className="title-card-createpost">
            <input type="checkbox" onChange={(e)=> setStatusInformer(e.target.checked)} checked={statusInformer}/>
            <div className="title-createpost">รายละเอียดผู้แจ้ง</div>
            <div className="directory-createpost">(เลือกเพื่อกรอกข้อมูลด้านล่าง)</div>
          </div>

          <div className="area-content-bottom-createpost">
            <div className="item-top-content-createpost">
              <div className="area-input-createpost">
                <div className="box-title-validation-createpost">
                  ชื่อจริง
                    {
                      statusInformer && firstnameValidation ?
                      <div className="validation-createpost">*กรุณากรอกชื่อจริงของผู้แจ้ง</div>
                      :
                      (<></>)
                    }
                </div>
                <input className={`${statusInformer ? '':'area-input-disable'}`} type="text" value={firstname} onChange={(e)=>{setFirstName(e.target.value)}} placeholder="กรอกชื่อจริงผู้แจ้ง..." disabled={statusInformer? false : true}/>
              </div>
              <div className='area-input-createpost' >
                <div className="box-title-validation-createpost">
                  นามสกุล
                  {
                      statusInformer && lastnameValidation ?
                      <div className="validation-createpost">*กรุณากรอกนามสกุลของผู้แจ้ง</div>
                      :
                      (<></>)
                    }
                </div>
                <input className={`${statusInformer ? '':'area-input-disable'}`} type="text" value={lastname} onChange={(e)=>{setLastName(e.target.value)}} placeholder="กรอกนามสกุลผู้แจ้ง..." disabled={statusInformer? false : true}/>
              </div>
              <div className="area-input-createpost">
                <div className="box-title-validation-createpost">
                  ชื่อเล่น
                  {
                      statusInformer && nicknameValidation ?
                      <div className="validation-createpost">*กรุณากรอกชื่อเล่นของผู้แจ้ง</div>
                      :
                      (<></>)
                    }
                </div>
                <input className={`${statusInformer ? '':'area-input-disable'}`} type="text" value={nickname} onChange={(e)=>{setNickName(e.target.value)}} placeholder="กรอกชื่อเล่นผู้แจ้ง..." disabled={statusInformer? false : true}/>
              </div>
              <div className="area-input-createpost">
                <div className="box-title-validation-createpost">
                  รหัสนักศึกษา
                    {
                      (typeReport? false:true && statusInformer) && studentIdValidation ?
                      <div className="validation-createpost">*กรุณากรอกรหัสนักศึกษาของผู้แจ้ง</div>
                      :
                      (<></>)
                    }
                </div>
                <input
                  className={`${statusInformer ? (typeReport ? 'area-input-disable':'') : 'area-input-disable'}`}
                  type="text"
                  value={studentid} 
                  onChange={(e)=>{setStudentID(e.target.value)}}
                  placeholder="กรอกรายรหัสนักศึกษาผู้แจ้ง..."
                  disabled={statusInformer && ( typeReport ? false:true ) ? false : true}
                />
              </div>
            </div>
            <div className="item-bottom-content-createpost">
              <div className="area-input-createpost">
                ประเภทผู้แจ้ง
                <div className="area-input-type-createpost">
                  <div className="input-type-radio-createpost">
                    <input type="radio" name="reportpersontype" value="User" onChange={(e)=>{setTypePerson(e.target.value); setTypeReport(true); setStudentIdValidation(false);} } defaultChecked={true} checked={resetStatus} disabled={statusInformer? false : true}/>
                    ผู้ใช้ทั่วไป
                  </div>
                  <div className="input-type-radio-createpost">
                    <input type="radio" name="reportpersontype" value="Student" onChange={(e)=>{setTypePerson(e.target.value); setTypeReport(false)}} disabled={statusInformer? false : true}/>
                    นักศึกษา
                  </div>
                </div>
              </div>
              <div className="area-input-createpost">
                <div className="box-title-validation-createpost">
                  เบอร์โทรศัทพ์
                  <div className="directory-createpost">(ถ้ามี)</div>
                </div>
                <input  className={`${statusInformer ? '':'area-input-disable'}`} type="text" value={tels} onChange={(e)=>{setTels(e.target.value)}} placeholder="กรอกเบอร์โทรศัพท์ผู้แจ้ง..." disabled={statusInformer? false : true}/>
              </div>
              <div className="area-input-createpost">
                <div className="box-title-validation-createpost">
                  อีเมล
                  <div className="directory-createpost">(ถ้ามี)</div>
                </div>
                <input className={`${statusInformer ? '':'area-input-disable'}`} type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="กรอกอีเมลผู้แจ้ง..." disabled={statusInformer? false : true}/>
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
          <button className="" onClick={createNewPost}>สร้างโพสต์</button>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
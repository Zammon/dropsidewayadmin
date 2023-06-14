import { useNavigate, useParams } from "react-router-dom";
import "./ReviewPost.css";
import { useContext, useEffect, useState } from "react";
import AxiosFetch from "../../Contexts/Fetchs/AxiosFetch";
import { CutDate } from "../../Service/cut.service";
import { CutTime } from "../../Service/cut.service";
import { CutTel } from "../../Service/cut.service";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { BiEdit, BiTimeFive } from "react-icons/bi";
import { BsCalendarDateFill } from "react-icons/bs";
import { AlertContext, AlertType } from "../../Contexts/AlertContext";
import PatchPost from "../../Contexts/Fetchs/PatchPost";

export default function ReviewPost() {
  const { id } = useParams();
  const {
    setImageTarget,
    setImageType,
    setShowModal,
    setTypeModal,
    setTitleModal, 
    setDetailModal,
    setKeepButtonCorrect
  } = useContext(AlertContext);
  const navigate = useNavigate();
  const [targetImage, setTargetImage] = useState(0);
  const [showPost, setShowPost] = useState(true);
  const [typePost, setTypePost] = useState("");
  const [targetPost, setTargetPost] = useState({
    title: "",
    diretrory: "",
    images: [],
    created: "",
    time: "",
    type: "",
    area: "",
    directoryArea: "",
    firstname: "",
    lastname: "",
    nickname: "",
    type_informer: "",
    tel: "",
    email: "",
    studenId: "",
    tag: "",
    category: "",
    other: "",
  });
  const [checkDetail, setCheckDetail] = useState(
    {
      title: "",
      diretrory: "",
      directoryArea: "",
    }
  );
  const [editStatus, setEditStatus] = useState(false);

  const FetchTargetPost = async () => {
    AxiosFetch.get("DropsidewayAdmin/GetDetailPost", {
      params: {
        id: id,
      },
    })
      .then((req) => {
        setTargetPost({
          name: req.data?.name_Admin,
          profile: req.data?.profile_Admin,
          title: req.data?.title,
          diretrory: req.data?.directory,
          images: req.data?.images,
          created: req.data?.date,
          time: req.data?.time,
          type: req.data?.type,
          area: req.data?.area,
          directoryArea: req.data?.directoryArea,
          firstname: req.data?.informer_firstname,
          lastname: req.data?.informer_lastname,
          nickname: req.data?.informer_nickname,
          type_informer: req.data?.informer_type,
          tel: req.data?.informer_tel,
          email: req.data?.informer_email,
          studenId: req.data?.informer_studentId,
          tag: req.data?.tag,
          category: req.data?.categoryItem,
          other: req.data?.informer_other,
        });
        if (req.data?.type === "ตามหาของหาย") {
          setTypePost("find");
        }
        if (req.data?.type === "ตามหาเจ้าของ") {
          setTypePost("meet");
        }
        if(req.data?.status === "1") {
          setShowPost(true)
        }
        if(req.data?.status === "2") {
          setShowPost(false)
        }
        setCheckDetail(
          {
            title: req.data?.title,
            diretrory: req.data?.directory,
            directoryArea: req.data?.directoryArea,
          }
        )
        console.log(req);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{
    console.log("target: ",targetPost.diretrory);
    console.log("check target: ",checkDetail.diretrory);
    console.log(checkDetail.diretrory === targetPost.diretrory);
  },[targetPost])

  const EditStatusPost = async(e, navigate)=>{
    await AxiosFetch.patch("DropsidewayAdmin/ChangeStatusPost",
    {
        "idPost" : id,
        "statuspost" : e
    }
    ).then(result=>{
      console.log(result)
      if(!navigate) return;
      navigate()
    })
    .catch(error=>console.log(error));
  };

  const hadleEditPost = (status) => {
    if(status === false) {
      if( checkDetail.title === targetPost.title &&
          checkDetail.diretrory === targetPost.diretrory &&
          checkDetail.directoryArea === targetPost.directoryArea
        ) {
          setEditStatus(status);
          return;
        }
        PatchPost({
            id: id,
            title: targetPost.title,
            description: targetPost.diretrory,
            areaDescription: targetPost.directoryArea,
          },
          hadleAlertPatchPostComplete,
          hadleAlertPatchPostFail,
          setEditStatus,
          navigate,
        )
        return;
    }
    setEditStatus(status);
  }

  const handleStatus = (status) => {
    if(status === true) {
      setShowPost(status);
      EditStatusPost("1")
      return;
    }
    if(status === false) {
      setShowPost(status);
      EditStatusPost("2")
      return;
    }
  };

  const CancelShowModal = ()=> {
    setShowModal(false);
}

  const PatchDeletePost = async ()=>{
    await AxiosFetch.patch("DropsidewayAdmin/ChangeStatusPost",
    {
        "idPost": id,
        "statuspost": "0"
    }
    ).then(req=>{
        if(req.data === 'Complete') {
            setShowModal(false);
            hadleAlertComplete();
        }
        console.log('delete req: ',req);
        navigate(-1);
    })
    .catch(err=>{
        console.log(err)
    });
  };

  const ButtonsModal = [
    {
    title: 'ยกเลิก',
    className: 'button-modal-main-cancel',
    hadler: CancelShowModal
    },
    {
    title: 'ยืนยัน',
    className: 'button-modal-main-confirm',
    hadler: PatchDeletePost
    }
]

  const hadleAlertPatchPostComplete = () => {
    setTypeModal(AlertType.Alert);
    setTitleModal("เปลี่ยนเนื้อหาภายในโพสต์สำเร็จ");
    setDetailModal("ได้ทำการเปลี่ยนข้อมูลในโพสต์ สำเร็จแล้วกลับไปที่หน้าโพส");
    setShowModal(true);
  }

  const hadleAlertPatchPostFail = () => {
    setTypeModal(AlertType.Alert);
    setTitleModal("เปลี่ยนเนื้อหาเกิข้อผิดพลาดบางอย่าง");
    setDetailModal("กรุณาตรวจสอบข้อมูลใหม่และลองใหม่อีกครั้ง");
    setShowModal(true);
  }

  const hadleAlertComplete = () => {
    setTypeModal(AlertType.Alert);
    setTitleModal("ลบโพสต์เรียบร้อยแล้ว");
    setDetailModal("ได้ทำการลบโพสต์ของจากหน้าเว็บไซต์เรียบร้อยแล้ว");
    setShowModal(true);
  }

  const hadleAlertTakeBackComplete = () => {
    setTypeModal(AlertType.Alert);
    setTitleModal("สำเร็จ!");
    setDetailModal("มีคนมารับของคืนหรือเจอของที่ตามหาแล้ว");
    setShowModal(true);
    EditStatusPost("3", navigate(-1));
  }

  const hadleConfirmDelete = () => {
    setTypeModal(AlertType.Confirm);
    setTitleModal("คุณต้องการลบรายการนี้ใช่หรือไม่?");
    setDetailModal("เมื่อทำการลบแล้วจะทำการนำเอาโพสต์ดังกล่าวออกจากหน้าเว็บไซต์");
    setKeepButtonCorrect(ButtonsModal);
    setShowModal(true);
}


  const hadleShowModalImage = () => {
    setImageTarget(targetPost?.images?.[targetImage]);
    setImageType(true);
    setShowModal(true);
  };

  useEffect(() => {
    FetchTargetPost();
  }, []);

  return (
    <>
      <div className="container-page">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "80px",
            padding: "0",
            // backgroundColor: 'rgb(255, 255, 255)'
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "auto",
              height: "auto",
              minHeight: "80px"
            }}
            onClick={() => {
              navigate(-1);
            }}
          >
            <MdOutlineArrowBackIos size="15px" fill="#8F8F8F" />
            <div className="go-back-button">ย้อนกลับหน้าเดิม</div>
          </div>
        </div>
        <div className="container-item-reviewpage">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="review-post-left">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  height: "auto",
                  minHeight: "400px",
                }}
              >
                <div className="review-post-target-image">
                {
                    targetPost?.images?.length !== 0 ?
                    (<div className="hover-images" onClick={()=>{hadleShowModalImage()}}>ดูเพิ่มเติม</div>)
                    
                    :
                    (<></>)
                }
                  <img
                    className="images-full"
                    src={targetPost?.images?.[targetImage]}
                    alt=""
                  />
                </div>
                <div className="review-post-image-area">
                  <div
                    className={`review-post-image-item${
                      targetImage === 0 && targetPost?.images?.length!==0 ? "-focus" : ""
                    }`}
                  >
                    {targetPost?.images?.[0] ? (
                      <img
                        className="images-full"
                        style={{ cursor: "pointer" }}
                        src={targetPost?.images?.[0]}
                        alt=""
                        onClick={() => {
                          setTargetImage(0);
                        }}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                  <div
                    className={`review-post-image-item${
                      targetImage === 1 && targetPost?.images?.length!==0 ? "-focus" : ""
                    }`}
                  >
                    {targetPost?.images?.[1] ? (
                      <img
                        className="images-full"
                        style={{ cursor: "pointer" }}
                        src={targetPost?.images?.[1]}
                        alt=""
                        onClick={() => {
                          setTargetImage(1);
                        }}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                  <div
                    className={`review-post-image-item${
                      targetImage === 2 && targetPost?.images?.length!==0 ? "-focus" : ""
                    }`}
                  >
                    {targetPost?.images?.[2] ? (
                      <img
                        className="images-full"
                        style={{ cursor: "pointer" }}
                        src={targetPost?.images?.[2]}
                        alt=""
                        onClick={() => {
                          setTargetImage(2);
                        }}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                  <div
                    className={`review-post-image-item${
                      targetImage === 3 && targetPost?.images?.length!==0 ? "-focus" : ""
                    }`}
                  >
                    {targetPost?.images?.[3] ? (
                      <img
                        className="images-full"
                        style={{ cursor: "pointer" }}
                        src={targetPost?.images?.[3]}
                        alt=""
                        onClick={() => {
                          setTargetImage(3);
                        }}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="review-post-right">
                <div className="review-post-area-button">
                  <div
                    className="review-post-buttons"
                    style={{ backgroundColor: editStatus ? "#fff4dc":"#FFBE36", border: `2px solid ${editStatus ? "#FFBE36" : "#FFBE36"}` }}
                    onClick={()=>{hadleEditPost(!editStatus)}}
                  >
                      <BiEdit size="20px" fill={editStatus ? "#FFBE36" : "#fff"} />
                  </div>
                  <div
                    className="review-post-buttons"
                    style={{ backgroundColor: `${showPost ? '#344553' : ''}`, border: `${showPost ? '0px solid #344553':'2px solid #344553'}` ,transition: 'all .5s ease'}}
                    onClick={() => {
                      handleStatus(!showPost);
                    }}
                  >
                      {showPost ? (
                        <HiEye size="20px" fill={showPost ? '#fff' : '#344553'} />
                      ) : (
                        <HiEyeOff size="20px" fill={showPost ? '#fff' : '#344553'} />
                      )}
                  </div>
                  <div
                    className="review-post-buttons"
                    style={{ backgroundColor: "#FF5A5A" }}
                    onClick={()=>{hadleConfirmDelete()}}
                  >
                    <AiFillDelete size="20px" fill="#fff" />
                  </div>
                  <div
                    className="review-post-buttons take-back"
                    onClick={()=>{hadleAlertTakeBackComplete()}}
                  >
                    <div style={{}}>
                        รับของคืน
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="review-post-center">
            <div className="review-post-area-tags">
              <div
                className={`border-type-post ${typePost}`}
                style={{ marginRight: "10px" }}
              >
                {targetPost?.type}
              </div>
              <div className="tags" style={{ marginRight: "10px" }}>
                {targetPost?.category}
              </div>
              <div className="tags" style={{ marginRight: "10px" }}>
                {targetPost?.tag}
              </div>
            </div>
            <div className="review-post-area-title-detail">
              <div className="rows-review-post">
                <div className="title-value-review-post">
                  {
                    editStatus ?
                    (<input className="input" value={targetPost?.title??""} onChange={(e)=>{setTargetPost({...targetPost, title: e.target.value})}} placeholder="แก้ไขหัวข้อโพสต์..."/>)
                    :
                    targetPost?.title ?? "-"
                  }
                </div>
              </div>
              <div className="rows-review-post">
                <div className="diretrory-value-review-post">
                {
                  editStatus ?
                  (<textarea style={{minHeight: "204px", maxHeight: "204px"}} className="textarea" value={targetPost?.diretrory ?? "-"} onChange={(e)=>{setTargetPost({...targetPost, diretrory: e.target.value})}} placeholder="แก้ไขรายละเอียดโพสต์..."/>)
                  :
                  targetPost?.diretrory ?? "-"
                }
                </div>
              </div>
            </div>
            <div className="review-post-area-post-detail" style={{justifyContent: 'space-between'}}>
              <div style={{display: 'flex'}}>
                <div className="rows-review-post">
                  <div className="title-review-post">
                    <BsCalendarDateFill size="18px" fill="#6b6b6b" />
                  </div>
                  <div className="title-review-post">
                    {CutDate(targetPost?.created ?? "")}
                  </div>
                </div>
                <div className="rows-review-post">
                  <div className="title-review-post">
                    <BiTimeFive size="19px" fill="#6b6b6b" />
                  </div>
                  <div className="title-review-post">
                    {CutTime(targetPost?.time ?? "")}
                  </div>
                </div>
              </div>
              <div className="rows-review-post">
                <div style={{display: 'flex', width:'100%', height: 'auto'}}>
                  <div style={{display:'flex', width: '100%', height:'auto', alignItems: 'center'}}>
                    <div style={{fontSize: '15px', fontWeight: '300', margin: '0 10px 0 0'}}>
                      สร้างโดย
                    </div>
                    <div style={{display: 'flex', borderRadius: '50%', overflow: 'hidden', width:'24px' , minWidth:'24px' ,height: '24px' ,margin: '0 10px 0 0'}}>
                      <img src={targetPost.profile} alt="" />
                    </div>
                    <div className="">
                      {targetPost?.name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-post-area-informer-detail">
              <div
                className="title-roles-review-post"
                style={{ marginBottom: "10px" }}
              >
                รายละเอียดของข้อมูลผู้แจ้ง
              </div>
              <div className="rows-review-post">
                <div className="title-review-post" style={{ minWidth: "90px" }}>
                  รายชื่อผู้แจ้ง:
                </div>
                <div className="value-review-post">
                {
                  `${targetPost?.firstname ?? "-"} ${targetPost?.lastname ?? ""}`
                }
                </div>
              </div>
              <div className="rows-review-post">
                <div className="title-review-post" style={{ minWidth: "90px" }}>
                  ชื่อเล่นผู้แจ้ง:
                </div>
                <div className="value-review-post">
                  {targetPost?.nickname ?? "-"}
                </div>
              </div>
              <div className="column-review-post">
                <div className="rows-review-post">
                  <div
                    className="title-review-post"
                    style={{ minWidth: "90px" }}
                  >
                    ประเภทผู้แจ้ง:
                  </div>
                  <div className="value-review-post">
                    {targetPost?.type_informer ?? "-"}
                  </div>
                </div>
                <div className="rows-review-post">
                  <div
                    className="title-review-post"
                    style={{ minWidth: "90px" }}
                  >
                    รหัสนักศึกษา:
                  </div>
                  <div className="value-review-post">
                    {targetPost?.studenId ?? "-"}
                  </div>
                </div>
              </div>
              <div className="column-review-post">
                <div className="rows-review-post">
                  <div
                    className="title-review-post"
                    style={{ minWidth: "90px" }}
                  >
                    เบอร์โทรศัพท์:
                  </div>
                  <div className="value-review-post">
                    {CutTel(targetPost?.tel)}
                  </div>
                </div>
                <div className="rows-review-post">
                  <div className="title-review-post">อีเมล:</div>
                  <div className="value-review-post">
                    {targetPost?.email ?? "-"}
                  </div>
                </div>
              </div>
              <div className="column-review-post">
                {targetPost?.other ? (
                  <div className="rows-review-post">
                    <div className="title-review-post">other</div>
                    <div className="value-review-post">
                      {targetPost?.other ?? "-"}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="review-post-area-detail">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <div className="title-roles-review-post">บริเวณพบเจอของหาย</div>
                
                <div className="tags">{targetPost?.area}</div>
              </div>
              <div className="diretrory-value-review-post">
                {
                  editStatus ?
                  (<textarea style={{maxHeight: '100px', minHeight: '100px'}} onChange={(e)=>{setTargetPost({...targetPost, directoryArea: e.target.value})}} className="textarea" value={targetPost?.directoryArea ?? ''} placeholder="แก้ไขรายละเอียดโพสต์..."/>)
                  :
                  targetPost?.directoryArea ?? "-"
                }
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

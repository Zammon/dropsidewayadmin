//React import
import React, {  useState } from "react";
//CSS import
import "./Login.css";
//Image import
import bglogin from "../../bg_login.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import AxiosFetch from "../../Contexts/Fetchs/AxiosFetch";
import { AlertContext, AlertType } from "../../Contexts/AlertContext";
import ButtonModal from "../Buttons/ButtonModal";
import { RxCross2 } from 'react-icons/rx';

export default function Login() {
  const { setStatusAuth, setUserDetail } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { 
    typeModal, 
    showModal, 
    setShowModal,
    titleModal,
    detailModal,
    keepButtonCorrect,
    setTypeModal,
    setTitleModal,
    setDetailModal,
  } = useContext(AlertContext);

  const Login = async () => {
    const DetailAccout = async(login) => {
      await AxiosFetch.post(
            "DropsidewayAdmin/AccoutDetail",
            {
              idAccout: login.data.userId,
            },
            {
              headers: {
                Authorization: `Bearer ${login.data.token}`,
              },
            }
      ).then(req=>{
        setUserDetail({
          id: req?.data?.id,
          profile: req?.data?.profile,
          username: `${req?.data?.firstname} ${req?.data?.lastname}`,
          birthday: req?.data?.birthdate,
          createAt: req?.data?.createAt,
          gender: req?.data?.gender,
          tel: req?.data?.tel,
          type: req?.data?.type,
        });
        localStorage.setItem("token", JSON.stringify(login.data.token));
        localStorage.setItem("userId", JSON.stringify(login?.data.userId));
        setStatusAuth(false);
        setTimeout(() => {
          navigate("/");
        }, 10);
      })
      .catch(err=>{console.log(err)})
    } 

    await AxiosFetch.post("DropsidewayAdmin/Login", {
      accout: username,
      password: password,
    })
    .then(req=>{
      DetailAccout(req);
    })
    .catch(err=>{
      if(err.response.request.status === 401) {
        setTypeModal(AlertType.Alert);
        setTitleModal("บัญชีนี้ถูกระงับการใช้งาน");
        setDetailModal("ไม่สามารถเข้าถึงสู่ระบบได้ เนื่องจากบัญชีนี้ถูกระงับการใช้ กรุณาติดต่อเจ้าหน้าที่เพิ่อทำการปลดล็อค");
        setShowModal(true);
        return;
      }
      setTypeModal(AlertType.Alert);
      setTitleModal(`${err.response.data}`);
      setDetailModal(`${err.code} ${err.message}`);
      setShowModal(true);
      console.log("error message: ",err);
    })

  };

  // ***Return this page***
  return (
    <>
      <div className="container-loginpage" style={{ background: `${bglogin}` }}>
        
        {
          showModal ?
          (
              <div className="modal-container-main">
                  <div className="modal-item-main" style={{minHeight: `${typeModal===AlertType.Confirm ? '220px':''}`}}>
                      {
                          typeModal === AlertType.Warning ?
                          (
                              <div style={{
                                  display: 'flex', 
                                  justifyContent: 'center', 
                                  alignItems: 'center', 
                                  width: '60px', 
                                  minWidth: '60px', 
                                  height: '60px', 
                                  backgroundColor: 'green',
                                  margin: '0 28px 0 0'    
                              }}>
                                  
                              </div>
                          )
                          :
                          (
                              <></>   
                          )
                      }
                      <div style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',  
                              position: 'absolute', 
                              right: '10px', 
                              top: '16px', 
                              margin: '0 10px 0 0', 
                              cursor: 'pointer'
                              }} 
                          onClick={()=>{setShowModal(false)}}
                      >
                          <RxCross2 size={24} />
                      </div>
                      <div style={{
                              display: 'flex', 
                              flexDirection: 'column', 
                              width: '100%', 
                              // backgroundColor: 'red'
                              }}
                      >
                          <div style={{fontSize: '20px', margin: '0 0 10px 0'}}>
                              {titleModal}
                          </div>
                          <div style={{
                              display: 'flex',
                              width: '100%', 
                              fontSize: '16px', 
                              fontWeight: '300'
                          }}>
                              {detailModal}
                          </div>
                          {
                          typeModal === AlertType.Confirm ?
                              (
                                  <div style={{
                                      display: 'flex', 
                                      justifyContent: 'space-between',
                                      height: 'auto', 
                                      position: 'absolute', 
                                      bottom: '21px', 
                                      right: '20px',
                                      width: '270px',
                                      }}>
                                      {
                                         keepButtonCorrect?.map((data,index)=>{
                                              return(
                                                  <ButtonModal
                                                  key={index}
                                                  title={data.title}
                                                  className={data.className} 
                                                  OnClick={()=>{data.hadler()}}
                                                  />
                                              );
                                         })
                                      }
                                  </div>
                              )
                          :
                              (
                                  <></>   
                              )
                          }
                      </div>
                  </div>
                  <div className="modal-background-main" onClick={()=>{setShowModal(false)}}></div>
              </div>
          )
          :
          (
              <></>
          )
        }

        <div className="area-loginpage">
          <div className="title-loginpage">
            DropSideWay{" "}
            <div className="title-text-loginpage">Admin Management </div>
          </div>
          <div className="details-loginpage">
            This website is for management DropSideDown
          </div>
          <div className="area-input-loginpage">
            <label className="label-loginpage">ID Admin or Name Admin</label>
            <input
              className="input-loginpage"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <label className="label-loginpage">Password</label>
            <input
              className="input-loginpage"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="button-loginpage" onClick={Login}>
              sign in
            </button>
          </div>
        </div>
        <img src={bglogin} alt="" />
      </div>
    </>
  );
}

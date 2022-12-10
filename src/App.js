import logo from './logo.svg';
import './CSS/MainEdit/MainApp.css'
import Slidebar from './Componenct/Tools/AllBar/Slidebar';
import Navbar from './Componenct/Tools/AllBar/Navbar';
import {Route, Routes} from 'react-router-dom';

import Home from './Componenct/HomePage/Home';
import ManagePost from './Componenct/ManagePostPage/ManagePost';
import ManageUser from './Componenct/ManageUserPage/ManageUser';
import ManageReport from './Componenct/ManageReport/ManageReport';
import Error404 from './Componenct/ErrorPage/Error404'
import AdminManage from './Componenct/AdminManages/AdminManage';

import admins from './Model/Admins';
import AdminProfile from './Componenct/AdminProfilePage/AdminProfilePage';
import React,{ useEffect, useState } from 'react';
import Loginpage from './Componenct/Login/Login';


function App() {
  const [statusLogin,setStatusLogin] = useState(false);
  const [showpage,setShowPage] = useState()
  const [login, setLogin] = useState();
  
  useEffect(()=>{
      if(statusLogin===false){
        setShowPage(
          <>
            <Routes>
              <Route path='/' element={<Loginpage login={setLogin} status={setStatusLogin}/>} />
            </Routes>
          </>
        )} else {
          setShowPage(
            <>
              <Slidebar admin={login && login} status={setStatusLogin}/>
              <Navbar admin={login && login}/>
              <Routes>
                {/* <Route path='*' element={<Error404 />} /> */}
                <Route path="/" element={<Home />} />
                <Route path='/managepost' element={<ManagePost />} />
                <Route path='/createpost' element={<ManageUser admin={login && login}/>} />
                <Route path='/managereport' element={<ManageReport />} />
                <Route path='/profile' element={<AdminProfile admin={login && login}/>} />
                <Route path='/manageadmin' element={<AdminManage admin={login && login}/>} />
                <Route path='*' element={<Error404 />}/>
              </Routes>
            </>
          )
        }
      },[statusLogin]);
  
  

  return showpage;
}

export default App;

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
import Login from './Componenct/AdminLogin/Loginpage';
import AdminManage from './Componenct/AdminManages/AdminManage';

import admins from './Model/Admins';
import AdminProfile from './Componenct/AdminProfilePage/AdminProfilePage';


function App() {
  return (
    <>
      <Slidebar admin={admins[0]} />
      <Navbar admin={admins[0]}/>
      <Routes>
        {/* <Route path='*' element={<Error404 />} /> */}
        <Route path="/" element={<Home />} />
        <Route path='/managepost' element={<ManagePost />} />
        <Route path='/manageuser' element={<ManageUser />} />
        <Route path='/managereport' element={<ManageReport />} />
        <Route path='/profile' element={<AdminProfile />} />
        <Route path='/manageadmin' element={<AdminManage />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error404 />}/>
      </Routes>
    </>
  );
}

export default App;

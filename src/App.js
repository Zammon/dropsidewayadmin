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

import admins from './Model/Admins';

function App() {
  return (
    <>
      
      <Slidebar />
      <Navbar admin={admins}/>
      <Routes>
        {/* <Route path='*' element={<Error404 />} /> */}
        <Route path="/" element={<Home />} />
        <Route path='/managepost' element={<ManagePost />} />
        <Route path='/manageuser' element={<ManageUser />} />
        <Route path='/managereport' element={<ManageReport />} />
        <Route path='' element=''/>
      </Routes>
    </>
  );
}

export default App;

import React,{ useEffect, useState, useContext } from 'react';
import './App.css'
import { Route,Routes, useNavigate } from 'react-router-dom';
//Axios import
import axios from "axios";

// Component Import
import Home from './Componenct/Home/Home';
import ManagePost from './Componenct/ManagePost/ManagePost';
import CreatePost from './Componenct/CreatePost/CreatePost';
import AdminManage from './Componenct/ManageAdmin/ManageAdmin';
import AdminProfile from './Componenct/ProfileAdmin/ProfileAdmin';
import Error404 from './Componenct/ErrorPage/Error404'
import Navbar from './Componenct/Navbar/Navbar';
import Login from './Componenct/Login/Login';
import SelectContextProvider from './Componenct/UseContexts/SelectContext';
import { AuthContext } from './Componenct/UseContexts/AuthContext';


function App() {
      const { statusAuth } = useContext(AuthContext);

      if(statusAuth) return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='*' element={<Error404 />}/>
      </Routes>
      )

      return(
        <>
        <SelectContextProvider>
          <Navbar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/createpost' element={<CreatePost />} />
              <Route path='/managepost' element={<ManagePost />} />
              <Route path='/profile' element={<AdminProfile />} />
              <Route path='/manageadmin' element={<AdminManage />} />
              <Route path='/login' element={<Login />}/>
              <Route path='*' element={<Error404 />}/>
            </Routes>
          </Navbar>
        </SelectContextProvider>
        </>
      )

  // return showpage;
}

export default App;

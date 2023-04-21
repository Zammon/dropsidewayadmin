import React,{ useContext } from 'react';
import './App.css'
import { Route,Routes } from 'react-router-dom';
// Component Import
import Home from './Componenct/Home/Home';
import ManagePost from './Componenct/ManagePost/ManagePost';
import CreatePost from './Componenct/CreatePost/CreatePost';
import AdminManage from './Componenct/ManageAdmin/ManageAdmin';
import AdminProfile from './Componenct/ProfileAdmin/ProfileAdmin';
import Error404 from './Componenct/ErrorPage/Error404'
import Navbar from './Componenct/Navbar/Navbar';
import Login from './Componenct/Login/Login';
import SelectContextProvider from './Contexts/SelectContext';
import { AuthContext } from './Contexts/AuthContext';
import ReviewPost from './Componenct/ReviewPost/ReviewPost';
import ProfileOtherAdmin from './Componenct/ProfileOtherAdmin/ProfileOtherAdmin';
import RegisterContextProvider from './Contexts/RegisterContext';
import ScrollbarTableProvider from './Contexts/ScrollbarTable';

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
          <RegisterContextProvider>
            <ScrollbarTableProvider>
              <Navbar>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path='/createpost' element={<CreatePost />} />
                  <Route path='/managepost' element={<ManagePost />} />
                  <Route path='/profile' element={<AdminProfile />} />
                  <Route path='/manageadmin' element={<AdminManage />} />
                  <Route path='/review-post/:id' element={<ReviewPost />}></Route>
                  <Route path='/profile/:id' element={<ProfileOtherAdmin />}></Route>
                  <Route path='/login' element={<Login />}/>
                  <Route path='*' element={<Error404 />}/>
                </Routes>
              </Navbar>
            </ScrollbarTableProvider>
          </RegisterContextProvider>
        </SelectContextProvider>
        </>
      )

  // return showpage;
}

export default App;

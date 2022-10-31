import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './CSS/MainEdit/MainApp.css'
import Home from './Componenct/HomePage/Home';
import ManagePost from './Componenct/ManagePostPage/ManagePost';
import ManageUser from './Componenct/ManageUserPage/ManageUser';
import ManageReport from './Componenct/ManageReport/ManageReport';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    {/* <ManagePost /> */}
    {/* <ManageUser /> */}
    {/* <ManageReport /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

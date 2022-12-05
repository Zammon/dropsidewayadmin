import logo from './logo.svg';
import './App.css';

function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
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
        <Route path='/login' element={<Login />}/>
        <Route path='*' element={<Error404 />}/>
      </Routes>
    </>
>>>>>>> Stashed changes
  );
}

export default App;

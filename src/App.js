import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/homepage'
import LoginPage from './components/Login/loginpage'
import SigninPage from './components/Signin/signinpage'
import UserhomePage from './components/UserhomePage/userhomepage'
import AdminLoginPage from './components/AdminLoginPage/adminloginpage'
import AdminHomePage from './components/AdminHomePage/adminhomepage'
import StudentRecordsPage from './components/StudentRecordsPage/studentrecordspage'
import BusDetailsPage from './components/BusDetailsPage/busdetailspage'
import PaymentComponentPage from './components/PaymentComponentPage/PaymentComponent';


function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<HomePage/>}></Route>
            <Route path="/loginpage" exact element={<LoginPage/>}></Route>
            <Route path="/signinpage" exact element={<SigninPage/>}></Route>
            <Route path="/userhomepage" exact element={<UserhomePage/>}></Route>
            <Route path="/adminloginpage" exact element={<AdminLoginPage/>}></Route>
            <Route path="/adminhomepage" exact element={<AdminHomePage/>}></Route>
            <Route path="/studentrecordspage" exact element={<StudentRecordsPage/>}></Route>
            <Route path="/busdetailspage" exact element={<BusDetailsPage/>}></Route>
            <Route path="/PaymentComponent" exact element={<PaymentComponentPage/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
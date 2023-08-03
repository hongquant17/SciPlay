import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Lesson from './pages/Lesson/Lesson';
import Login from './pages/Login/Login';

function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/homepage" element={<HomePage />} /> */}
          <Route path="/lesson/:id" element={<Lesson />} />

          {/* 404 page if you guy wanna edit :> */}
          <Route path='*' element={<Home/>} />   
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppointmentProvider } from './context/AppointmentContext.jsx';
import Navbar from './components/Navbar.jsx';
import Calendar from './components/Calender.jsx';
import DoctorList from './components/DoctorList.jsx';
import AppointmentList from './components/AppointmentList.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx'
import Home from './components/Home.jsx';
import './styles/main.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <AppointmentProvider>
      <Router>
        <div className="app">
          <Navbar currentUser={currentUser} onLogout={handleLogout} />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/doctors" element={<DoctorList />} />
              <Route path="/appointments" element={<AppointmentList />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route 
                path="/login" 
                element={<Login onLogin={handleLogin} />} 
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AppointmentProvider>
  );
};

export default App;
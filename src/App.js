import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import authService from './services/authService';
import './App.css';

// Import components
import Home from './components/Home';
import CropList from './components/CropList';
import CropDetails from './components/CropDetails';
import CropSearch from './components/CropSearch';
import FarmerExperiences from './components/FarmerExperiences';
import WorkerListings from './components/WorkerListings';
import EquipmentListings from './components/EquipmentListings';
import AddCrop from './components/AddCrop';
import AddExperience from './components/AddExperience';
import AddWorkerListing from './components/AddWorkerListing';
import AddEquipmentListing from './components/AddEquipmentListing';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';

// Protected Route Component
function ProtectedRoute({ children }) {
  const isLoggedIn = authService.isLoggedIn();
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = authService.getStoredUser();
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              <h1>🌾 AgriGuide</h1>
            </Link>
          </div>
          <ul className="navbar-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/crops">Crops</Link></li>
            <li><Link to="/search">Search Crops</Link></li>
            <li><Link to="/experiences">Experiences</Link></li>
            <li><Link to="/workers">Workers</Link></li>
            <li><Link to="/equipment">Equipment</Link></li>
            
            {user ? (
              <>
                <li className="user-menu">
                  <Link to="/profile">
                    <span className="user-avatar">{user.fullName.charAt(0)}</span>
                    {user.fullName}
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/login" className="login-link">Login</Link></li>
                <li><Link to="/signup" className="signup-link">Sign Up</Link></li>
              </>
            )}
          </ul>
        </nav>

        <div className="main-content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/crops" element={<CropList />} />
            <Route path="/crops/:id" element={<CropDetails />} />
            <Route path="/search" element={<CropSearch />} />
            <Route path="/experiences" element={<FarmerExperiences />} />
            <Route path="/workers" element={<WorkerListings />} />
            <Route path="/equipment" element={<EquipmentListings />} />
            
            {/* Protected Routes - Require Login */}
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/add-crop" element={
              <ProtectedRoute>
                <AddCrop />
              </ProtectedRoute>
            } />
            <Route path="/add-experience" element={
              <ProtectedRoute>
                <AddExperience />
              </ProtectedRoute>
            } />
            <Route path="/add-worker" element={
              <ProtectedRoute>
                <AddWorkerListing />
              </ProtectedRoute>
            } />
            <Route path="/add-equipment" element={
              <ProtectedRoute>
                <AddEquipmentListing />
              </ProtectedRoute>
            } />
          </Routes>
        </div>

        <footer className="footer">
          <p>&copy; 2024 AgriGuide - Best Cultivation Results</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
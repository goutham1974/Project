// src/services/authService.js
import axios from 'axios';

// Use environment variable with fallback to deployed backend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://project-backend-rw6p.onrender.com/api';

// Create axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

const authService = {
  // Signup
  signup: (userData) => {
    console.log('API URL:', API_BASE_URL);
    return axiosInstance.post('/auth/signup', userData);
  },
  
  // Login
  login: (credentials) => {
    console.log('API URL:', API_BASE_URL);
    return axiosInstance.post('/auth/login', credentials);
  },
  
  // Logout
  logout: () => {
    localStorage.removeItem('user');
    return axiosInstance.post('/auth/logout');
  },
  
  // Get current user
  getCurrentUser: (userId) => axiosInstance.get(`/auth/user/${userId}`),
  
  // Change password
  changePassword: (userId, oldPassword, newPassword) => 
    axiosInstance.post('/auth/change-password', null, {
      params: { userId, oldPassword, newPassword }
    }),
  
  // Store user in localStorage
  storeUser: (user) => {
    console.log('Storing user:', user);
    localStorage.setItem('user', JSON.stringify(user));
  },
  
  // Get stored user
  getStoredUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  
  // Check if user is logged in
  isLoggedIn: () => {
    return localStorage.getItem('user') !== null;
  }
};

export default authService;
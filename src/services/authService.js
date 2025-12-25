// src/services/authService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';



const authService = {
  // Signup
 signup: (userData) => axios.post(`${API_BASE_URL}/auth/signup`, userData),
  
  // Login
  login: (credentials) => axios.post(`${API_BASE_URL}/auth/login`, credentials),
  
  // Logout
  logout: () => {
    localStorage.removeItem('user');
     return axios.post(`${API_BASE_URL}/auth/logout`);
  },
  
  // Get current user
getCurrentUser: (userId) => axios.get(`${API_BASE_URL}/auth/user/${userId}`),
  
  // Change password
  changePassword: (userId, oldPassword, newPassword) => 
    axios.post(`${API_BASE_URL}/auth/change-password`, null, {
      params: { userId, oldPassword, newPassword }
    }),
  
  // Store user in localStorage
  storeUser: (user) => {
    
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
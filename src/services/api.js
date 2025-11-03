import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://project-backend-rw6p.onrender.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Crop Services
export const cropService = {
  getAllCrops: () => api.get('/crops'),
  getCropById: (id) => api.get(`/crops/${id}`),
  createCrop: (crop) => api.post('/crops', crop),
  updateCrop: (id, crop) => api.put(`/crops/${id}`, crop),
  deleteCrop: (id) => api.delete(`/crops/${id}`),
  searchCrops: (name) => api.get(`/crops/search?name=${name}`),
  getCropsBySoil: (soilType) => api.get(`/crops/soil/${soilType}`),
  getCropsByClimate: (climate) => api.get(`/crops/climate/${climate}`),
  getSuitableCrops: (soilType, climate) => 
    api.get(`/crops/suitable?soilType=${soilType}&climate=${climate}`),
};

// Crop Stage Services
export const cropStageService = {
  getAllStages: () => api.get('/crop-stages'),
  getStageById: (id) => api.get(`/crop-stages/${id}`),
  getStagesByCrop: (cropId) => api.get(`/crop-stages/crop/${cropId}`),
  createStage: (stage) => api.post('/crop-stages', stage),
  updateStage: (id, stage) => api.put(`/crop-stages/${id}`, stage),
  deleteStage: (id) => api.delete(`/crop-stages/${id}`),
};

// User Services
export const userService = {
  getAllUsers: () => api.get('/users'),
  getUserById: (id) => api.get(`/users/${id}`),
  getUserByUsername: (username) => api.get(`/users/username/${username}`),
  createUser: (user) => api.post('/users', user),
  updateUser: (id, user) => api.put(`/users/${id}`, user),
  deleteUser: (id) => api.delete(`/users/${id}`),
  getVerifiedFarmers: () => api.get('/users/verified-farmers'),
  getUsersByRegion: (region) => api.get(`/users/region/${region}`),
};

// Farmer Experience Services
export const experienceService = {
  getAllExperiences: () => api.get('/experiences'),
  getExperienceById: (id) => api.get(`/experiences/${id}`),
  getExperiencesByCrop: (cropId) => api.get(`/experiences/crop/${cropId}`),
  getExperiencesByUser: (userId) => api.get(`/experiences/user/${userId}`),
  getTopExperiences: () => api.get('/experiences/top'),
  createExperience: (experience) => api.post('/experiences', experience),
  updateExperience: (id, experience) => api.put(`/experiences/${id}`, experience),
  markAsHelpful: (id) => api.post(`/experiences/${id}/helpful`),
  deleteExperience: (id) => api.delete(`/experiences/${id}`),
};

// Worker Listing Services
export const workerService = {
  getAllWorkers: () => api.get('/workers'),
  getWorkerById: (id) => api.get(`/workers/${id}`),
  getWorkersByRegion: (region) => api.get(`/workers/region/${region}`),
  getAvailableWorkers: (region) => api.get(`/workers/available/${region}`),
  searchWorkers: (skill) => api.get(`/workers/search?skill=${skill}`),
  createWorkerListing: (listing) => api.post('/workers', listing),
  updateWorkerListing: (id, listing) => api.put(`/workers/${id}`, listing),
  deleteWorkerListing: (id) => api.delete(`/workers/${id}`),
};

// Equipment Listing Services
export const equipmentService = {
  getAllEquipment: () => api.get('/equipment'),
  getEquipmentById: (id) => api.get(`/equipment/${id}`),
  getEquipmentByRegion: (region) => api.get(`/equipment/region/${region}`),
  getAvailableEquipment: (region) => api.get(`/equipment/available/${region}`),
  searchEquipment: (type) => api.get(`/equipment/search?type=${type}`),
  createEquipmentListing: (listing) => api.post('/equipment', listing),
  updateEquipmentListing: (id, listing) => api.put(`/equipment/${id}`, listing),
  deleteEquipmentListing: (id) => api.delete(`/equipment/${id}`),
};

export default api;
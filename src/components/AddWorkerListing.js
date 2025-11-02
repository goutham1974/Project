// src/components/WorkerListings.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { workerService } from '../services/api';
import './WorkerListings.css';

function WorkerListings() {
  const [workers, setWorkers] = useState([]);
  const [region, setRegion] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadWorkers();
  }, []);

  const loadWorkers = async () => {
    try {
      setLoading(true);
      const response = await workerService.getAllWorkers();
      setWorkers(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to load worker listings.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRegionFilter = async () => {
    if (!region) {
      loadWorkers();
      return;
    }

    try {
      setLoading(true);
      const response = await workerService.getWorkersByRegion(region);
      setWorkers(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to filter workers.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading workers...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="workers-container">
      <div className="header-section">
        <h1>Find Agricultural Workers</h1>
        <Link to="/add-worker" className="btn btn-primary">Post Worker Availability</Link>
      </div>

      <div className="card filter-section">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Enter region to filter"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="filter-input"
          />
          <button onClick={handleRegionFilter} className="btn btn-secondary">
            Filter by Region
          </button>
          <button onClick={loadWorkers} className="btn btn-secondary">
            Show All
          </button>
        </div>
      </div>

      {workers.length === 0 ? (
        <div className="no-results">
          <p>No worker listings available.</p>
        </div>
      ) : (
        <div className="workers-grid">
          {workers.map(worker => (
            <div key={worker.id} className="card worker-card">
              <div className="worker-header">
                <h3>{worker.workerName || 'Worker'}</h3>
                {worker.availability && (
                  <span className={`status-badge ${worker.availability.toLowerCase()}`}>
                    {worker.availability}
                  </span>
                )}
              </div>

              <div className="worker-info">
                <p><strong>Skills:</strong> {worker.skillSet || 'N/A'}</p>
                <p><strong>Experience:</strong> {worker.experienceYears || 0} years</p>
                <p><strong>Location:</strong> {worker.specificLocation || 'N/A'}, {worker.region || 'N/A'}</p>
                <p><strong>Phone:</strong> {worker.phoneNumber || 'N/A'}</p>
              </div>

              <div className="rates-section">
                <div className="rate-item">
                  <span className="rate-label">Daily Rate:</span>
                  <span className="rate-value">
                    ₹{worker.dailyRate ? worker.dailyRate.toFixed(2) : '0.00'}
                  </span>
                </div>
                <div className="rate-item">
                  <span className="rate-label">Hourly Rate:</span>
                  <span className="rate-value">
                    ₹{worker.hourlyRate ? worker.hourlyRate.toFixed(2) : '0.00'}
                  </span>
                </div>
              </div>

              {worker.description && (
                <p className="description">{worker.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WorkerListings;
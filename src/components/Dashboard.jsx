import React, { useState, useEffect } from 'react';
import FeedbackCard from './FeedbackCard';

const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filteredFeedbacks, setFilteredFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  useEffect(() => {
    filterFeedbacks();
  }, [feedbacks, searchTerm, ratingFilter]);

  const fetchFeedbacks = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch("https://feedbackcollectionapp-backend.onrender.com/feedback");
      if (response.ok) {
        const data = await response.json();
        setFeedbacks(data);
      } else {
        throw new Error('Failed to fetch feedbacks');
      }
    } catch (error) {
      setError('Failed to load feedbacks. Please try again.');
      console.error('Error fetching feedbacks:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterFeedbacks = () => {
    let filtered = [...feedbacks];

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(feedback =>
        feedback.name.toLowerCase().includes(term) ||
        feedback.feedback.toLowerCase().includes(term) ||
        feedback.email.toLowerCase().includes(term)
      );
    }

    // Filter by rating
    if (ratingFilter !== '') {
      filtered = filtered.filter(feedback => feedback.rating === parseInt(ratingFilter));
    }

    setFilteredFeedbacks(filtered);
  };

  const calculateAverageRating = () => {
    if (feedbacks.length === 0) return 0;
    const sum = feedbacks.reduce((acc, feedback) => acc + feedback.rating, 0);
    return (sum / feedbacks.length).toFixed(1);
  };

  const handleRefresh = () => {
    fetchFeedbacks();
  };

  if (isLoading) {
    return (
      <div className="dashboard-container">
        <div className="loading">Loading feedbacks...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Feedback Dashboard</h2>
        <button onClick={handleRefresh} className="refresh-btn">
          Refresh Data
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="stats-section">
        <div className="stat-card">
          <h3>Total Feedbacks</h3>
          <p className="stat-number">{feedbacks.length}</p>
        </div>
        <div className="stat-card">
          <h3>Average Rating</h3>
          <p className="stat-number">{calculateAverageRating()} ⭐</p>
        </div>
      </div>

      <div className="filters-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name, email, or feedback..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-container">
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="rating-filter"
          >
            <option value="">All Ratings</option>
            <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
            <option value={4}>⭐⭐⭐⭐ (4)</option>
            <option value={3}>⭐⭐⭐ (3)</option>
            <option value={2}>⭐⭐ (2)</option>
            <option value={1}>⭐ (1)</option>
          </select>
        </div>
      </div>

      <div className="results-info">
        Showing {filteredFeedbacks.length} of {feedbacks.length} feedbacks
      </div>

      <div className="feedbacks-grid">
        {filteredFeedbacks.length > 0 ? (
          filteredFeedbacks.map((feedback, index) => (
            <FeedbackCard key={feedback.id || feedback._id || index} feedback={feedback} />
          ))
        ) : (
          <div className="no-results">
            {feedbacks.length === 0 ? 'No feedbacks available.' : 'No feedbacks match your search criteria.'}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
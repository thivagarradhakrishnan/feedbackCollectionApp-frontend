import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    feedback: '',
    rating: 5
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('http://localhost:5000/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Thank you! Your feedback has been submitted successfully.');
        setFormData({
          name: '',
          phone: '',
          email: '',
          feedback: '',
          rating: 5
        });
      } else {
        throw new Error('Failed to submit feedback');
      }
    } catch (error) {
      setErrorMessage('Failed to submit feedback. Please try again.');
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Submit Your Feedback</h2>
        <p>We value your feedback and use it to improve our services.</p>

        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="feedback">Feedback *</label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              required
              placeholder="Share your thoughts, suggestions, or concerns..."
              rows={5}
            />
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating *</label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              required
            >
              <option value={5}>⭐⭐⭐⭐⭐ Excellent (5)</option>
              <option value={4}>⭐⭐⭐⭐ Good (4)</option>
              <option value={3}>⭐⭐⭐ Average (3)</option>
              <option value={2}>⭐⭐ Poor (2)</option>
              <option value={1}>⭐ Very Poor (1)</option>
            </select>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
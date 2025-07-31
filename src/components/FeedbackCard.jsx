import React from 'react';

const FeedbackCard = ({ feedback }) => {
  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const formatDate = (dateString) => {
    if (!dateString) return null;
    
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return null;
      
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    } catch (error) {
      return null;
    }
  };

  const displayDate = formatDate(feedback.timestamp || feedback.createdAt || feedback.created_at);

  return (
    <div className="feedback-card">
      <div className="feedback-header">
        <div className="feedback-user">
          <h3 className="feedback-name">{feedback.name}</h3>
          <p className="feedback-email">{feedback.email}</p>
        </div>
        <div className="feedback-rating">
          <span className="rating-stars">{renderStars(feedback.rating)}</span>
          <span className="rating-number">({feedback.rating}/5)</span>
        </div>
      </div>

      <div className="feedback-content">
        <p className="feedback-text">{feedback.feedback}</p>
      </div>

      {displayDate && (
        <div className="feedback-footer">
          <span className="feedback-date">{displayDate}</span>
        </div>
      )}
    </div>
  );
};

export default FeedbackCard;
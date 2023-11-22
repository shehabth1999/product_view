import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-success"/>);
  }

  if (hasHalfStar) {
    stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} className="text-success" />);
  }

  return (
    <div className="star-rating">
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
}

export default StarRating;


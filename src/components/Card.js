import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card-image" src={props.imageUrl} alt={props.title} />
      <div className="card-info">
        <div className="card-header">
          <span className="location-indicator">📍 {props.location}</span>
          <a href={props.googleMapsUrl} className="maps-link" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
        </div>
        <h2 className="card-title">{props.title}</h2>
        <p className="card-date">{props.startDate} - {props.endDate}</p>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}

import React from 'react';
import { MapPin, ExternalLink, Clock } from 'lucide-react';
import type { TripDay } from '../data/tripData';

interface Props {
  data: TripDay[];
}

const ItineraryTab: React.FC<Props> = ({ data }) => {
  return (
    <div className="itinerary-list">
      {data.map((day, idx) => (
        <div key={idx} className="itinerary-day animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
          <div className="day-header">
            <div className="day-badge">{day.label}</div>
            <div className="day-info">
              <span className="day-date">{day.date}</span>
              <h3 className="day-focus">{day.focus}</h3>
            </div>
          </div>
          
          <div className="activities-list">
            {day.activities.map((activity, aIdx) => (
              <div key={aIdx} className="activity-card glass-card">
                {activity.image && (
                  <div className="activity-image-wrapper">
                    <img src={activity.image} alt={activity.title} className="activity-image" />
                  </div>
                )}
                <div className="activity-details">
                  <div className="activity-header">
                    {activity.time && (
                      <div className="activity-time">
                        <Clock size={14} />
                        <span>{activity.time}</span>
                      </div>
                    )}
                    <h4 className="activity-title">{activity.title}</h4>
                  </div>
                  <p className="activity-description">{activity.description}</p>
                  <div className="activity-footer">
                    {activity.location && (
                      <div className="activity-location">
                        <MapPin size={14} />
                        <span>{activity.location}</span>
                      </div>
                    )}
                    {activity.mapLink && (
                      <a href={activity.mapLink} target="_blank" rel="noopener noreferrer" className="map-link">
                        <ExternalLink size={14} />
                        Map
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItineraryTab;

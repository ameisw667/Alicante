import React from 'react';
import { logistics } from '../data/tripData';
import { Plane, Car, Home } from 'lucide-react';

const LogisticsTab: React.FC = () => {
  return (
    <div className="logistics-container animate-fade-in">
      <div className="logistics-grid">
        {/* Flights */}
        <div className="logistics-card glass-card">
          <div className="card-header">
            <Plane className="icon-accent" size={20} />
            <h3>Flight Info</h3>
          </div>
          <div className="flight-info-container">
            <div className="flight-details">
              <span className="flight-label">Outbound ({logistics.flights.outbound.number})</span>
              <div className="flight-row">
                <div className="flight-point">
                  <strong>{logistics.flights.outbound.from}</strong>
                  <span>{logistics.flights.outbound.date}</span>
                </div>
                <div className="flight-path">
                  <div className="line"></div>
                  <Plane size={14} className="plane-icon" />
                </div>
                <div className="flight-point">
                  <strong>{logistics.flights.outbound.to}</strong>
                  <span>{logistics.flights.outbound.arrival}</span>
                </div>
              </div>
            </div>
            <div className="flight-divider"></div>
            <div className="flight-details">
              <span className="flight-label">Inbound ({logistics.flights.inbound.number})</span>
              <div className="flight-row">
                <div className="flight-point">
                  <strong>{logistics.flights.inbound.from}</strong>
                  <span>{logistics.flights.inbound.date}</span>
                </div>
                <div className="flight-path">
                  <div className="line"></div>
                  <Plane size={14} className="plane-icon reverse" />
                </div>
                <div className="flight-point">
                  <strong>{logistics.flights.inbound.to}</strong>
                  <span>{logistics.flights.inbound.departure}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Car Rental */}
        <div className="logistics-card glass-card">
          <div className="card-header">
            <Car className="icon-accent" size={20} />
            <h3>Car Rental</h3>
          </div>
          <div className="card-content">
            <div className="info-item">
              <span className="label">Provider</span>
              <span className="value">{logistics.carRental.provider}</span>
            </div>
            <div className="info-item">
              <span className="label">Pickup</span>
              <span className="value">{logistics.carRental.pickup}</span>
            </div>
            <div className="info-item">
              <span className="label">Return</span>
              <span className="value">{logistics.carRental.return}</span>
            </div>
          </div>
        </div>

        {/* Accommodation */}
        <div className="logistics-card glass-card">
          <div className="card-header">
            <Home className="icon-accent" size={20} />
            <h3>Stay</h3>
          </div>
          <div className="card-content">
            <div className="info-item">
              <span className="label">Place</span>
              <span className="value">{logistics.accommodation.name}</span>
            </div>
            <div className="info-item">
              <span className="label">Location</span>
              <span className="value">{logistics.accommodation.location}</span>
            </div>
            <div className="info-item">
              <span className="label">Type</span>
              <span className="value">{logistics.accommodation.type}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsTab;

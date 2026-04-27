import { useState } from 'react';
import VacationModal from './components/VacationModal';
import { Plane, Calendar } from 'lucide-react';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app-container">
      <div className="hero-content animate-fade-in">
        <h1 className="hero-title">Alicante Angel x Jan 2026</h1>
        <p className="hero-subtitle">5 Days of Sun, Sport & Culture</p>

        <div className="hero-actions">
          <button
            className="btn-primary"
            onClick={() => setIsModalOpen(true)}
          >
            <Calendar size={20} />
            View Itinerary
          </button>

          <div className="trip-summary glass-card">
            <div className="summary-item">
              <Plane size={18} className="icon-accent" />
              <span>May 1st — May 5th</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-item">
              <span>Calpe & Alicante</span>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <VacationModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;

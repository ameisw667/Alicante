import React from 'react';
import { inspiration } from '../data/tripData';
import { Sparkles, Camera } from 'lucide-react';

const InspirationTab: React.FC = () => {
  return (
    <div className="inspiration-container">
      <div className="tips-grid">
        {inspiration.tips.map((tip, index) => (
          <div key={index} className="tip-card glass-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="tip-header">
              <Sparkles size={18} className="icon-accent" />
              <span className="tip-title">{tip.title}</span>
            </div>
            <p className="tip-content">{tip.content}</p>
          </div>
        ))}
      </div>

      <div className="gallery-section">
        <div className="section-header">
          <Camera size={20} />
          <h3>Photo Inspiration</h3>
        </div>
        <div className="gallery-grid">
          {inspiration.gallery.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img.url} alt={img.caption} className="gallery-img" />
              <div className="gallery-caption">{img.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InspirationTab;

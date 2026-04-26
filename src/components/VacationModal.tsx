import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Package, MapPin, Info, Sun, Sparkles, Coins } from 'lucide-react';
import { tripData } from '../data/tripData';
import Countdown from './Countdown';
import ItineraryTab from './ItineraryTab';
import PackingTab from './PackingTab';
import LogisticsTab from './LogisticsTab';
import InspirationTab from './InspirationTab';
import ExpenseTab from './ExpenseTab';
import './Modal.css';

interface Props {
  onClose: () => void;
}

const VacationModal: React.FC<Props> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('itinerary');

  const tabs = [
    { id: 'itinerary', label: 'Itinerary', icon: <Calendar size={18} /> },
    { id: 'inspiration', label: 'Inspiration', icon: <Sparkles size={18} /> },
    { id: 'packing', label: 'Packing', icon: <Package size={18} /> },
    { id: 'logistics', label: 'Logistics', icon: <Info size={18} /> },
    { id: 'expenses', label: 'Expenses', icon: <Coins size={18} /> },
  ];

  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="modal-content glass-card"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        <header className="modal-header">
          <div className="header-top">
            <div className="header-left">
              <span className="badge">May 2026</span>
              <div className="weather-widget">
                <Sun className="icon-sun" size={16} />
                <span>24°C Average</span>
              </div>
            </div>
            <Countdown />
          </div>
          <h2 className="modal-title">Alicante Vacation</h2>
        </header>

        <nav className="modal-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
              {activeTab === tab.id && (
                <motion.div className="tab-indicator" layoutId="indicator" />
              )}
            </button>
          ))}
        </nav>

        <main className="modal-body">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="tab-content-wrapper"
            >
              {activeTab === 'itinerary' && <ItineraryTab data={tripData} />}
              {activeTab === 'inspiration' && <InspirationTab />}
              {activeTab === 'packing' && <PackingTab />}
              {activeTab === 'logistics' && <LogisticsTab />}
              {activeTab === 'expenses' && <ExpenseTab />}
            </motion.div>
          </AnimatePresence>
        </main>
      </motion.div>
    </motion.div>
  );
};


export default VacationModal;

import React, { useState, useEffect } from 'react';
import { Check, Plus, Trash2 } from 'lucide-react';
import { packingList as initialPackingList } from '../data/tripData';

interface PackingItem {
  id: number;
  item: string;
  category: string;
  checked: boolean;
}

const PackingTab: React.FC = () => {
  const [items, setItems] = useState<PackingItem[]>(() => {
    const saved = localStorage.getItem('alicante_packing');
    if (saved) return JSON.parse(saved);
    return initialPackingList.map(item => ({ ...item, checked: false }));
  });

  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    localStorage.setItem('alicante_packing', JSON.stringify(items));
  }, [items]);

  const toggleItem = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem) return;
    const item: PackingItem = {
      id: Date.now(),
      item: newItem,
      category: 'Misc',
      checked: false
    };
    setItems([...items, item]);
    setNewItem('');
  };

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const categories = Array.from(new Set(items.map(i => i.category)));

  return (
    <div className="packing-container animate-fade-in">
      <form className="add-item-form glass-card" onSubmit={addItem}>
        <input 
          type="text" 
          placeholder="Add something to pack..." 
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="add-item-input"
        />
        <button type="submit" className="btn-primary add-btn">
          <Plus size={18} />
        </button>
      </form>

      <div className="packing-grid">
        {categories.map(cat => (
          <div key={cat} className="packing-category">
            <h3 className="category-title">{cat}</h3>
            <div className="category-items">
              {items.filter(i => i.category === cat).map(item => (
                <div 
                  key={item.id} 
                  className={`packing-item glass-card ${item.checked ? 'checked' : ''}`}
                >
                  <div className="item-main" onClick={() => toggleItem(item.id)}>
                    <div className={`checkbox ${item.checked ? 'checked' : ''}`}>
                      {item.checked && <Check size={12} />}
                    </div>
                    <span className="item-text">{item.item}</span>
                  </div>
                  <button className="delete-btn-small" onClick={() => deleteItem(item.id)}>
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackingTab;

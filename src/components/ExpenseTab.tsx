import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Receipt, ChevronDown } from 'lucide-react';
import { expenseCategories } from '../data/tripData';

interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
}

const ExpenseTab: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem('alicante_expenses');
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(expenseCategories[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('alicante_expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount) return;

    const newExpense: Expense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category
    };

    setExpenses([newExpense, ...expenses]);
    setTitle('');
    setAmount('');
  };

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter(e => e.id !== id));
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="expenses-container">
      <form className="expense-form glass-card" onSubmit={addExpense}>
        <div className="input-group main">
          <input 
            type="text" 
            placeholder="What for?" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="expense-input"
          />
        </div>
        <div className="input-group small">
          <input 
            type="number" 
            placeholder="€" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="expense-input amount"
          />
        </div>
        
        <div className="custom-select-wrapper">
          <div 
            className={`custom-select ${isDropdownOpen ? 'open' : ''}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{category}</span>
            <ChevronDown size={16} />
            
            {isDropdownOpen && (
              <div className="select-options glass-card">
                {expenseCategories.map(cat => (
                  <div 
                    key={cat} 
                    className={`select-option ${category === cat ? 'selected' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCategory(cat);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {cat}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <button type="submit" className="btn-primary add-btn">
          <Plus size={18} />
        </button>
      </form>

      <div className="expenses-summary glass-card">
        <span className="summary-label">Total Expenses</span>
        <span className="summary-value">€{total.toFixed(2)}</span>
      </div>

      <div className="expenses-list">
        {expenses.map((expense) => (
          <div key={expense.id} className="expense-item animate-fade-in">
            <div className="expense-info">
              <div className="expense-title">{expense.title}</div>
              <div className="expense-meta">
                <span className="badge-small">{expense.category}</span>
              </div>
            </div>
            <div className="expense-actions">
              <span className="expense-amount">€{expense.amount.toFixed(2)}</span>
              <button className="delete-btn" onClick={() => deleteExpense(expense.id)}>
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
        {expenses.length === 0 && (
          <div className="empty-state">
            <Receipt size={40} className="icon-dim" />
            <p>No expenses recorded yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseTab;

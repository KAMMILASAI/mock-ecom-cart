import React, { useState } from 'react';

export default function CheckoutModal({ total, onClose, onCheckout }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please fill in all fields');
      return;
    }
    
    setIsSubmitting(true);
    try {
      await onCheckout({ name, email });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="total-amount">
            <strong>Total: ₹{total.toFixed(2)}</strong>
          </div>
          
          <div className="button-group">
            <button 
              type="button" 
              onClick={onClose}
              disabled={isSubmitting}
              className="cancel-btn"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="submit-btn"
            >
              {isSubmitting ? 'Processing...' : 'Place Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

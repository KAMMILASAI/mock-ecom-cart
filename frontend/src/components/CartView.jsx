import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

export default function CartView({ cart, onRemoveItem, onUpdateQuantity, onCheckout }) {
  return (
    <div className="cart">
      <h2>🛒 Cart</h2>
      {cart.items && cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.items && cart.items.map(item => (
              <div key={item._id} className="cart-item">
                <div className="item-details">
                  <span className="item-name">{item.productId?.name || 'Unknown Product'}</span>
                  <div className="quantity-controls">
                    <button
                      className="qty-btn"
                      onClick={() => onUpdateQuantity(item._id, item.qty - 1)}
                      disabled={item.qty <= 1}
                    >
                      <FaMinus />
                    </button>
                    <span className="item-qty">Qty: {item.qty}</span>
                    <button
                      className="qty-btn"
                      onClick={() => onUpdateQuantity(item._id, item.qty + 1)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <span className="item-price">₹{item.productId ? item.productId.price * item.qty : 0}</span>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => onRemoveItem(item._id)}
                  title="Remove item"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <strong>Total: ₹{cart.total || 0}</strong>
          </div>

          <button
            className="checkout-btn"
            onClick={onCheckout}
            disabled={!cart.items || cart.items.length === 0}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

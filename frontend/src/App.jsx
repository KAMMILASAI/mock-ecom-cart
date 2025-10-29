import React, { useState, useEffect } from 'react';
import { getProducts, getCart, addToCart, removeFromCart, updateCartQuantity, checkout } from './api';
import ProductsGrid from './components/ProductsGrid';
import CartView from './components/CartView';
import CheckoutModal from './components/CheckoutModal';
import Toast from './components/Toast';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [showCheckout, setShowCheckout] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState(null);

  // Show toast message
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast(null);
  };

  // Load data when component mounts
  useEffect(() => {
    async function loadData() {
      try {
        const [productsData, cartData] = await Promise.all([
          getProducts(),
          getCart()
        ]);
        setProducts(productsData);
        setCart(cartData);
      } catch (error) {
        showToast('Failed to load data. Please try again.', 'error');
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  // Handle adding item to cart
  const handleAddToCart = async (productId) => {
    try {
      await addToCart(productId);
      const updatedCart = await getCart();
      setCart(updatedCart);
      showToast('Item added to cart!', 'success');
    } catch (error) {
      showToast('Failed to add item to cart', 'error');
      console.error('Error adding to cart:', error);
    }
  };

  // Handle removing item from cart
  const handleRemoveItem = async (cartItemId) => {
    try {
      await removeFromCart(cartItemId);
      const updatedCart = await getCart();
      setCart(updatedCart);
      showToast('Item removed from cart!', 'success');
    } catch (error) {
      showToast('Failed to remove item from cart', 'error');
      console.error('Error removing item:', error);
    }
  };

  // Handle updating item quantity
  const handleUpdateQuantity = async (cartItemId, newQty) => {
    try {
      await updateCartQuantity(cartItemId, newQty);
      const updatedCart = await getCart();
      setCart(updatedCart);
      showToast('Quantity updated!', 'success');
    } catch (error) {
      showToast('Failed to update quantity', 'error');
      console.error('Error updating quantity:', error);
    }
  };

  // Handle checkout
  const handleCheckout = async (orderData) => {
    try {
      // Send cart items with order data
      const checkoutData = {
        cartItems: cart.items.map(item => ({
          name: item.productId.name,
          price: item.productId.price,
          qty: item.qty
        })),
        name: orderData.name,
        email: orderData.email
      };

      await checkout(checkoutData);
      setCart({ items: [], total: 0 });
      setShowCheckout(false);
      showToast('🎉 Order placed successfully!', 'success');
    } catch (error) {
      showToast('Failed to place order. Please try again.', 'error');
      console.error('Checkout error:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <h1>Simple E-Commerce</h1>
      <div className="main-content">
        <ProductsGrid 
          products={products} 
          onAddToCart={handleAddToCart} 
        />
        <CartView 
          cart={cart} 
          onRemoveItem={handleRemoveItem}
          onUpdateQuantity={handleUpdateQuantity}
          onCheckout={() => setShowCheckout(true)} 
        />
      </div>

      {showCheckout && (
        <CheckoutModal 
          total={cart.total} 
          onClose={() => setShowCheckout(false)}
          onCheckout={handleCheckout}
        />
      )}

      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={hideToast} 
        />
      )}
    </div>
  );
}

export const API_URL = 'http://localhost:5000/api';

// Get all products
export async function getProducts() {
  const response = await fetch(`${API_URL}/products`);
  return await response.json();
}

// Get cart
export async function getCart() {
  const response = await fetch(`${API_URL}/cart`);
  return await response.json();
}

// Add to cart
export async function addToCart(productId) {
  const response = await fetch(`${API_URL}/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId, qty: 1 })
  });
  return await response.json();
}

// Remove from cart
export async function removeFromCart(cartItemId) {
  const response = await fetch(`${API_URL}/cart/${cartItemId}`, {
    method: 'DELETE'
  });
  return await response.json();
}

// Update cart item quantity
export async function updateCartQuantity(cartItemId, qty) {
  const response = await fetch(`${API_URL}/cart/${cartItemId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ qty })
  });
  return await response.json();
}

// Checkout
export async function checkout(orderData) {
  const response = await fetch(`${API_URL}/checkout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
  });
  return await response.json();
}

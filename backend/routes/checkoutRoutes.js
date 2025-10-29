import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { cartItems, name, email } = req.body;

  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({ message: 'Cart is empty' });
  }

  // Calculate total from cart items
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Create receipt with cart items
  const items = cartItems.map(item => ({
    name: item.name,
    price: item.price,
    quantity: item.qty,
    subtotal: item.price * item.qty
  }));

  res.json({
    receipt: {
      name,
      email,
      total,
      timestamp: new Date().toISOString(),
      items
    }
  });
});

export default router;

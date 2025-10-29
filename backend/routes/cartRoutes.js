import express from "express";
import mockProducts from "../data/mockProducts.js";
import mockCart from "../data/mockCart.js";

const router = express.Router();

// Get cart + total
router.get("/", (req, res) => {
  const items = mockCart.map(cartItem => {
    const product = mockProducts.find(p => p._id === cartItem.productId);
    return {
      _id: cartItem._id,
      productId: product,
      qty: cartItem.qty
    };
  });
  const total = items.reduce((sum, i) => sum + i.productId.price * i.qty, 0);
  res.json({ items, total });
});

// Add to cart
router.post("/", (req, res) => {
  const { productId, qty = 1 } = req.body;
  const existing = mockCart.find(item => item.productId === productId);

  if (existing) {
    existing.qty += qty;
  } else {
    mockCart.push({
      _id: `cart_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      productId,
      qty
    });
  }

  res.json({ message: "Added to cart" });
});

// Delete cart item
router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Cart item ID is required" });
    }

    console.log("Attempting to delete cart item:", id);
    console.log("Current cart items:", mockCart.map(item => item._id));

    const itemIndex = mockCart.findIndex(item => item._id === id);

    if (itemIndex === -1) {
      console.log("Item not found");
      return res.status(404).json({ message: "Item not found in cart" });
    }

    // Remove the item from the array
    mockCart.splice(itemIndex, 1);

    console.log("Item successfully removed");
    console.log("Cart items after removal:", mockCart.map(item => item._id));

    return res.json({ message: "Item removed successfully" });

  } catch (error) {
    console.error("Error in DELETE /:id:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
});

// Update cart item quantity
router.patch("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { qty } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Cart item ID is required" });
    }

    if (qty < 1) {
      return res.status(400).json({ message: "Quantity must be at least 1" });
    }

    const itemIndex = mockCart.findIndex(item => item._id === id);

    if (itemIndex === -1) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    // Update quantity
    mockCart[itemIndex].qty = qty;

    return res.json({ message: "Quantity updated successfully" });

  } catch (error) {
    console.error("Error in PATCH /:id:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
});

export default router;

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <div className="product-image">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="image-placeholder">
            {product.name.split(' ').slice(-1)[0]}
          </div>
        )}
      </div>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product._id)}>Add to Cart</button>
    </div>
  );
}

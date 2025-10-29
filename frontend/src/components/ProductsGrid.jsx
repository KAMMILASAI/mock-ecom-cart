import ProductCard from "./ProductCard";

export default function ProductsGrid({ products, onAddToCart }) {
  return (
    <div className="grid">
      {products.map(p => (
        <ProductCard key={p._id} product={p} addToCart={onAddToCart} />
      ))}
    </div>
  );
}

import product from "./Product.jsx";

function Image() {
  return (
    <img
      src={product.image}
      alt={product.name}
      className="h-64 w-full object-cover"
    />
  );
}

export default Image;

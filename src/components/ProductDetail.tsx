import { useParams } from "react-router-dom";
import { useProductDataDetail } from "../hooks/useProductDetail";

const ProductDetail = () => {
  const { productId } = useParams();

  const { products, isLoading, error } = useProductDataDetail();

  const selectedProduct = products.find((product) => product.id === productId);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!selectedProduct) {
    return <div>No se encontró el producto.</div>;
  }

  return (
    <div>
      <h1>Detalle del Producto</h1>
      <p>Nombre del producto: {selectedProduct.name}</p>
      <p>Descripción: {selectedProduct.description}</p>
      <p>Precio: {selectedProduct.price}</p>
      {/* Otros detalles del producto */}
    </div>
  );
};

export default ProductDetail;

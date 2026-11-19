import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const navigate = useNavigate();

  async function handleDeleteProduct() {
    await axios.delete(
      `${import.meta.env.VITE_BACKEND_SERVER_URL}/products/${productId}`,
    );

    navigate("/products");
  }

  useEffect(() => {
    let ignore = false;

    axios
      .get(`${import.meta.env.VITE_BACKEND_SERVER_URL}/products/${productId}`)
      .then((response) => {
        if (!ignore) setProduct(response.data);
      });

    return () => {
      ignore = true;
    };
  }, [productId]);

  return (
    <div>
      <h1>Product Details</h1>
      {product ? (
        <div>
          <p>Title: {product.title}</p>
          <p>description: {product.description}</p>
          <p>category: {product.category}</p>
          <p>price: {product.price}</p>
          <p>quantity: {product.quantity}</p>
          <button onClick={handleDeleteProduct}>Delete Product</button>
        </div>
      ) : null}
    </div>
  );
}

export default ProductDetails;

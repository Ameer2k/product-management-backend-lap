import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function ProductDetails() {
  const [product, setProduct] = useState(null);

  const { productId } = useParams();
  useEffect(() => {
    let ignore = false;

    axios
      .get(`${import.meta.env.VITE_BACKEND_SERVER_URL}/products/${productId}`)
      .then((response) => {
        if (!ignore) setProduct(response.data);
      })
      .catch((error) => console.error(error));

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
        </div>
      ) : null}
    </div>
  );
}

export default ProductDetails;

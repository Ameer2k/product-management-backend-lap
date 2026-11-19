import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import {
  deleteProduct as removeProduct,
  getProduct,
} from "../src/services/productService";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const navigate = useNavigate();

  async function handleDeleteProduct() {
    await removeProduct(productId);
    navigate("/products");
  }

  useEffect(() => {
    let ignore = false;

    getProduct(productId).then((response) => {
      if (!ignore) setProduct(response);
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
          <Link to={`/products/${productId}/edit`}>Edit Product</Link>
          <button onClick={handleDeleteProduct}>Delete Product</button>
        </div>
      ) : null}
    </div>
  );
}

export default ProductDetails;

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    axios
      .get(`${import.meta.env.VITE_BACKEND_SERVER_URL}/products`)
      .then((response) => {
        if (!ignore) setProducts(response.data);
      })
      .catch((requestError) => {
        if (!ignore) {
          setError(
            requestError.response?.data?.message ??
              requestError.message ??
              "Failed to load products.",
          );
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      {error && <p role="alert">{error}</p>}
      {products.map((oneProduct) => (
        <div key={oneProduct._id}>
          <p>Title:{oneProduct.title}</p>
          <button>
            <Link to={`/products/${oneProduct._id}`}>product Detail</Link>
          </button>
        </div>
      ))}
    </div>
  );
}

export default AllProducts;

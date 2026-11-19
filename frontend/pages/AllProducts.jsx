import { useState, useEffect } from "react";
import { Link } from "react-router";
import { getAllProducts } from "../src/services/productService";

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let ignore = false;

    getAllProducts().then((response) => {
      if (!ignore) setProducts(response);
    });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      <h2>All Products</h2>
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

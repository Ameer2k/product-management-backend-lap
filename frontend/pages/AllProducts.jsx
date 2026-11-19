import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";

function AllProducts() {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_SERVER_URL}/products`,
    );
    console.log(response.data);
    setProducts(response.data);
  }

  useEffect(() => {
    getAllProducts();
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

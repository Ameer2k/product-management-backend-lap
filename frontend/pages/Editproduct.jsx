import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { getProduct, updateProduct } from "../src/services/productService";

function EditProducts() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
  });
  const { productId } = useParams();

  useEffect(() => {
    let ignore = false;

    getProduct(productId).then((product) => {
      if (!ignore) setFormData(product);
    });

    return () => {
      ignore = true;
    };
  }, [productId]);

  const navigate = useNavigate();

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await updateProduct(productId, formData);
    navigate("/products");
  }
  return (
    <div>
      <h1>Edit Products</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">description: </label>
        <input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="category">category: </label>
        <input
          type="text"
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="price">price: </label>
        <input
          type="text"
          name="price"
          id="price"
          value={formData.price}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="quantity">quantity: </label>
        <input
          type="text"
          name="quantity"
          id="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
        <br />

        <button>Edit Products</button>
      </form>
    </div>
  );
}

export default EditProducts;

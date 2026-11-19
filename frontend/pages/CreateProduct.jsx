import { useState } from "react";
import { useNavigate } from "react-router";
import { createProduct } from "../src/services/productService";

function CreateProduct() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
  });
  const navigate = useNavigate();

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault(); // Stops the form from refreshing and disables default behavior
    await createProduct(formData);
    navigate("/products");
  }

  return (
    <div>
      <h1>Create Products</h1>

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

        <button>Create Products</button>
      </form>
    </div>
  );
}

export default CreateProduct;

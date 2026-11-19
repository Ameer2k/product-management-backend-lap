import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

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
    // TODO: send POST request to the API with the student Data
    await axios.post(
      `${import.meta.env.VITE_BACKEND_SERVER_URL}/products`,
      formData,
    );
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

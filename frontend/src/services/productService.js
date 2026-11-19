import axios from "axios";

const productsUrl = `${import.meta.env.VITE_BACKEND_SERVER_URL}/products`;

export async function getAllProducts() {
  const response = await axios.get(productsUrl);
  return response.data;
}

export async function getProduct(productId) {
  const response = await axios.get(`${productsUrl}/${productId}`);
  return response.data;
}

export async function createProduct(productData) {
  const response = await axios.post(productsUrl, productData);
  return response.data;
}

export async function updateProduct(productId, productData) {
  const response = await axios.put(
    `${productsUrl}/${productId}`,
    productData,
  );
  return response.data;
}

export async function deleteProduct(productId) {
  await axios.delete(`${productsUrl}/${productId}`);
}

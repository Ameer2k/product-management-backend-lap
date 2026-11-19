import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import CreateProduct from "./pages/CreateProduct";
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <div>
      <h1>React Router DOM</h1>
      <Navbar />
      <Routes>
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path={`/products/:productId`} element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;

import { Navigate, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import CreateProduct from "./pages/CreateProduct";
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDetails";
import EditProducts from "./pages/Editproduct";

function App() {
  return (
    <div>
      <h1>React Router DOM</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path="/products/:productId/edit" element={<EditProducts />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;

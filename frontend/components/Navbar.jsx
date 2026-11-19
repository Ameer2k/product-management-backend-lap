import { Link } from "react-router";
function Navbar() {
  return (
    <nav>
      <Link to="/"> Home</Link>
      <Link to="/products"> All products</Link>
      <Link to="/products/create"> Create product</Link>
    </nav>
  );
}
export default Navbar;

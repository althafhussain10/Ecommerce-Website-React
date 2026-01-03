import { Routes, Route } from "react-router-dom";
import Home from "../../src/pages/Home";
import Shop from "../../src/pages/Shop";
import Cart from "../../src/pages/Cart";
import ProductDetails from "../../src/pages/ProductDetails";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
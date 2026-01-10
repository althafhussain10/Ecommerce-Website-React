import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import CartSheet from "../pages/CartSheet";
import NotFound from "../pages/NotFound";
import CategoryPage from "../pages/CategoryPage";
import { Toaster } from "../components/ui/toaster";
import { Toaster as Sonner } from "../components/ui/sonner";

const AppRoutes: React.FC = () => {
  return (
    <>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartSheet />} />
        <Route path="/sarees" element={<CategoryPage />} />
        <Route path="/lehengas" element={<CategoryPage />} />
        <Route path="/kurtis" element={<CategoryPage />} />
        <Route path="/salwar" element={<CategoryPage />} />
        <Route path="/new-arrivals" element={<CategoryPage />} />
        <Route path="/sale" element={<CategoryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
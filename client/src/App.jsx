import Footer from "./components/Footer";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import Products from "./components/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="login" element={<LoginUser />} />
          <Route path="register" element={<RegisterUser />} />
          <Route path="product-detail/:id" element={<ProductDetail />} />
          <Route path="*" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

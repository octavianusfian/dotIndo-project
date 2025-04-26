import { Routes, Route } from "react-router-dom";
import TaskManagement from "./pages/TaskManagement";
import CatalogProducts from "./pages/CatalogProducts/CatalogProducts";
import SingleProduct from "./pages/CatalogProducts/SingleProduct";
import App from "./App";
import { Layout } from "./components/Layout";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect } from "react";
import { dummyUsers } from "../dummyUsers";

const RoutesApp = () => {
  useEffect(() => {
    const usersInStorage = localStorage.getItem("users");
    if (!usersInStorage) {
      localStorage.setItem("users", JSON.stringify(dummyUsers));
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="catalog-products" element={<CatalogProducts />} />
        <Route
          path="task-management"
          element={
            <ProtectedRoute>
              <TaskManagement />
            </ProtectedRoute>
          }
        />
        <Route path="catalog-products/:id" element={<SingleProduct />} />
        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      {/* catch all route */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesApp;

import { Route, Routes } from "react-router-dom";
import "../src/App.css";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";

const App = () => {
  return (
    <>
      <CartContextProvider>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartContextProvider>
    </>
  );
};
export default App;

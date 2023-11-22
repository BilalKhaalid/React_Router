import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import About from "./components/About";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import User from "./components/User";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/utils/auth";
import Login from "./components/Login";

const LazyAbout = lazy(() => import("./components/About"));
import RequiredAuth from "./components/RequireAuth";
const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <Suspense>
              <LazyAbout fallback="Loading..." />
            </Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<User />} />
        <Route path="users/:userId" element={<UserDetails />} />
        <Route path="users/admin" element={<Admin />} />
        <Route
          path="profile"
          element={
            <RequiredAuth>
              <Profile />
            </RequiredAuth>
          }
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;

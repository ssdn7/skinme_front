import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Components/About/AboutUs";
import { SignIn } from "./Components/Auth/SignIn/SignIn";
import SIgnUp from "./Components/Auth/SignUp/SIgnUp";
import { Cart } from "./Components/Cart/Cart";
import CheckoutForm from "./Components/Cart/CheckoutForm";
import ContactUs from "./Components/Contact/ContactUs";
import Favorite from "./Components/Favorite/Favorite";
import DataBranding from "./Components/Home/DataBranding";
import ProductDetails from "./Components/Shop/ProductDetails";
import AddCategory from "./Dashboard/Category/AddCategory";
import Contact from "./Dashboard/Contact";
import DashboardBrand from "./Dashboard/DashboardBrand";
import DashboardCategory from "./Dashboard/DashboardCategory";
import Dashboard from "./Dashboard/DashboardLayout";
import DashboardProduct from "./Dashboard/DashboardProduct";
import User from "./Dashboard/DashboardUser";
import DashboardVideo from "./Dashboard/DashboardVideo";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Thankyou from "./Components/Cart/Thankyou";
import BrandProduct from "./Components/Home/BrandProduct";
import ProductCard from "./Components/Shop/Product";
import Profile from "./Pages/Account/Profile";
import HomePage from "./Pages/Homepage";
import Shop from "./Pages/Shoppage";
import ProtectRoute from "./ProtectRoute";

const stripePromise = loadStripe(
  "pk_test_51PH2vERvwUFIwe3TbN1v3XQaTAJ0pszrDD7S6ywzyNtnuqIDhTgjNFnYoMxzNdsfdzeHtf0VKaUk9doEeK7qwkAM00lKbVe9q2"
);

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Navbar />
            <HomePage />
            <Footer />
          </div>
        }
      />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SIgnUp />} />
      <Route
        path="/shop"
        element={
          <div>
            <Navbar />
            <Shop />
            <Footer />
          </div>
        }
      />
      <Route
        path="/product"
        element={
          <div>
            <Navbar />
            <ProductCard />
            <Footer />
          </div>
        }
      />
      <Route
        path="/about"
        element={
          <div>
            <Navbar />
            <AboutUs />
            <Footer />
          </div>
        }
      />
      <Route
        path="/contact"
        element={
          <div>
            <Navbar />
            <ContactUs />
            <Footer />
          </div>
        }
      />

      {/* data category */}
      <Route
        path="/category/:id/products"
        element={
          <div>
            <Navbar />
            <DataBranding />
            <Footer />
          </div>
        }
      />
      <Route
        path="/thank"
        element={
          <div>
            <Navbar />
            <Thankyou />
            <Footer />
          </div>
        }
      />

      <Route
        path="/brand/name/:name"
        element={
          <div>
            <Navbar />
            <BrandProduct />
            <Footer />
          </div>
        }
      />

      <Route
        path="/dashboard/dashboardCategory"
        element={
          <div>
            <DashboardCategory />
          </div>
        }
      />
      <Route
        path="/dashboard/dashboardBrand"
        element={
          <div>
            <DashboardBrand />
          </div>
        }
      />
      <Route
        path="/dashboard/dashboardVideo"
        element={
          <div>
            <DashboardVideo />
          </div>
        }
      />
      <Route
        path="/dashboard/dashboardCategory/AddCategory"
        element={
          <div>
            <AddCategory />
          </div>
        }
      />
      <Route
        path="/dashboard/dashboardProduct"
        element={
          <div>
            <DashboardProduct />
          </div>
        }
      />
      <Route
        path="/dashboard/contacts"
        element={
          <div>
            <Contact />
          </div>
        }
      />
      <Route
        path="/dashboard/users"
        element={
          <div>
            <User />
          </div>
        }
      />
      <Route
        path="/dashboard/*"
        element={
          <ProtectRoute>
            <Dashboard />
          </ProtectRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <div>
            <Navbar />
            <Profile />
          </div>
        }
      />
      {/* <Route
        path="/billing"
        element={
          <div>
            <Navbar />
            <Billing />
          </div>
        }
      /> */}
      {/* <Route
        path="/order"
        element={
          <div>
            <Navbar />
            <Order />
          </div>
        }
      /> */}
      <Route
        path="/cart"
        element={
          <div>
            <Navbar />
            <Cart />
          </div>
        }
      />
      <Route
        path="/checkout"
        element={
          <div>
            <Navbar />
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        }
      />
      <Route
        path="/favorite"
        element={
          <div>
            <Navbar />
            <Favorite />
          </div>
        }
      />
      <Route
        path="/details"
        element={
          <div>
            <Navbar />
            <ProductDetails />
          </div>
        }
      />
    </Routes>
  );
}

export default App;

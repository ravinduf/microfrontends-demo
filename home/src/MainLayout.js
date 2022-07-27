import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "remixicon/fonts/remixicon.css";

import "./index.scss";

import Header from "home/Header";
import HomeContent from "home/HomeContent"
import PDPContent from "pdp/PDPContent"
import CartContent from "cart/CartContent"
import Footer from "home/Footer";

// const Header = React.lazy(() => import("home/Header"));
// const Footer = React.lazy(() => import("home/Footer"));

const MainLayout = () => (
  <>
    <Router>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <Header />
        <div className="my-10">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/cart" element={<CartContent />} />
            <Route path="products/:id" element={<PDPContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  </>
);

export default MainLayout;
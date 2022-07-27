import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "remixicon/fonts/remixicon.css";

import "./index.scss";

import SafeComponent from "./SafeComponent";
import PDPContent from "./PDPContent";
import Header from "home/Header";
import Footer from "home/Footer";
// const Header = React.lazy(() => import("home/Header"));
// const Footer = React.lazy(() => import("home/Footer"));

const App = () => (
  <>
    <Router>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <SafeComponent>
          <Header />
        </SafeComponent>
        <div className="my-10">
          <Routes>
            <Route path="products/:id" element={<PDPContent/>}/>
          </Routes>
          <PDPContent />
        </div>
        <Footer />
      </div>
    </Router>
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));

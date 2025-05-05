import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import Connect from "./Pages/Connect";
import PageNotFound from "./Pages/PageNotFound";
import Services from "./Pages/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="work" element={<Work />} />
            <Route path="services" element={<Services />} />
            <Route path="connect" element={<Connect />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import Career from "./pages/Career";
import JobPage from "./pages/JobPage";
import AdminLogin from "./pages/AdminLogin";
import Artists from "./pages/Artists";
import Terms from "./pages/Terms";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/services" element={<Services />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/career" element={<Career />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/career/:id" element={<JobPage />} />
          <Route
            path="/admin"
            element={isLoggedIn ? <Admin /> : <Navigate to="/admin/login" />}
          />
          <Route
            path="/admin/login"
            element={
              isLoggedIn ? (
                <Navigate to="/admin" /> // Redirect to /admin if already logged in
              ) : (
                <AdminLogin onLogin={() => setIsLoggedIn(true)} />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

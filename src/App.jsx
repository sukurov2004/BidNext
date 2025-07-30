import React, {useState,useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import ScrollToTopButton from "./components/ScrollToTopButton";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const LiveAuctions = lazy(() => import("./pages/LiveAuctions"));
const CreateAuction = lazy(() => import("./pages/CreateAuction"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Spinner />;

  return (
 <div>
      <Navbar />

      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/LiveAuctions" element={<LiveAuctions />} />
          <Route path="/about" element={<About />} />
          <Route path="/CreateAuction" element={<CreateAuction />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

      <Footer />
            {/* Scroll düyməsi */}
      <ScrollToTopButton/>
 </div>
  );
}

export default App;

// imports
import Head from './components/head.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/home.jsx';
import Realisations from './pages/realisations.jsx';
import Contact from './pages/contact.jsx';

import { Routes, Route } from "react-router-dom";

export default function App(){
  return (
    <>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
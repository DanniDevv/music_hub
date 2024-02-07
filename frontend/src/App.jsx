import "./App.css";
import Home from "@/pages/Home/Home";
import Musica from "@/pages/Musica/musica";
import Reproducir from "@/pages/Musica/Reproducir/reproducir";
import About from "@/pages/About/about";

import Navbar from "@/components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/musica" element={<Musica />} />
          <Route path="/reproducir/:id" element={<Reproducir />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

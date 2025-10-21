import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TopAnime from "./pages/TopAnime";
import AnimeDetail from "./pages/AnimeDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-700 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600">Anime Website</h1>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top" element={<TopAnime />} />
        <Route path="/anime/:id" element={<AnimeDetail />} />
      </Routes>

      {/* Optional default content below routes */}
      {/* <div className="min-h-screen bg-gray-700 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600">Anime Website</h1>
      </div> */}
    </BrowserRouter>
  );
};

export default App;
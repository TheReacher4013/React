import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TopAnime from "./pages/TopAnime";
import AnimeDetail from "./pages/AnimeDetails";
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <BrowserRouter>
      {/* <div className="bg-gray-700 flex items-center justify-center h-115">
        <h1 className="text-2xl font-bold text-blue-600">Anime Website</h1>
      </div> */}


      <Navbar />
      <Routes>
        {/* <Route path="/landing" element={<LandingPage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/top" element={<TopAnime />} />
        <Route path="/anime/:id" element={<AnimeDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
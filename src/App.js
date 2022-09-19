import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import NowPlayingPage from "./pages/NowPlayingPage";
import UpcomingPage from "./pages/UpcomingPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage"; //path detail

function App() {
  return (
    <>
      <header>
        <h1>Movie Catalogue</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/now-playing" element={<NowPlayingPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/search" element={<SearchPage />} />
          {/* path detail */}
          <Route path="/movies/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

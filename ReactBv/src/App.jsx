// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import CharacterPage from './Pages/CharacterPage/CharacterPage';
import AliensPage from './pages/AliensPage/AliensPage';
import HumansPage from './pages/HumansPage/HumansPage';
import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'; // Importa la página NotFound
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/character/:id" element={<CharacterPage />} />
            <Route path="/aliens" element={<AliensPage />} />
            <Route path="/humans" element={<HumansPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} /> {/* Ruta para la página no encontrada */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

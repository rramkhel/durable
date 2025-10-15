import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Guardian from './pages/Guardian';
import Local from './pages/Local';
import Advisor from './pages/Advisor';
import Rationale from './pages/Rationale';
import Presentation from './pages/Presentation';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guardian" element={<Guardian />} />
            <Route path="/local" element={<Local />} />
            <Route path="/advisor" element={<Advisor />} />
            <Route path="/rationale" element={<Rationale />} />
            <Route path="/presentation" element={<Presentation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

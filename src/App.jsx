import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Guardian from './pages/Guardian';
import Local from './pages/Local';
import Advisor from './pages/Advisor';
import Rationale from './pages/Rationale';

function App() {
  return (
    <Router basename="/durable-pm-portfolio">
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guardian" element={<Guardian />} />
            <Route path="/local" element={<Local />} />
            <Route path="/advisor" element={<Advisor />} />
            <Route path="/rationale" element={<Rationale />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

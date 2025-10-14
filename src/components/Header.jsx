import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-gray-900 hover:text-purple-600 transition-colors">
            Durable PM Portfolio
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link to="/guardian" className="text-gray-600 hover:text-gray-900 transition-colors">
              Guardian
            </Link>
            <Link to="/local" className="text-gray-600 hover:text-gray-900 transition-colors">
              Local
            </Link>
            <Link to="/advisor" className="text-gray-600 hover:text-gray-900 transition-colors">
              Advisor
            </Link>
            <Link to="/rationale" className="text-gray-600 hover:text-gray-900 transition-colors">
              Rationale
            </Link>
          </nav>
          <a
            href="mailto:rachel.ramkhelawan@gmail.com"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

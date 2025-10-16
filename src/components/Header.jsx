import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [showDemoDropdown, setShowDemoDropdown] = useState(false);

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
            <div
              className="relative"
              onMouseEnter={() => setShowDemoDropdown(true)}
              onMouseLeave={() => setShowDemoDropdown(false)}
            >
              <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors py-2">
                Demo
                <ChevronDown className="w-4 h-4" />
              </button>
              {showDemoDropdown && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <Link
                      to="/guardian"
                      className="block px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    >
                      Guardian
                    </Link>
                    <Link
                      to="/local"
                      className="block px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    >
                      Local
                    </Link>
                    <Link
                      to="/advisor"
                      className="block px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    >
                      Advisor
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/rationale" className="text-gray-600 hover:text-gray-900 transition-colors">
              Product Strategy
            </Link>
            <Link to="/letstalk" className="text-gray-600 hover:text-gray-900 transition-colors">
              Let's Talk
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

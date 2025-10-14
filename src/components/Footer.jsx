import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Durable PM Portfolio</h3>
            <p className="text-sm text-gray-400">
              Three AI-powered feature prototypes designed to reduce churn, increase visibility, and accelerate growth.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/guardian" className="hover:text-white transition-colors">
                  Durable Guardian
                </Link>
              </li>
              <li>
                <Link to="/local" className="hover:text-white transition-colors">
                  Durable Local
                </Link>
              </li>
              <li>
                <Link to="/advisor" className="hover:text-white transition-colors">
                  Durable Advisor
                </Link>
              </li>
              <li>
                <Link to="/rationale" className="hover:text-white transition-colors">
                  Product Rationale
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm text-gray-400 mb-2">
              Interested in discussing these features?
            </p>
            <a
              href="mailto:rachel.ramkhelawan@gmail.com"
              className="text-purple-400 hover:text-purple-300 text-sm transition-colors"
            >
              rachel.ramkhelawan@gmail.com
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>Built with React, Tailwind CSS, and passion for great product management.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

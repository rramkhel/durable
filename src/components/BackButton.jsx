import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton = ({ to = '/', label = 'Back' }) => {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 group"
    >
      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
      <span>{label}</span>
    </Link>
  );
};

export default BackButton;

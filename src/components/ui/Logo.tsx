import React from 'react';
import { Heart } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a href="#" className="flex items-center space-x-2 text-primary-600">
      <Heart className="h-8 w-8 text-primary-600 fill-primary-200" />
      <span className="text-xl font-bold">
        <span className="text-primary-600">GoGet</span>
        <span className="text-teal-600">Well</span>
        <span className="text-primary-600 text-opacity-70 font-light">.ai</span>
      </span>
    </a>
  );
};

export default Logo;

import React from 'react';

const Logo: React.FC<{className?: string}> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="public/uploads/Picsart_25-05-17_00-29-51-885.png" 
        alt="CSES Logo" 
        className="h-10 w-auto" 
      />
    </div>
  );
};

export default Logo;

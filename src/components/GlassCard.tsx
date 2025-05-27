import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'from-green-400/20 to-blue-500/20',
}) => {
  return (
    <div className={`relative group ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-r ${glowColor} rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-300`}></div>
      <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 p-6 rounded-xl h-full">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
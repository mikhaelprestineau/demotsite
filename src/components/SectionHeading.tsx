import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && <p className="text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
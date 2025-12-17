import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href,
  external,
  className = '',
  ...props 
}) => {
  const baseStyle = "px-8 py-3 font-serif font-bold tracking-widest uppercase transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 clip-path-slant";
  
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] border border-red-600",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
  };

  const combinedClass = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        target={external ? "_blank" : "_self"} 
        rel={external ? "noopener noreferrer" : ""}
        className={`inline-block text-center ${combinedClass}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
};
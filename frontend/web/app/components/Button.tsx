import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button onClick={onClick} className="bg-green-500 text-white p-2">
      {children}
    </button>
  );
}
import React, { useEffect, useState } from 'react';

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    // Generate static hearts on mount
    setHearts(Array.from({ length: 20 }, (_, i) => i));
  }, []);

  return (
    <div className="heart-bg">
      {hearts.map((i) => (
        <div
          key={i}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            fontSize: `${Math.random() * 20 + 20}px`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;

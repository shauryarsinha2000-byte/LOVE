import React, { useState } from 'react';
import FloatingHearts from './components/FloatingHearts';
import SuccessView from './components/SuccessView';
import { FALLBACK_PHRASES } from './types';

// Gifs
const INITIAL_GIF = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ242aDh4OTlwNDUycHY0dmRmNXcyMmJ2a2RuNDl6M2txYzB3bjBydSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VM1fcpu2bKs1e2Kdbj/giphy.gif";
const SAD_GIF = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWNmb3Yya3NkeWI3aXc1N3VmcXhodnhicGNzZXFqamNzN3V1d2xxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hWLkzzuMXoPD81jXKW/giphy.gif";

const Footer = () => (
  <footer className="fixed bottom-0 w-full p-4 text-center z-50 pointer-events-none">
    <div className="inline-block bg-white/30 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
      <p className="text-lg md:text-xl text-rose-700 font-hand font-bold drop-shadow-sm">
        Made with 💖 from Shaurya (The Beast 🦁) to Akanksha (The Beauty 🌹)
      </p>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [hasSaidYes, setHasSaidYes] = useState(false);
  const [noCount, setNoCount] = useState(0);
  
  // Use fallback phrases directly
  const phrases = FALLBACK_PHRASES;

  const handleNoClick = () => {
    setNoCount(prev => prev + 1);
  };

  const handleYesClick = () => {
    setHasSaidYes(true);
  };

  if (hasSaidYes) {
    return (
      <div className="relative min-h-screen">
        <FloatingHearts />
        <SuccessView />
        <Footer />
      </div>
    );
  }

  // Dynamic Styles Calculation
  // Yes button grows significantly with each click
  const yesButtonSize = Math.min(20 + noCount * 25, 200); 
  
  // No button shrinks until it disappears
  const noButtonSize = Math.max(16 - noCount * 2, 0);
  const showNoButton = noButtonSize > 0;

  // Select phrase based on count
  // We offset by 1 because count starts at 0 (no phrase needed initially)
  const phraseIndex = (noCount - 1) % phrases.length;
  const currentPhrase = noCount === 0 ? "" : phrases[phraseIndex];

  const currentGif = noCount === 0 ? INITIAL_GIF : SAD_GIF;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden font-sans pb-20">
        <FloatingHearts />
        
        <div className="z-10 flex flex-col items-center gap-8 max-w-2xl w-full">
            {/* Header GIF */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img 
                    src={currentGif} 
                    alt="Cute valentine gif"
                    className="w-full h-full object-cover" 
                />
            </div>

            {/* Question */}
            <h1 className="text-5xl md:text-7xl font-hand font-bold text-red-600 text-center drop-shadow-sm leading-tight">
                Will you be my Valentine?
            </h1>

            {/* Buttons Area */}
            <div className="flex flex-col items-center gap-6 w-full min-h-[150px]">
                
                {/* Dynamic AI Text appearing above Yes button */}
                {noCount > 0 && (
                     <div className="h-10 text-2xl md:text-3xl font-bold text-pink-600 animate-bounce text-center px-4">
                        {currentPhrase} 🥺👉👈
                    </div>
                )}

                <div className="flex flex-wrap justify-center items-center gap-8 w-full">
                    <button
                        onClick={handleYesClick}
                        style={{ 
                          fontSize: `${yesButtonSize}px`,
                          padding: `${yesButtonSize * 0.5}px ${yesButtonSize}px`,
                          lineHeight: 1
                        }}
                        className={`
                            bg-green-500 hover:bg-green-600 text-white font-bold rounded-full 
                            shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95
                            ${noCount > 0 ? 'animate-pulse' : ''}
                        `}
                    >
                        Yes
                    </button>

                    {showNoButton && (
                        <button
                            onClick={handleNoClick}
                            style={{ 
                              fontSize: `${noButtonSize}px`, 
                              padding: `${noButtonSize * 0.5}px ${noButtonSize}px` 
                            }}
                            className="bg-red-400 hover:bg-red-500 text-white font-bold rounded-full shadow-lg transform transition-all duration-300 hover:rotate-6"
                        >
                            No
                        </button>
                    )}
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default App;
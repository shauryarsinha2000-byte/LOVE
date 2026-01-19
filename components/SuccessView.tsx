import React from 'react';

const SUCCESS_GIF = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2kzbHF6OTRsdTdodjdiMjNkM2N1bG05amxxb3lmdjJ3aWVhNGpucCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KyEtlYiutRHVC68Ess/giphy.gif";

const SuccessView: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center animate-float">
      <h1 className="text-4xl md:text-6xl font-hand font-bold text-red-600 mb-6 drop-shadow-md">
        Yay! 14th Feb Valentines Day! <br/> You, me, and just love! ❤️
      </h1>
      
      <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-300 bg-white">
        <img 
          src={SUCCESS_GIF} 
          alt="Happy love gif" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <p className="mt-8 text-xl text-pink-600 font-bold animate-pulse-fast">
        Can't wait to see you! xoxo
      </p>
    </div>
  );
};

export default SuccessView;

import React from "react";

interface HomepageProps {
  setState: (value: boolean) => void;
}

const Homepage = ({ setState }: HomepageProps) => {
  return (
    <div className="fixed inset-0 h-screen w-screen flex justify-center items-center bg-white/95 z-[1000] flex-col gap-8 ">
      <div className="text-center space-y-4">
        <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent animate-fade-in">
          Pandel 3D
        </h1>
        <p className="text-gray-600 text-lg md:text-xl font-medium">
          Immersive 3D Experience
        </p>
      </div>

      <button
        className="group relative bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold px-8 py-4 rounded-2xl hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 ease-out overflow-hidden cursor-pointer"
        onClick={() => setState(false)}
        aria-label="Start 3D experience"
      >
        <span className="relative z-10 flex items-center gap-2">
          Start Experience
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </button>
    </div>
  );
};

export default Homepage;

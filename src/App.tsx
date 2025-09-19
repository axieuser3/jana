import React, { useState } from 'react';
import { Mail } from 'lucide-react';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const openEnvelope = () => {
    setIsOpened(true);
  };

  const closeGift = () => {
    setIsOpened(false);
  };

  if (isOpened) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex items-center justify-center p-2">
        {/* Mobile-First Phone Frame */}
        <div className="relative">
          {/* Phone Outer Frame - Mobile Optimized */}
          <div className="w-80 h-[600px] md:w-96 md:h-[680px] lg:w-[420px] lg:h-[800px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] p-1 md:p-1.5 lg:p-2 shadow-2xl">
            {/* Phone Inner Frame */}
            <div className="w-full h-full bg-black rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] p-0.5">
              {/* Phone Screen */}
              <div className="w-full h-full bg-gradient-to-br from-pink-300 via-pink-400 to-rose-400 rounded-[1rem] md:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden relative">

                {/* Phone Status Bar - Mobile Optimized */}
                <div className="absolute top-0 left-0 right-0 h-6 md:h-8 bg-black bg-opacity-10 flex items-center justify-between px-4 md:px-6 text-xs text-white z-50">
                  <span>9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-1.5 md:w-4 md:h-2 border border-white rounded-sm">
                      <div className="w-2 h-1 md:w-3 md:h-1 bg-green-400 rounded-sm"></div>
                    </div>
                  </div>
                </div>

                {/* App Content Area - Mobile Optimized */}
                <div className="pt-6 md:pt-8 pb-3 md:pb-4 px-3 md:px-4 h-full flex items-center justify-center relative overflow-hidden">
                  {/* Main rose - Mobile Optimized */}
                  <div className="text-center animate-fade-in z-10 relative">
                    <div className="relative animate-pulse-slow filter drop-shadow-2xl">
                      {/* Beautiful rose emoji - Mobile Optimized Size */}
                      <div className="text-5xl md:text-6xl lg:text-[4rem] animate-pulse-slow filter drop-shadow-2xl">
                        🌹
                      </div>
                      {/* Glowing aura effect */}
                      <div className="absolute inset-0 bg-red-500/20 rounded-full blur-2xl animate-pulse-glow"></div>
                    </div>
                    {/* Jana's name - Mobile Optimized */}
                    <div className="mt-2 md:mt-3 text-white text-lg md:text-xl font-light tracking-wider animate-fade-in-delayed">
                      Jana Elhelwany
                    </div>
                  </div>

                  {/* Floating roses - Mobile Optimized */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Large roses - Reduced for mobile */}
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={`large-${i}`}
                        className="absolute animate-float"
                        style={{
                          left: `${[15, 75, 20][i]}%`,
                          top: `${[20, 25, 70][i]}%`,
                          animationDelay: `${i * 0.8}s`,
                          animationDuration: `${4 + i * 0.5}s`
                        }}
                      >
                        <div className="opacity-30 md:opacity-40 hover:opacity-60 md:hover:opacity-70 transition-all duration-1000 transform rotate-12 hover:scale-110 filter drop-shadow-lg">
                          <svg width="50" height="50" md:width="60" lg:width="80" viewBox="0 0 100 100" className="animate-heartbeat">
                            <defs>
                              <radialGradient id={`roseGrad${i}`} cx="50%" cy="30%" r="70%">
                                <stop offset="0%" stopColor="#fca5a5" />
                                <stop offset="50%" stopColor="#ef4444" />
                                <stop offset="100%" stopColor="#b91c1c" />
                              </radialGradient>
                            </defs>
                            <path d="M50 25 C40 20, 30 30, 35 40 C30 50, 40 60, 50 55 C60 60, 70 50, 65 40 C70 30, 60 20, 50 25 Z" fill={`url(#roseGrad${i})`} opacity="0.9"/>
                            <path d="M50 30 C42 28, 35 35, 37 42 C35 49, 42 52, 50 51 C57 52, 65 49, 63 42 C65 35, 57 28, 50 30 Z" fill={`url(#roseGrad${i})`} opacity="0.8"/>
                            <circle cx="50" cy="40" r="4" fill="#7f1d1d" opacity="0.8"/>
                          </svg>
                        </div>
                      </div>
                    ))}
                    
                    {/* Medium roses - Reduced for mobile */}
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={`medium-${i}`}
                        className="absolute animate-float"
                        style={{
                          left: `${[10, 85, 25, 70][i]}%`,
                          top: `${[35, 40, 15, 80][i]}%`,
                          animationDelay: `${i * 0.6 + 1}s`,
                          animationDuration: `${3.5 + i * 0.3}s`
                        }}
                      >
                        <div className="opacity-25 md:opacity-35 hover:opacity-50 md:hover:opacity-60 transition-all duration-1000 transform -rotate-6 hover:scale-105 filter drop-shadow-md">
                          <svg width="40" height="40" md:width="50" lg:width="60" viewBox="0 0 100 100" className="animate-pulse-slow">
                            <defs>
                              <radialGradient id={`mediumRose${i}`} cx="50%" cy="30%" r="70%">
                                <stop offset="0%" stopColor="#fda4af" />
                                <stop offset="50%" stopColor="#f472b6" />
                                <stop offset="100%" stopColor="#be185d" />
                              </radialGradient>
                            </defs>
                            <path d="M50 25 C40 20, 30 30, 35 40 C30 50, 40 60, 50 55 C60 60, 70 50, 65 40 C70 30, 60 20, 50 25 Z" fill={`url(#mediumRose${i})`} opacity="0.8"/>
                            <path d="M50 30 C42 28, 35 35, 37 42 C35 49, 42 52, 50 51 C57 52, 65 49, 63 42 C65 35, 57 28, 50 30 Z" fill={`url(#mediumRose${i})`} opacity="0.7"/>
                            <circle cx="50" cy="40" r="3" fill="#831843" opacity="0.9"/>
                          </svg>
                        </div>
                      </div>
                    ))}

                    {/* Small roses - Reduced for mobile */}
                    {[...Array(6)].map((_, i) => {
                      const positions = [
                        { left: 8, top: 12 }, { left: 92, top: 18 }, { left: 6, top: 88 }, 
                        { left: 94, top: 82 }, { left: 12, top: 45 }, { left: 88, top: 55 }
                      ];
                      return (
                        <div
                          key={`small-${i}`}
                          className="absolute animate-float"
                          style={{
                            left: `${positions[i].left}%`,
                            top: `${positions[i].top}%`,
                            animationDelay: `${i * 0.4 + 2}s`,
                            animationDuration: `${3 + i * 0.2}s`
                          }}
                        >
                          <div className="opacity-20 md:opacity-25 hover:opacity-35 md:hover:opacity-45 transition-all duration-1000 hover:scale-110 filter drop-shadow-sm">
                            <svg width="25" height="25" md:width="30" lg:width="40" viewBox="0 0 100 100" className="animate-float-slow">
                              <defs>
                                <radialGradient id={`smallRose${i}`} cx="50%" cy="30%" r="70%">
                                  <stop offset="0%" stopColor="#fbb6ce" />
                                  <stop offset="50%" stopColor="#f9a8d4" />
                                  <stop offset="100%" stopColor="#db2777" />
                                </radialGradient>
                              </defs>
                              <path d="M50 30 C42 25, 35 32, 38 40 C35 48, 42 52, 50 50 C58 52, 65 48, 62 40 C65 32, 58 25, 50 30 Z" fill={`url(#smallRose${i})`} opacity="0.8"/>
                              <circle cx="50" cy="40" r="2" fill="#be185d" opacity="0.9"/>
                            </svg>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* FALLING ROSE PETALS - Reduced for mobile */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={`petal-${i}`}
                        className="absolute animate-fall"
                        style={{
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 8}s`,
                          animationDuration: `${6 + Math.random() * 4}s`
                        }}
                      >
                        <div
                          className="w-1.5 h-2 md:w-2 md:h-3 bg-gradient-to-br from-pink-300 via-rose-400 to-red-500 rounded-full opacity-60 transform rotate-45"
                          style={{
                            filter: 'drop-shadow(0 0 3px rgba(244, 63, 94, 0.5))'
                          }}
                        ></div>
                      </div>
                    ))}
                  </div>

                  {/* Romantic particles - Reduced for mobile */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => {
                      const particles = ['♥', '✨', '💕', '🌸'];
                      const particlePositions = [
                        { left: 15, top: 10 }, { left: 85, top: 15 }, { left: 10, top: 85 }, { left: 90, top: 80 },
                        { left: 25, top: 30 }, { left: 75, top: 35 }, { left: 30, top: 75 }, { left: 70, top: 70 }
                      ];
                      return (
                        <div
                          key={`particle-${i}`}
                          className="absolute animate-float-slow"
                          style={{
                            left: `${particlePositions[i].left}%`,
                            top: `${particlePositions[i].top}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${6 + (i % 3)}s`
                          }}
                        >
                          <div className="text-pink-200 text-sm md:text-lg opacity-30 md:opacity-40 hover:opacity-60 md:hover:opacity-70 transition-opacity duration-500 filter drop-shadow-sm">
                            {particles[i % particles.length]}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Close button - Mobile Optimized */}
                  <button
                    onClick={closeGift}
                    className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 px-3 py-1.5 md:px-4 md:py-2 bg-white/90 hover:bg-white text-gray-700 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/50 hover:border-white group text-xs md:text-sm z-50"
                  >
                    <span className="flex items-center gap-1">
                      <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
                      <span>Close</span>
                    </span>
                  </button>
                </div>

                {/* Phone Home Indicator */}
                <div className="absolute bottom-1 md:bottom-1.5 lg:bottom-2 left-1/2 transform -translate-x-1/2 w-20 md:w-24 lg:w-32 h-0.5 md:h-0.5 lg:h-1 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Phone Side Buttons - Mobile Responsive */}
          <div className="absolute left-0 top-20 md:top-24 lg:top-28 w-0.5 md:w-0.5 lg:w-1 h-12 md:h-14 lg:h-16 bg-gray-700 rounded-l-lg"></div>
          <div className="absolute left-0 top-36 md:top-44 lg:top-52 w-0.5 md:w-0.5 lg:w-1 h-8 md:h-10 lg:h-12 bg-gray-700 rounded-l-lg"></div>
          <div className="absolute left-0 top-48 md:top-58 lg:top-68 w-0.5 md:w-0.5 lg:w-1 h-8 md:h-10 lg:h-12 bg-gray-700 rounded-l-lg"></div>
        </div>

        <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: scale(0.8) translateY(20px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
          @keyframes fade-in-delayed {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(2deg); }
            66% { transform: translateY(-5px) rotate(-1deg); }
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-20px) translateX(8px); }
          }
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            25% { transform: scale(1.03); }
            50% { transform: scale(1.01); }
            75% { transform: scale(1.05); }
          }
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.05); }
          }
          @keyframes fall {
            0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
          }
          .animate-fade-in {
            animation: fade-in 2s ease-out;
          }
          .animate-fade-in-delayed {
            animation: fade-in-delayed 2.5s ease-out 0.8s both;
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          .animate-float-slow {
            animation: float-slow 8s ease-in-out infinite;
          }
          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
          .animate-heartbeat {
            animation: heartbeat 2s ease-in-out infinite;
          }
          .animate-pulse-glow {
            animation: pulse-glow 3s ease-in-out infinite;
          }
          .animate-fall {
            animation: fall linear infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex items-center justify-center p-2">
      {/* Phone Frame - Mobile First Responsive */}
      <div className="relative">
        {/* Phone Outer Frame - Mobile Optimized */}
        <div className="w-80 h-[600px] md:w-96 md:h-[680px] lg:w-[420px] lg:h-[800px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] p-1 md:p-1.5 lg:p-2 shadow-2xl">
          {/* Phone Inner Frame */}
          <div className="w-full h-full bg-black rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] p-0.5">
            {/* Phone Screen */}
            <div className="w-full h-full bg-gradient-to-br from-gray-50 to-white rounded-[1rem] md:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden relative">

              {/* Phone Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-5 md:h-6 lg:h-8 bg-black bg-opacity-5 flex items-center justify-between px-3 md:px-4 lg:px-6 text-xs text-gray-600">
                <span>9:41</span>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-1.5 md:w-3 md:h-1.5 lg:w-4 lg:h-2 border border-gray-400 rounded-sm">
                    <div className="w-2 h-0.5 md:w-2 md:h-0.5 lg:w-3 lg:h-1 bg-green-500 rounded-sm"></div>
                  </div>
                </div>
              </div>

              {/* App Content Area - Mobile Optimized */}
              <div className="pt-5 md:pt-6 lg:pt-8 pb-3 md:pb-3 lg:pb-4 px-3 md:px-3 lg:px-4 h-full flex items-center justify-center">
                <div className="text-center w-full">
                  {/* Enhanced realistic envelope design - Mobile Optimized */}
                  <div
                    className="relative cursor-pointer group transition-all duration-700 hover:scale-105 hover:rotate-1"
                    onClick={openEnvelope}
                  >
                    {/* Enhanced envelope shadow */}
                    <div className="absolute inset-0 bg-black/15 rounded-lg transform translate-y-1.5 translate-x-1 md:translate-y-2 md:translate-x-1 blur-md group-hover:translate-y-2 group-hover:translate-x-1.5 md:group-hover:translate-y-3 md:group-hover:translate-x-2 transition-all duration-700"></div>

                    {/* Enhanced main envelope body - Mobile Optimized */}
                    <div className="relative w-60 h-40 md:w-72 md:h-48 mx-auto">
                      {/* Enhanced envelope back */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 rounded-lg shadow-2xl border border-amber-200/50 group-hover:shadow-3xl transition-all duration-700 overflow-hidden">
                        {/* Paper texture overlay */}
                        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-transparent via-amber-200/30 to-transparent"></div>
                      </div>

                      {/* Envelope texture lines */}
                      <div className="absolute inset-2 md:inset-3 border border-amber-200/30 rounded-md"></div>
                      <div className="absolute inset-3 md:inset-4 border border-amber-200/20 rounded-sm"></div>

                      {/* Enhanced envelope flap - Mobile Optimized */}
                      <div className="absolute -top-1 left-2 right-2 md:left-3 md:right-3 z-10">
                        <div className="h-16 md:h-20 bg-gradient-to-b from-amber-100 via-yellow-100 to-amber-200 transform rotate-180 shadow-xl border-x border-amber-300/50 transition-all duration-700 group-hover:shadow-2xl"
                             style={{clipPath: 'polygon(0 100%, 50% 0, 100% 100%)'}}>
                          {/* Flap texture */}
                          <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-transparent via-amber-300/20 to-transparent"></div>
                        </div>
                        {/* Enhanced flap seal - Mobile Optimized */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-700 border-2 border-red-300/50">
                          <div className="text-white text-xs animate-pulse">♥</div>
                        </div>
                      </div>

                      {/* Envelope front details - Mobile Optimized */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center z-5">
                        {/* Address lines simulation */}
                        <div className="space-y-1 mb-2 md:mb-3">
                          <div className="w-20 md:w-24 h-0.5 bg-amber-300/40 rounded"></div>
                          <div className="w-16 md:w-20 h-0.5 bg-amber-300/40 rounded"></div>
                          <div className="w-24 md:w-28 h-0.5 bg-amber-300/40 rounded"></div>
                        </div>

                        {/* Enhanced mail icon - Mobile Optimized */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg group-hover:shadow-xl transition-all duration-700 group-hover:scale-110 group-hover:bg-white/90 border border-white/50 group-hover:border-white">
                          <Mail size={16} className="md:w-5 md:h-5 text-red-500 group-hover:text-red-600 transition-all duration-700 group-hover:rotate-12" />
                        </div>
                      </div>

                      {/* Enhanced vintage stamp - Mobile Optimized */}
                      <div className="absolute top-2 right-2 md:top-3 md:right-3 w-8 h-10 md:w-10 md:h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-sm shadow-md border-2 border-white transform rotate-3 group-hover:rotate-6 transition-all duration-700 group-hover:shadow-lg group-hover:scale-105 overflow-hidden">
                        {/* Stamp perforations effect */}
                        <div className="absolute inset-0 border-2 border-dashed border-red-300/30"></div>
                        <div className="text-white text-xs text-center mt-0.5 relative z-10">🌹</div>
                        <div className="text-white text-[6px] md:text-[7px] text-center mt-0.5 font-mono relative z-10">LOVE</div>
                        {/* Stamp texture */}
                        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-transparent via-red-300/30 to-transparent"></div>
                      </div>
                    </div>

                    {/* Enhanced click instruction - Mobile Optimized */}
                    <div className="mt-3 md:mt-4 text-center">
                      <p className="text-gray-500 group-hover:text-gray-700 transition-colors duration-700 font-light text-sm mb-1">
                        Click to open your gift
                      </p>
                      <div className="flex justify-center items-center gap-2 opacity-60 group-hover:opacity-80 transition-opacity duration-700">
                        <span className="text-xs text-gray-400">✨</span>
                        <span className="text-xs text-gray-400 font-medium">For Jana</span>
                        <span className="text-xs text-gray-400">✨</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Home Indicator */}
              <div className="absolute bottom-1 md:bottom-1.5 lg:bottom-2 left-1/2 transform -translate-x-1/2 w-20 md:w-24 lg:w-32 h-0.5 md:h-0.5 lg:h-1 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Phone Side Buttons - Mobile Responsive */}
        <div className="absolute left-0 top-20 md:top-24 lg:top-28 w-0.5 md:w-0.5 lg:w-1 h-12 md:h-14 lg:h-16 bg-gray-700 rounded-l-lg"></div>
        <div className="absolute left-0 top-36 md:top-44 lg:top-52 w-0.5 md:w-0.5 lg:w-1 h-8 md:h-10 lg:h-12 bg-gray-700 rounded-l-lg"></div>
        <div className="absolute left-0 top-48 md:top-58 lg:top-68 w-0.5 md:w-0.5 lg:w-1 h-8 md:h-10 lg:h-12 bg-gray-700 rounded-l-lg"></div>
      </div>
    </div>
  );
}

export default App;
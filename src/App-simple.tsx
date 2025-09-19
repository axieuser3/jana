import React, { useState } from 'react';
import { Mail } from 'lucide-react';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const openEnvelope = () => {
    setIsOpened(true);
  };

  if (isOpened) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-300 via-pink-400 to-rose-400 flex items-center justify-center">
        <div className="text-center">
          <div className="text-8xl">🌹</div>
          <div className="mt-4 text-white text-4xl font-light">
            Jana Elhelwany
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-8">
      <div className="text-center">
        <div
          className="relative cursor-pointer group"
          onClick={openEnvelope}
        >
          <div className="w-80 h-56 mx-auto bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg shadow-xl flex items-center justify-center">
            <Mail size={48} className="text-red-500" />
          </div>
          <p className="mt-4 text-gray-500 text-lg">
            Click to open your gift
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

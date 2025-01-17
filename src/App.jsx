import React from 'react';
import OnlineEarning from './OnlineEarning';

export default function App() {
  return (
    <div className="min-h-screen">
      <OnlineEarning />
      <div className="absolute bottom-4 right-4">
        <a 
          href="https://www.zapt.ai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline"
        >
          Made on ZAPT
        </a>
      </div>
    </div>
  );
}
// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Home Page
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Welcome to the Home Page!
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
            Get Started
          </button>
          <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
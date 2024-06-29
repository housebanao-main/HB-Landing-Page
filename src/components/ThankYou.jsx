import React from 'react';
import Header from '../components/Header';
import Innovation from '../components/Innovation';

const ThankYou = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-100">
      <Header />
      <main className="flex-grow flex items-center justify-center p-10">
        <div className="text-center border-4 border-brown rounded-lg p-8 animate-fadeInExpand" style={{ borderColor: '#A46254' }}>
          <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fadeIn">Thank You for Visiting!</h1>
          <p className="text-xl text-gray-600 mb-6 animate-fadeIn" style={{ animationDelay: '0.3s' }}>We hope you found everything you needed.</p>
          <p className="mt-6 text-gray-500 animate-fadeIn" style={{ animationDelay: '0.6s' }}>Your journey to build dreams begins here!</p>
        </div>
      </main>
      <Innovation />
    </div>
  );
};

export default ThankYou;

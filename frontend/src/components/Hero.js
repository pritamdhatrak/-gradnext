import React from 'react';

const Hero = ({ onApplyClick }) => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Accelerate Your Consulting Career
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Join gradnext's structured, feedback-driven preparation program and secure offers from top-tier consulting firms
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onApplyClick}
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition transform hover:scale-105"
          >
            Start Your Journey
          </button>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition">
            Learn More
          </button>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-indigo-600">95%</h3>
            <p className="text-gray-600 mt-2">Success Rate</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-indigo-600">500+</h3>
            <p className="text-gray-600 mt-2">Alumni Network</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-indigo-600">30+</h3>
            <p className="text-gray-600 mt-2">Partner Firms</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

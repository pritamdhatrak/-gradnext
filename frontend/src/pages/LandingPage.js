import React, { useState } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CohortForm from '../components/CohortForm';
import Footer from '../components/Footer';

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">gradnext</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 transition">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
            </div>
            <button 
              onClick={() => setShowForm(true)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Apply Now
            </button>
          </div>
        </div>
      </nav>
      <div className="pt-16">
        <Hero onApplyClick={() => setShowForm(true)} />
        <Features />
        <Testimonials />
        <Footer />
      </div>
      {showForm && <CohortForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default LandingPage;

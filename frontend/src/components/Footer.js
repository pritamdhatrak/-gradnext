import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">gradnext</h3>
            <p className="text-gray-400">Accelerating careers in consulting</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Consulting Cohort 101</a></li>
              <li><a href="#" className="hover:text-white transition">Advanced Case Prep</a></li>
              <li><a href="#" className="hover:text-white transition">1-on-1 Coaching</a></li>
              <li><a href="#" className="hover:text-white transition">Resume Review</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: hello@gradnext.co</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: Mumbai, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 gradnext. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

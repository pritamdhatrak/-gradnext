import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Consultant at McKinsey',
      content: 'gradnext transformed my approach to case interviews. The structured feedback was invaluable.',
      image: 'https://i.pravatar.cc/150?img=1'
    },
    {
      name: 'Arjun Patel',
      role: 'Associate at BCG',
      content: 'The peer learning community and expert mentorship helped me land multiple offers.',
      image: 'https://i.pravatar.cc/150?img=2'
    },
    {
      name: 'Neha Gupta',
      role: 'Senior Consultant at Bain',
      content: 'Best investment I made for my career. The program is comprehensive and results-driven.',
      image: 'https://i.pravatar.cc/150?img=3'
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600">Hear from our alumni who landed their dream consulting roles</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Structured Learning Path',
      description: 'Follow our proven methodology designed by ex-consultants from McKinsey, BCG, and Bain',
      icon: 'í³š'
    },
    {
      title: 'Personalized Feedback',
      description: 'Get detailed feedback on your case studies and interview performance from industry experts',
      icon: 'í²¡'
    },
    {
      title: 'Mock Interviews',
      description: 'Practice with real consultants and receive actionable insights to improve your performance',
      icon: 'í¾¯'
    },
    {
      title: 'Peer Learning',
      description: 'Join a community of ambitious professionals and learn from each other',
      icon: 'í±¥'
    },
    {
      title: 'Career Support',
      description: 'Resume reviews, networking opportunities, and direct referrals to top firms',
      icon: 'íº€'
    },
    {
      title: 'Lifetime Access',
      description: 'Continue accessing our resources and community even after landing your dream job',
      icon: 'âˆž'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose gradnext?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide everything you need to succeed in your consulting career journey
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

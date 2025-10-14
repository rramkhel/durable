import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, MapPin, Target, BookOpen } from 'lucide-react';

const Home = () => {
  const features = [
    {
      id: 'guardian',
      name: 'Durable Guardian',
      tagline: 'AI Success Predictor',
      description: 'Predicts churn risk and triggers automated interventions before users abandon their businesses',
      impact: ['30% churn reduction', '40% faster time-to-first-customer', '2x feature adoption'],
      color: 'from-purple-500 to-blue-500',
      icon: Zap,
      path: '/guardian'
    },
    {
      id: 'local',
      name: 'Durable Local',
      tagline: 'SEO Automation Engine',
      description: 'Automates local SEO with multi-location pages, citations, and review management',
      impact: ['300% visibility increase', '5x faster citations', 'Top 3 rankings in 90 days'],
      color: 'from-blue-500 to-green-500',
      icon: MapPin,
      path: '/local'
    },
    {
      id: 'advisor',
      name: 'Durable Advisor',
      tagline: 'AI Business Coach',
      description: 'Provides personalized growth strategies with benchmarking and weekly action plans',
      impact: ['45% faster growth', '60% fewer stuck users', '3x perceived value'],
      color: 'from-green-500 to-purple-500',
      icon: Target,
      path: '/advisor'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-6">
              Product Manager Application
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Three AI Features for Durable
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              I built working prototypes that could reduce churn by 30%, increase local visibility by 300%, 
              and accelerate revenue growth by 45%.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/rationale"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                <BookOpen className="w-5 h-5" />
                Product Rationale
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:rachel.ramkhelawan@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Project</h2>
          <div className="prose prose-lg text-gray-600">
            <p>
              I'm applying for the Product Manager role at Durable. Rather than just sending a resume, 
              I spent a weekend building three AI-powered features that address real user pain points 
              I discovered through research.
            </p>
            <p className="mt-4">
              Each feature demonstrates my approach to product management: starting with user research, 
              validating problems, designing solutions, and projecting business impact. All prototypes 
              are working, interactive, and aligned with Durable's DIFY (Do It For You) mission.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">The Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.id}
                to={feature.path}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300"
              >
                <div className={`h-2 bg-gradient-to-r ${feature.color}`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{feature.name}</h3>
                      <p className="text-sm text-gray-500">{feature.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {feature.impact.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-purple-600 group-hover:gap-3 transition-all font-medium text-sm">
                    View Prototype
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Approach Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Research', desc: 'Analyzed 50+ user reviews to identify pain points' },
                { step: '02', title: 'Validate', desc: 'Cross-referenced with job postings and competitor analysis' },
                { step: '03', title: 'Design', desc: 'Created solutions aligned with DIFY mission' },
                { step: '04', title: 'Build', desc: 'Developed working prototypes with business impact projections' }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Let's Talk Product Strategy</h2>
          <p className="text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
            These features are just the beginning. I'd love to discuss how they could fit into Durable's roadmap 
            and explore other opportunities to help you achieve your mission.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/rationale"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Read Product Rationale
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:rachel.ramkhelawan@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-medium"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '6+', label: 'Years PM Experience' },
              { number: '100K+', label: 'Users Launched To' },
              { number: '63%', label: 'Conversion Boost' },
              { number: '3', label: 'Working Prototypes' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
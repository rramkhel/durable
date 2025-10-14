import React, { useState } from 'react';
import { MapPin, Search, TrendingUp, CheckCircle, Clock, Star, ExternalLink } from 'lucide-react';
import BackButton from '../components/BackButton';

const Local = () => {
  const [selectedBusiness, setSelectedBusiness] = useState('plumbing');
  
  const businesses = {
    plumbing: {
      name: "Tom's Plumbing",
      type: "Plumber",
      location: "Edmonton, AB",
      seoScore: 68,
      currentRank: 12,
      targetRank: 3,
      serviceAreas: ['Edmonton', 'Sherwood Park', 'St. Albert', 'Spruce Grove'],
      citations: { complete: 18, pending: 32, total: 50 },
      keywords: [
        { term: 'emergency plumber edmonton', rank: 8, searches: 2400 },
        { term: 'drain cleaning edmonton', rank: 15, searches: 1800 },
        { term: 'plumber near me', rank: 12, searches: 5200 }
      ],
      reviews: { count: 23, avg: 4.6, needed: 27 }
    },
    photography: {
      name: "Mike's Photography",
      type: "Photographer",
      location: "Calgary, AB",
      seoScore: 82,
      currentRank: 4,
      targetRank: 1,
      serviceAreas: ['Calgary', 'Airdrie', 'Okotoks', 'Cochrane'],
      citations: { complete: 35, pending: 15, total: 50 },
      keywords: [
        { term: 'wedding photographer calgary', rank: 3, searches: 3100 },
        { term: 'family photographer calgary', rank: 5, searches: 1900 },
        { term: 'portrait photographer near me', rank: 4, searches: 4200 }
      ],
      reviews: { count: 47, avg: 4.9, needed: 3 }
    }
  };

  const biz = businesses[selectedBusiness];
  const citationProgress = (biz.citations.complete / biz.citations.total) * 100;
  const reviewProgress = (biz.reviews.count / (biz.reviews.count + biz.reviews.needed)) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <BackButton to="/" label="Back to Home" />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Durable Local</h1>
            <p className="text-xl text-blue-100 mb-6">
              Automated local SEO engine for service businesses
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
                300% visibility increase
              </div>
              <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
                5x faster citations
              </div>
              <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
                Top 3 in 90 days
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interactive Demo</h2>
          <p className="text-gray-600 mb-6">
            See how Durable Local automates the complex process of local SEO optimization. 
            Compare different service businesses and their SEO performance.
          </p>

          {/* Business Selector */}
          <div className="flex flex-wrap gap-3 mb-8">
            {Object.keys(businesses).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedBusiness(key)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedBusiness === key
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {businesses[key].name}
              </button>
            ))}
          </div>

          {/* SEO Score Hero */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-sm opacity-90 mb-2">Local SEO Score</div>
                <div className="text-5xl font-bold mb-1">{biz.seoScore}</div>
                <div className="text-sm opacity-75">Out of 100</div>
              </div>
              <div>
                <div className="text-sm opacity-90 mb-2">Current Rank</div>
                <div className="text-5xl font-bold mb-1">#{biz.currentRank}</div>
                <div className="text-sm opacity-75">For "{biz.type} {biz.location}"</div>
              </div>
              <div>
                <div className="text-sm opacity-90 mb-2">Target Rank</div>
                <div className="text-5xl font-bold mb-1">#{biz.targetRank}</div>
                <div className="text-sm opacity-75">Within 90 days</div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Service Area Pages */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Location Pages</h3>
              </div>
              <div className="space-y-3">
                {biz.serviceAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">{biz.type} in {area}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-600">Each page includes: Local keywords, Google Map embed, Schema markup, Customer reviews</div>
              </div>
            </div>

            {/* Keyword Rankings */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Search className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Top Keywords</h3>
              </div>
              <div className="space-y-3">
                {biz.keywords.map((kw, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">{kw.term}</span>
                      <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded">
                        #{kw.rank}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>{kw.searches.toLocaleString()} monthly searches</span>
                      <TrendingUp className="w-3 h-3 text-green-600" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Citation Building */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-orange-600" />
                <h3 className="text-lg font-semibold text-gray-900">Citation Progress</h3>
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Directories Listed</span>
                  <span className="font-semibold text-gray-900">{biz.citations.complete} / {biz.citations.total}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${citationProgress}%` }}
                  />
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Complete</span>
                  <span className="text-green-600 font-medium">{biz.citations.complete}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">In Progress</span>
                  <span className="text-orange-600 font-medium">{biz.citations.pending}</span>
                </div>
              </div>
              <div className="text-xs text-gray-500">
                Auto-submitting to: Yelp, Google, Yellow Pages, BBB, Apple Maps, Bing, and 44 more
              </div>
            </div>

            {/* Review Automation */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-yellow-600" />
                <h3 className="text-lg font-semibold text-gray-900">Review Engine</h3>
              </div>
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(star => (
                      <Star key={star} className={`w-5 h-5 ${star <= Math.round(biz.reviews.avg) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-gray-900">{biz.reviews.avg}</span>
                </div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Current Reviews</span>
                  <span className="font-semibold text-gray-900">{biz.reviews.count}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-3">
                  <div 
                    className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${reviewProgress}%` }}
                  />
                </div>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                <div className="text-sm text-gray-700">
                  <span className="font-semibold">{biz.reviews.needed} more reviews</span> needed to reach top 3 ranking
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  Auto-requesting via email & SMS after each job
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expected Impact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
            <div className="text-3xl font-bold text-gray-900 mb-1">300%</div>
            <div className="text-sm text-gray-600">Increase in Local Visibility</div>
            <p className="text-xs text-gray-500 mt-2">Multi-location pages drive traffic</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
            <div className="text-3xl font-bold text-gray-900 mb-1">5x</div>
            <div className="text-sm text-gray-600">Faster Citation Building</div>
            <p className="text-xs text-gray-500 mt-2">Automated submissions save time</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100">
            <div className="text-3xl font-bold text-gray-900 mb-1">Top 3</div>
            <div className="text-sm text-gray-600">"Near Me" Rankings in 90 Days</div>
            <p className="text-xs text-gray-500 mt-2">For 70% of service businesses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Local;
import React, { useState } from 'react';
import { MapPin, Search, Star, TrendingUp, CheckCircle, Clock, Eye, Phone, Navigation, Award, Zap, ExternalLink } from 'lucide-react';

const LocalUpdated = () => {
  const [selectedBusiness, setSelectedBusiness] = useState('plumbing');

  const businesses = {
    plumbing: {
      name: "Tom's Plumbing",
      type: "Plumber",
      location: "Edmonton, AB",
      status: "growing",
      statusMessage: "Your visibility is improving! 📈",

      // Visibility Score (user-facing, not "SEO score")
      visibility: {
        score: 68,
        message: "Good start! You're visible in 4 neighborhoods",
        goal: "Top 3 in all 8 service areas"
      },

      // Service Areas with Rankings
      serviceAreas: [
        { name: 'Downtown Edmonton', rank: 12, target: 3, status: 'improving', searches: 850 },
        { name: 'West Edmonton', rank: 8, target: 3, status: 'improving', searches: 620 },
        { name: 'South Edmonton', rank: 15, target: 3, status: 'needs-work', searches: 740 },
        { name: 'St. Albert', rank: 5, target: 3, status: 'almost', searches: 520 },
        { name: 'Sherwood Park', rank: 18, target: 3, status: 'needs-work', searches: 680 },
        { name: 'Leduc', rank: 7, target: 3, status: 'almost', searches: 380 },
        { name: 'Fort Saskatchewan', rank: 22, target: 3, status: 'needs-work', searches: 290 },
        { name: 'Spruce Grove', rank: 11, target: 3, status: 'improving', searches: 410 }
      ],

      // Key Search Terms (how people find you)
      searchTerms: [
        { term: 'emergency plumber edmonton', yourRank: 8, searches: 2400, trend: 'up' },
        { term: 'drain cleaning edmonton', yourRank: 15, searches: 1800, trend: 'same' },
        { term: 'plumber near me', yourRank: 12, searches: 5200, trend: 'up' },
        { term: '24 hour plumber edmonton', yourRank: 18, searches: 1600, trend: 'down' }
      ],

      // Your Online Presence (citations)
      presence: {
        listed: 18,
        inProgress: 12,
        total: 50,
        recentAdds: ['Yelp', 'Yellow Pages', 'HomeStars']
      },

      // Reviews
      reviews: {
        count: 23,
        average: 4.6,
        goal: 50,
        recent: [
          { author: "Jennifer M.", rating: 5, text: "Fixed our burst pipe in 30 minutes! Highly recommend", time: "2 days ago" },
          { author: "David R.", rating: 5, text: "Professional and fair pricing", time: "1 week ago" }
        ]
      },

      // This Week's Activity
      weekActivity: {
        calls: 18,
        directions: 34,
        siteVisits: 187,
        mapViews: 256
      },

      // Smart Actions
      actions: [
        {
          icon: "🚨",
          title: "Add 'Emergency Service' badge",
          why: "40% of plumbing searches are urgent",
          impact: "+8-12 emergency calls/month",
          oneClick: true
        },
        {
          icon: "📍",
          title: "Boost South Edmonton ranking",
          why: "You're #15 but could be top 3",
          impact: "+5-7 calls/month from that area",
          oneClick: false
        },
        {
          icon: "⭐",
          title: "Get 5 more reviews",
          why: "Competitors average 35+ reviews",
          impact: "Reach 'trusted' status, +2x conversion",
          oneClick: true
        }
      ]
    },

    photography: {
      name: "Mike's Photography",
      type: "Photographer",
      location: "Calgary, AB",
      status: "thriving",
      statusMessage: "You're dominating local search! 🎉",

      visibility: {
        score: 92,
        message: "Excellent! Top 5 in all your areas",
        goal: "#1 for 'wedding photographer calgary'"
      },

      serviceAreas: [
        { name: 'Calgary Downtown', rank: 3, target: 1, status: 'almost', searches: 1200 },
        { name: 'Calgary SW', rank: 2, target: 1, status: 'almost', searches: 980 },
        { name: 'Airdrie', rank: 1, target: 1, status: 'winning', searches: 450 },
        { name: 'Okotoks', rank: 4, target: 1, status: 'improving', searches: 380 }
      ],

      searchTerms: [
        { term: 'wedding photographer calgary', yourRank: 3, searches: 3100, trend: 'up' },
        { term: 'family photographer calgary', yourRank: 5, searches: 1900, trend: 'same' },
        { term: 'engagement photos calgary', yourRank: 2, searches: 2400, trend: 'up' },
        { term: 'photographer near me', yourRank: 4, searches: 4200, trend: 'up' }
      ],

      presence: {
        listed: 42,
        inProgress: 3,
        total: 50,
        recentAdds: ['WeddingWire', 'The Knot', 'Instagram Business']
      },

      reviews: {
        count: 67,
        average: 4.9,
        goal: 75,
        recent: [
          { author: "Sarah & James", rating: 5, text: "Our wedding photos are absolutely stunning! Worth every penny", time: "3 days ago" },
          { author: "Emily K.", rating: 5, text: "Made our family photos so fun and natural", time: "1 week ago" }
        ]
      },

      weekActivity: {
        calls: 8,
        directions: 12,
        siteVisits: 445,
        mapViews: 189
      },

      actions: [
        {
          icon: "📹",
          title: "Add 'Video' to your services",
          why: "60% of couples searching for video",
          impact: "$3-5K upsell per wedding",
          oneClick: true
        },
        {
          icon: "🏆",
          title: "Claim 'Top Photographer' badge",
          why: "You're #1 in Airdrie!",
          impact: "Social proof boosts bookings 40%",
          oneClick: true
        },
        {
          icon: "📍",
          title: "Target Cochrane next",
          why: "Low competition, high demand",
          impact: "+3-5 bookings/month",
          oneClick: false
        }
      ]
    },

    cleaning: {
      name: "Sarah's Cleaning Co",
      type: "Cleaning Service",
      location: "Vancouver, BC",
      status: "needs-boost",
      statusMessage: "Let's improve your visibility 💪",

      visibility: {
        score: 52,
        message: "You're visible but buried in results",
        goal: "Top 3 in your 5 service areas"
      },

      serviceAreas: [
        { name: 'Vancouver Downtown', rank: 14, target: 3, status: 'needs-work', searches: 1800 },
        { name: 'Burnaby', rank: 9, target: 3, status: 'improving', searches: 920 },
        { name: 'Richmond', rank: 18, target: 3, status: 'needs-work', searches: 1100 },
        { name: 'Surrey', rank: 11, target: 3, status: 'improving', searches: 1340 },
        { name: 'New Westminster', rank: 6, target: 3, status: 'almost', searches: 680 }
      ],

      searchTerms: [
        { term: 'house cleaning vancouver', yourRank: 14, searches: 4200, trend: 'same' },
        { term: 'cleaning service near me', yourRank: 16, searches: 6800, trend: 'same' },
        { term: 'maid service vancouver', yourRank: 11, searches: 2900, trend: 'down' },
        { term: 'deep cleaning vancouver', yourRank: 8, searches: 1800, trend: 'up' }
      ],

      presence: {
        listed: 12,
        inProgress: 18,
        total: 50,
        recentAdds: ['Google', 'Bing', 'Facebook']
      },

      reviews: {
        count: 8,
        average: 4.8,
        goal: 50,
        recent: [
          { author: "Linda P.", rating: 5, text: "Very thorough and professional!", time: "5 days ago" },
          { author: "Mark S.", rating: 4, text: "Good service, will use again", time: "2 weeks ago" }
        ]
      },

      weekActivity: {
        calls: 4,
        directions: 8,
        siteVisits: 67,
        mapViews: 94
      },

      actions: [
        {
          icon: "⭐",
          title: "URGENT: Get 20 more reviews",
          why: "You only have 8 - competitors have 40+",
          impact: "This is your #1 blocker",
          oneClick: true
        },
        {
          icon: "📍",
          title: "Fix your location pages",
          why: "Missing pages for 3 service areas",
          impact: "Can't rank without pages!",
          oneClick: true
        },
        {
          icon: "🏅",
          title: "Add 'Eco-Friendly' badge",
          why: "High search demand in Vancouver",
          impact: "Differentiate from competitors",
          oneClick: true
        }
      ]
    }
  };

  const biz = businesses[selectedBusiness];
  const visibilityColor = biz.visibility.score >= 80 ? 'text-green-600' : biz.visibility.score >= 60 ? 'text-yellow-600' : 'text-red-600';
  const presenceProgress = (biz.presence.listed / biz.presence.total) * 100;
  const reviewProgress = (biz.reviews.count / biz.reviews.goal) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
              Durable Local: AI-Powered Local SEO
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Local Visibility Dashboard</h1>
            <p className="text-lg text-blue-100 mb-4">
              Track your local rankings, manage your online presence, and get found by customers
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Business Selector */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <p className="text-sm text-gray-600 mb-3">👋 Compare different service businesses:</p>
          <div className="grid grid-cols-3 gap-3">
            {Object.keys(businesses).map((key) => {
              const b = businesses[key];
              return (
                <button
                  key={key}
                  onClick={() => setSelectedBusiness(key)}
                  className={`p-3 rounded-lg transition-all text-left ${selectedBusiness === key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  <div className="font-semibold text-sm">{b.name}</div>
                  <div className="text-xs opacity-75">{b.location}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Status Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-600 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{biz.statusMessage}</h2>
          <p className="text-gray-700">{biz.visibility.message}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">

            {/* Visibility Score */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Local Visibility Score</h3>
                  <p className="text-sm text-gray-600">{biz.visibility.goal}</p>
                </div>
                <div className="text-right">
                  <div className={`text-5xl font-bold ${visibilityColor}`}>{biz.visibility.score}</div>
                  <div className="text-xs text-gray-500">out of 100</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <Phone className="w-5 h-5 text-blue-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{biz.weekActivity.calls}</div>
                  <div className="text-xs text-gray-600">Calls this week</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <Navigation className="w-5 h-5 text-green-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{biz.weekActivity.directions}</div>
                  <div className="text-xs text-gray-600">Directions requested</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <Eye className="w-5 h-5 text-purple-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{biz.weekActivity.siteVisits}</div>
                  <div className="text-xs text-gray-600">Website visits</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <MapPin className="w-5 h-5 text-orange-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{biz.weekActivity.mapViews}</div>
                  <div className="text-xs text-gray-600">Map views</div>
                </div>
              </div>
            </div>

            {/* Service Area Rankings */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Your Service Area Rankings</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Where you rank when people search for "{biz.type.toLowerCase()}" in each area:
              </p>

              <div className="space-y-3">
                {biz.serviceAreas.map((area, idx) => {
                  const statusColor = area.status === 'winning' ? 'bg-green-50 border-green-500' :
                    area.status === 'almost' ? 'bg-blue-50 border-blue-500' :
                      area.status === 'improving' ? 'bg-yellow-50 border-yellow-500' :
                        'bg-red-50 border-red-500';
                  const statusIcon = area.status === 'winning' ? '🏆' :
                    area.status === 'almost' ? '🎯' :
                      area.status === 'improving' ? '📈' : '⚠️';

                  return (
                    <div key={idx} className={`border-l-4 ${statusColor} rounded-lg p-4`}>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="font-semibold text-gray-900">{area.name}</div>
                          <div className="text-xs text-gray-600">{area.searches.toLocaleString()} searches/month</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">#{area.rank}</div>
                          <div className="text-xs text-gray-500">Target: #{area.target}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span>{statusIcon}</span>
                        <span className="text-gray-700">
                          {area.status === 'winning' ? 'You\'re #1!' :
                            area.status === 'almost' ? 'Almost there!' :
                              area.status === 'improving' ? 'Making progress' :
                                'Needs attention'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Search Terms */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Search className="w-5 h-5 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">How People Find You</h3>
              </div>

              <div className="space-y-3">
                {biz.searchTerms.map((term, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 mb-1">"{term.term}"</div>
                      <div className="text-xs text-gray-600">{term.searches.toLocaleString()} searches/month</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xl font-bold text-gray-900">#{term.yourRank}</div>
                        <div className="text-xs text-gray-500">Your rank</div>
                      </div>
                      {term.trend === 'up' ? (
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      ) : term.trend === 'down' ? (
                        <TrendingUp className="w-5 h-5 text-red-600 rotate-180" />
                      ) : (
                        <div className="w-5 h-5"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Smart Actions */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6" />
                <h3 className="text-xl font-bold">Quick Wins</h3>
              </div>

              <div className="space-y-4">
                {biz.actions.map((action, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-2xl">{action.icon}</span>
                      <div>
                        <div className="font-semibold mb-1">{action.title}</div>
                        <div className="text-xs text-white/80 mb-2">{action.why}</div>
                        <div className="text-xs font-semibold text-yellow-300">💡 {action.impact}</div>
                      </div>
                    </div>
                    {action.oneClick && (
                      <button className="w-full bg-white text-orange-600 px-3 py-2 rounded font-semibold text-sm hover:bg-orange-50 transition-colors mt-2">
                        Turn On Now →
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Online Presence */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Your Online Presence</h3>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Listed on directories</span>
                  <span className="font-semibold text-gray-900">{biz.presence.listed} / {biz.presence.total}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all"
                    style={{ width: `${presenceProgress}%` }}
                  />
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-3 mb-4">
                <div className="text-xs font-semibold text-gray-700 mb-2">✅ Recently Added:</div>
                <div className="flex flex-wrap gap-2">
                  {biz.presence.recentAdds.map((site, idx) => (
                    <span key={idx} className="text-xs bg-white px-2 py-1 rounded">{site}</span>
                  ))}
                </div>
              </div>

              <div className="text-xs text-gray-600">
                <Clock className="w-3 h-3 inline mr-1" />
                {biz.presence.inProgress} more in progress...
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-yellow-600" />
                <h3 className="text-lg font-bold text-gray-900">Customer Reviews</h3>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{biz.reviews.average}</div>
                  <div className="flex gap-0.5 mb-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className={`w-4 h-4 ${i <= Math.round(biz.reviews.average) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <div className="text-xs text-gray-600">{biz.reviews.count} reviews</div>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-1">Goal: {biz.reviews.goal} reviews</div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: `${reviewProgress}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{biz.reviews.goal - biz.reviews.count} more to go</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-semibold text-gray-700 mb-2">Recent Reviews:</div>
                {biz.reviews.recent.map((review, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm text-gray-900">{review.author}</span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map(i => (
                          <Star key={i} className={`w-3 h-3 ${i <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-700 mb-1">"{review.text}"</p>
                    <p className="text-xs text-gray-500">{review.time}</p>
                  </div>
                ))}
              </div>

              <button className="w-full bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-100 transition-colors mt-4">
                Request More Reviews →
              </button>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">This is what users see in Durable Local</h3>
          <p className="text-lg text-blue-100 mb-4">
            Not "SEO scores" - but clear visibility into where they rank, how people find them, and what to do next
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
              ✅ Service area rankings
            </div>
            <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
              ✅ Search term tracking
            </div>
            <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
              ✅ One-click improvements
            </div>
            <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
              ✅ Review automation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalUpdated;
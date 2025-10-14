import React, { useState } from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, DollarSign, Users, Calendar, Zap } from 'lucide-react';
import BackButton from '../components/BackButton';

const Guardian = () => {
  const [selectedUser, setSelectedUser] = useState('user1');
  
  const users = {
    user1: {
      name: "Sarah's Cleaning Co",
      industry: "Home Services",
      score: 42,
      risk: "high",
      daysSinceLogin: 15,
      revenue: 850,
      customers: 3,
      trends: { engagement: -35, revenue: -20 },
      interventions: [
        "Send re-engagement email about missed revenue opportunities",
        "Trigger SMS: '3 quick wins to land your next customer'",
        "Show competitor comparison: Similar businesses earn $3.2K/mo"
      ]
    },
    user2: {
      name: "Mike's Photography",
      industry: "Creative Services",
      score: 78,
      risk: "low",
      daysSinceLogin: 2,
      revenue: 4200,
      customers: 12,
      trends: { engagement: 25, revenue: 45 },
      interventions: [
        "Suggest upsell: CRM Pro for client management",
        "Share success story: How photographers scale to $10K/mo",
        "Recommend SEO boost for portfolio visibility"
      ]
    },
    user3: {
      name: "Tom's Plumbing",
      industry: "Home Services",
      score: 65,
      risk: "medium",
      daysSinceLogin: 5,
      revenue: 2100,
      customers: 8,
      trends: { engagement: 10, revenue: 15 },
      interventions: [
        "Prompt: Add 3 more service offerings to increase bookings",
        "Tutorial: Setting up automated appointment reminders",
        "Case study: How plumbers double revenue with repeat customers"
      ]
    }
  };

  const user = users[selectedUser];
  const riskColor = user.risk === 'high' ? 'text-red-600' : user.risk === 'medium' ? 'text-yellow-600' : 'text-green-600';
  const riskBg = user.risk === 'high' ? 'bg-red-50' : user.risk === 'medium' ? 'bg-yellow-50' : 'bg-green-50';
  const riskBorder = user.risk === 'high' ? 'border-red-200' : user.risk === 'medium' ? 'border-yellow-200' : 'border-green-200';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <BackButton to="/" label="Back to Home" />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Durable Guardian</h1>
            <p className="text-xl text-purple-100 mb-6">
              AI-powered success prediction and churn prevention system
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
                30% churn reduction
              </div>
              <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
                40% faster time-to-first-customer
              </div>
              <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
                2x feature adoption
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
            Explore how Guardian identifies at-risk users and triggers personalized interventions. 
            Click different businesses to see varying risk levels.
          </p>

          {/* User Selector */}
          <div className="flex flex-wrap gap-3 mb-8">
            {Object.keys(users).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedUser(key)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedUser === key
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {users[key].name}
              </button>
            ))}
          </div>

          {/* Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Success Score */}
            <div className={`bg-white rounded-xl p-6 border-2 ${riskBorder}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">Success Score</span>
                {user.risk === 'high' && <AlertTriangle className={`w-5 h-5 ${riskColor}`} />}
                {user.risk === 'low' && <CheckCircle className={`w-5 h-5 ${riskColor}`} />}
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">{user.score}</div>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${riskBg} ${riskColor}`}>
                {user.risk.charAt(0).toUpperCase() + user.risk.slice(1)} Risk
              </div>
            </div>

            {/* Business Health */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-sm text-gray-600 mb-4">Business Health</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">Monthly Revenue</span>
                  </div>
                  <span className="font-semibold text-gray-900">${user.revenue}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">Active Customers</span>
                  </div>
                  <span className="font-semibold text-gray-900">{user.customers}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">Days Since Login</span>
                  </div>
                  <span className={`font-semibold ${user.daysSinceLogin > 7 ? 'text-red-600' : 'text-gray-900'}`}>
                    {user.daysSinceLogin}
                  </span>
                </div>
              </div>
            </div>

            {/* Trends */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-sm text-gray-600 mb-4">30-Day Trends</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Engagement</span>
                  <div className="flex items-center gap-2">
                    {user.trends.engagement > 0 ? (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    )}
                    <span className={`font-semibold ${user.trends.engagement > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {user.trends.engagement > 0 ? '+' : ''}{user.trends.engagement}%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Revenue</span>
                  <div className="flex items-center gap-2">
                    {user.trends.revenue > 0 ? (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    )}
                    <span className={`font-semibold ${user.trends.revenue > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {user.trends.revenue > 0 ? '+' : ''}{user.trends.revenue}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Interventions */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900">Recommended Actions</h3>
            </div>
            <div className="space-y-3">
              {user.interventions.map((intervention, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 pt-0.5">{intervention}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expected Impact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100">
            <div className="text-3xl font-bold text-gray-900 mb-1">30%</div>
            <div className="text-sm text-gray-600">Churn Reduction</div>
            <p className="text-xs text-gray-500 mt-2">Catch at-risk users before they leave</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
            <div className="text-3xl font-bold text-gray-900 mb-1">40%</div>
            <div className="text-sm text-gray-600">Faster Time-to-First-Customer</div>
            <p className="text-xs text-gray-500 mt-2">Guided onboarding drives results</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
            <div className="text-3xl font-bold text-gray-900 mb-1">2x</div>
            <div className="text-sm text-gray-600">Feature Adoption Rate</div>
            <p className="text-xs text-gray-500 mt-2">Contextual prompts increase usage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guardian;
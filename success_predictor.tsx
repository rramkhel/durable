import React, { useState } from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, DollarSign, Users, Calendar, Zap } from 'lucide-react';

const SuccessPredictor = () => {
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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Durable Guardian</h1>
          <p className="text-gray-600">AI-powered success prediction and churn prevention</p>
        </div>

        {/* User Selector */}
        <div className="flex gap-3 mb-6">
          {Object.keys(users).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedUser(key)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedUser === key
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {users[key].name}
            </button>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Success Score Card */}
          <div className={`bg-white rounded-xl p-6 border ${riskBorder}`}>
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
          <div className="bg-white rounded-xl p-6">
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
          <div className="bg-white rounded-xl p-6">
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
        <div className="mt-6 bg-white rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-900">Recommended Actions</h3>
          </div>
          <div className="space-y-3">
            {user.interventions.map((intervention, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-medium flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-gray-700 pt-0.5">{intervention}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expected Impact */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100">
            <div className="text-2xl font-bold text-gray-900 mb-1">30%</div>
            <div className="text-sm text-gray-600">Churn Reduction</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
            <div className="text-2xl font-bold text-gray-900 mb-1">40%</div>
            <div className="text-sm text-gray-600">Faster Time-to-First-Customer</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
            <div className="text-2xl font-bold text-gray-900 mb-1">2x</div>
            <div className="text-sm text-gray-600">Feature Adoption Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPredictor;
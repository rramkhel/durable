import React, { useState } from 'react';
import { Target, TrendingUp, Users, DollarSign, Lightbulb, CheckCircle, ArrowRight, BarChart3 } from 'lucide-react';
import BackButton from '../components/BackButton';

const Advisor = () => {
  const [selectedBusiness, setSelectedBusiness] = useState('sarah');
  
  const businesses = {
    sarah: {
      name: "Sarah's Cleaning Co",
      stage: "Early Stage",
      monthlyRevenue: 850,
      customers: 3,
      avgJobValue: 125,
      benchmarks: {
        peerRevenue: 3200,
        peerCustomers: 12,
        peerJobValue: 150,
        percentile: 15
      },
      weeklyPlan: {
        focus: "Get Your First 10 Customers",
        tasks: [
          {
            task: "Post on 3 local Facebook groups",
            time: "30 min",
            why: "Your peers get 40% of first customers from local groups"
          },
          {
            task: "Ask 5 friends for referrals",
            time: "20 min",
            why: "Referrals convert 3x higher than cold leads"
          },
          {
            task: "Offer first-time discount for reviews",
            time: "10 min",
            why: "Early reviews are critical for trust building"
          }
        ],
        expectedOutcome: "5-8 qualified leads this week",
        metric: "Track inquiries in CRM"
      },
      gaps: [
        { area: "Customer Acquisition", gap: "9 customers behind peers", potential: "+$2,250/mo" },
        { area: "Pricing", gap: "$25 below market rate", potential: "+$375/mo" },
        { area: "Social Proof", gap: "0 reviews vs peer avg 18", potential: "3x conversion" }
      ]
    },
    mike: {
      name: "Mike's Photography",
      stage: "Growth Stage",
      monthlyRevenue: 4200,
      customers: 12,
      avgJobValue: 350,
      benchmarks: {
        peerRevenue: 8500,
        peerCustomers: 18,
        peerJobValue: 475,
        percentile: 62
      },
      weeklyPlan: {
        focus: "Scale to $10K/Month",
        tasks: [
          {
            task: "Set up automated email nurture sequence",
            time: "60 min",
            why: "Nurturing increases booking rate by 35%"
          },
          {
            task: "Create package upsells (albums, prints)",
            time: "45 min",
            why: "Top performers make 40% revenue from upsells"
          },
          {
            task: "Enable online booking & deposits",
            time: "30 min",
            why: "Reduces no-shows by 70% and speeds up sales cycle"
          }
        ],
        expectedOutcome: "$1,800 additional revenue",
        metric: "Track package upgrade rate"
      },
      gaps: [
        { area: "Package Pricing", gap: "$125 below top quartile", potential: "+$1,500/mo" },
        { area: "Repeat Bookings", gap: "15% vs peer 45%", potential: "+$2,800/mo" },
        { area: "Lead Conversion", gap: "25% vs peer 40%", potential: "+$1,200/mo" }
      ]
    }
  };

  const biz = businesses[selectedBusiness];
  const revenueGap = biz.benchmarks.peerRevenue - biz.monthlyRevenue;
  const percentilColor = biz.benchmarks.percentile < 30 ? 'text-red-600' : biz.benchmarks.percentile < 70 ? 'text-yellow-600' : 'text-green-600';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <BackButton to="/" label="Back to Home" />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Durable Advisor</h1>
            <p className="text-xl text-green-100 mb-6">
              Your AI business coach for strategic growth
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
                45% faster growth
              </div>
              <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
                60% fewer stuck users
              </div>
              <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
                3x perceived value
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
            See how Durable Advisor provides personalized business coaching at scale. 
            Compare different business stages and their custom growth strategies.
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

          {/* Performance Overview */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Performance vs Industry</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="text-sm text-gray-600 mb-1">Monthly Revenue</div>
                <div className="text-2xl font-bold text-gray-900">${biz.monthlyRevenue}</div>
                <div className="text-xs text-gray-500 mt-1">Peer avg: ${biz.benchmarks.peerRevenue}</div>
                <div className="text-xs text-red-600 font-medium">${revenueGap} gap</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Active Customers</div>
                <div className="text-2xl font-bold text-gray-900">{biz.customers}</div>
                <div className="text-xs text-gray-500 mt-1">Peer avg: {biz.benchmarks.peerCustomers}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Avg Job Value</div>
                <div className="text-2xl font-bold text-gray-900">${biz.avgJobValue}</div>
                <div className="text-xs text-gray-500 mt-1">Peer avg: ${biz.benchmarks.peerJobValue}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Your Percentile</div>
                <div className={`text-2xl font-bold ${percentilColor}`}>{biz.benchmarks.percentile}th</div>
                <div className="text-xs text-gray-500 mt-1">Among {biz.stage} businesses</div>
              </div>
            </div>
          </div>

          {/* This Week's Focus */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-6 text-white mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-6 h-6" />
              <h3 className="text-xl font-semibold">This Week's Focus</h3>
            </div>
            <div className="text-2xl font-bold mb-2">{biz.weeklyPlan.focus}</div>
            <div className="text-sm opacity-90">Expected outcome: {biz.weeklyPlan.expectedOutcome}</div>
          </div>

          {/* Action Plan */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-orange-600" />
              <h3 className="text-lg font-semibold text-gray-900">Your 3 Actions This Week</h3>
            </div>
            <div className="space-y-4">
              {biz.weeklyPlan.tasks.map((item, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">{item.task}</span>
                        <span className="text-sm text-gray-500">{item.time}</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">{item.why}</div>
                      <button className="text-sm text-purple-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                        Get started <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
              <div className="text-sm text-gray-700">
                <span className="font-semibold">Track: </span>{biz.weeklyPlan.metric}
              </div>
            </div>
          </div>

          {/* Opportunity Gaps */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Biggest Growth Opportunities</h3>
            </div>
            <div className="space-y-3">
              {biz.gaps.map((gap, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 mb-1">{gap.area}</div>
                    <div className="text-sm text-gray-600">{gap.gap}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{gap.potential}</div>
                    <div className="text-xs text-gray-500">potential gain</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expected Impact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
            <div className="text-3xl font-bold text-gray-900 mb-1">45%</div>
            <div className="text-sm text-gray-600">Faster Revenue Growth Rate</div>
            <p className="text-xs text-gray-500 mt-2">Guided strategy beats trial-and-error</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
            <div className="text-3xl font-bold text-gray-900 mb-1">60%</div>
            <div className="text-sm text-gray-600">Fewer "Stuck" Users</div>
            <p className="text-xs text-gray-500 mt-2">Clear next steps prevent stagnation</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100">
            <div className="text-3xl font-bold text-gray-900 mb-1">3x</div>
            <div className="text-sm text-gray-600">Increase in Perceived Value</div>
            <p className="text-xs text-gray-500 mt-2">Business partner, not just tool</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisor;
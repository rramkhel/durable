import React, { useState } from 'react';
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle, DollarSign, Users, Calendar, Zap, Target, Award, HelpCircle, TrendingUp as Growth, Eye, MessageSquare } from 'lucide-react';

const GuardianUpdated = () => {
  const [selectedUser, setSelectedUser] = useState('user1');
  const [showUnstuck, setShowUnstuck] = useState(false);

  const users = {
    user1: {
      name: "Sarah's Dog Walking",
      industry: "Pet Services",
      stage: "Week 4",
      status: "on-track",
      statusMessage: "You're right on schedule!",
      currentMilestone: "First Customer",
      nextMilestone: "5 Regular Clients",
      daysInStage: 28,
      avgDaysToNext: "14-21 days",
      progress: 35,

      // Funnel Progress
      funnel: {
        stages: [
          { name: "Launch", completed: true, date: "4 weeks ago" },
          { name: "First Visitor", completed: true, date: "3 weeks ago" },
          { name: "First Lead", completed: false, current: true, daysStuck: 8 },
          { name: "First Customer", completed: false },
          { name: "5 Customers", completed: false },
          { name: "Sustainable ($2K/mo)", completed: false }
        ]
      },

      // Health Monitor
      health: {
        overall: 68,
        traffic: { score: 72, trend: "up", value: "45 visits", change: "+12%" },
        engagement: { score: 65, trend: "neutral", value: "2.3 min avg", change: "0%" },
        momentum: { score: 58, trend: "down", value: "No customers yet", change: "-" },
        growth: { score: 75, trend: "up", value: "Growing audience", change: "+8%" }
      },

      // Predictive Insight
      prediction: "Based on your traffic growth, you'll likely get your first customer in 10-14 days",

      // Peer Comparison
      peers: {
        rank: "Top 45%",
        metric: "site visits",
        localRank: "#12 of 28",
        city: "your area",
        topPerformer: {
          customers: 15,
          strategy: "Posts daily on local Facebook groups + asks for reviews"
        }
      },

      // Smart Actions
      actions: [
        { icon: "📍", text: "Enable Local SEO to get found for 'dog walker near me'", impact: "3x visibility" },
        { icon: "⭐", text: "Ask your test clients for reviews (builds trust)", impact: "2x conversion" },
        { icon: "📸", text: "Add 5 more dog photos to your gallery", impact: "Connects with pet owners" }
      ],

      // Recent Wins
      wins: [
        "🎉 Your site hit 45 visits this week - that's a new record!",
        "📈 Someone spent 4 minutes reading your About page"
      ],

      // Unstuck Diagnosis
      unstuck: {
        issue: "Good traffic but no leads yet",
        diagnosis: "I looked at your site - your phone number is hard to find and you don't have a contact form!",
        fixes: [
          "Add prominent 'Book a Walk' button to homepage",
          "Create simple contact form",
          "Put your phone number in the header"
        ]
      }
    },

    user2: {
      name: "Mike's Photography",
      industry: "Creative Services",
      stage: "Month 3",
      status: "thriving",
      statusMessage: "You're crushing it! 🚀",
      currentMilestone: "10 Customers",
      nextMilestone: "Sustainable Business ($5K/mo)",
      daysInStage: 90,
      avgDaysToNext: "30-45 days",
      progress: 75,

      funnel: {
        stages: [
          { name: "Launch", completed: true, date: "3 months ago" },
          { name: "First Visitor", completed: true, date: "3 months ago" },
          { name: "First Lead", completed: true, date: "10 weeks ago" },
          { name: "First Customer", completed: true, date: "8 weeks ago" },
          { name: "5 Customers", completed: true, date: "4 weeks ago" },
          { name: "Sustainable ($5K/mo)", completed: false, current: true, daysStuck: 0 }
        ]
      },

      health: {
        overall: 92,
        traffic: { score: 95, trend: "up", value: "340 visits", change: "+35%" },
        engagement: { score: 88, trend: "up", value: "4.2 min avg", change: "+15%" },
        momentum: { score: 90, trend: "up", value: "$4.2K revenue", change: "+45%" },
        growth: { score: 95, trend: "up", value: "12 customers", change: "+50%" }
      },

      prediction: "You're on track to hit $8K/mo in 6 weeks at this pace! 📈",

      peers: {
        rank: "Top 8%",
        metric: "revenue",
        localRank: "#2 of 34",
        city: "your city",
        topPerformer: {
          customers: 28,
          strategy: "Offers video + photo packages, active Instagram presence"
        }
      },

      actions: [
        { icon: "📹", text: "Add video packages - 60% of your customers ask about it", impact: "$2K+ upsell" },
        { icon: "🤝", text: "Create referral program - your clients love you!", impact: "2-3 bookings/mo" },
        { icon: "📊", text: "You're ready for CRM Pro to manage all these clients", impact: "Save 5hrs/week" }
      ],

      wins: [
        "🎉 You just booked your 12th customer!",
        "💰 This is your highest revenue month yet!",
        "⭐ You got 2 five-star reviews this week"
      ],

      unstuck: {
        issue: "Want to scale faster",
        diagnosis: "You're doing great! To get to $8K/mo, focus on retention and upsells rather than new customers.",
        fixes: [
          "Offer 'annual family photo' packages to existing clients",
          "Add video add-on to your wedding packages",
          "Build email list for seasonal promotions"
        ]
      }
    },

    user3: {
      name: "Tom's Plumbing",
      industry: "Home Services",
      stage: "Month 2",
      status: "needs-boost",
      statusMessage: "Let's get you unstuck",
      currentMilestone: "First Customer",
      nextMilestone: "10 Regular Clients",
      daysInStage: 60,
      avgDaysToNext: "20-30 days",
      progress: 45,

      funnel: {
        stages: [
          { name: "Launch", completed: true, date: "2 months ago" },
          { name: "First Visitor", completed: true, date: "7 weeks ago" },
          { name: "First Lead", completed: true, date: "6 weeks ago" },
          { name: "First Customer", completed: true, date: "5 weeks ago" },
          { name: "10 Customers", completed: false, current: true, daysStuck: 14 },
          { name: "Sustainable ($3K/mo)", completed: false }
        ]
      },

      health: {
        overall: 61,
        traffic: { score: 70, trend: "down", value: "180 visits", change: "-5%" },
        engagement: { score: 58, trend: "neutral", value: "1.8 min avg", change: "0%" },
        momentum: { score: 55, trend: "up", value: "$1.8K revenue", change: "+10%" },
        growth: { score: 60, trend: "neutral", value: "6 customers", change: "0%" }
      },

      prediction: "Bookings have plateaued. Focus on local visibility to break through.",

      peers: {
        rank: "Top 52%",
        metric: "customers",
        localRank: "#15 of 29",
        city: "your area",
        topPerformer: {
          customers: 24,
          strategy: "Ranks #1 for 'emergency plumber' + 40+ reviews"
        }
      },

      actions: [
        { icon: "🚨", text: "Add 'EMERGENCY SERVICE 24/7' to homepage", impact: "40% of plumbing searches" },
        { icon: "📍", text: "Your local SEO is weak - not ranking for key terms", impact: "3x more calls" },
        { icon: "⭐", text: "Get 10+ reviews to build trust (you only have 2)", impact: "85% check reviews" }
      ],

      wins: [
        "💪 6 customers in month 2 is solid for trade services!",
        "📞 Someone called you directly from Google"
      ],

      unstuck: {
        issue: "Stuck at 6 customers for 2 weeks",
        diagnosis: "Your site looks good but you're invisible in search. Top plumbers in your area have strong local SEO and tons of reviews.",
        fixes: [
          "Turn on Durable Local to rank for 'plumber near me'",
          "Text your last 6 customers asking for Google reviews",
          "Add 'Emergency Service' prominently - it's high-intent"
        ]
      }
    },

    user4: {
      name: "Rita's Handmade Crafts",
      industry: "E-commerce",
      stage: "Week 2",
      status: "on-track",
      statusMessage: "Strong start!",
      currentMilestone: "First Sale",
      nextMilestone: "10 Sales",
      daysInStage: 14,
      avgDaysToNext: "14-28 days",
      progress: 20,

      funnel: {
        stages: [
          { name: "Launch", completed: true, date: "2 weeks ago" },
          { name: "First Visitor", completed: true, date: "2 weeks ago" },
          { name: "First Lead", completed: true, date: "10 days ago" },
          { name: "First Sale", completed: true, date: "8 days ago" },
          { name: "10 Sales", completed: false, current: true, daysStuck: 0 },
          { name: "Consistent Sales", completed: false }
        ]
      },

      health: {
        overall: 72,
        traffic: { score: 68, trend: "up", value: "65 visits", change: "+10%" },
        engagement: { score: 85, trend: "up", value: "3.8 min avg", change: "+20%" },
        momentum: { score: 65, trend: "neutral", value: "$150 revenue", change: "New!" },
        growth: { score: 70, trend: "up", value: "2 sales", change: "🎉" }
      },

      prediction: "Your engagement is excellent! Focus on traffic to get more sales.",

      peers: {
        rank: "Top 35%",
        metric: "early sales",
        localRank: "#8 of 19",
        city: "craft sellers",
        topPerformer: {
          customers: 45,
          strategy: "Active on Pinterest + Instagram, offers custom orders"
        }
      },

      actions: [
        { icon: "📸", text: "Add 10 more product photos - visual products need variety", impact: "2x browsing" },
        { icon: "📌", text: "Share on Pinterest - perfect for handmade goods", impact: "Huge craft audience" },
        { icon: "🎨", text: "Offer custom orders to increase average sale value", impact: "$50→$150 avg" }
      ],

      wins: [
        "🎉 You made 2 sales in your first 2 weeks!",
        "😍 Someone spent 8 minutes browsing your products",
        "⭐ You got your first 5-star review!"
      ],

      unstuck: {
        issue: "Want more traffic",
        diagnosis: "Your products are beautiful and people who visit stay engaged! You just need more eyeballs.",
        fixes: [
          "Create a Pinterest business account (crafts do GREAT there)",
          "Post 3x/week on Instagram with behind-the-scenes content",
          "Join local craft Facebook groups and share your story"
        ]
      }
    }
  };

  const user = users[selectedUser];
  const getStatusColor = (status) => {
    if (status === 'thriving') return { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-700', dot: 'bg-green-500' };
    if (status === 'on-track') return { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-700', dot: 'bg-blue-500' };
    return { bg: 'bg-yellow-50', border: 'border-yellow-500', text: 'text-yellow-700', dot: 'bg-yellow-500' };
  };
  const statusColor = getStatusColor(user.status);

  const getHealthColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
              Guardian: Your AI Business Coach
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Success Dashboard</h1>
            <p className="text-lg text-purple-100 mb-4">
              Track your progress, see how you compare, and get personalized guidance
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* User Selector */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <p className="text-sm text-gray-600 mb-3">👋 Switch between different businesses to see how Guardian adapts:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.keys(users).map((key) => {
              const u = users[key];
              return (
                <button
                  key={key}
                  onClick={() => { setSelectedUser(key); setShowUnstuck(false); }}
                  className={`p-3 rounded-lg transition-all text-left ${selectedUser === key
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  <div className="font-semibold text-sm">{u.name}</div>
                  <div className="text-xs opacity-75">{u.stage}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Status Banner */}
        <div className={`${statusColor.bg} border-l-4 ${statusColor.border} rounded-xl p-6 mb-6`}>
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-3 h-3 rounded-full ${statusColor.dot} animate-pulse`}></div>
            <h2 className="text-2xl font-bold text-gray-900">{user.statusMessage}</h2>
          </div>
          <p className="text-gray-700 mb-3">{user.prediction}</p>
          <div className="flex flex-wrap gap-2">
            {user.wins.map((win, idx) => (
              <span key={idx} className="text-sm bg-white px-3 py-1 rounded-full">{win}</span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">

            {/* 1. FUNNEL - Progress Journey */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Business Journey</h3>
              <div className="relative">
                {user.funnel.stages.map((stage, idx) => (
                  <div key={idx} className="flex items-start gap-4 mb-6 last:mb-0">
                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${stage.completed ? 'bg-green-500' : stage.current ? 'bg-blue-500 animate-pulse' : 'bg-gray-200'
                      }`}>
                      {stage.completed ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : stage.current ? (
                        <Target className="w-6 h-6 text-white" />
                      ) : (
                        <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`font-semibold ${stage.completed ? 'text-gray-900' : stage.current ? 'text-blue-600' : 'text-gray-400'}`}>
                          {stage.name}
                        </h4>
                        {stage.completed && <span className="text-xs text-gray-500">{stage.date}</span>}
                        {stage.current && stage.daysStuck > 0 && (
                          <span className="text-xs text-yellow-600 font-medium">Stuck {stage.daysStuck} days</span>
                        )}
                      </div>
                      {stage.current && (
                        <div className="bg-blue-50 rounded-lg p-3 mt-2">
                          <p className="text-sm text-gray-700 mb-2">
                            <strong>Next milestone:</strong> {user.nextMilestone}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <Calendar className="w-3 h-3" />
                            <span>Avg time: {user.avgDaysToNext}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Connector Line */}
                    {idx < user.funnel.stages.length - 1 && (
                      <div className={`absolute left-5 w-0.5 h-6 ${stage.completed ? 'bg-green-500' : 'bg-gray-200'
                        }`} style={{ top: `${(idx * 96) + 40}px` }}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 2. HEALTH MONITOR */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Business Health Monitor</h3>
                <div className="text-right">
                  <div className={`text-3xl font-bold ${getHealthColor(user.health.overall)}`}>
                    {user.health.overall}
                  </div>
                  <div className="text-xs text-gray-600">Overall Health</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {Object.entries(user.health).filter(([key]) => key !== 'overall').map(([key, data]) => (
                  <div key={key} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700 capitalize">{key}</span>
                      <div className="flex items-center gap-1">
                        {data.trend === 'up' ? (
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        ) : data.trend === 'down' ? (
                          <TrendingDown className="w-4 h-4 text-red-600" />
                        ) : (
                          <div className="w-4 h-4"></div>
                        )}
                        <span className={`text-xs font-semibold ${data.trend === 'up' ? 'text-green-600' : data.trend === 'down' ? 'text-red-600' : 'text-gray-500'
                          }`}>
                          {data.change}
                        </span>
                      </div>
                    </div>
                    <div className={`text-2xl font-bold ${getHealthColor(data.score)} mb-1`}>
                      {data.score}
                    </div>
                    <div className="text-xs text-gray-600">{data.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Smart Actions */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">Recommended Actions</h3>
              </div>
              <div className="space-y-3">
                {user.actions.map((action, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg border border-purple-100 hover:bg-purple-100 transition-colors cursor-pointer">
                    <span className="text-2xl">{action.icon}</span>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium mb-1">{action.text}</p>
                      <p className="text-xs text-purple-600 font-semibold">Impact: {action.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* 3. UNSTUCK BUTTON */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl p-6 shadow-lg">
              <button
                onClick={() => setShowUnstuck(!showUnstuck)}
                className="w-full"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <HelpCircle className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">I'm Stuck!</h3>
                </div>
                <p className="text-sm text-white/90 mb-4">Click for instant AI diagnosis and action plan</p>
              </button>

              {showUnstuck && (
                <div className="bg-white text-gray-900 rounded-lg p-4 mt-4">
                  <p className="font-semibold mb-2">🔍 {user.unstuck.issue}</p>
                  <p className="text-sm text-gray-700 mb-3">{user.unstuck.diagnosis}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-700 uppercase">Quick Fixes:</p>
                    {user.unstuck.fixes.map((fix, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-5 h-5 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {idx + 1}
                        </div>
                        <p className="text-sm text-gray-700">{fix}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. PEER COMPARISON */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900">How You Compare</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold text-blue-600">{user.peers.rank}</span>
                    <span className="text-sm text-gray-600">of businesses at your stage</span>
                  </div>
                  <p className="text-xs text-gray-500">For {user.peers.metric}</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-900 mb-1">In {user.peers.city}:</p>
                  <p className="text-2xl font-bold text-blue-600">{user.peers.localRank}</p>
                  <p className="text-xs text-gray-600">{user.industry} businesses</p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs font-semibold text-gray-700 mb-2">🏆 Top Performer Strategy:</p>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-700 mb-1">
                      <strong>{user.peers.topPerformer.customers} customers</strong>
                    </p>
                    <p className="text-xs text-gray-600">{user.peers.topPerformer.strategy}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Milestone Celebration */}
            {user.status === 'thriving' && (
              <div className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-4xl mb-3">🎉</div>
                  <h3 className="text-xl font-bold mb-2">Milestone Unlocked!</h3>
                  <p className="text-sm text-white/90 mb-4">
                    You've reached 10+ customers. You're now in the top 15% of businesses at month 3!
                  </p>
                  <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-green-50 transition-colors">
                    Share Your Success 🚀
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">This is what Guardian shows your users</h3>
          <p className="text-lg text-purple-100 mb-4">
            Not "churn risk scores" - but encouraging, actionable guidance that keeps them moving forward
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
              ✅ Visual progress funnel
            </div>
            <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
              ✅ Business health monitor
            </div>
            <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
              ✅ "I'm stuck" instant help
            </div>
            <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
              ✅ Peer benchmarking
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuardianUpdated;
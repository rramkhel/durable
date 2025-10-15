import React, { useState } from 'react';
import { Target, TrendingUp, TrendingDown, Award, Lightbulb, BarChart3, CheckCircle, ArrowRight, Users, DollarSign, Calendar } from 'lucide-react';

const AdvisorUpdated = () => {
  const [selectedBusiness, setSelectedBusiness] = useState('photography');

  const businesses = {
    photography: {
      name: "Mike's Photography",
      industry: "Creative Services",
      stage: "Month 3",
      revenue: 4200,
      customers: 12,
      avgJobValue: 350,

      // How they compare
      benchmarks: {
        percentile: 78,
        status: "Above Average",
        statusColor: "green",
        message: "You're outperforming 78% of photographers at month 3!"
      },

      // Key metrics vs peers
      comparison: [
        { metric: "Monthly Revenue", you: 4200, peers: 2800, status: "ahead", diff: "+50%" },
        { metric: "Total Customers", you: 12, peers: 8, status: "ahead", diff: "+50%" },
        { metric: "Avg Job Value", you: 350, peers: 420, status: "behind", diff: "-17%" },
        { metric: "Booking Rate", you: "65%", peers: "58%", status: "ahead", diff: "+7pts" }
      ],

      // This week's focus
      weeklyPlan: {
        week: "Week of Oct 21",
        focus: "Increase your average job value",
        why: "You're booking well but leaving money on the table. Peers charge $420 per job vs your $350.",
        expectedOutcome: "Earn $70 more per booking = $840 extra this month",
        tasks: [
          {
            task: "Create a premium package",
            why: "Offer prints + digital album for $500 (current $350)",
            time: "30 min",
            impact: "40% of clients choose premium when offered"
          },
          {
            task: "Add video add-on option",
            why: "60% of wedding clients ask about video",
            time: "1 hour",
            impact: "$200-300 upsell per wedding"
          },
          {
            task: "Update pricing page",
            why: "Show 3 tiers: Basic ($300), Standard ($450), Premium ($650)",
            time: "20 min",
            impact: "Most pick the middle option"
          }
        ],
        metric: "Track: Average booking value this week (goal: $420+)"
      },

      // Biggest opportunities
      gaps: [
        {
          area: "Pricing Strategy",
          current: "$350/job",
          opportunity: "$500/job",
          potential: "+$1,800/month",
          priority: "high"
        },
        {
          area: "Video Services",
          current: "Not offered",
          opportunity: "50% of bookings",
          potential: "+$2,500/month",
          priority: "high"
        },
        {
          area: "Repeat Customers",
          current: "8% return",
          opportunity: "25% return",
          potential: "+3 bookings/month",
          priority: "medium"
        }
      ],

      // Progress over time
      progress: {
        weeks: ["Week 1", "Week 2", "Week 3", "Week 4", "This Week"],
        revenue: [1200, 2100, 3200, 3800, 4200],
        customers: [3, 5, 8, 10, 12]
      },

      // Success stories
      inspiration: {
        name: "Jessica (Wedding Photographer)",
        timeframe: "Started 6 months ago",
        now: "$8.5K/month, 18 bookings/month",
        key: "Added video packages + increased prices 30%"
      }
    },

    plumbing: {
      name: "Tom's Plumbing",
      industry: "Home Services",
      stage: "Month 2",
      revenue: 1800,
      customers: 6,
      avgJobValue: 300,

      benchmarks: {
        percentile: 52,
        status: "Average",
        statusColor: "yellow",
        message: "You're right in the middle - lots of room to grow!"
      },

      comparison: [
        { metric: "Monthly Revenue", you: 1800, peers: 2200, status: "behind", diff: "-18%" },
        { metric: "Total Jobs", you: 6, peers: 7, status: "similar", diff: "-14%" },
        { metric: "Avg Job Value", you: 300, peers: 285, status: "ahead", diff: "+5%" },
        { metric: "Emergency Calls", you: "15%", peers: "35%", status: "behind", diff: "-20pts" }
      ],

      weeklyPlan: {
        week: "Week of Oct 21",
        focus: "Get more emergency service calls",
        why: "Top plumbers get 35% of jobs from 'emergency' searches. You only get 15%.",
        expectedOutcome: "2-3 extra emergency jobs = $900-1,200 more this month",
        tasks: [
          {
            task: "Add 'EMERGENCY 24/7' to your homepage",
            why: "40% of plumbing searches are urgent - make it obvious you do emergencies",
            time: "10 min",
            impact: "3x more emergency calls"
          },
          {
            task: "Set up Google Ads for 'emergency plumber'",
            why: "When pipes burst at 2am, people click the first result",
            time: "30 min",
            impact: "$50/day budget = 5-8 calls/week"
          },
          {
            task: "Turn on after-hours phone forwarding",
            why: "Can't get emergency calls if nobody answers",
            time: "15 min",
            impact: "Capture late night / weekend jobs"
          }
        ],
        metric: "Track: % of jobs that are 'emergency' (goal: 30%+)"
      },

      gaps: [
        {
          area: "Emergency Services",
          current: "15% of jobs",
          opportunity: "35% of jobs",
          potential: "+$1,200/month",
          priority: "high"
        },
        {
          area: "Local SEO",
          current: "Rank #12-18",
          opportunity: "Top 3",
          potential: "+4-6 jobs/month",
          priority: "high"
        },
        {
          area: "Maintenance Contracts",
          current: "0 contracts",
          opportunity: "10 contracts",
          potential: "+$800/month recurring",
          priority: "medium"
        }
      ],

      progress: {
        weeks: ["Week 1", "Week 2", "Week 3", "Week 4", "This Week"],
        revenue: [800, 1200, 1600, 1700, 1800],
        customers: [2, 3, 5, 5, 6]
      },

      inspiration: {
        name: "Dave (Emergency Plumber)",
        timeframe: "Started 8 months ago",
        now: "$6.2K/month, 22 jobs/month",
        key: "Focused on emergency services + Google Ads"
      }
    },

    dogwalking: {
      name: "Sarah's Dog Walking",
      industry: "Pet Services",
      stage: "Week 6",
      revenue: 480,
      customers: 4,
      avgJobValue: 120,

      benchmarks: {
        percentile: 62,
        status: "Good Progress",
        statusColor: "blue",
        message: "4 customers by week 6 is solid! Most have 2-3."
      },

      comparison: [
        { metric: "Monthly Revenue", you: 480, peers: 380, status: "ahead", diff: "+26%" },
        { metric: "Regular Clients", you: 4, peers: 3, status: "ahead", diff: "+33%" },
        { metric: "Avg Monthly Value/Client", you: 120, peers: 140, status: "behind", diff: "-14%" },
        { metric: "Review Count", you: 3, peers: 8, status: "behind", diff: "-63%" }
      ],

      weeklyPlan: {
        week: "Week of Oct 21",
        focus: "Get 5 more reviews to build trust",
        why: "You have 3 reviews. Competitors with 10+ reviews get 3x more bookings.",
        expectedOutcome: "Reach 8 reviews = 'trusted' status = 2-3 new clients",
        tasks: [
          {
            task: "Text your 4 current clients asking for reviews",
            why: "They love you! Just need to ask. Make it easy with a link.",
            time: "10 min",
            impact: "3-4 reviews from happy clients"
          },
          {
            task: "Create 'Share & Review' incentive",
            why: "Offer $10 off next walk for leaving a review",
            time: "15 min",
            impact: "Boosts review rate from 25% to 80%"
          },
          {
            task: "Post client dog photos on Instagram",
            why: "Tag them = they share = you get exposure + reviews",
            time: "30 min",
            impact: "Social proof attracts new clients"
          }
        ],
        metric: "Track: Total reviews (goal: 8+ reviews)"
      },

      gaps: [
        {
          area: "Reviews & Trust",
          current: "3 reviews",
          opportunity: "10+ reviews",
          potential: "+3-4 clients/month",
          priority: "high"
        },
        {
          area: "Service Frequency",
          current: "1x/week per dog",
          opportunity: "3x/week per dog",
          potential: "+$1,200/month",
          priority: "high"
        },
        {
          area: "Service Expansion",
          current: "Walking only",
          opportunity: "+ sitting, drop-ins",
          potential: "+$800/month",
          priority: "medium"
        }
      ],

      progress: {
        weeks: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
        revenue: [0, 120, 240, 320, 400, 480],
        customers: [0, 1, 2, 3, 3, 4]
      },

      inspiration: {
        name: "Alex (Dog Walker)",
        timeframe: "Started 4 months ago",
        now: "$2.8K/month, 18 regular dogs",
        key: "Got 15+ reviews fast + offered multiple services"
      }
    }
  };

  const biz = businesses[selectedBusiness];
  const statusColors = {
    green: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-500', dot: 'bg-green-500' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-500', dot: 'bg-blue-500' },
    yellow: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-500', dot: 'bg-yellow-500' }
  };
  const statusColor = statusColors[biz.benchmarks.statusColor];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
              Durable Advisor: Your AI Business Coach
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Growth Strategy Dashboard</h1>
            <p className="text-lg text-green-100 mb-4">
              See how you compare, get personalized guidance, and grow faster
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Business Selector */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <p className="text-sm text-gray-600 mb-3">👋 Switch between businesses to see personalized coaching:</p>
          <div className="grid grid-cols-3 gap-3">
            {Object.keys(businesses).map((key) => {
              const b = businesses[key];
              return (
                <button
                  key={key}
                  onClick={() => setSelectedBusiness(key)}
                  className={`p-3 rounded-lg transition-all text-left ${selectedBusiness === key
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  <div className="font-semibold text-sm">{b.name}</div>
                  <div className="text-xs opacity-75">{b.stage}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Status Banner */}
        <div className={`${statusColor.bg} border-l-4 ${statusColor.border} rounded-xl p-6 mb-6`}>
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-3 h-3 rounded-full ${statusColor.dot}`}></div>
            <h2 className="text-2xl font-bold text-gray-900">{biz.benchmarks.status}</h2>
            <div className="ml-auto">
              <div className={`text-4xl font-bold ${statusColor.text}`}>{biz.benchmarks.percentile}th</div>
              <div className="text-xs text-gray-600 text-right">Percentile</div>
            </div>
          </div>
          <p className="text-gray-700">{biz.benchmarks.message}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">

            {/* How You Compare */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">How You Compare</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">vs. other {biz.industry} businesses at {biz.stage}</p>

              <div className="space-y-3">
                {biz.comparison.map((item, idx) => {
                  const statusIcon = item.status === 'ahead' ? '💪' : item.status === 'behind' ? '🎯' : '✅';
                  const statusColor = item.status === 'ahead' ? 'text-green-600' : item.status === 'behind' ? 'text-orange-600' : 'text-blue-600';

                  return (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900 mb-1">{item.metric}</div>
                        <div className="text-sm text-gray-600">
                          You: <span className="font-semibold">{typeof item.you === 'number' ? `$${item.you.toLocaleString()}` : item.you}</span>
                          {' '} | Peers: <span className="font-semibold">{typeof item.peers === 'number' ? `$${item.peers.toLocaleString()}` : item.peers}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl mb-1">{statusIcon}</div>
                        <div className={`text-sm font-bold ${statusColor}`}>{item.diff}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* This Week's Focus */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-6 h-6" />
                <h3 className="text-xl font-semibold">{biz.weeklyPlan.week}</h3>
              </div>
              <div className="text-2xl font-bold mb-2">{biz.weeklyPlan.focus}</div>
              <div className="text-sm opacity-90 mb-3">{biz.weeklyPlan.why}</div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                <div className="text-sm font-semibold">Expected Outcome:</div>
                <div className="text-lg">{biz.weeklyPlan.expectedOutcome}</div>
              </div>
            </div>

            {/* Your 3 Actions */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">Your 3 Actions This Week</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Each takes 10-60 minutes. Do all 3 to hit your goal.</p>

              <div className="space-y-4">
                {biz.weeklyPlan.tasks.map((task, idx) => (
                  <div key={idx} className="border-2 border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-lg font-bold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div className="font-semibold text-gray-900 text-lg">{task.task}</div>
                          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{task.time}</span>
                        </div>
                        <div className="text-sm text-gray-700 mb-2">
                          <strong>Why:</strong> {task.why}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-green-600 font-semibold">
                            💡 Impact: {task.impact}
                          </div>
                          <button className="text-sm text-purple-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                            Start <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-sm text-gray-800">
                  <strong>📊 {biz.weeklyPlan.metric}</strong>
                </div>
              </div>
            </div>

            {/* Your Progress */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Your Progress Over Time</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Revenue Growth</h4>
                  <div className="space-y-2">
                    {biz.progress.weeks.map((week, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="text-xs text-gray-600 w-16">{week}</span>
                        <div className="flex-1 bg-gray-100 rounded-full h-6 relative">
                          <div
                            className="bg-gradient-to-r from-green-500 to-green-600 h-6 rounded-full flex items-center justify-end pr-2"
                            style={{ width: `${(biz.progress.revenue[idx] / Math.max(...biz.progress.revenue)) * 100}%` }}
                          >
                            <span className="text-xs font-bold text-white">
                              ${biz.progress.revenue[idx].toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Customer Growth</h4>
                  <div className="space-y-2">
                    {biz.progress.weeks.map((week, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="text-xs text-gray-600 w-16">{week}</span>
                        <div className="flex-1 bg-gray-100 rounded-full h-6 relative">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-6 rounded-full flex items-center justify-end pr-2"
                            style={{ width: `${(biz.progress.customers[idx] / Math.max(...biz.progress.customers)) * 100}%` }}
                          >
                            <span className="text-xs font-bold text-white">
                              {biz.progress.customers[idx]} customers
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Growth Opportunities */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-900">Biggest Opportunities</h3>
              </div>

              <div className="space-y-3">
                {biz.gaps.map((gap, idx) => {
                  const priorityColor = gap.priority === 'high' ? 'border-red-500 bg-red-50' : 'border-yellow-500 bg-yellow-50';
                  const priorityBadge = gap.priority === 'high' ? '🔥' : '⭐';

                  return (
                    <div key={idx} className={`border-l-4 ${priorityColor} rounded-lg p-4`}>
                      <div className="flex items-start justify-between mb-2">
                        <div className="font-semibold text-gray-900">{gap.area}</div>
                        <span className="text-xl">{priorityBadge}</span>
                      </div>
                      <div className="text-sm text-gray-700 mb-2">
                        <div>Now: {gap.current}</div>
                        <div>Could be: {gap.opportunity}</div>
                      </div>
                      <div className="text-sm font-bold text-green-600">
                        💰 {gap.potential}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Success Story */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-6 h-6" />
                <h3 className="text-lg font-bold">Success Story</h3>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <div className="font-semibold text-lg mb-2">{biz.inspiration.name}</div>
                <div className="text-sm opacity-90 mb-3">{biz.inspiration.timeframe}</div>
                <div className="text-2xl font-bold mb-2">{biz.inspiration.now}</div>
                <div className="text-sm">
                  <strong>Key move:</strong> {biz.inspiration.key}
                </div>
              </div>

              <button className="w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-green-50 transition-colors mt-4">
                Read Full Story →
              </button>
            </div>

            {/* Current Stats */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Your Current Stats</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-600">Monthly Revenue</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">${biz.revenue.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-600">Customers</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">{biz.customers}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    <span className="text-sm text-gray-600">Avg Job Value</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">${biz.avgJobValue}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 bg-gradient-to-r from-green-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">This is what users see in Durable Advisor</h3>
          <p className="text-lg text-green-100 mb-4">
            Not generic advice - but personalized, actionable coaching based on how they compare to peers
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
              ✅ Benchmark comparisons
            </div>
            <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
              ✅ Weekly action plans
            </div>
            <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
              ✅ Growth opportunities
            </div>
            <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
              ✅ Success stories
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorUpdated;
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Zap, MapPin, Target, Check, TrendingUp, Users, DollarSign } from 'lucide-react';

const InterviewPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      title: "Three AI Features for Durable",
      subtitle: "Building the Business Growth Platform",
      content: (
        <div className="text-center py-12">
          <div className="mb-8">
            <div className="inline-block px-6 py-2 bg-purple-100 text-purple-700 rounded-full text-lg font-semibold mb-6">
              Product Strategy Overview
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Three AI Features for Durable</h1>
          <p className="text-2xl text-gray-600 mb-8">Protect Revenue. Drive Growth. Scale Success.</p>
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl">
              <Zap className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Guardian</h3>
              <p className="text-sm text-gray-600">Predict & Prevent Churn</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Local</h3>
              <p className="text-sm text-gray-600">Automate Local SEO</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-purple-50 p-6 rounded-xl">
              <Target className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Advisor</h3>
              <p className="text-sm text-gray-600">AI Business Coach</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 2: The Research Process
    {
      title: "My Research Process",
      subtitle: "Identifying user challenges and opportunities",
      content: (
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-900">User Review Analysis</h3>
            </div>
            <p className="text-gray-700 mb-3">Analyzed 50+ reviews across G2, TrustPilot, and Reddit to identify pain patterns</p>
            <div className="bg-purple-50 p-3 rounded">
              <p className="text-sm text-gray-700"><strong>Key Finding:</strong> "Limited SEO capabilities" — repeated complaint</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-900">Context Analysis</h3>
            </div>
            <p className="text-gray-700 mb-3">Analyzed Durable's mission, user base, and industry landscape to understand strategic priorities</p>
            <div className="bg-blue-50 p-3 rounded">
              <p className="text-sm text-gray-700"><strong>Key Finding:</strong> Focus on retention, AI features, user success</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-900">Competitive Gap Analysis</h3>
            </div>
            <p className="text-gray-700 mb-3">Researched what competitors are building and where opportunities exist</p>
            <div className="bg-green-50 p-3 rounded">
              <p className="text-sm text-gray-700"><strong>Key Finding:</strong> No one has automated, AI-driven local SEO for SMBs</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-orange-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <h3 className="text-xl font-bold text-gray-900">Industry Trends Research</h3>
            </div>
            <p className="text-gray-700 mb-3">Studied local SEO challenges, AI automation capabilities, SMB needs</p>
            <div className="bg-orange-50 p-3 rounded">
              <p className="text-sm text-gray-700"><strong>Key Finding:</strong> 70% of local searches lead to action within 24 hours</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3: User Segments
    {
      title: "Understanding Durable's Users",
      subtitle: "70% are service-based businesses",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-900">Primary Segment: Service Area Businesses</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Home Services</p>
                <p className="text-sm text-gray-600">Plumbers, HVAC, electricians, cleaners</p>
                <p className="text-xs text-purple-600 mt-2">Mobile service providers</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Creative Professionals</p>
                <p className="text-sm text-gray-600">Photographers, designers, videographers</p>
                <p className="text-xs text-purple-600 mt-2">Portfolio-driven businesses</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Wellness Providers</p>
                <p className="text-sm text-gray-600">Trainers, coaches, therapists</p>
                <p className="text-xs text-purple-600 mt-2">Trust-based services</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">Common Pain Points</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700">"I have a website but no customers"</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700">"Can't compete with bigger companies in search"</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700">"Don't know if I'm on the right track"</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700">"Limited SEO capabilities"</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">Jobs to Be Done</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <p className="text-sm text-gray-700">"Help customers find me locally"</p>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <p className="text-sm text-gray-700">"Show me I'm making progress"</p>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <p className="text-sm text-gray-700">"Guide me to the next milestone"</p>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <p className="text-sm text-gray-700">"Make business easier than a job"</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: Feature 1 - Guardian
    {
      title: "Feature 1: Durable Guardian",
      subtitle: "AI Success Predictor & Churn Prevention",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-10 h-10" />
              <div>
                <h3 className="text-2xl font-bold">Durable Guardian</h3>
                <p className="text-purple-100">Predict churn, trigger interventions</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                <p className="text-3xl font-bold mb-1">30%</p>
                <p className="text-sm">Churn Reduction</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                <p className="text-3xl font-bold mb-1">40%</p>
                <p className="text-sm">Faster First Customer</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                <p className="text-3xl font-bold mb-1">$10.8M</p>
                <p className="text-sm">ARR Protected</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">The Problem</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 6M sites created, unknown success rate</li>
                <li>• Users struggle silently after launch</li>
                <li>• Churn happens before users ask for help</li>
                <li>• No benchmarks for "normal" progress</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">The Solution</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• ML model scores success likelihood</li>
                <li>• Triggers graduated interventions</li>
                <li>• Proactive support before churn</li>
                <li>• Personalized to business stage</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6">
            <h4 className="font-bold text-gray-900 mb-3">How It Works</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <p className="text-sm text-gray-700">Score engagement (logins, feature usage, time on site)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <p className="text-sm text-gray-700">Track business health (traffic, customers, revenue indicators)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <p className="text-sm text-gray-700">Calculate risk score (0-100) combining both signals</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                <p className="text-sm text-gray-700">Trigger personalized interventions based on risk level and stage</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: Feature 2 - Local
    {
      title: "Feature 2: Durable Local",
      subtitle: "AI-Powered Local SEO Engine",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-10 h-10" />
              <div>
                <h3 className="text-2xl font-bold">Durable Local</h3>
                <p className="text-blue-100">Automate local SEO at scale</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                <p className="text-3xl font-bold mb-1">300%</p>
                <p className="text-sm">Visibility Increase</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                <p className="text-3xl font-bold mb-1">5x</p>
                <p className="text-sm">Faster Citations</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                <p className="text-3xl font-bold mb-1">Top 3</p>
                <p className="text-sm">Rankings in 90 Days</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">The Problem</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• "Limited SEO capabilities" — user complaint</li>
                <li>• Service businesses serve 5-20+ areas</li>
                <li>• Manual citation building = 40+ hours</li>
                <li>• Can't compete in "near me" searches</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">The Solution</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Auto-generate location pages</li>
                <li>• One-click citation submission</li>
                <li>• Automated review requests</li>
                <li>• Schema markup & local keywords</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6">
            <h4 className="font-bold text-gray-900 mb-3">Four Automation Engines</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">📍 Location Pages</p>
                <p className="text-sm text-gray-600">Generate unique SEO pages for every service area with local keywords, maps, and schema</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">📝 Citation Builder</p>
                <p className="text-sm text-gray-600">Submit to 50+ directories automatically, ensure NAP consistency across web</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">⭐ Review Engine</p>
                <p className="text-sm text-gray-600">Trigger review requests after jobs, AI-assisted responses, build trust</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">📊 Rank Tracker</p>
                <p className="text-sm text-gray-600">Monitor local rankings per area, show progress, identify opportunities</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: Feature 3 - Advisor
    {
      title: "Feature 3: Durable Advisor",
      subtitle: "AI Business Coach with Benchmarking",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-600 to-purple-600 text-white rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-10 h-10" />
              <div>
                <h3 className="text-2xl font-bold">Durable Advisor</h3>
                <p className="text-green-100">Personalized growth strategies</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                <p className="text-3xl font-bold mb-1">45%</p>
                <p className="text-sm">Faster Growth</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                <p className="text-3xl font-bold mb-1">60%</p>
                <p className="text-sm">Fewer Stuck Users</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                <p className="text-3xl font-bold mb-1">3x</p>
                <p className="text-sm">Perceived Value</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">The Problem</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Users don't know how to grow business</li>
                <li>• No benchmarks for their stage/industry</li>
                <li>• Generic advice doesn't apply to them</li>
                <li>• Can't afford $200/hr business coach</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">The Solution</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• AI coach personalized to their business</li>
                <li>• Compare to industry benchmarks</li>
                <li>• Weekly action plans with priorities</li>
                <li>• Track progress over time</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <h4 className="font-bold text-gray-900 mb-3">Example Weekly Plan</h4>
            <div className="bg-white rounded-lg p-4 mb-3">
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-gray-900">Sarah's Photography Studio</p>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Week 8</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">You're in the 65th percentile for bookings at your stage — great start!</p>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Improve your portfolio SEO</p>
                    <p className="text-sm text-gray-600">Businesses at your stage with optimized portfolios get 3x more inquiries</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Request reviews from past 3 clients</p>
                    <p className="text-sm text-gray-600">You need 5 more reviews to reach industry average (builds trust)</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Create "Wedding Packages" page</p>
                    <p className="text-sm text-gray-600">Clear pricing increases booking rate by 40% in your industry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7: Prioritization Framework
    {
      title: "Prioritization Framework",
      subtitle: "Why these features matter + selection methodology",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">IMRU Framework</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4">
                <p className="text-3xl font-bold text-purple-600 mb-2">I</p>
                <p className="font-semibold text-gray-900 mb-1">Impact</p>
                <p className="text-sm text-gray-600">Which moves key metrics most?</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-3xl font-bold text-blue-600 mb-2">M</p>
                <p className="font-semibold text-gray-900 mb-1">Mission</p>
                <p className="text-sm text-gray-600">Aligns with DIFY vision?</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-3xl font-bold text-green-600 mb-2">R</p>
                <p className="font-semibold text-gray-900 mb-1">Resources</p>
                <p className="text-sm text-gray-600">Can build with AI infra?</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-3xl font-bold text-orange-600 mb-2">U</p>
                <p className="font-semibold text-gray-900 mb-1">Urgency</p>
                <p className="text-sm text-gray-600">User pain level?</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <h4 className="font-bold text-gray-900 mb-4">Feature Scoring</h4>
            <div className="space-y-4">
              {/* Guardian */}
              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-900">Guardian</p>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">Score: 9.5/10</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-sm">
                  <div>
                    <p className="text-gray-600">Impact:</p>
                    <p className="font-bold text-purple-600">10/10</p>
                    <p className="text-xs text-gray-500">Protects $10.8M ARR</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Mission:</p>
                    <p className="font-bold text-purple-600">10/10</p>
                    <p className="text-xs text-gray-500">Core to making business easier</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Resources:</p>
                    <p className="font-bold text-purple-600">9/10</p>
                    <p className="text-xs text-gray-500">ML + existing data</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Urgency:</p>
                    <p className="font-bold text-purple-600">9/10</p>
                    <p className="text-xs text-gray-500">Churn is costly</p>
                  </div>
                </div>
              </div>

              {/* Local */}
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-900">Local SEO</p>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">Score: 9.3/10</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-sm">
                  <div>
                    <p className="text-gray-600">Impact:</p>
                    <p className="font-bold text-blue-600">10/10</p>
                    <p className="text-xs text-gray-500">3x lead generation</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Mission:</p>
                    <p className="font-bold text-blue-600">9/10</p>
                    <p className="text-xs text-gray-500">Automates hard work</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Resources:</p>
                    <p className="font-bold text-blue-600">9/10</p>
                    <p className="text-xs text-gray-500">API integrations</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Urgency:</p>
                    <p className="font-bold text-blue-600">9/10</p>
                    <p className="text-xs text-gray-500">Top user complaint</p>
                  </div>
                </div>
              </div>

              {/* Advisor */}
              <div className="border-l-4 border-green-500 pl-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-900">Advisor</p>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">Score: 8.8/10</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-sm">
                  <div>
                    <p className="text-gray-600">Impact:</p>
                    <p className="font-bold text-green-600">9/10</p>
                    <p className="text-xs text-gray-500">45% faster growth</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Mission:</p>
                    <p className="font-bold text-green-600">10/10</p>
                    <p className="text-xs text-gray-500">Perfect DIFY alignment</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Resources:</p>
                    <p className="font-bold text-green-600">8/10</p>
                    <p className="text-xs text-gray-500">GPT-4 + benchmarks</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Urgency:</p>
                    <p className="font-bold text-green-600">8/10</p>
                    <p className="text-xs text-gray-500">Differentiation play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: Business Impact
    {
      title: "Combined Business Impact",
      subtitle: "How these features transform Durable",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <DollarSign className="w-10 h-10 text-purple-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Revenue Protection</h3>
              <p className="text-3xl font-bold text-purple-600 mb-2">$10.8M</p>
              <p className="text-sm text-gray-600">ARR protected through churn reduction</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <TrendingUp className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growth Acceleration</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">3x</p>
              <p className="text-sm text-gray-600">Lead generation for service businesses</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <Users className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">User Success</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">45%</p>
              <p className="text-sm text-gray-600">Faster revenue growth for users</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <h4 className="font-bold text-gray-900 mb-4 text-lg">Strategic Positioning Shift</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-3">Before (Website Builder)</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <p className="text-sm text-gray-700">"Create a website in 30 seconds"</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <p className="text-sm text-gray-700">Compete with Wix, Squarespace, Webflow</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <p className="text-sm text-gray-700">Launch tool, then you're on your own</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <p className="text-sm text-gray-700">Users churn when growth stalls</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-green-600 mb-3">After (Business Growth Platform)</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <p className="text-sm text-gray-700">"Launch and grow your business with AI"</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <p className="text-sm text-gray-700">No direct competitors in this space</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <p className="text-sm text-gray-700">Ongoing partner in business success</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <p className="text-sm text-gray-700">Users stay because they're succeeding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-6">
            <h4 className="font-bold mb-3 text-lg">Mission Alignment: "Make owning a business easier than having a job"</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <p className="font-semibold mb-2">Guardian</p>
                <p className="text-sm text-white/90">Removes isolation & uncertainty</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <p className="font-semibold mb-2">Local</p>
                <p className="text-sm text-white/90">Automates marketing expertise</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <p className="font-semibold mb-2">Advisor</p>
                <p className="text-sm text-white/90">Provides strategic guidance</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 9: Implementation Roadmap
    {
      title: "Implementation Roadmap",
      subtitle: "Phased rollout strategy",
      content: (
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Phase 1: Guardian MVP (Weeks 1-8)</h3>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">Highest Priority</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Basic scoring algorithm</p>
                  <p className="text-sm text-gray-600">Engagement + business health signals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Three intervention triggers</p>
                  <p className="text-sm text-gray-600">High risk, medium risk, milestone celebrations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Dashboard for high-touch support</p>
                  <p className="text-sm text-gray-600">Internal tool for support team to view at-risk users</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-700"><strong>Why first:</strong> Protects existing revenue, minimal infra, generates data for other features</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Phase 2: Local SEO MVP (Weeks 9-16)</h3>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">High Priority</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Multi-location page generator</p>
                  <p className="text-sm text-gray-600">AI creates unique pages for each service area</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Top 20 citation automation</p>
                  <p className="text-sm text-gray-600">Google, Yelp, Bing, Apple Maps, etc.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Basic rank tracking</p>
                  <p className="text-sm text-gray-600">Show users their local search visibility</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-700"><strong>Why second:</strong> Addresses #1 user complaint, clear ROI, relatively straightforward</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-green-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Phase 3: Advisor MVP (Weeks 17-24)</h3>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">Medium Priority</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Basic benchmarking engine</p>
                  <p className="text-sm text-gray-600">Compare users to industry averages</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">GPT-4 action plan generation</p>
                  <p className="text-sm text-gray-600">Personalized weekly to-dos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Progress tracking</p>
                  <p className="text-sm text-gray-600">Show improvement over time</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-700"><strong>Why third:</strong> Builds on Guardian data, strategic differentiation, strong mission alignment</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 10: Next Steps
    {
      title: "Validation & Next Steps",
      subtitle: "Product development roadmap",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">If I Joined Durable Tomorrow...</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">Week 1-2: Validate Assumptions</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <p className="text-sm text-gray-700">User interviews with 10-15 recent churned users to validate pain points</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <p className="text-sm text-gray-700">Analytics deep-dive: What behaviors predict churn? Where do users drop off?</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <p className="text-sm text-gray-700">Survey active users: "What help would keep you growing?" Validate feature demand</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">Week 3-4: Technical Feasibility</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <p className="text-sm text-gray-700">Meet with engineering: Review AI infrastructure, data availability, technical constraints</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <p className="text-sm text-gray-700">Scope Guardian MVP: What's the simplest version that creates value?</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <p className="text-sm text-gray-700">Define success metrics and tracking plan before build</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <h4 className="font-bold text-gray-900 mb-4">Iteration Plan: Build → Measure → Learn</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-gray-900 mb-1">Guardian Beta (Month 2)</p>
                <p className="text-sm text-gray-700">Launch to 5% of at-risk users, manual interventions, measure response rate & churn impact</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold text-gray-900 mb-1">Local SEO Pilot (Month 3)</p>
                <p className="text-sm text-gray-700">Test with 100 service businesses, track ranking improvements, gather feedback</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold text-gray-900 mb-1">Advisor Alpha (Month 4)</p>
                <p className="text-sm text-gray-700">10 power users get early access, validate benchmarking accuracy, refine action plans</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-xl p-6">
            <h4 className="font-bold mb-3 text-lg">Success Criteria for Each Feature</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold mb-2">Guardian</p>
                <ul className="text-sm space-y-1">
                  <li>• 20%+ churn reduction in pilot</li>
                  <li>• 60%+ intervention response rate</li>
                  <li>• NPS increase for at-risk cohort</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Local</p>
                <ul className="text-sm space-y-1">
                  <li>• 50%+ rank in top 10 locally</li>
                  <li>• 2x increase in site traffic</li>
                  <li>• 85%+ satisfaction score</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Advisor</p>
                <ul className="text-sm space-y-1">
                  <li>• 70%+ complete weekly actions</li>
                  <li>• 30%+ faster milestone progress</li>
                  <li>• "Coach" perception in feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Final Slide
    {
      title: "Why This Matters",
      subtitle: "Transforming Durable's positioning",
      content: (
        <div className="text-center py-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">From Website Builder to Business Partner</h2>
          
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
              <p className="text-xl text-gray-800 italic mb-4">
                "These three features transform Durable from a tool users abandon after launch into a platform they depend on for business success."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Revenue Impact</h3>
              <p className="text-3xl font-bold text-purple-600 mb-2">$10.8M+</p>
              <p className="text-sm text-gray-600">ARR protected + growth opportunities</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">User Success</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">3x</p>
              <p className="text-sm text-gray-600">Lead generation & faster growth</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Moat</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">Unique</p>
              <p className="text-sm text-gray-600">No competitor has this suite</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Mission Alignment</h3>
            <p className="text-xl mb-6">"Make owning a business easier than having a job"</p>
            <p className="text-lg text-white/90">
              These features deliver on that promise by providing the support, automation, and guidance that make business ownership truly accessible.
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-gray-900">Durable PM Interview Presentation</h1>
            <p className="text-sm text-gray-600">Three AI Features Strategy</p>
          </div>
          <div className="text-sm text-gray-600">
            Slide {currentSlide + 1} of {slides.length}
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8 min-h-[600px]">
          {/* Slide Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{slides[currentSlide].title}</h2>
            {slides[currentSlide].subtitle && (
              <p className="text-lg text-gray-600">{slides[currentSlide].subtitle}</p>
            )}
          </div>

          {/* Slide Content */}
          <div>{slides[currentSlide].content}</div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              currentSlide === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-800 text-white hover:bg-gray-900'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-purple-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              currentSlide === slides.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Navigation */}
        <div className="mt-6 bg-white rounded-lg p-4">
          <p className="text-sm font-semibold text-gray-700 mb-3">Quick Navigation:</p>
          <div className="flex flex-wrap gap-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                  index === currentSlide
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {index + 1}. {slide.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPresentation;
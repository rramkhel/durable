import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Users, Target, TrendingUp, DollarSign, CheckCircle, AlertTriangle, Lightbulb, BarChart3 } from 'lucide-react';

const Rationale = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Strategy</h1>
          <p className="text-xl text-gray-300 mb-8">
            Complete rationale and product thinking behind the three AI features for Durable
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <p className="text-3xl font-bold mb-1">50+</p>
              <p className="text-sm text-gray-300">User Reviews Analyzed</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <p className="text-3xl font-bold mb-1">3</p>
              <p className="text-sm text-gray-300">Working Prototypes</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <p className="text-3xl font-bold mb-1">$10.8M</p>
              <p className="text-sm text-gray-300">ARR Impact Projected</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <p className="text-3xl font-bold mb-1">6M+</p>
              <p className="text-sm text-gray-300">Users to Impact</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* My Approach */}
        <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-6 h-6 text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-900">My Approach to Product Strategy</h2>
          </div>
          
          <div className="prose max-w-none text-gray-700 mb-6">
            <p className="text-lg">
              Built to show how thoughtful product work begins with real user pain, this project moves from insight to impact through research, prioritization, prototyping, and clear success measures.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-3">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Research</h3>
              <p className="text-sm text-gray-700">Start with user pain, not features</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-3">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Prioritize</h3>
              <p className="text-sm text-gray-700">Impact, mission, resources, urgency</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-3">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Prototype</h3>
              <p className="text-sm text-gray-700">Build to validate thinking</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
              <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-3">4</div>
              <h3 className="font-bold text-gray-900 mb-2">Measure</h3>
              <p className="text-sm text-gray-700">Define success criteria upfront</p>
            </div>
          </div>
        </section>

        {/* Research Process */}
        <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Search className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Research Process</h2>
          </div>

          <div className="space-y-6">
            {/* Source 1 */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. User Review Analysis (50+ reviews)</h3>
              <p className="text-gray-700 mb-4">
                Analysis of reviews across G2, TrustPilot, Reddit, and Product Hunt to identify recurring pain patterns 
                and unmet needs.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Key Findings:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700"><strong>"Limited SEO capabilities"</strong> - repeated across multiple reviews</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700"><strong>"Great for getting started but need help growing"</strong> - post-launch support gap</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700"><strong>"Templates look similar"</strong> - differentiation challenge</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Source 2 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Strategic Priorities Validation</h3>
              <p className="text-gray-700 mb-4">
                Cross-referenced findings with broader industry priorities: user retention, AI-native product development, and helping users achieve actual business success (not just website creation). These features align with the evolution from tool to platform.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Strategic Priorities Identified:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700">Retention and user success metrics</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700">AI-powered features and automation</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700">Making business ownership accessible (DIFY mission)</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Source 3 */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Industry Research (Local SEO & AI Trends)</h3>
              <p className="text-gray-700 mb-4">
                Researched local SEO challenges for small businesses and AI automation capabilities in 2025.
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Market Insights:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <BarChart3 className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700">70% of local searches lead to action within 24 hours</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <BarChart3 className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700">"Near me" searches increased 100%+ YoY</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <BarChart3 className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700">Service businesses (70% of Durable users) struggle most with local visibility</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Source 4 */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Competitive Gap Analysis</h3>
              <p className="text-gray-700 mb-4">
                Analysis of what competitors (Wix, Squarespace, Webflow) are building and where white space exists.
              </p>
              <div className="bg-orange-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Opportunity Identified:</p>
                <p className="text-sm text-gray-700 mb-3">
                  No website builder has solved the "post-launch success" problem with AI-driven automation. 
                  Most stop at website creation. Durable has the opportunity to own the entire journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* User Segments Deep Dive */}
        <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">User Segments & Personas</h2>
          </div>

          <div className="mb-6 bg-blue-50 rounded-lg p-4">
            <p className="text-gray-800">
              <strong>Primary Segment:</strong> Service Area Businesses (SABs) represent 70% of Durable's user base. 
              These are mobile service providers like plumbers, photographers, trainers, and cleaners who don't have 
              physical storefronts but serve specific geographic areas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-2 border-purple-200 rounded-xl p-6">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👷</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Home Services</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">Plumbers, HVAC, electricians, cleaners</p>
              <div className="space-y-2">
                <div className="bg-gray-50 rounded p-2">
                  <p className="text-xs font-semibold text-gray-700">Top Pain:</p>
                  <p className="text-xs text-gray-600">Need to rank for "[service] near me" in 10-20 service areas</p>
                </div>
                <div className="bg-gray-50 rounded p-2">
                  <p className="text-xs font-semibold text-gray-700">JTBD:</p>
                  <p className="text-xs text-gray-600">"Make my phone ring with local emergency calls"</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-blue-200 rounded-xl p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Creative Professionals</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">Photographers, designers, videographers</p>
              <div className="space-y-2">
                <div className="bg-gray-50 rounded p-2">
                  <p className="text-xs font-semibold text-gray-700">Top Pain:</p>
                  <p className="text-xs text-gray-600">Beautiful portfolio but no traffic or bookings</p>
                </div>
                <div className="bg-gray-50 rounded p-2">
                  <p className="text-xs font-semibold text-gray-700">JTBD:</p>
                  <p className="text-xs text-gray-600">"Help brides/clients find me when they're actively searching"</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-green-200 rounded-xl p-6">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏋️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Wellness Providers</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">Trainers, coaches, therapists</p>
              <div className="space-y-2">
                <div className="bg-gray-50 rounded p-2">
                  <p className="text-xs font-semibold text-gray-700">Top Pain:</p>
                  <p className="text-xs text-gray-600">Can't fill client roster, need trust/credibility</p>
                </div>
                <div className="bg-gray-50 rounded p-2">
                  <p className="text-xs font-semibold text-gray-700">JTBD:</p>
                  <p className="text-xs text-gray-600">"Position me as the local expert people trust"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prioritization Framework */}
        <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Prioritization Framework: IMRU</h2>
          </div>

          <p className="text-gray-700 mb-6">
            Evaluation of ~20 potential features using a custom framework <strong>IMRU</strong>, which helped  
            identify the three highest-impact opportunities.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">I</div>
              <h3 className="font-bold text-gray-900 mb-2">Impact</h3>
              <p className="text-sm text-gray-700">Which features move the most important metrics? (Revenue, retention, activation)</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">M</div>
              <h3 className="font-bold text-gray-900 mb-2">Mission</h3>
              <p className="text-sm text-gray-700">Does it align with "make owning a business easier than a job"?</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2">R</div>
              <h3 className="font-bold text-gray-900 mb-2">Resources</h3>
              <p className="text-sm text-gray-700">Can we build it with existing AI infrastructure? Technical feasibility?</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">U</div>
              <h3 className="font-bold text-gray-900 mb-2">Urgency</h3>
              <p className="text-sm text-gray-700">What's the user pain level? Competitive pressure?</p>
            </div>
          </div>

          {/* Feature Scoring Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Feature</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-900">Impact</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-900">Mission</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-900">Resources</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-900">Urgency</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-900">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 bg-purple-50">
                  <td className="py-3 px-4 font-semibold text-gray-900">Guardian (Churn Prediction)</td>
                  <td className="text-center py-3 px-4"><span className="inline-block bg-purple-600 text-white px-2 py-1 rounded font-bold">10</span></td>
                  <td className="text-center py-3 px-4"><span className="inline-block bg-purple-600 text-white px-2 py-1 rounded font-bold">10</span></td>
                  <td className="text-center py-3 px-4"><span className="inline-block bg-purple-600 text-white px-2 py-1 rounded font-bold">9</span></td>
                  <td className="text-center py-3 px-4"><span className="inline-block bg-purple-600 text-white px-2 py-1 rounded font-bold">9</span></td>
                  <td className="text-center py-3 px-4"><span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full font-bold text-lg">9.5</span></td>
                </tr>
                <tr className="border-b border-gray-100 bg-blue-50">
                  <td className="py-3 px-4 font-semibold text-gray-900">Local SEO Engine</td>
                  <td className="text-center py-3 px-4"><span className="inline-block bg-blue-600 text-white px-2 py-1 rounded font-bold">10</span></td>
                  <td className="text-center py-3 px-4"><span className="inline-block bg-blue-600 text-white px-2 py-1 rounded font-bold">9</span></td>
                  <td className="text-center py-3 px-4"><span className="inline-block bg-blue-600 text-white px-2 py-1 rounded font-bold">9</span></td>
                  <td className="text-center py-3 px-4"><span className="inline-block bg-blue-600 text-white px-2 py-1 rounded font-bold">9</span></td>
                  <td className="text-center py-3 px-4"><span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full font-bold text-lg">9.3</span></td>
                </tr>
                <tr className="border-b border-gray-100 bg-green-50">
                  <td className="py-3 px-4 font-semibold text-gray-900">AI Business Advisor</td>
                  <td className="text-center py-3 px-4"><span className="inline-block bg-green-600 text-white px-2 py-1 rounded font-bold">9</span></td>
                  <td className="text-center py-3 px-4"><span className="inline-block bg-green-600 text-white px-2 py-1 rounded font-bold">10</span></td>
                  <td className="text-center py-3 px-4"><span className="inline-block bg-green-600 text-white px-2 py-1 rounded font-bold">8</span></td>
                  <td className="text-center py-3 px-4"><span className="inline-block bg-green-600 text-white px-2 py-1 rounded font-bold">8</span></td>
                  <td className="text-center py-3 px-4"><span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full font-bold text-lg">8.8</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Business Impact */}
        <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Projected Business Impact</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
              <h3 className="font-bold text-gray-900 mb-4">Guardian Impact</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Churn Reduction</p>
                  <p className="text-3xl font-bold text-purple-600">30%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">ARR Protected</p>
                  <p className="text-2xl font-bold text-purple-600">$10.8M</p>
                  <p className="text-xs text-gray-500 mt-1">1.8M at-risk × 30% saved × $20/mo</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="font-bold text-gray-900 mb-4">Local SEO Impact</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Visibility Increase</p>
                  <p className="text-3xl font-bold text-blue-600">300%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Lead Generation</p>
                  <p className="text-2xl font-bold text-blue-600">3x</p>
                  <p className="text-xs text-gray-500 mt-1">Top 3 rankings = 3x more clicks</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
              <h3 className="font-bold text-gray-900 mb-4">Advisor Impact</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Growth Acceleration</p>
                  <p className="text-3xl font-bold text-green-600">45%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Perceived Value</p>
                  <p className="text-2xl font-bold text-green-600">3x</p>
                  <p className="text-xs text-gray-500 mt-1">Partner vs tool perception</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Strategic Positioning Shift</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold mb-2">Before:</p>
                <p className="text-sm text-white/90">"We help you create a website in 30 seconds"</p>
                <p className="text-xs text-white/70 mt-2">Competing with Wix, Squarespace, Webflow on speed</p>
              </div>
              <div>
                <p className="font-semibold mb-2">After:</p>
                <p className="text-sm text-white/90">"We help you build and grow a successful business"</p>
                <p className="text-xs text-white/70 mt-2">No direct competitors in this position</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="bg-white rounded-xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Success Metrics & Validation Plan</h2>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Guardian Success Criteria</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Leading Indicators:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Intervention response rate >60%</li>
                    <li>• At-risk user engagement lift</li>
                    <li>• Feature adoption for triggered users</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Lagging Indicators:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Churn rate reduction >20%</li>
                    <li>• Time to first customer -40%</li>
                    <li>• NPS increase for at-risk cohort</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Local SEO Success Criteria</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Leading Indicators:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Location pages generated per user</li>
                    <li>• Citation completion rate >80%</li>
                    <li>• Review request response rate >25%</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Lagging Indicators:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 70% rank in top 10 locally</li>
                    <li>• 2x increase in organic traffic</li>
                    <li>• 85%+ satisfaction score</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Advisor Success Criteria</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Leading Indicators:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Weekly action plan completion >70%</li>
                    <li>• Advisor feature engagement rate</li>
                    <li>• Benchmarking accuracy feedback</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Lagging Indicators:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 30% faster milestone progress</li>
                    <li>• "Coach" mentioned in feedback</li>
                    <li>• Increased platform stickiness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Strategy Approach */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold">Product Strategy Approach</h2>
          </div>

          <p className="text-gray-300 mb-8 text-lg">
            Principles and mechanics that guide product development and decision-making:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Principle 1 */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/15 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <h3 className="text-lg font-bold text-white">
                  Problem framing as a testable thesis
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm pl-11">
                Translate vague user problems into crisp hypotheses: "If X is simplified, then Y metric will improve."
                Each hypothesis includes a target metric, acceptance criteria, and a shortest-path experiment.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/15 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <h3 className="text-lg font-bold text-white">
                  Evidence-first discovery
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm pl-11">
                Combine targeted qualitative interviews with quick, instrumented prototypes to confirm behavioral
                patterns before committing engineering effort. Discovery artifacts are prioritized by
                confidence × impact × cost.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/15 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </span>
                <h3 className="text-lg font-bold text-white">
                  Micro-experiments, not monoliths
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm pl-11">
                Prefer narrow, reversible bets: small feature toggles, prompt variants, and staged rollouts that
                reveal signal quickly. Experiment designs include instrumentation and guardrails for metrics and
                user experience.
              </p>
            </div>

            {/* Principle 4 */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/15 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </span>
                <h3 className="text-lg font-bold text-white">
                  Responsible AI product practice
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm pl-11">
                Treat models like components: define input invariants, build fallback UX for low-confidence outputs,
                and log prompts/results for rapid iteration. Prioritize model-informed guardrails to reduce friction
                and build trust.
              </p>
            </div>

            {/* Principle 5 */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/15 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold text-sm">
                  5
                </span>
                <h3 className="text-lg font-bold text-white">
                  Clear success criteria and operational readiness
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm pl-11">
                Ship only when a hypothesis has clear pass/fail criteria, monitoring in place, and a rollback path.
                Ensure cross-functional ownership for long-term maintenance and data capture.
              </p>
            </div>

            {/* Principle 6 */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/15 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold text-sm">
                  6
                </span>
                <h3 className="text-lg font-bold text-white">
                  Iterate toward scale with measurable thresholds
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm pl-11">
                Scale features when leading indicators (engagement, completion, retention) and operational indicators
                (support volume, latency, cost) meet pre-defined thresholds. Use cohort analysis to avoid mistaken
                generalizations.
              </p>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-sm text-gray-400">
              These principles guided the development of Guardian, Local, and Advisor—from initial user research
              through prototype implementation and impact projection.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Rationale;
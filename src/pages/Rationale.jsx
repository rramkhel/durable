import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Lightbulb, Target, TrendingUp, Users, Code, BookOpen, ExternalLink } from 'lucide-react';
import BackButton from '../components/BackButton';

const Rationale = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <BackButton to="/" label="Back to Home" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Rationale</h1>
          <p className="text-xl text-gray-300">
            Deep dive into my research process, prioritization framework, and strategic thinking
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Research Process */}
        <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Search className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Research Process</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">User Pain Point Discovery</h3>
            <p>
              I started by analyzing <strong>50+ user reviews</strong> across G2, TrustPilot, and Reddit to identify 
              recurring themes. Three patterns emerged consistently:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 my-6 border border-gray-200">
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-gray-900 mb-2">💬 "Limited SEO capabilities"</div>
                  <p className="text-sm text-gray-600 ml-6">
                    Service businesses need local visibility but lack technical expertise
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-2">💬 "Great for getting started but need help growing"</div>
                  <p className="text-sm text-gray-600 ml-6">
                    Users have websites but don't know how to run successful businesses
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-2">💬 "Templates look similar across industries"</div>
                  <p className="text-sm text-gray-600 ml-6">
                    Generic AI doesn't understand industry-specific needs deeply enough
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Strategic Alignment Validation</h3>
            <p>
              I cross-referenced these pain points with Durable's job postings to ensure alignment with company priorities:
            </p>
            <ul className="space-y-2 my-4">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">→</span>
                <span>Growth PM role mentions: "reducing churn" and "growth loops"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">→</span>
                <span>Product Manager role emphasizes: "AI-native products" and "0-to-1 launches"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">→</span>
                <span>Mission statement: "Make owning a business easier than having a job"</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Competitive Analysis</h3>
            <p>
              I researched what similar platforms are building to identify white space opportunities. Most competitors focus on 
              either website building OR business management, but few bridge both effectively. This validated Durable's unique 
              positioning potential.
            </p>
          </div>
        </section>

        {/* Prioritization Framework */}
        <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Prioritization Framework: IMRU</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              I evaluated approximately 20 potential features using my <strong>IMRU framework</strong>:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
                <div className="font-bold text-purple-900 mb-2">I - Impact</div>
                <p className="text-sm text-gray-700">Which moves the most important metrics? (retention, revenue, activation)</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
                <div className="font-bold text-blue-900 mb-2">M - Mission Alignment</div>
                <p className="text-sm text-gray-700">Does it make owning a business easier? Align with DIFY vision?</p>
              </div>
              <div className="bg-green-50 rounded-lg p-5 border border-green-100">
                <div className="font-bold text-green-900 mb-2">R - Resources</div>
                <p className="text-sm text-gray-700">Can we build with existing AI infrastructure? Technical feasibility?</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-5 border border-orange-100">
                <div className="font-bold text-orange-900 mb-2">U - Urgency</div>
                <p className="text-sm text-gray-700">What's the user pain level? Competitive pressure? Market timing?</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Why These Three Features?</h3>
            <p>Guardian, Local, and Advisor scored highest across all IMRU dimensions:</p>

            <div className="space-y-4 my-6">
              <div className="border-l-4 border-purple-600 pl-4">
                <div className="font-semibold text-gray-900">Durable Guardian</div>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>High retention impact</strong> (protects existing revenue), <strong>mission-aligned</strong> (removes friction), 
                  uses existing ML infrastructure, <strong>urgent</strong> (churn is immediate business risk)
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <div className="font-semibold text-gray-900">Durable Local</div>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>High revenue impact</strong> (drives actual customers), <strong>critical user need</strong> (most-mentioned pain point), 
                  relatively straightforward API integrations, <strong>urgent</strong> (competitive gap)
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <div className="font-semibold text-gray-900">Durable Advisor</div>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>High perceived value</strong> (platform vs tool), <strong>deeply mission-aligned</strong> (business success coaching), 
                  leverages GPT-4 already in use, <strong>strategic</strong> (differentiator in market)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Business Impact Projections</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Each feature was designed with clear, measurable business outcomes:
            </p>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 my-6 border border-purple-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Durable Guardian: Revenue Protection</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Total users at risk (30% of 6M):</span>
                  <span className="font-semibold">1.8M users</span>
                </div>
                <div className="flex justify-between">
                  <span>Churn reduction (30%):</span>
                  <span className="font-semibold">540K users retained</span>
                </div>
                <div className="flex justify-between">
                  <span>Average revenue per user:</span>
                  <span className="font-semibold">$20/month</span>
                </div>
                <div className="flex justify-between border-t border-purple-200 pt-2 mt-2">
                  <span className="font-bold">Annual Recurring Revenue Protected:</span>
                  <span className="font-bold text-purple-600 text-lg">$10.8M</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 my-6 border border-blue-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Durable Local: Revenue Growth</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Top 3 local ranking impact:</span>
                  <span className="font-semibold">3x more leads</span>
                </div>
                <div className="flex justify-between">
                  <span>Average current revenue:</span>
                  <span className="font-semibold">$850/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Revenue with 3x leads:</span>
                  <span className="font-semibold">$2,550/month</span>
                </div>
                <div className="flex justify-between border-t border-blue-200 pt-2 mt-2">
                  <span className="font-bold">Impact:</span>
                  <span className="font-bold text-blue-600 text-lg">Higher LTV, Lower Churn</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 my-6 border border-green-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Durable Advisor: Platform Value</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Perceived value increase:</span>
                  <span className="font-semibold">3x</span>
                </div>
                <div className="flex justify-between">
                  <span>Revenue growth acceleration:</span>
                  <span className="font-semibold">45% faster</span>
                </div>
                <div className="flex justify-between">
                  <span>User stagnation reduction:</span>
                  <span className="font-semibold">60% fewer stuck</span>
                </div>
                <div className="flex justify-between border-t border-green-200 pt-2 mt-2">
                  <span className="font-bold">Impact:</span>
                  <span className="font-bold text-green-600 text-lg">Platform Not Tool</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Approach */}
        <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-900">Technical Implementation</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              All three features leverage Durable's existing AI infrastructure rather than requiring new technology:
            </p>

            <div className="space-y-6 my-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Guardian: ML Scoring</h4>
                <ul className="text-sm space-y-1 ml-6">
                  <li>Basic scoring algorithm (0-100) based on engagement + business health metrics</li>
                  <li>Risk thresholds trigger graduated interventions</li>
                  <li>Similar to website generation ML you already use</li>
                  <li>MVP in 6-8 weeks with existing infrastructure</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Local: API Integrations</h4>
                <ul className="text-sm space-y-1 ml-6">
                  <li>Multi-location page generator (template-based)</li>
                  <li>Schema markup (JSON-LD for LocalBusiness)</li>
                  <li>Citation APIs (Yelp, Google, Yellow Pages, etc.)</li>
                  <li>Review aggregation via Google Business Profile API</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Advisor: GPT-4 Strategy Generation</h4>
                <ul className="text-sm space-y-1 ml-6">
                  <li>Benchmarking engine (compare user to industry peers)</li>
                  <li>Gap analysis algorithm</li>
                  <li>GPT-4 prompt engineering for personalized weekly plans</li>
                  <li>Mostly leveraging AI you're already using for content</li>
                </ul>
              </div>
            </div>

            <p>
              <strong>Key insight:</strong> The complexity is in the product thinking and user experience design, 
              not the technical implementation. These features are pragmatically buildable with Durable's current tech stack.
            </p>
          </div>
        </section>

        {/* Strategic Vision */}
        <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-6 h-6 text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-900">Strategic Vision: The Three-Act Story</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              These three features tell a complete story of business ownership:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Predict</h4>
                <p className="text-sm text-gray-600">Guardian identifies who needs help before they churn</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Prevent</h4>
                <p className="text-sm text-gray-600">Local drives actual customers through SEO automation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Prosper</h4>
                <p className="text-sm text-gray-600">Advisor coaches them to sustainable growth</p>
              </div>
            </div>

            <p>
              This progression aligns with Durable's evolution from <strong>website builder</strong> to 
              <strong> full business platform</strong>. Users don't just want a site—they want business success. 
              These features deliver on that promise.
            </p>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">What I'd Do Next</h2>
          <p className="text-purple-100 mb-6">
            If I joined Durable, here's how I'd validate and refine these features:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl">→</span>
              <span><strong>User interviews</strong> with 10-15 customers across business stages</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">→</span>
              <span><strong>Survey</strong> broader user base to quantify pain points</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">→</span>
              <span><strong>Analytics deep dive</strong> on churn patterns and feature usage</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">→</span>
              <span><strong>Beta testing</strong> with small group before full launch</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">→</span>
              <span><strong>Iterate</strong> based on real user feedback and data</span>
            </li>
          </ul>
          <p className="mt-6 text-sm text-purple-100">
            These prototypes demonstrate product thinking—the real work begins with your users and data.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Discuss</h3>
          <p className="text-gray-600 mb-6">
            I'd love to hear your thoughts on this approach and explore how it fits into Durable's roadmap.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:rachel.ramkhelawan@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              Schedule a Call
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              View Prototypes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rationale;
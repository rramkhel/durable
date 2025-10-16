import React from 'react';
import { ArrowLeft, Users, Target, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';

const GuardianResearch = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <a href="#" className="inline-flex items-center text-purple-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Guardian Demo
          </a>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Guardian: Research & Rationale</h1>
          <p className="text-xl text-purple-100">
            Deep dive into customer pain points, user segments, and strategic thinking behind the churn prediction system
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Executive Summary */}
        <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
          <p className="text-gray-700 mb-4">
            <strong>Durable Guardian</strong> is an AI-powered churn prediction and intervention system that identifies 
            at-risk users before they abandon their businesses and triggers automated, personalized support.
          </p>
          <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
            <p className="text-gray-800">
              <strong>The Core Problem:</strong> Durable has enabled 6M+ users to create websites in 30 seconds, 
              but has an unknown business success rate. Users love the launch experience but struggle with the ongoing 
              work of running a business, leading to silent churn.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">30%</div>
              <div className="text-sm text-gray-600">Churn Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">40%</div>
              <div className="text-sm text-gray-600">Faster First Customer</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">2x</div>
              <div className="text-sm text-gray-600">Feature Adoption</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">$10.8M</div>
              <div className="text-sm text-gray-600">ARR Protected</div>
            </div>
          </div>
        </section>

        {/* Problem Discovery */}
        <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Customer Problem Discovery</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">The Hidden Churn Crisis</h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>What We Know:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>6M+ websites created on Durable</li>
                <li>Unknown business success rate</li>
                <li>Users create sites quickly, then go silent</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">What Users Say:</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <p className="text-gray-700 italic">"Great for getting started but don't know what to do next"</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <p className="text-gray-700 italic">"I have a website but no customers"</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <p className="text-gray-700 italic">"Love the speed but need more guidance"</p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 p-4">
            <p className="text-gray-800">
              <strong>The Real Problem:</strong> Users don't just need a website—they need to successfully run a business. 
              The gap between "website launched" and "business thriving" is where Durable loses users.
            </p>
          </div>
        </section>

        {/* User Segments */}
        <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">2. User Segments & Personas</h2>
          </div>

          {/* Persona 1 */}
          <div className="mb-6 border-l-4 border-purple-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Persona 1: "Side-Hustle Sarah"</h3>
            <p className="text-gray-600 mb-3 italic">The Aspiring Entrepreneur</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">Background:</p>
                <p className="text-sm text-gray-600">Full-time employee testing business idea</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">Age:</p>
                <p className="text-sm text-gray-600">28-40</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">Use Case:</p>
                <p className="text-sm text-gray-600">Dog walking, tutoring, freelance design</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">Time Available:</p>
                <p className="text-sm text-gray-600">5-10 hrs/week</p>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-4 mb-3">
              <p className="text-sm font-semibold text-gray-900 mb-2">🚨 Churn Risk Factors:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• No customers in first 30 days → assumes failure</li>
                <li>• Sees competitors with reviews → feels behind</li>
                <li>• Doesn't understand marketing takes time</li>
                <li>• Gets overwhelmed by "what to do next"</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm font-semibold text-gray-900 mb-2">💼 Jobs to Be Done:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ "Show me I'm on the right track"</li>
                <li>✓ "Tell me what successful businesses at my stage look like"</li>
                <li>✓ "Guide me to the next milestone"</li>
              </ul>
            </div>
          </div>

          {/* Persona 2 */}
          <div className="mb-6 border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Persona 2: "Career-Change Carl"</h3>
            <p className="text-gray-600 mb-3 italic">The Mid-Career Pivot</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">Background:</p>
                <p className="text-sm text-gray-600">Left corporate job to start service business</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">Age:</p>
                <p className="text-sm text-gray-600">40-55</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">Use Case:</p>
                <p className="text-sm text-gray-600">Consulting, coaching, skilled trade</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">Pressure Level:</p>
                <p className="text-sm text-gray-600">HIGH (family depending on success)</p>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-4 mb-3">
              <p className="text-sm font-semibold text-gray-900 mb-2">🚨 Churn Risk Factors:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Burning through savings with no revenue</li>
                <li>• High expectations: "Should be successful quickly"</li>
                <li>• Missing corporate structure/certainty</li>
                <li>• Considers going back to employment</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm font-semibold text-gray-900 mb-2">💼 Jobs to Be Done:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ "Reassure me this takes time"</li>
                <li>✓ "Show me I'm making progress even without revenue"</li>
                <li>✓ "Help me avoid costly mistakes"</li>
              </ul>
            </div>
          </div>

          {/* Persona 3 */}
          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Persona 3: "Retiree Rita"</h3>
            <p className="text-gray-600 mb-3 italic">The Passion Project Entrepreneur</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">Background:</p>
                <p className="text-sm text-gray-600">Early retiree pursuing passion</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">Age:</p>
                <p className="text-sm text-gray-600">55-70</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">Use Case:</p>
                <p className="text-sm text-gray-600">Crafts, teaching, hobbies-to-business</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">Tech Comfort:</p>
                <p className="text-sm text-gray-600">Low to Medium</p>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-4 mb-3">
              <p className="text-sm font-semibold text-gray-900 mb-2">🚨 Churn Risk Factors:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Technology overwhelm</li>
                <li>• Questions whether age is barrier</li>
                <li>• Lacks confidence in tech/marketing skills</li>
                <li>• Considers "maybe this isn't for me"</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm font-semibold text-gray-900 mb-2">💼 Jobs to Be Done:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ "Simplify the technology for me"</li>
                <li>✓ "Show me people like me who succeeded"</li>
                <li>✓ "Give me step-by-step guidance"</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-bold text-gray-900">3. Critical Pain Points</h2>
          </div>

          <div className="space-y-6">
            {/* Pain Point 1 */}
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pain Point 1: The "Silent Struggle"</h3>
              <p className="text-gray-700 mb-3">
                Users struggle alone without knowing help is available or that their experience is normal.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700 mb-2"><strong>Emotional State:</strong></p>
                <p className="text-sm text-gray-600 italic">
                  "Everyone else seems to be succeeding. I must be doing something wrong. I'm too embarrassed to ask for help."
                </p>
              </div>
            </div>

            {/* Pain Point 2 */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pain Point 2: No Progress Markers</h3>
              <p className="text-gray-700 mb-3">
                Without clear milestones, users can't tell if they're on track or falling behind.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700 mb-2"><strong>Current State:</strong></p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• No benchmarks for "normal" early-stage progress</li>
                  <li>• Can't distinguish between "slow start" vs "failing"</li>
                  <li>• Quits before critical traction point</li>
                </ul>
              </div>
            </div>

            {/* Pain Point 3 */}
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pain Point 3: Feature Abandonment</h3>
              <p className="text-gray-700 mb-3">
                Users don't know which Durable features could help them, so they only use 20% of the platform.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700 mb-2"><strong>Missed Opportunities:</strong></p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• SEO tools unused → invisible to customers</li>
                  <li>• CRM ignored → no follow-up system</li>
                  <li>• Blog builder untouched → no content marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">4. Success Metrics</h2>
          </div>

          <div className="mb-6">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🎯 North Star Metric</h3>
              <p className="text-2xl font-bold text-purple-600 mb-2">Active Business Success Rate</p>
              <p className="text-sm text-gray-700">
                Percentage of users who achieve "first customer" milestone and remain active after 90 days
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Leading Indicators</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Engagement Score</p>
                    <p className="text-xs text-gray-600">Login frequency, feature usage</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Business Health</p>
                    <p className="text-xs text-gray-600">Site traffic, form submissions, CRM activity</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Response Rate</p>
                    <p className="text-xs text-gray-600">Actions taken on Guardian suggestions</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Lagging Indicators</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Churn Rate</p>
                    <p className="text-xs text-gray-600">Target: 30% reduction</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Time to First Customer</p>
                    <p className="text-xs text-gray-600">Target: 40% faster</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Feature Adoption</p>
                    <p className="text-xs text-gray-600">Target: 2x increase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Alignment */}
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Strategic Alignment</h2>
          
          <div className="bg-white rounded-lg p-6 mb-4">
            <p className="text-lg font-semibold text-purple-600 mb-2">Mission Alignment</p>
            <p className="text-gray-700 italic mb-3">
              "Make owning a business easier than having a job"
            </p>
            <p className="text-gray-600">
              Guardian directly serves this mission by removing the isolation and uncertainty that makes business 
              ownership feel harder than employment. It provides the support system that employees take for granted: 
              guidance, feedback, and reassurance that they're on track.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">💰 Business Impact</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• $10.8M ARR protected</li>
                <li>• 30% churn reduction</li>
                <li>• Higher LTV per customer</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">🎯 Competitive Moat</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• No website builder has this</li>
                <li>• Predictive vs reactive support</li>
                <li>• True AI differentiation</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">📈 Platform Evolution</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• From tool to partner</li>
                <li>• Builds trust & loyalty</li>
                <li>• Enables upsells</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default GuardianResearch;
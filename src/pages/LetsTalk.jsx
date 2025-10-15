import React from 'react';
import { FileText, Mail, Phone, MapPin, Download } from 'lucide-react';

const LetsTalk = () => {
  const handlePrintResume = () => {
    document.body.classList.add('print-resume-only');
    window.print();
    document.body.classList.remove('print-resume-only');
  };

  const handlePrintCoverLetter = () => {
    document.body.classList.add('print-cover-letter-only');
    window.print();
    document.body.classList.remove('print-cover-letter-only');
  };

  const handlePrintBoth = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Screen-only controls */}
      <div className="print:hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Let's Talk</h1>
              <p className="text-purple-100">Resume & Cover Letter for Product Manager Role</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrintResume}
                className="flex items-center gap-2 px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium text-sm"
              >
                <Download className="w-4 h-4" />
                Resume
              </button>
              <button
                onClick={handlePrintCoverLetter}
                className="flex items-center gap-2 px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium text-sm"
              >
                <Download className="w-4 h-4" />
                Cover Letter
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 print:py-0">
        {/* Resume Section */}
        <div className="resume-section bg-white rounded-lg shadow-sm p-8 mb-8 print:shadow-none print:rounded-none print:mb-0 print:page-break-after">
          {/* Header */}
          <div className="border-b-2 border-purple-600 pb-6 mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Rachel Ramkhelawan</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Edmonton, AB
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                780-983-1774
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                rachel.ramkhelawan@gmail.com
              </div>
              <div className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                linkedin.com/in/rachel-ramkhelawan
              </div>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-purple-600 mb-3 uppercase tracking-wide">Product Manager</h2>
            <p className="text-gray-700 leading-relaxed">
              Product Manager with 8+ years launching AI-driven products in high-velocity startup environments. <strong>Launched AI learning platform to 100K+ users in &lt;1 month with 63% conversion boost</strong> through rapid experimentation and LLM-powered personalization. Currently building AI wellness startup from scratch (full-stack: TypeScript, Flask, Python). Engineering background (B.Sc.) with hands-on experience implementing RAG systems, prompt engineering, and agentic AI frameworks. Thrive in ambiguous 0-to-1 environments where rapid iteration and user research drive product decisions.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-purple-600 mb-3 uppercase tracking-wide">Skills & Expertise</h2>
            <div className="space-y-2 text-sm">
              <div><strong>Product Leadership & Strategy:</strong> Product Vision & Roadmap Development, 0-to-1 Product Launches, Rapid Experimentation & Hypothesis Testing, Growth Loops & Retention Mechanics, Activation & Onboarding Optimization, KPI Definition and Tracking</div>
              <div><strong>AI/ML Product Development:</strong> LLM-Powered Features, RAG Implementation, Prompt Engineering & Context Tuning, AI Quality Evaluation Frameworks, Agentic AI Systems, Full-Stack AI Prototyping (TypeScript, Flask, Python)</div>
              <div><strong>Platform & Technical:</strong> B2B/B2C/B2E SaaS Integrations, Product Operations, Agile Methodologies, A/B Testing & Experimentation, Quality Assurance, Product Analytics (Amplitude, Tableau)</div>
              <div><strong>Cross-Functional Leadership:</strong> Engineering/Design/Marketing Collaboration, Stakeholder Alignment, Executive Communication, Influence Without Authority</div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-purple-600 mb-3 uppercase tracking-wide">Professional Experience</h2>

            {/* Sprekta */}
            <div className="mb-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">AI Product Consultant</h3>
                  <p className="text-gray-700">Sprekta Inc., Edmonton, AB (remote)</p>
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">Nov 2024 – Present</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-700">
                <li><strong>Built behavior-aware AI wellness platform from 0-to-1</strong>, creating full-stack prototype that improved user clarity and control by 40%+ in early testing</li>
                <li>Defined product vision for AI-powered planning tool where users provide context and AI autonomously generates personalized plans—no manual planning required</li>
                <li>Prototyped full-stack personalization engine leveraging LLM agentic frameworks, prompt engineering, and behavioral inference</li>
              </ul>
            </div>

            {/* Chegg */}
            <div className="mb-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">Product Manager</h3>
                  <p className="text-gray-700">Chegg, Inc., Santa Clara, CA (remote)</p>
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">Feb 2021 – Nov 2024</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-700">
                <li><strong>Launched AI-powered learning platform to 100K+ users in &lt;1 month</strong>, driving 63% conversion boost, 200% signup surge, and 25% monthly active user growth through LLM-powered personalization</li>
                <li>Led product vision for AI-driven STEM learning tools, implementing RAG systems to surface contextually relevant practice problems</li>
                <li>Drove post-launch adoption from 0% to 25% target, achieving 50%+ weekly engagement and 85% satisfaction</li>
                <li>Ran continuous experimentation program shipping 3-5 data-driven improvements weekly based on behavioral analytics</li>
                <li>Orchestrated migration of 1M+ live content pieces with zero downtime for 400K+ users</li>
                <li>Co-created compliance framework managing 300K content experts, achieving 80+ quality scores</li>
              </ul>
            </div>

            {/* Varafy */}
            <div className="mb-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">Product Consultant, Customer Success Manager</h3>
                  <p className="text-gray-700">Varafy Corporation, Edmonton</p>
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">Jul 2017 – Feb 2021</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-700">
                <li><strong>Drove B2B SaaS product from early-stage startup through 30% YoY client growth to multi-million-dollar acquisition by Chegg</strong></li>
                <li>Led product strategy for 50+ enterprise customers including Wiley and Oxford University Press, driving 20% retention lift</li>
                <li>Conducted discovery workshops, rapidly translated requirements into high-impact roadmaps</li>
                <li>Delivered keynote at American Association of Physics Teachers conference on scalable STEM content visualization</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-bold text-purple-600 mb-3 uppercase tracking-wide">Education</h2>
            <div className="text-sm text-gray-700">
              <div className="mb-2">
                <strong>Certificate in Interdisciplinary Leadership Studies</strong><br />
                University of Alberta, Peter Lougheed Leadership College
              </div>
              <div>
                <strong>Bachelor of Science in Engineering</strong><br />
                University of Alberta
              </div>
            </div>
          </section>
        </div>

        {/* Cover Letter Section */}
        <div className="cover-letter-section bg-white rounded-lg shadow-sm p-8 print:shadow-none print:rounded-none print:page-break-before">
          <div className="border-b-2 border-purple-600 pb-4 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Cover Letter</h1>
            <p className="text-sm text-gray-600">Product Manager Position - Durable</p>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div className="text-right text-sm text-gray-600 mb-6">
              Rachel Ramkhelawan<br />
              780-983-1774<br />
              rachel.ramkhelawan@gmail.com<br />
              Edmonton, AB
            </div>

            <p className="font-semibold">
              Hiring Manager<br />
              Durable<br />
              Vancouver, BC
            </p>

            <p>Dear Durable Team,</p>

            <p>
              I'm applying for the Product Manager role at Durable because I've seen what you're solving firsthand. After analyzing 50+ user reviews, I found consistent patterns: "Limited SEO capabilities," "Great for starting but need help growing." You're not just building a website builder—you're building the platform that makes entrepreneurship genuinely accessible. That's exactly the type of transformational problem I build products to solve.
            </p>

            <p>
              <strong>At Chegg, I launched an AI learning platform that hit 100K+ users in under a month.</strong> The 63% conversion boost and 50%+ weekly engagement came from running continuous experimentation programs—I shipped 3-5 data-driven improvements weekly based on behavioral analytics. When post-launch adoption wasn't hitting our 25% target, I didn't guess. I added user tracking, identified high-value features through research, and rapidly iterated until we hit the goal.
            </p>

            <p>
              To demonstrate my thinking for Durable, I spent this week building three AI-powered features addressing those user pain points: a churn prediction system, automated local SEO engine, and AI business coach. Each includes working prototypes, business impact projections, and technical implementation approaches. The full rationale and demos are available at this portfolio site—I'd love to walk through my product thinking with you.
            </p>

            <p>
              <strong>Right now, I'm building my own AI startup from scratch.</strong> Sprekta is a full-stack wellness platform (TypeScript, Flask, Python) where users provide context and AI autonomously generates personalized plans—exactly Durable's DIFY philosophy. I'm writing the code myself, researching the behavioral psychology, validating through user interviews. Early testing shows 40%+ improvement in user clarity. This hands-on work gives me the technical depth to understand what's actually possible with LLMs, RAG systems, and agentic frameworks—not just what sounds good in a roadmap.
            </p>

            <p><strong>Why I'm a fit for Durable:</strong></p>

            <p>
              <strong>You want someone who thrives in ambiguous, fast-moving startup environments.</strong> At Varafy, I joined as an early employee with a small team and limited resources. We drove the product from early-stage through 30% year-over-year growth to acquisition by Chegg. That meant rapid iteration cycles, making decisions with incomplete data, and balancing speed with quality—testing quickly, killing bad ideas fast, doubling down on winners.
            </p>

            <p>
              <strong>You want AI-native product thinking.</strong> I've implemented RAG systems, designed AI evaluation frameworks, and built quality controls for LLM-generated content at scale. I'm actively building with AI right now—not managing from a distance. I understand the constraints, the possibilities, and how to ship pragmatically while pushing boundaries.
            </p>

            <p>
              <strong>You want someone who moves fast and experiments constantly.</strong> Mike Aynsley describes Durable's approach as running dozens of experiments monthly with radical clarity on outcomes. That's exactly how I work. At Chegg, I ran continuous experimentation programs shipping improvements weekly. At Varafy, constraints forced us to move fast and learn faster—exactly the environment where I thrive.
            </p>

            <p>
              <strong>You want someone who understands users deeply and uses data to drive decisions.</strong> I don't build what sounds clever. I research user pain points through interviews and behavioral analytics, validate problems, prototype solutions, and iterate based on what actually moves metrics. For Durable specifically, I analyzed user reviews, your job postings, and your mission to understand what small business owners actually struggle with before building those three prototypes.
            </p>

            <p>
              <strong>You want ownership and accountability.</strong> When I migrated 1M+ pieces of live content at Chegg, there was zero tolerance for downtime. When I co-created a compliance framework for 300K experts, quality couldn't slip. I take full responsibility for outcomes, not just shipping features. I coordinate cross-functional teams, unblock critical issues, and ensure we deliver the impact we committed to.
            </p>

            <p>
              Durable's trajectory—10.8M websites since 2021, $20M Series A, rapid growth—creates the perfect environment for a PM who moves fast, thinks strategically about AI, and isn't intimidated by ambiguity or scale. I'm ready to help small business owners succeed by building the DIFY platform that makes entrepreneurship genuinely accessible.
            </p>

            <p>
              I'd welcome the chance to discuss how my experience launching AI products, building 0-to-1, and driving measurable impact in startup environments can contribute to Durable's vision.
            </p>

            <p>Thank you for your time.</p>

            <p>
              Best,<br />
              Rachel Ramkhelawan
            </p>

            <p className="text-sm italic text-gray-600">
              P.S. — I have working demos of the three AI features I built for Durable. Happy to walk through my product thinking anytime.
            </p>
          </div>
        </div>

        {/* Print instructions */}
        <div className="print:hidden text-center text-sm text-gray-500 mt-8 pb-8">
          <p>💡 Tip: Use your browser's print function (Ctrl/Cmd + P) to save as PDF or print</p>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          @page {
            margin: 0.75in;
            size: letter;
          }

          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }

          /* Hide all navigation and screen elements */
          header,
          nav,
          footer,
          .print\\:hidden {
            display: none !important;
          }

          /* Show print-only header */
          .print\\:block {
            display: block !important;
          }

          /* Remove background colors and shadows for print */
          body,
          .min-h-screen {
            background: white !important;
          }

          .page-break-after {
            page-break-after: always;
          }

          .page-break-before {
            page-break-before: always;
          }

          /* Print only resume */
          body.print-resume-only .cover-letter-section {
            display: none !important;
          }

          body.print-resume-only .resume-section {
            page-break-after: avoid !important;
          }

          /* Print only cover letter */
          body.print-cover-letter-only .resume-section {
            display: none !important;
          }

          body.print-cover-letter-only .cover-letter-section {
            page-break-before: avoid !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LetsTalk;

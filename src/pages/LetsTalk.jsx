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
            <div className="flex items-start gap-6">
              <img
                src="/profile.jpeg"
                alt="Rachel Ramkhelawan"
                className="print:hidden w-20 h-20 rounded-full object-cover flex-shrink-0 border-2 border-purple-600"
              />
              <div className="flex-1">
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
            </div>
          </div>

          {/* Summary */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-purple-600 mb-3 uppercase tracking-wide">Product Manager</h2>
            <p className="text-gray-700 leading-relaxed">
              Product Manager with 8+ years launching AI-driven products in high-velocity startup environments. <strong>Launched AI learning platform to 100K+ users in &lt;1 month with 63% conversion boost</strong> through rapid experimentation and LLM-powered personalization. Currently building AI wellness startup from scratch (full-stack: TypeScript, React, Supabase). Engineering background (B.Sc.) with hands-on experience creating deep tech platforms, prompt engineering, and agentic AI frameworks. Thrive in ambiguous 0-to-1 environments where rapid iteration and user research drive product decisions.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-purple-600 mb-3 uppercase tracking-wide">Skills & Expertise</h2>
            <div className="space-y-2 text-sm">
              <div><strong>Product Leadership & Strategy:</strong> Product Vision & Roadmap Development, 0-to-1 Product Launches, Rapid Experimentation & Hypothesis Testing, Growth Loops & Retention Mechanics, Activation & Onboarding Optimization, KPI Definition and Tracking, De-risking & Opportunity Validation</div>
              <div><strong>AI/ML Product Development:</strong> LLM-Powered Features, RAG System Design, Prompt Engineering & Context Tuning, AI Quality Evaluation Frameworks, Agentic AI Systems, Full-Stack AI Prototyping (TypeScript, React, Supabase)</div>
              <div><strong>Platform & Technical Proficiency:</strong> B2B/B2C/B2E SaaS Integrations, Product Operations, Agile Methodologies, A/B Testing & Experimentation, Quality Assurance, Product Analytics (Amplitude, Tableau)</div>
              <div><strong>Cross-Functional Leadership:</strong> Engineering/Design/Marketing Collaboration, Stakeholder Alignment, Executive Communication, Influence Without Authority</div>
              <div><strong>User Research & Data:</strong> User Interviews, Surveys & Behavioral Analytics, Customer Requirements Definition, Persona Development, Data-Driven Decision Making</div>
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
                  <p className="text-gray-700">Sprekta Inc., Edmonton, AB (hybrid)</p>
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">Nov 2024 – Present</span>
              </div>
              <p className="text-sm text-gray-700 mb-2 italic">
                <strong>Consulting with stealth startup on behavior-aware AI wellness platform</strong>, creating full-stack prototype that <strong>improved user clarity and control by 40%+</strong> in early testing by combining adaptive AI with habit science.
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-700">
                <li><strong>Defined product vision and experience architecture</strong> for AI-powered planning tool where users provide context and AI autonomously generates personalized daily plans—no manual planning required. Combines status detection, behavioral insights, and structured data input to create genuinely autonomous planning experience</li>
                <li><strong>Prototyped full-stack personalization engine</strong> leveraging LLM agentic frameworks, prompt engineering, and behavioral inference to dynamically adapt user plans; researching IP for predictive algorithms while learning full-stack development hands-on</li>
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
              <p className="text-sm text-gray-700 mb-2 italic">
                <strong>Launched AI-powered learning platform to 100K+ users in &lt;1 month</strong>, driving <strong>63% conversion boost, 200% signup surge, and 25% monthly active user growth</strong> through LLM-powered personalization and cross-functional execution.
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-700">
                <li><strong>Drove post-launch adoption from 0% to 25% target</strong> by implementing user event tracking, conducting research to identify high-value features, and prioritizing improvements based on behavioral analytics; achieved <strong>50%+ weekly engagement and 85% satisfaction</strong></li>
                <li><strong>Ran continuous experimentation program</strong> to optimize feature adoption and user activation, shipping <strong>3-5 data-driven improvements per sprint</strong> based on behavioral analytics and user feedback loops, driving iterative growth in engagement and retention metrics</li>
                <li><strong>Orchestrated migration of 1M+ live content pieces</strong> to new platform with zero downtime for 400K+ users by developing incremental batch strategy, prioritization framework, and real-time monitoring system, coordinating engineering, QA, and operations teams to execute complex technical project under tight timeline constraints</li>
                <li><strong>Co-created compliance framework managing 300K content experts</strong>, building in-platform assessment tools and subject-specific rubrics that achieved 80+ quality scores across all STEM content</li>
                <li>Led cross-functional teams (engineering, data science, design, marketing, legal) to deliver complex features on tight timelines, <strong>lifting retention by 15%</strong> and <strong>increasing roadmap predictability by 85%</strong></li>
                <li><strong>Built STEM content platform from scratch</strong>, designing architecture and tools that scaled to 300K+ users and achieved 85% digital content creation target</li>
                <li>Led product vision for AI-driven STEM learning tools, working with engineering to implement RAG systems that surfaced contextually relevant practice problems based on student behavior patterns and content libraries</li>
                <li>Designed AI evaluation frameworks and prompt engineering strategies to ensure quality control across LLM-generated educational content, partnering with legal and subject matter experts to validate accuracy before student exposure</li>
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
              <p className="text-sm text-gray-700 mb-2 italic">
                <strong>Drove B2B SaaS product from early-stage startup (small team, limited resources) through 30% YoY client growth to multi-million-dollar acquisition by Chegg</strong>, leading product strategy, customer discovery, and rapid iteration cycles that balanced speed with quality to achieve product-market fit in competitive EdTech market.
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-700">
                <li><strong>Led product strategy for 50+ enterprise customers</strong>, conducting discovery workshops to identify pain points, rapidly translating requirements into high-impact roadmaps, and prioritizing features that drove 20% retention lift through continuous customer feedback integration</li>
                <li>Owned product strategy, backlog prioritization, and OKR planning while coordinating engineering, UX, and marketing to deliver scalable content systems</li>
                <li>Authored detailed specifications, user stories, and acceptance criteria, managing full product lifecycle from ideation through QA testing and client UAT</li>
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
              I'm applying for the Product Manager role at Durable because I believe in your mission: making business ownership genuinely accessible. I believe the right combination of AI-native product thinking, rapid experimentation, and user-first design can close the gap between launching a website and running a successful business; and I'm eager to bring my 8+ years of AI, tech, and product experience to help make that vision real.
            </p>

            <p>
              <strong>At Chegg, I launched an AI learning platform that hit 100K+ users in under a month.</strong> The 63% conversion boost and 50%+ weekly engagement came from running continuous experimentation programs: I shipped 3-5 data-driven improvements per sprint based on behavioral analytics. When post-launch adoption wasn't hitting our 25% target, I implemented user tracking, identified high-value features through research, and rapidly iterated until we hit the goal.
            </p>

            <p>
              <strong>Currently, I'm working with a stealth startup as an AI Product Consultant</strong>, building a full-stack wellness platform prototype (React, TypeScript, Supabase, Tailwind). Early testing shows 40%+ improvement in user clarity. This hands-on work gives me the technical depth to understand what's actually possible with AI implementation, not just what sounds good in a roadmap.
            </p>

            <p><strong>Why I'm a fit for Durable:</strong></p>

            <ul className="list-disc list-outside ml-5 space-y-0 text-gray-700">
              <li>
                <strong>Thrives in ambiguous, fast-moving startup environments.</strong> At Varafy, I joined as an early employee with a small team and limited resources. I drove the product from early-stage through 30% year-over-year growth to acquisition by Chegg. That meant rapid iteration cycles, making decisions with incomplete data, and balancing speed with quality—testing quickly, killing bad ideas fast, doubling down on winners.
              </li>
              <li>
                <strong>AI-native product thinking.</strong> I've implemented RAG systems, designed evaluation frameworks, and built quality controls for LLM-generated content at scale. I understand the constraints, the possibilities, and how to ship pragmatically while pushing boundaries. I stay current with the AI landscape through hands-on building, not just reading about it.
              </li>
              <li>
                <strong>Moves fast and experiments constantly.</strong> At Chegg, I ran continuous experimentation programs shipping improvements weekly. At Varafy, I thrived in the start-up environment where constraints forced us to move fast and learn faster. I understand that in high-velocity startups, shipping and learning beats perfection.
              </li>
              <li>
                <strong>Understands users deeply and uses data to drive decisions.</strong> I don't build what sounds clever. I research user pain points through interviews and behavioral analytics, validate problems, prototype solutions, and iterate based on what actually moves metrics. For Durable specifically, I analyzed user reviews, competitive landscape, and strategic priorities to understand what small business owners actually struggle with.
              </li>
              <li>
                <strong>Ownership and accountability.</strong> When I migrated 1M+ pieces of live content at Chegg, there was zero tolerance for downtime. When I co-created a compliance framework for 300K experts, quality couldn't slip. I take full responsibility for outcomes, not just shipping features. I coordinate cross-functional teams, unblock critical issues, and ensure we deliver the impact we committed to.
              </li>
            </ul>

            <p>
              When I look at Durable's trajectory - 10.8M websites since 2021, $20M Series A, rapid growth - I see a great cultural fit for a PM who moves fast, thinks strategically about AI, and isn't intimidated by ambiguity or scale. I'm ready to help small business owners succeed by building the DIFY platform that makes entrepreneurship genuinely accessible.
            </p>

            <p>
              I'd welcome the chance to discuss how my experience launching AI products, building 0-to-1, and driving measurable impact in startup environments can contribute to Durable's vision.
            </p>

            <p>
              Best,<br />
              Rachel Ramkhelawan
            </p>

            <p className="text-sm italic text-gray-600">
              P.S. I built three AI feature prototypes for Durable addressing the user pain points I identified. Happy to walk through my product thinking: durable-phi.vercel.app
            </p>
          </div>
        </div>

        {/* Print instructions */}
        <div className="print:hidden text-center text-sm text-gray-500 mt-8 pb-8">
          <p>💡 Tip: Use the print buttons at the top of the page to save as PDF or print</p>
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
            font-size: 10pt;
            line-height: 1.3;
          }

          /* Reduce font sizes */
          h1 {
            font-size: 24pt !important;
            margin-bottom: 8pt !important;
          }

          h2 {
            font-size: 13pt !important;
            margin-bottom: 6pt !important;
          }

          h3 {
            font-size: 11pt !important;
          }

          p, li, div {
            font-size: 10pt !important;
            line-height: 1.3 !important;
          }

          ul {
            margin-top: 4pt !important;
            margin-bottom: 4pt !important;
          }

          li {
            margin-bottom: 2pt !important;
          }

          /* Reduce spacing */
          section {
            margin-bottom: 10pt !important;
          }

          .resume-section,
          .cover-letter-section {
            padding: 0 !important;
          }

          /* Hide cover letter header when printing cover letter */
          body.print-cover-letter-only .cover-letter-section > div:first-child {
            display: none !important;
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

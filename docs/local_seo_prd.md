# Durable Local: Product Requirements Document

## Problem Statement

Small local service businesses (1-6 employees) report "limited SEO capabilities" as a top complaint. These businesses - plumbers, photographers, contractors, cleaners - depend on local Google searches to get customers, but they:
- Don't have SEO expertise
- Don't have time to optimize manually
- Don't know what actions actually matter
- Can't afford expensive marketing agencies

**Result:** They're invisible on Google, getting 2-3 calls per week when they could be getting 15-20.

---

## Target Users

**Primary Segment:**
- Small service businesses (1-6 employees)
- Operating in specific geographic areas
- Industries: Plumbing, HVAC, photography, cleaning, landscaping, contractors
- Not tech-savvy
- Time-constrained (running business solo/small team)
- Currently on Durable's $20-30/month plans

**User Persona: "Tom the Plumber"**
- 45 years old, runs plumbing business in Edmonton
- Great at plumbing, hates technology
- Has a Durable website but gets few calls from it
- Spends $500/month on ineffective Facebook ads
- Needs 15-20 jobs/month to sustain business
- Currently getting 8-10 jobs/month

---

## Success Metrics

**Primary Metrics:**
- Google ranking position (target: Top 3 for main keyword)
- Monthly customer inquiries (calls + form submissions)
- Appointments booked from online sources

**Secondary Metrics:**
- Click-through rate from search results
- Google Business Profile views
- Review count and rating
- User engagement with dashboard (weekly active users)

**Business Metrics:**
- Churn reduction (users with better SEO results stay longer)
- Upgrade rate (success → willingness to pay more)
- NPS score for feature

**Target:** 60% of users achieve Top 10 ranking within 90 days

---

## Solution Overview

Automated local SEO system that handles the technical complexity behind the scenes while giving users clear, actionable tasks that actually move the needle.

### Core Features

**1. Automated SEO Foundation**
- Automatic Google Business Profile optimization
- Auto-generated business descriptions (AI-written, SEO-optimized)
- Auto-created location pages for each service area
- Automated directory listings (50+ local directories)
- Auto-optimized images with proper tags and compression
- Schema markup for local business structured data

**2. Customer Funnel Dashboard**
- Real-time view: Searches → Clicks → Calls → Appointments
- Current vs. Target comparison
- Clear position tracking ("Page 2" vs "Top 3")
- Monthly trends

**3. Guided Action System**
- 2-3 priority tasks shown at a time
- Clear explanation of why each task matters
- Time estimate for each task
- "Start" buttons that guide users through tasks
- Completion tracking

**4. Review Management**
- Automatic review requests after completed jobs
- Centralized view of all reviews
- Quick-reply interface
- Review count progress tracking

**5. Background Automations**
- Auto-update business hours across all platforms
- Auto-generate monthly blog content for SEO
- Auto-create and optimize keywords
- Auto-sync business info changes everywhere

---

## User Stories

**As a plumber:**
- I want to show up when people search "emergency plumber [my city]" so I get more calls
- I want to know what I need to do without learning SEO so I can focus on my actual work
- I want to see if this is actually working so I know if I should keep paying for it

**As a photographer:**
- I want couples searching for wedding photographers to find me so I can book more weddings
- I want my portfolio to rank high on Google so I don't have to pay for ads
- I want the system to handle the technical stuff so I can focus on taking photos

---

## User Flow

1. **Onboarding** (one-time, 5 minutes)
   - User confirms business info and service areas
   - System auto-generates everything in background
   - User sees dashboard for first time

2. **Weekly Check-in** (5-10 minutes)
   - User logs in to dashboard
   - Reviews funnel metrics (appointments this month)
   - Completes 1-2 priority tasks
   - System handles everything else automatically

3. **Monthly Review** (15 minutes)
   - Reviews progress over past 30 days
   - Sees ranking improvements
   - Updates service areas or info as needed
   - Reviews and responds to customer reviews

---

## What's In Scope

**Phase 1 (MVP - 8 weeks):**
- Google search optimization only
- Automated business descriptions and keywords
- Location page generation for up to 5 service areas
- Basic funnel dashboard
- 3 priority tasks system
- Directory submission to 20 major platforms
- Automated review requests

**Phase 2 (Next 12 weeks):**
- Expand to 50+ directory platforms
- Add content generation (monthly blog posts)
- Advanced image optimization
- Review management interface
- Competitor comparison view

---

## What's Out of Scope

- Social media management (Instagram, Facebook posting)
- Paid advertising (Google Ads, Facebook Ads)
- Email marketing campaigns
- Multi-location businesses (franchises with 10+ locations)
- E-commerce SEO (we're focused on service businesses)
- Custom website design changes
- Phone call tracking/recording

---

## Technical Considerations

**Required Integrations:**
- Google Business Profile API
- Google Search Console API
- 20+ directory APIs (Yelp, Yellow Pages, etc.)
- OpenAI API for content generation
- Image optimization service

**Data Requirements:**
- User business info (name, address, phone, hours, services)
- Service areas (cities/neighborhoods served)
- Google Search Console connection for ranking data
- Photo uploads from users

**Performance Requirements:**
- Dashboard loads in <2 seconds
- Automated tasks run daily (directory submissions, review requests)
- Ranking data updates weekly
- Real-time task completion tracking

---

## Open Questions

1. How do we verify ranking data accuracy? (Google Search Console has delays)
2. What happens if a user serves 10+ areas? (charge more? limit features?)
3. How do we handle industries with strict regulations? (lawyers, medical)
4. Should we offer phone call tracking as an add-on?
5. How do we help users who have bad reviews?

---

## Dependencies

- Engineering: Need AI infrastructure for content generation
- Design: Dashboard UI and modal designs
- Legal: Review terms for automated content generation
- Support: Documentation for new feature
- Sales: Pricing strategy (included in base plan or upsell?)

---

## Success Criteria

**Launch is successful if:**
- 70% of beta users complete onboarding
- 50% of users are weekly active in dashboard
- 30% of users achieve Top 10 ranking in 90 days
- NPS score >40 for the feature
- Churn reduction of 15% among users who use the feature

---

## Timeline

- **Weeks 1-2:** User research validation (10 user interviews)
- **Weeks 3-4:** Technical discovery and API integration planning
- **Weeks 5-8:** MVP development
- **Week 9:** Internal beta testing
- **Week 10-11:** Closed beta with 50 users
- **Week 12:** Launch to 10% of user base
- **Week 16:** Full rollout

---

*Last updated: October 2024*
*Document owner: Product Management*
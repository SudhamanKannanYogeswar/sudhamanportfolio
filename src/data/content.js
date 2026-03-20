export const projects = [
  {
    id: 1,
    title: "AI B2C & Omnichannel CRM Platform",
    tag: "AI / Growth",
    problem: "IDP's B2C and B2B CRM platforms lacked a unified product strategy, resulting in fragmented customer journeys and missed conversion opportunities.",
    approach: "Owned end-to-end product strategy and execution — defined product vision, roadmap, OKRs, and success metrics. Led discovery and delivery across cross-functional squads including Engineering, UX, Data, and SRE. Drove data-driven prioritization and customer journey optimization.",
    tools: ["Heap", "Google Analytics", "Power BI", "Jira", "Confluence"],
    impact: "2% conversion lift and 12% engagement improvement delivered.",
    metric: "12",
    metricLabel: "% engagement lift",
  },
  {
    id: 2,
    title: "form.idp.com – Lead Generation SaaS Platform",
    tag: "0→1 SaaS",
    problem: "Business stakeholders had no self-serve way to configure and launch lead capture forms, creating bottlenecks and slowing go-live timelines.",
    approach: "Led discovery, delivery, and scaling of form.idp.com — a Lead Generation SaaS platform with a self-serve Form Builder. Translated business needs into PRDs, epics, user stories, and acceptance criteria. Maintained a prioritized, groomed backlog aligned with customer value and technical feasibility.",
    tools: ["Jira", "Confluence", "GTM", "Heap", "OneTrust"],
    impact: "Enabled 80+ stakeholders to self-serve. Reduced go-live time by 40% and increased qualified lead volume by 18%.",
    metric: "40",
    metricLabel: "% faster go-live",
  },
  {
    id: 3,
    title: "LLM Chatbot & Next Best Action Engine",
    tag: "AI",
    problem: "High volume of manual query resolution was creating operational overhead and degrading user experience on IDP's B2C platform.",
    approach: "Drove AI-powered product innovation — delivered an LLM-based chatbot and Next Best Action (NBA) engine. Defined requirements, coordinated with ML and engineering teams, and tracked adoption metrics post-launch.",
    tools: ["Python", "Heap", "Jira", "Confluence", "Power BI"],
    impact: "22% increase in user interactions and 35% reduction in manual query resolution time.",
    metric: "35",
    metricLabel: "% reduction in manual queries",
  },
  {
    id: 4,
    title: "OneTrust Privacy Compliance Implementation",
    tag: "Compliance",
    problem: "form.idp.com lacked GDPR- and PDPA-compliant data capture workflows, creating legal exposure across multiple jurisdictions.",
    approach: "Integrated OneTrust across the platform as product lead — scoped requirements with legal, coordinated engineering, and managed vendor relationship. Delivered cookie consent, preference centre, and privacy-by-design workflows.",
    tools: ["OneTrust", "GTM", "Jira", "Confluence", "SQL"],
    impact: "Improved consent accuracy by 95%. Achieved 100% adherence to GDPR and PDPA regulatory standards.",
    metric: "95",
    metricLabel: "% consent accuracy",
  },
  {
    id: 5,
    title: "Analytics Pipeline & Reporting Automation",
    tag: "Analytics",
    problem: "Stakeholders across 5 squads were spending 10+ hours weekly on manual reporting from disparate data sources, with low accuracy and poor visibility.",
    approach: "Streamlined analytics pipelines for form.idp.com and IELTS App using Google Tag Manager, Heap, and Power BI. Built automated dashboards, established a unified data framework, and trained stakeholders on self-serve analytics.",
    tools: ["Power BI", "SQL", "Google Tag Manager", "Heap", "Looker Studio"],
    impact: "Cut manual reporting effort by 50%, reduced redundant reports by 40%, and improved decision accuracy across 5 squads.",
    metric: "50",
    metricLabel: "% reporting effort saved",
  },
];

export const skills = {
  Product: [
    "Product Strategy & Vision", "Roadmapping & OKRs", "Agile / Scrum", "Backlog Ownership",
    "Stakeholder Management", "User Research", "A/B Testing", "PRD & User Stories", "Product Lifecycle (PDLC)",
  ],
  Analytics: [
    "SQL", "Power BI", "Looker Studio", "Google Analytics", "Heap / Firebase", "Adjust", "GTM", "Python", "MATLAB",
  ],
  Tools: [
    "Jira", "Confluence", "OneTrust", "Figma", "Miro", "SaaS & eCommerce Platforms", "GDPR / PDPA Compliance", "AI & ML Integration",
  ],
};

export const experience = [
  {
    role: "Product Owner – AI",
    company: "IDP Education Pvt. Ltd.",
    period: "Feb 2025 – Present",
    bullets: [
      "Owned end-to-end product strategy for AI B2C and Omnichannel CRM B2B platforms — delivered 2% conversion lift and 12% engagement improvement.",
      "Led discovery, delivery, and scaling of form.idp.com (Lead Gen SaaS), enabling 80+ stakeholders to self-serve. Reduced go-live time by 40% and increased qualified leads by 18%.",
      "Drove AI-powered innovation: LLM chatbot and NBA engine — 22% more user interactions, 35% reduction in manual query resolution.",
      "Integrated OneTrust for GDPR/PDPA compliance, improving consent accuracy by 95%.",
      "Owned sprint ceremonies (refinement, planning, reviews, retros), reducing time-to-market by 25%.",
      "Drove analytics governance — unified data framework reduced redundant reports by 40% and improved decision accuracy.",
    ],
  },
  {
    role: "Senior Product Analyst – Digital Analytics (Growth)",
    company: "IDP Education Pvt. Ltd.",
    period: "Sep 2022 – Dec 2024",
    bullets: [
      "Owned analytics and optimization for IDP (Lead Gen) and IELTS (B2C) platforms — improved conversion funnel efficiency by 30 bps through A/B testing and behavioral insights.",
      "Redesigned onboarding journeys using progressive profiling — reduced drop-offs by 20% and improved account creation success by 28%.",
      "Spearheaded market research and feedback loops that improved customer satisfaction by 15% across 60+ countries.",
      "Streamlined analytics pipelines using GTM, Heap, and Power BI — cut manual reporting effort by 50%.",
      "Partnered with UI/UX and SEO teams to increase organic lead acquisition by 10% and form submission success by 17%.",
    ],
  },
  {
    role: "Intern Product Analyst – Digital Analytics",
    company: "IDP Education Pvt. Ltd.",
    period: "Mar 2022 – Aug 2022",
    bullets: [
      "Built data visualization dashboards in Looker Studio, Power BI, and SQL — reduced manual reporting time by 50%, saving 10+ hours weekly.",
      "Implemented mobile and web tracking with Adjust, Heap, GA, and GTM — improved tracking accuracy by 80%.",
      "Supported A/B test implementation driving 7% higher form completion rates.",
    ],
  },
  {
    role: "Quality Engineer",
    company: "VMAX Engineers",
    period: "Jun 2018 – Oct 2020",
    bullets: [
      "Led a team of NDT technicians in a fast-paced manufacturing environment.",
      "Introduced new inspection techniques that improved operational efficiency by 25%.",
    ],
  },
];

export const caseStudies = [
  {
    id: 1,
    title: "The Hindu App – Habit-Forming News Experience",
    tag: "PRD",
    context: "Product case study written as a PRD exercise: how to transform The Hindu App from a single-article read into a daily habit-forming platform.",
    problem: "User journey analysis across news platforms revealed low session depth — users typically exit after reading one article, indicating a lack of engagement loops.",
    approach: "Defined target personas (busy professionals, casual readers, students), wrote user stories with acceptance criteria, and proposed a feature set: short video clips, left/right swipe card navigation, gamification (badges, leaderboards), multi-language support, and contextual article recommendations. Prioritised features by customer value vs. technical complexity.",
    features: ["Short video clips (<1 min) for trending news", "Swipe-card navigation for quick browsing", "Gamification: badges, points, leaderboards", "Multi-language article translation", "Relevant article suggestions at scroll-end"],
    metrics: ["Session depth", "Articles per session", "DAU/MAU ratio", "Retention D7/D30"],
    tools: ["Figma", "Balsamiq", "Notion", "PRD Framework"],
    link: "https://puzzling-field-54d.notion.site/906b0a38ea9e45c188bcadd61bc29725",
    linkLabel: "Read Full PRD",
  },
  {
    id: 2,
    title: "Eatclub – Product Case Study",
    tag: "Growth",
    context: "End-to-end product case study covering user research, problem framing, feature ideation, and wireframes for Eatclub's growth challenges.",
    problem: "Identified friction points in the Eatclub ordering and discovery experience that were limiting repeat usage and reducing average order value.",
    approach: "Conducted user research to map pain points, defined opportunity areas, prioritised features using a value/effort matrix, and produced wireframes in Visily to validate the proposed solutions with stakeholders.",
    features: ["Improved discovery and personalisation", "Streamlined checkout flow", "Loyalty and repeat-order nudges", "Wireframes validated with user feedback"],
    metrics: ["Repeat order rate", "Average order value", "Checkout drop-off", "NPS"],
    tools: ["Visily", "Google Slides", "User Research", "Value/Effort Matrix"],
    link: "https://docs.google.com/presentation/d/1bkX8KixfmiINfcxzQBnnk_Z9aRkNKN2e/edit?usp=sharing",
    linkLabel: "View Presentation",
  },
  {
    id: 3,
    title: "E-commerce Platform – Product Case Study",
    tag: "0→1",
    context: "Comprehensive product case study for an e-commerce platform covering discovery, strategy, and execution planning.",
    problem: "Mapped the end-to-end user journey on an e-commerce platform to identify conversion bottlenecks and drop-off points across browse, cart, and checkout flows.",
    approach: "Structured the case study around problem framing, competitive analysis, user persona definition, feature prioritisation, and success metrics. Produced a full slide deck covering strategy through to execution roadmap.",
    features: ["Conversion funnel analysis", "Personalised product recommendations", "Cart abandonment recovery flows", "Simplified checkout UX"],
    metrics: ["Conversion rate", "Cart abandonment rate", "Revenue per visitor", "Customer LTV"],
    tools: ["Google Slides", "Figma", "Analytics", "Competitive Research"],
    link: "https://docs.google.com/presentation/d/1bOPCWm2q92PQbVb5_byoOJM0DahIvHJ8/edit?usp=sharing",
    linkLabel: "View Presentation",
  },
];

export const articles = [
  {
    title: "Breaking into Product Management: What Nobody Tells You",
    summary: "Lessons from founding Product Decoded — the frameworks, mindset shifts, and practical steps that actually help people transition into PM roles.",
    tag: "Product Career",
    url: "#",
    date: "Mar 2026",
  },
  {
    title: "How AI is Reshaping B2C Product Strategy",
    summary: "From LLM chatbots to Next Best Action engines — what I learned shipping AI features at scale and how to measure what actually matters.",
    tag: "AI / Product",
    url: "#",
    date: "Jan 2026",
  },
  {
    title: "The Analytics Stack Every PM Should Understand",
    summary: "GTM, Heap, Power BI, SQL — you don't need to be a data engineer, but you do need to know how the pipes connect. Here's a practical guide.",
    tag: "Analytics",
    url: "#",
    date: "Nov 2025",
  },
];

export const frameworks = [
  { title: "Outcome over Output", icon: "🎯", desc: "Every roadmap item maps to a measurable OKR. If we can't define success, we don't build it." },
  { title: "Data + Intuition", icon: "📊", desc: "Quantitative data tells you what's happening. Qualitative research tells you why. Both are required." },
  { title: "Ruthless Prioritisation", icon: "⚡", desc: "Customer value, technical feasibility, and strategic goals — all three must align before a story enters the sprint." },
  { title: "Ship, Learn, Iterate", icon: "🔄", desc: "Small bets, fast feedback loops. Experimentation is a muscle — the more you use it, the stronger it gets." },
];

export const metrics = [
  { value: 40, suffix: "%", label: "Faster go-live (form.idp.com)" },
  { value: 35, suffix: "%", label: "Reduction in manual queries" },
  { value: 50, suffix: "%", label: "Reporting effort saved" },
  { value: 95, suffix: "%", label: "Consent accuracy (OneTrust)" },
];

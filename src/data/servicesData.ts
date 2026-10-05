import { Share2, Globe, Palette, Target, Search, Mail, Video, Megaphone, TrendingUp, BarChart2, type LucideIcon } from "lucide-react";

export interface ServiceFeature {
  title: string;
  desc: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  heroDesc: string;
  heroImg: string;
  accent: string;
  overview: string;
  benefits: string[];
  features: ServiceFeature[];
  process: ProcessStep[];
  results: { value: string; label: string }[];
  faqs: ServiceFAQ[];
}

export const allServices: ServiceData[] = [
  {
    slug: "social-media-management",
    icon: Share2,
    title: "Social Media Management",
    tagline: "Grow your audience, build your brand, and turn followers into customers.",
    heroDesc: "We handle everything - content creation, scheduling, community management, and growth strategy - across Instagram, Facebook, TikTok, LinkedIn, and X.",
    heroImg: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1600",
    accent: "#e11d48",
    overview: "Social media is the frontline of your brand. FTZ Digital's social media team creates scroll-stopping content, builds engaged communities, and runs data-driven strategies that turn your profiles into powerful business tools. We manage every platform so you can focus on what you do best - running your business.",
    benefits: [
      "Consistent, on-brand presence across all platforms",
      "Engaged community that trusts and advocates for your brand",
      "Content tailored to each platform's algorithm",
      "Full-service management - no extra work on your end",
      "Transparent monthly analytics and growth reports",
    ],
    features: [
      { title: "Content Strategy & Calendar", desc: "Monthly content calendar aligned with your brand, campaigns, and trending topics - planned 30 days ahead." },
      { title: "Professional Content Creation", desc: "Scroll-stopping graphics, captions, reels scripts, and stories created by our in-house designers and writers." },
      { title: "Daily Posting & Scheduling", desc: "Consistent, timely posting across all your platforms at peak engagement hours for maximum reach." },
      { title: "Community Management", desc: "Responding to comments, DMs, and reviews promptly to build genuine relationships with your audience." },
      { title: "Hashtag & Growth Strategy", desc: "Research-backed hashtag strategies and growth tactics to expand your reach organically." },
      { title: "Monthly Analytics Reports", desc: "Detailed monthly reports covering follower growth, reach, engagement rate, and content performance." },
    ],
    process: [
      { num: "01", title: "Brand Discovery", desc: "We deep-dive into your brand, audience, competitors, and goals to build a custom social strategy." },
      { num: "02", title: "Strategy & Content Plan", desc: "We create a monthly content calendar and strategy document for your approval before anything goes live." },
      { num: "03", title: "Content Creation", desc: "Our designers and writers produce all visuals and copy - graphics, reels, stories, and captions." },
      { num: "04", title: "Publish & Engage", desc: "We publish at optimal times and actively manage your community - responding to every comment and DM." },
      { num: "05", title: "Analyse & Optimise", desc: "Monthly reports with insights and strategy adjustments to continuously improve performance." },
    ],
    results: [
      { value: "3×", label: "Average Engagement Increase" },
      { value: "60%", label: "Average Follower Growth / Month" },
      { value: "24h", label: "Response Time SLA" },
      { value: "30+", label: "Posts Per Month" },
    ],
    faqs: [
      { q: "Which social media platforms do you manage?", a: "We manage Instagram, Facebook, TikTok, LinkedIn, X (Twitter), YouTube, and Pinterest. We recommend platforms based on where your target audience is most active." },
      { q: "Do I need to provide content or photos?", a: "No - we handle everything. Our designers and writers create all content. We may occasionally ask for product photos or behind-the-scenes shots, but it's never mandatory." },
      { q: "How soon will I start seeing results?", a: "Most clients see noticeable engagement improvements within the first 30–60 days. Significant follower growth and community building typically happens within 3–6 months of consistent management." },
      { q: "Can I approve content before it goes live?", a: "Absolutely. Every piece of content is shared with you for approval via a content calendar before it's published. You have full control over what goes live." },
    ],
  },

  {
    slug: "web-design-development",
    icon: Globe,
    title: "Web Design & Development",
    tagline: "Custom websites built to impress, convert, and grow with your business.",
    heroDesc: "From stunning landing pages to full e-commerce stores - we design and build websites that look incredible and are engineered to turn visitors into customers.",
    heroImg: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1600",
    accent: "#2563eb",
    overview: "Your website is your most important digital asset. FTZ Digital designs and develops custom websites that combine beautiful UI design with conversion-focused structure. Every site we build is fast, mobile-first, SEO-ready, and built to grow with your business.",
    benefits: [
      "Pixel-perfect design tailored to your brand identity",
      "Mobile-first, fully responsive across all devices",
      "Fast loading speeds and SEO-optimised structure",
      "E-commerce ready - Shopify, WooCommerce, and custom",
      "Ongoing maintenance and support packages available",
    ],
    features: [
      { title: "UI/UX Design", desc: "User-centered design with wireframes, mockups, and interactive prototypes before a single line of code is written." },
      { title: "Responsive Development", desc: "Pixel-perfect, mobile-first development that looks and performs flawlessly on every screen size and device." },
      { title: "E-commerce Stores", desc: "Feature-rich online stores on Shopify, WooCommerce, or custom platforms - with payment integration and inventory management." },
      { title: "Landing Page Optimisation", desc: "High-converting landing pages with clear CTAs, A/B test-ready layouts, and speed-optimised code." },
      { title: "CMS Integration", desc: "Easy-to-edit content management so your team can update text, images, and pages without developer help." },
      { title: "Speed & SEO Foundation", desc: "Technical SEO setup, fast load times, structured data, and Core Web Vitals optimisation built in from day one." },
    ],
    process: [
      { num: "01", title: "Discovery & Planning", desc: "We understand your business goals, audience, and brand before mapping out site architecture and functionality." },
      { num: "02", title: "UI/UX Design", desc: "Wireframes and high-fidelity mockups for your approval - we iterate until the design is exactly right." },
      { num: "03", title: "Development", desc: "Clean, well-structured code built on proven frameworks with performance and scalability in mind." },
      { num: "04", title: "Testing & QA", desc: "Cross-browser testing, mobile testing, speed audits, and form/checkout QA before anything goes live." },
      { num: "05", title: "Launch & Handover", desc: "Smooth launch with DNS setup, analytics integration, and a full training session for your team." },
    ],
    results: [
      { value: "2.5s", label: "Average Page Load Time" },
      { value: "95+", label: "Google PageSpeed Score" },
      { value: "40%", label: "Average Conversion Rate Lift" },
      { value: "100%", label: "Mobile Responsive" },
    ],
    faqs: [
      { q: "How long does it take to build a website?", a: "A standard 5–8 page business website takes 3–4 weeks. E-commerce stores typically take 4–6 weeks depending on the number of products and custom features required." },
      { q: "Do you redesign existing websites?", a: "Yes - full redesigns are one of our most common projects. We audit your current site, identify what's working and what isn't, and build a new version that performs significantly better." },
      { q: "What platform will my website be built on?", a: "We recommend the right platform for your needs. Most business sites are built on WordPress or React. E-commerce stores are typically on Shopify or WooCommerce." },
      { q: "Do you provide ongoing maintenance after launch?", a: "Yes. We offer monthly maintenance and support packages that cover updates, backups, security monitoring, and minor content changes." },
    ],
  },

  {
    slug: "meta-ads",
    icon: Target,
    title: "Meta Ads (Facebook & Instagram)",
    tagline: "Reach your ideal customers on Facebook and Instagram and turn clicks into conversions.",
    heroDesc: "Certified Meta Ads specialists who design, launch, and optimise high-performance campaigns across Facebook and Instagram - from first-touch awareness to final conversion.",
    heroImg: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1600",
    accent: "#4f46e5",
    overview: "Meta's advertising platform - Facebook and Instagram - offers unmatched audience targeting capabilities. FTZ Digital's certified paid social team builds full-funnel campaigns that find your ideal customers, serve them compelling creatives, and convert them into leads and sales - while maximising every rupee of your ad spend.",
    benefits: [
      "Laser-precise audience targeting using demographics, interests, and behaviours",
      "Compelling ad creatives - static, carousel, video, and reels formats",
      "Full-funnel campaigns from awareness to purchase",
      "Retargeting campaigns to re-engage warm audiences",
      "Weekly performance reports with transparent ROAS data",
    ],
    features: [
      { title: "Audience Research & Targeting", desc: "In-depth audience analysis to build precise targeting sets based on demographics, interests, behaviours, and custom data." },
      { title: "Creative Design & Copywriting", desc: "High-performing ad creatives - static images, carousels, video ads, and story formats - paired with persuasive copy." },
      { title: "Campaign & Funnel Setup", desc: "Full-funnel campaign architecture: awareness, consideration, and conversion campaigns working together seamlessly." },
      { title: "Retargeting & Lookalikes", desc: "Custom audience retargeting for website visitors and lookalike audiences to scale what's already working." },
      { title: "Pixel & Conversion Tracking", desc: "Meta Pixel setup, event tracking, and conversion API integration for accurate attribution and optimisation." },
      { title: "Weekly Optimisation & Reporting", desc: "Ongoing budget optimisation, creative refreshes, and weekly reports covering spend, ROAS, CPL, and key metrics." },
    ],
    process: [
      { num: "01", title: "Audit & Strategy", desc: "We audit your current ad account (or start fresh) and build a campaign strategy mapped to your business goals." },
      { num: "02", title: "Audience & Creative Build", desc: "We research your audiences, build targeting sets, and create ad creatives and copy for your approval." },
      { num: "03", title: "Campaign Launch", desc: "We set up tracking, configure campaigns, and launch - starting with a testing phase to identify top performers." },
      { num: "04", title: "Optimisation", desc: "Continuous A/B testing, budget reallocation, and creative iteration to improve performance week-over-week." },
      { num: "05", title: "Reporting & Scale", desc: "Weekly and monthly performance reports with recommendations on scaling winning campaigns profitably." },
    ],
    results: [
      { value: "3.5×", label: "Average ROAS Delivered" },
      { value: "40%", label: "Average CPL Reduction" },
      { value: "Weekly", label: "Performance Reports" },
      { value: "100%", label: "Certified Meta Team" },
    ],
    faqs: [
      { q: "How much ad budget do I need to start?", a: "We recommend a minimum of PKR 30,000/month in ad spend to see meaningful data and results. Our management fee is separate from your ad budget." },
      { q: "Do you create the ad creatives or do I need to provide them?", a: "We handle all creative design - images, carousels, and video ads. We may occasionally ask for product photos or brand assets, but we do all the creative production." },
      { q: "How quickly can I expect results from Meta Ads?", a: "Most campaigns enter a learning phase in the first 7–14 days. You'll typically start seeing consistent lead or sales results within 30 days of launch." },
      { q: "Can you take over and improve my existing campaigns?", a: "Yes - ad account takeovers are common. We audit your existing campaigns, identify what's underperforming and why, and rebuild with a stronger strategy." },
    ],
  },

  {
    slug: "google-ads",
    icon: BarChart2,
    title: "Google Ads (PPC)",
    tagline: "Get in front of people actively searching for your products or services.",
    heroDesc: "Certified Google Ads specialists managing Search, Display, Shopping, and YouTube campaigns that capture high-intent traffic and convert it into quality leads and sales.",
    heroImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    accent: "#059669",
    overview: "Google Ads puts your business in front of people who are actively searching for exactly what you offer. FTZ Digital's Google-certified team builds campaigns that capture that high-intent traffic and turn it into leads and revenue - with precise tracking and transparent reporting on every rupee spent.",
    benefits: [
      "Appear at the top of Google for your most valuable search terms",
      "Only pay when someone clicks - no wasted spend on impressions",
      "Precise keyword targeting with negative keyword management",
      "Full conversion tracking from click to lead or sale",
      "Scalable - increase budgets when results are strong",
    ],
    features: [
      { title: "Keyword Research & Strategy", desc: "In-depth keyword research to find the highest-intent, most cost-effective search terms for your business." },
      { title: "Search Campaign Setup", desc: "Tightly structured ad groups, compelling ad copy with extensions, and smart bidding strategies configured from day one." },
      { title: "Shopping & Smart Campaigns", desc: "Product listing ads and Smart campaigns for e-commerce - showcasing your products to buyers ready to purchase." },
      { title: "Display & Remarketing", desc: "Visual display ads and remarketing campaigns to stay top-of-mind with people who've already visited your site." },
      { title: "YouTube Advertising", desc: "Video ad campaigns on YouTube to build awareness, drive consideration, and complement your search campaigns." },
      { title: "Conversion Tracking & Reporting", desc: "Full Google Ads conversion tracking, call tracking, and monthly reports covering clicks, conversions, CPC, and ROAS." },
    ],
    process: [
      { num: "01", title: "Account Audit / Setup", desc: "We audit your existing Google Ads account or set up a new one with the right structure, tracking, and goals." },
      { num: "02", title: "Keyword & Competitor Research", desc: "We identify the best keywords for your business and analyse competitor ads to find gaps and opportunities." },
      { num: "03", title: "Campaign Build", desc: "We create tightly structured campaigns with compelling ad copy, ad extensions, and smart bidding configurations." },
      { num: "04", title: "Launch & Monitor", desc: "Campaigns go live with close daily monitoring during the first two weeks to catch any early performance issues." },
      { num: "05", title: "Optimise & Report", desc: "Ongoing bid adjustments, negative keyword additions, A/B testing, and monthly performance reports." },
    ],
    results: [
      { value: "4×", label: "Average ROAS on Search" },
      { value: "35%", label: "Average CPC Reduction vs DIY" },
      { value: "Google", label: "Certified Specialists" },
      { value: "Monthly", label: "Detailed Reports" },
    ],
    faqs: [
      { q: "What's the minimum budget for Google Ads?", a: "We recommend a minimum of PKR 25,000/month in ad spend. Our management fee is charged separately. A higher budget generally means faster data collection and better results." },
      { q: "What types of Google Ads campaigns do you run?", a: "We run Search, Display, Shopping (for e-commerce), YouTube, and Performance Max campaigns depending on your goals and industry." },
      { q: "How is Google Ads different from SEO?", a: "Google Ads gives you immediate visibility at the top of search results - you pay per click. SEO is a long-term organic strategy. They work best together, which is why many of our clients combine both services." },
      { q: "How do you prevent wasted ad spend?", a: "We use negative keyword lists, precise match types, audience exclusions, and regular search term reports to continuously filter out irrelevant clicks that won't convert." },
    ],
  },

  {
    slug: "seo",
    icon: Search,
    title: "Search Engine Optimisation",
    tagline: "Rank higher on Google, drive organic traffic, and grow without paying per click.",
    heroDesc: "Technical audits, on-page optimisation, local SEO, and link building - everything needed to climb Google's rankings and generate consistent organic traffic for your business.",
    heroImg: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=1600",
    accent: "#d97706",
    overview: "SEO is the most cost-effective long-term digital marketing investment you can make. FTZ Digital takes a comprehensive approach - fixing technical issues, optimising your content, building authoritative backlinks, and establishing strong local presence - to help your business rank where your customers are searching.",
    benefits: [
      "Sustainable organic traffic that grows over time without ad spend",
      "Higher Google rankings for keywords your customers actually search",
      "Improved website speed and technical health",
      "Stronger local presence on Google Maps and local search",
      "Monthly ranking reports with transparent progress tracking",
    ],
    features: [
      { title: "Technical SEO Audit", desc: "Comprehensive site crawl identifying technical issues - broken links, crawl errors, site speed problems, and indexing issues - all fixed." },
      { title: "On-Page Optimisation", desc: "Keyword-optimised title tags, meta descriptions, headers, content, and internal linking structure across every key page." },
      { title: "Local SEO & Google Business", desc: "Google Business Profile optimisation, local citation building, and local keyword targeting to dominate local search results." },
      { title: "Content Strategy & SEO Writing", desc: "Keyword research-led blog posts, landing pages, and website copy that rank and convert." },
      { title: "Link Building", desc: "White-hat backlink acquisition from authoritative, relevant websites to increase your domain authority." },
      { title: "Monthly Ranking Reports", desc: "Monthly tracking of keyword rankings, organic traffic, backlink growth, and Core Web Vitals performance." },
    ],
    process: [
      { num: "01", title: "SEO Audit", desc: "We run a full technical audit of your website and analyse your keyword rankings, backlink profile, and competitor landscape." },
      { num: "02", title: "Strategy & Roadmap", desc: "A prioritised SEO roadmap covering technical fixes, on-page optimisation, content, and link building - in the right order." },
      { num: "03", title: "Technical Fixes", desc: "We implement all critical technical SEO fixes - site speed, mobile usability, crawlability, and structured data." },
      { num: "04", title: "On-Page & Content", desc: "Page-by-page optimisation and new SEO content created to target your most valuable keywords." },
      { num: "05", title: "Link Building & Reporting", desc: "Ongoing link acquisition, monthly ranking reports, and strategy updates based on what the data shows." },
    ],
    results: [
      { value: "6mo", label: "Average to First-Page Rankings" },
      { value: "120%", label: "Average Organic Traffic Growth" },
      { value: "White-hat", label: "100% Safe Link Building" },
      { value: "Monthly", label: "Ranking Reports" },
    ],
    faqs: [
      { q: "How long does SEO take to work?", a: "SEO is a long-term strategy. You'll typically see technical improvements and some early ranking movement within 60–90 days. Significant organic traffic growth usually happens between months 4–8." },
      { q: "Do you guarantee first-page rankings?", a: "No ethical SEO agency can guarantee specific rankings - Google's algorithm is constantly evolving. We do guarantee a transparent, data-driven process and consistent month-on-month progress backed by clear reporting." },
      { q: "Is SEO still worth it in 2025?", a: "Absolutely. Organic search drives over 50% of all website traffic. SEO compounds over time - unlike paid ads, which stop the moment you stop paying. It's one of the highest-ROI digital marketing investments available." },
      { q: "Do you write the content or do I need to?", a: "We handle all content creation - blog posts, landing page copy, and website content - as part of our SEO retainer. Our writers are briefed by our SEO strategists to produce content that both ranks and converts." },
    ],
  },

  {
    slug: "graphic-design",
    icon: Palette,
    title: "Graphic Design",
    tagline: "Visual identity and creative assets that make your brand impossible to ignore.",
    heroDesc: "From logo design and brand identity to social media graphics, ad creatives, and print materials - our design team creates visuals that are beautiful, strategic, and built to perform.",
    heroImg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1600",
    accent: "#7c3aed",
    overview: "Great design isn't just about looking good - it's about communicating clearly, building trust, and standing out in a crowded market. FTZ Digital's design team creates everything from complete brand identities to individual social posts, with a strategic eye that ensures every visual serves your business goals.",
    benefits: [
      "Cohesive visual identity that builds brand recognition",
      "Professional designs that elevate your brand's credibility",
      "Versatile assets usable across digital and print",
      "Fast turnaround with unlimited revisions until you're happy",
      "Files delivered in all required formats (AI, EPS, PNG, PDF)",
    ],
    features: [
      { title: "Logo & Brand Identity", desc: "Comprehensive brand packages - logo, colour palette, typography, and brand guidelines that define your visual identity." },
      { title: "Social Media Graphics", desc: "Scroll-stopping feed posts, story templates, cover images, and highlight icons - consistently on-brand and platform-optimised." },
      { title: "Ad Creatives & Banners", desc: "High-performing static and animated ad creatives for Meta, Google Display, and programmatic advertising." },
      { title: "Presentations & Pitch Decks", desc: "Professional, on-brand presentations and pitch decks that communicate your value clearly and leave a lasting impression." },
      { title: "Print & Packaging Design", desc: "Business cards, flyers, brochures, banners, signage, and product packaging - print-ready files included." },
      { title: "Infographics & Data Visuals", desc: "Complex information made visually digestible - perfect for social media, reports, and marketing materials." },
    ],
    process: [
      { num: "01", title: "Brief & Discovery", desc: "We learn your brand, audience, competitors, and design objectives through a detailed creative brief." },
      { num: "02", title: "Concept Development", desc: "Our designers produce 2–3 distinct creative directions for your review, grounded in strategy - not guesswork." },
      { num: "03", title: "Design & Refinement", desc: "You select a direction and we refine the chosen concept through collaborative feedback rounds until it's perfect." },
      { num: "04", title: "Final Production", desc: "Final files prepared in all required formats and sizes - optimised for both digital and print use." },
      { num: "05", title: "Brand Guidelines", desc: "For brand identity projects, we deliver a full brand guidelines document for consistent use across all channels." },
    ],
    results: [
      { value: "48h", label: "First Concept Delivery" },
      { value: "∞", label: "Revision Rounds" },
      { value: "All", label: "File Formats Delivered" },
      { value: "100%", label: "Clients Satisfied" },
    ],
    faqs: [
      { q: "What's included in a brand identity package?", a: "Our standard brand identity package includes logo (primary + variations), colour palette, typography system, brand guidelines document, and social media profile assets. We can expand this to include stationery, packaging, and more." },
      { q: "How many revision rounds are included?", a: "We offer unlimited revisions until you're completely satisfied. We don't rush or limit feedback - we want the final design to be exactly right." },
      { q: "What file formats will I receive?", a: "You'll receive all working files (AI, PSD) plus export-ready files in PNG, JPEG, PDF, and SVG formats - ready for both digital and print use." },
      { q: "Do you design for both digital and print?", a: "Yes - all our designs are produced with both applications in mind. Print files are set up with correct bleed, resolution (300dpi), and CMYK colour for professional printing." },
    ],
  },

  {
    slug: "content-marketing",
    icon: Megaphone,
    title: "Content Marketing",
    tagline: "Attract, educate, and convert your audience with strategic content that works.",
    heroDesc: "Blog posts, articles, infographics, and content strategies that drive organic traffic, build authority, and nurture your audience through every stage of the buying journey.",
    heroImg: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1600",
    accent: "#0d9488",
    overview: "Content is the engine that powers every other digital marketing channel. FTZ Digital builds content strategies that attract the right audience, answer their questions, and guide them toward a purchase decision - while simultaneously improving your search engine rankings and building long-term brand authority.",
    benefits: [
      "SEO-driven content that ranks and drives consistent organic traffic",
      "Thought leadership content that builds trust and authority",
      "Nurtures leads through every stage of the buying journey",
      "Repurposable content that works across multiple channels",
      "Measurable results - organic traffic, leads, and content ROI",
    ],
    features: [
      { title: "Content Strategy & Planning", desc: "A comprehensive content strategy aligned with your business goals, audience, keyword opportunities, and campaign calendar." },
      { title: "SEO Blog Writing", desc: "Keyword-researched, expertly written blog articles and long-form content that rank on Google and genuinely help your audience." },
      { title: "Website Copywriting", desc: "Compelling, conversion-focused website copy - from homepage headlines to product descriptions - written to persuade and convert." },
      { title: "Infographic Design", desc: "Data, statistics, and complex concepts turned into shareable, visually engaging infographics." },
      { title: "Video Script Writing", desc: "Engaging scripts for explainer videos, product demos, social reels, and YouTube content." },
      { title: "Content Calendar Management", desc: "A structured, multi-channel content calendar planned 30 days ahead and managed end-to-end by our team." },
    ],
    process: [
      { num: "01", title: "Content Audit", desc: "We audit your existing content - what's working, what gaps exist, and what opportunities your competitors are exploiting." },
      { num: "02", title: "Strategy Development", desc: "A documented content strategy covering topics, formats, channels, posting frequency, and content goals." },
      { num: "03", title: "Content Production", desc: "Our writers, designers, and strategists produce content at scale - on brand, on strategy, and on schedule." },
      { num: "04", title: "Publish & Distribute", desc: "Content is published and distributed across your website, social media, email, and other channels for maximum reach." },
      { num: "05", title: "Measure & Iterate", desc: "Monthly analytics on organic traffic, content engagement, leads generated, and keyword rankings - with ongoing optimisation." },
    ],
    results: [
      { value: "3×", label: "Average Organic Traffic Growth" },
      { value: "8+", label: "Articles Published Per Month" },
      { value: "SEO-led", label: "Every Piece of Content" },
      { value: "Monthly", label: "Content Reports" },
    ],
    faqs: [
      { q: "Do you write content in English and Urdu?", a: "Yes - we have writers who produce content in both English and Urdu, depending on your target audience and brand voice requirements." },
      { q: "How do you make sure the content is accurate for my industry?", a: "We conduct thorough research for every piece of content and work closely with you to understand your industry, products, and customers. We also share all content for your review before publishing." },
      { q: "Is content marketing different from social media?", a: "Yes - content marketing typically focuses on longer-form assets like blog posts, guides, and videos designed to rank on search engines and educate audiences. Social media repurposes and distributes that content. They work best together." },
      { q: "How do you measure content marketing ROI?", a: "We track organic traffic growth, keyword rankings, time-on-page, leads generated from content, and conversion rates - all reported monthly so you can see the clear business impact." },
    ],
  },

  {
    slug: "email-marketing",
    icon: Mail,
    title: "Email Marketing",
    tagline: "Automated email flows that nurture leads, retain customers, and drive revenue.",
    heroDesc: "Smart email campaigns and automation sequences that keep your audience engaged, convert prospects into customers, and turn customers into loyal repeat buyers.",
    heroImg: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=1600",
    accent: "#0284c7",
    overview: "Email marketing consistently delivers the highest ROI of any digital marketing channel. FTZ Digital builds sophisticated email programmes - from welcome sequences and promotional campaigns to complex automated drip flows - that work around the clock to nurture your list and drive consistent revenue.",
    benefits: [
      "Average ROI of 36:1 - highest of any marketing channel",
      "Fully automated sequences that run 24/7 without manual effort",
      "Personalised emails based on subscriber behaviour and preferences",
      "List segmentation for highly targeted, relevant messaging",
      "Full analytics - open rates, click rates, revenue attribution",
    ],
    features: [
      { title: "Email Strategy & Planning", desc: "A comprehensive email marketing strategy covering list building, segmentation, automation flows, and campaign calendar." },
      { title: "Professional Template Design", desc: "Beautiful, on-brand email templates that render perfectly across all email clients and devices." },
      { title: "Automation & Sequences", desc: "Welcome sequences, nurture flows, abandoned cart emails, post-purchase sequences, and win-back campaigns." },
      { title: "List Segmentation", desc: "Smart audience segmentation based on purchase history, engagement, location, and behaviour for personalised messaging." },
      { title: "Campaign Management", desc: "Regular promotional campaigns, newsletters, and seasonal campaigns planned, written, designed, and sent." },
      { title: "Analytics & A/B Testing", desc: "Ongoing split testing of subject lines, content, and send times - plus monthly analytics on all key metrics." },
    ],
    process: [
      { num: "01", title: "Audit & Setup", desc: "We audit your existing email setup (or build from scratch) - platform, list health, deliverability, and automation structure." },
      { num: "02", title: "Strategy & Segmentation", desc: "We design your email marketing strategy and set up list segments based on customer data and behaviour." },
      { num: "03", title: "Template & Automation Build", desc: "On-brand email templates and automation flows are built and tested across all major email clients." },
      { num: "04", title: "Campaign Execution", desc: "Regular campaigns are planned, written, designed, and deployed - with A/B testing on key variables." },
      { num: "05", title: "Optimise & Report", desc: "Monthly reports on open rates, click rates, conversions, and revenue - with continuous list and content optimisation." },
    ],
    results: [
      { value: "36:1", label: "Average Email ROI" },
      { value: "45%", label: "Average Open Rate (vs 20% Industry avg)" },
      { value: "24/7", label: "Automated Sequences Running" },
      { value: "Monthly", label: "Campaign Reports" },
    ],
    faqs: [
      { q: "Which email marketing platforms do you work with?", a: "We work with Mailchimp, Klaviyo, ActiveCampaign, HubSpot, and MailerLite. We'll recommend the right platform based on your business size, needs, and budget." },
      { q: "Do I need a large email list to start?", a: "No - email marketing is effective even with a small, engaged list. We'll also help you build your list with lead magnets, opt-in forms, and list growth strategies." },
      { q: "What's the difference between campaigns and automation?", a: "Campaigns are one-time sends (newsletters, promotions). Automations are triggered sequences that run automatically based on subscriber actions - like a welcome email sent immediately after someone signs up." },
      { q: "How do you ensure emails don't land in spam?", a: "We set up proper domain authentication (SPF, DKIM, DMARC), maintain list hygiene, monitor sender reputation, and follow best practices for content and send frequency to ensure high deliverability." },
    ],
  },

  {
    slug: "video-production",
    icon: Video,
    title: "Video Production",
    tagline: "Professional video content that captures attention and drives action.",
    heroDesc: "From brand films and product demos to social media reels and ad creatives - we produce high-quality video content from concept to final delivery that makes your brand stand out.",
    heroImg: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1600",
    accent: "#dc2626",
    overview: "Video is the most powerful content format on the internet - it drives higher engagement, longer dwell time, and better conversion rates than any other media. FTZ Digital's production team handles everything from creative concept to final edit, delivering professional video content that elevates your brand and drives real business results.",
    benefits: [
      "Professional production quality without the enterprise price tag",
      "End-to-end service - concept, scripting, production, and editing",
      "Optimised for social media, ads, websites, and YouTube",
      "Fast turnaround with efficient revision workflow",
      "Content that generates significantly higher engagement than static posts",
    ],
    features: [
      { title: "Brand Films & Explainers", desc: "Professionally produced brand story videos and explainer content that communicate what you do and why customers should choose you." },
      { title: "Social Media Reels", desc: "Short-form vertical video content optimised for Instagram Reels, TikTok, and YouTube Shorts - built for maximum reach." },
      { title: "Product Demo Videos", desc: "Clear, compelling product demonstration videos that showcase features and benefits and help convert purchase decisions." },
      { title: "Ad Creative Production", desc: "Video ad creatives for Meta and Google - designed for specific campaign objectives with strong hooks and clear CTAs." },
      { title: "Testimonial & Case Study Videos", desc: "Customer testimonial videos that build social proof and trust - one of the highest-converting content types available." },
      { title: "Motion Graphics & Animation", desc: "Animated explainers, logo animations, lower thirds, and motion graphic sequences for a polished, professional look." },
    ],
    process: [
      { num: "01", title: "Creative Brief", desc: "We understand your objectives, audience, brand, and the platforms the video will be used on before starting." },
      { num: "02", title: "Script & Storyboard", desc: "Script writing and storyboard creation for your approval - so the vision is aligned before any filming begins." },
      { num: "03", title: "Production", desc: "Professional filming with proper lighting, sound, and direction - or animation production if required." },
      { num: "04", title: "Post-Production", desc: "Professional editing, colour grading, sound design, music, graphics, and subtitles." },
      { num: "05", title: "Delivery & Optimisation", desc: "Final files delivered in all required formats and sizes - optimised for each platform where the video will be used." },
    ],
    results: [
      { value: "80%", label: "Higher Engagement vs Static Posts" },
      { value: "2×", label: "Average Ad CTR with Video vs Image" },
      { value: "4K", label: "Maximum Production Quality" },
      { value: "All", label: "Formats & Platforms Covered" },
    ],
    faqs: [
      { q: "Do you handle filming or just editing?", a: "We offer both. Our Islamabad-based production team handles end-to-end filming and editing. For clients outside Islamabad, we can work with your footage or use a hybrid remote/local production approach." },
      { q: "How long does video production take?", a: "A standard social media reel takes 3–5 days. A full brand film typically takes 2–3 weeks from brief to final delivery, including one round of filming and two rounds of editing revisions." },
      { q: "What video formats do you deliver?", a: "We deliver in all required formats - 16:9 for YouTube and websites, 9:16 for Reels/Stories/TikTok, and 1:1 for feed posts. All files are exported in the optimal format and resolution for each platform." },
      { q: "Can you add subtitles and captions?", a: "Yes - all social media videos include accurate subtitles as standard, since over 85% of social media videos are watched without sound." },
    ],
  },

  {
    slug: "brand-strategy",
    icon: TrendingUp,
    title: "Brand Strategy & Consulting",
    tagline: "A clear brand strategy is the foundation every great digital marketing effort is built on.",
    heroDesc: "Market positioning, competitor analysis, digital growth roadmaps, and KPI frameworks - strategic consulting that gives your brand a clear direction and competitive edge.",
    heroImg: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600",
    accent: "#475569",
    overview: "Before any campaign runs or content is created, a strong brand strategy defines who you are, who you serve, and how you stand out. FTZ Digital's strategy team works with you to build the strategic foundation - positioning, messaging, channel mix, and growth roadmap - that makes every marketing activity more effective and more efficient.",
    benefits: [
      "Clear brand positioning that differentiates you from competitors",
      "Defined target audience with deep psychographic understanding",
      "Channel strategy so budget is spent where it matters most",
      "Measurable KPIs and OKRs tied to real business outcomes",
      "A strategic roadmap your entire team can align and execute on",
    ],
    features: [
      { title: "Brand Positioning", desc: "Defining your unique value proposition, market position, and the messaging that resonates with your target audience." },
      { title: "Competitor Analysis", desc: "In-depth analysis of your top competitors' digital presence, messaging, ad strategy, content, and positioning gaps." },
      { title: "Audience Research & Personas", desc: "Detailed buyer personas built from data - demographics, psychographics, pain points, motivations, and purchase behaviours." },
      { title: "Digital Growth Roadmap", desc: "A 6–12 month prioritised roadmap of marketing activities, budget allocation, and milestones tied to your business goals." },
      { title: "Channel Mix Planning", desc: "Identifying the right marketing channels for your business and budget - and how they should work together." },
      { title: "KPI & OKR Frameworks", desc: "Setting the right metrics and key results so every marketing activity has a clear, measurable purpose." },
    ],
    process: [
      { num: "01", title: "Discovery Workshop", desc: "An in-depth workshop with your team to understand your business, goals, current challenges, and market context." },
      { num: "02", title: "Research Phase", desc: "Market research, competitor analysis, audience research, and a full audit of your current digital presence." },
      { num: "03", title: "Strategy Development", desc: "We synthesise research into a clear brand strategy - positioning, messaging, channel mix, and growth roadmap." },
      { num: "04", title: "Presentation & Alignment", desc: "We present the strategy to your team, gather feedback, and refine until everyone is fully aligned." },
      { num: "05", title: "Implementation Support", desc: "Ongoing consulting support as you execute the strategy - adjusting based on market feedback and performance data." },
    ],
    results: [
      { value: "Clarity", label: "On Brand Positioning" },
      { value: "6–12mo", label: "Growth Roadmap Horizon" },
      { value: "Data-led", label: "Every Decision" },
      { value: "Full", label: "Team Alignment" },
    ],
    faqs: [
      { q: "Do I need brand strategy consulting if I'm already running ads?", a: "Especially then. Without a clear strategy, ad campaigns often target the wrong audiences with the wrong message. A strong brand strategy typically makes all your existing marketing activities more efficient and effective." },
      { q: "What's the difference between brand strategy and marketing strategy?", a: "Brand strategy defines who you are - your positioning, values, voice, and what makes you unique. Marketing strategy defines how you reach your audience and communicate that brand. Both are essential and should be aligned." },
      { q: "How long does a brand strategy project take?", a: "A full brand strategy engagement typically takes 3–4 weeks from initial discovery workshop to final delivery. We can work faster for specific components like positioning or channel planning." },
      { q: "Do you help with implementation after delivering the strategy?", a: "Yes - we offer ongoing strategy consulting retainers where we work with your team or our execution teams to implement the strategy, track progress, and adjust based on results." },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return allServices.find((s) => s.slug === slug);
}


export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  tagline: string;
  heroImg: string;
  cardImg: string;
  services: string[];
  challenge: string;
  approach: string[];
  results: string;
  metrics: CaseStudyMetric[];
  testimonial?: { quote: string; author: string; role: string };
  url: string;
  color: string;
}

export const allCaseStudies: CaseStudy[] = [
  {
    slug: "nabhias-salon",
    client: "Nabhia's Salon",
    industry: "Beauty & Bridal Makeup",
    tagline: "Growing a Premium Bridal & Beauty Salon into a Trusted Digital Brand",
    heroImg: "/nabihasalooncasestudy.jpg",
    cardImg: "/nabihasalooncasestudy.jpg",
    services: ["Social Media Management", "Video Production", "Photography", "TikTok Strategy", "Facebook Marketing"],
    challenge:
      "Nabhia's Salon is a professional beauty destination specializing in Makeup, Hair, and Nails - with a strong focus on bridal makeup artistry. In the beauty industry, trust is everything - and trust online is built through consistency, quality content, and showing up where your audience is looking. Nabhia's Salon had the talent and the results, but a scattered or underperforming digital presence means potential clients are choosing someone else simply because that someone else looked more credible on a screen. The beauty market in Pakistan is saturated. Every salon has a page. Every artist posts content. But most of it looks the same. Standing out requires more than just posting regularly. It requires a clear brand voice, platform-specific strategy, and content quality that makes a viewer pause.",
    approach: [
      "Managed full social media presence across Instagram, TikTok, and Facebook - strategy, content planning, captions, posting, and growth on all three platforms. Instagram stands at 13,900+ followers with 1,218 posts. Each platform is handled with its own distinct content approach.",
      "Instagram became the portfolio - curated, consistent, and visually premium. Every post contributes to an overall grid that communicates one thing clearly: this is a salon that takes its craft seriously. The feed becomes the first consultation before a single message is sent.",
      "TikTok is where the reach happens. Raw, engaging, fast-moving content that introduces Nabhia's to thousands of new eyes every single week. A single well-executed TikTok can introduce the brand to more people in 48 hours than a month of static posts.",
      "Produced reels, TikToks, and short-form video content that go beyond just showing the final look - they show the process, the precision, and the personality behind the brand. Video content builds the emotional connection that turns a viewer into a booking.",
      "Handled all professional shoots for Nabhia's Salon - photography and videography sessions designed specifically for social media performance and long-term portfolio building. Every shoot is planned with a content calendar in mind.",
    ],
    results:
      "A bride-to-be is sitting on her couch two months before her wedding, phone in hand, TikTok open. A bridal transformation reel stops her mid-scroll. She watches it twice. She visits the profile, follows, then heads to Instagram to browse the full portfolio. She spends ten minutes going through posts, saving looks she loves. Then she opens Facebook to check reviews. By the time she hits the message button, she has already made up her mind. That entire journey - from a TikTok discovery to a confirmed booking - is the journey we built.",
    metrics: [
      { value: "13,900+", label: "Instagram Followers" },
      { value: "1,218", label: "Posts Created" },
      { value: "3", label: "Platforms Managed" },
      { value: "500+", label: "Reels & Videos Produced" },
    ],
    testimonial: {
      quote: "FTZ Digital transformed how we show up online. The content quality and strategy brought us clients we never would have reached before.",
      author: "Nabhia's Salon Team",
      role: "Beauty & Bridal Makeup Specialists",
    },
    url: "https://www.instagram.com/nabhiassalon/",
    color: "#db2777",
  },
  {
    slug: "chaye-khana-park-road",
    client: "Chaayé Khana Park Road",
    industry: "Restaurant & Café",
    tagline: "Putting Islamabad's Most Scenic Café on the Digital Map",
    heroImg: "/graphicsdesign/chaayekhana client standyy design.webp",
    cardImg: "/graphicsdesign/chaayekhana client standyy design.webp",
    services: ["Social Media Management", "Video Production", "Photography", "Local SEO", "Google My Business"],
    challenge:
      "Chaayé Khana Park Road is not your average café. Nestled in Gardenia Hub near the CDA Plant Nursery on Park Road, Islamabad, it is built around a simple but powerful idea - more than a café, a retreat in the middle of nature. With lush surroundings, a calming atmosphere, and a menu that brings people together, Chaayé Khana had something genuinely special to offer. A beautiful space hidden from the internet is a missed opportunity every single day. People searching for cafés in Islamabad, places to unwind on Park Road, or a peaceful spot for chai weren't finding it.",
    approach: [
      "Took over the Instagram presence and built it with intention. Every post was crafted to make someone feel like they needed to be there. The content tells a consistent story: greenery, warmth, good chai, and a pace of life that Park Road was made for.",
      "Handled all photography and videography for the café - shoots designed specifically for social media performance. Captured the feeling of being there: the steam rising off a cup of chai, the natural light through the trees, the kind of quiet that's hard to find in a city.",
      "Set up and fully optimized Google My Business profile - categories, description, photos, location accuracy, service details, and consistent updates. When someone in Islamabad opens Google Maps and types 'café near Park Road' or 'peaceful restaurant Islamabad' - Chaayé Khana shows up.",
      "Produced video content that resonated deeply with the audience. One video alone crossed 100,000 views - reaching thousands of potential new customers and creating a moment of genuine virality.",
    ],
    results:
      "Someone in Islamabad is looking for a place to catch up with an old friend - somewhere calm, different from the usual spots. They open Google, type in something like 'nice café Park Road Islamabad' and Chaayé Khana appears - strong reviews, great photos, the right vibe. They tap through, see the Instagram, watch the video, and the decision is made. That is the journey we built. From search to scroll to visit.",
    metrics: [
      { value: "2,966", label: "Instagram Followers" },
      { value: "171", label: "Posts Created" },
      { value: "20,000+", label: "GMB Impressions/Month" },
      { value: "100K+", label: "Views on Single Video" },
    ],
    testimonial: {
      quote: "FTZ Digital understood our vision - not just a café, but a retreat. Their content captures the soul of what we've built here.",
      author: "Chaayé Khana Management",
      role: "Restaurant & Café, Park Road Islamabad",
    },
    url: "https://www.instagram.com/chaayekhaanaparkroad/",
    color: "#92400e",
  },
  {
    slug: "dr-asma-javed",
    client: "Dr. Asma Javed - Skin Rejuv",
    industry: "Healthcare & Dermatology",
    tagline: "Building a Complete Digital Presence for a Leading Dermatologist in Pakistan",
    heroImg: "/drasmawebsite.webp",
    cardImg: "/drasmawebsite.webp",
    services: ["Web Design & Development", "SEO", "Social Media Management", "Paid Advertising", "Video Production"],
    challenge:
      "Dr. Asma Javed is one of Pakistan's most credentialed dermatologists - a certified member of the American Academy of Aesthetic Medicine (AAAM, USA), Associate Professor at Fauji Foundation Hospital, Master Trainer in Botox, Fillers & PAD, and the founder of Skin Rejuv clinic. Despite being highly respected in her field, Dr. Asma's online presence didn't reflect the level of trust and professionalism her work deserved. There was no central platform where potential patients could learn about her, explore her treatments, and reach out directly. Without that, she was losing patients to competitors who simply showed up first online - and looked the part.",
    approach: [
      "Built drasmajaved.com - a modern, multi-page website using React JS and Tailwind CSS. Every design decision was made with one question in mind: would a first-time patient trust this? The site is fast, mobile-friendly, and visually refined - warm enough to feel approachable, professional enough to feel credible.",
      "Structured the website with SEO best practices from the ground up - the right page architecture, metadata, treatment-focused content, and local search signals - so that Dr. Asma's clinic appears when patients are actively searching for dermatology and aesthetic treatments.",
      "Managed Instagram presence to grow the account to 20,600+ followers with 392 posts. The content strategy is built around education, trust, and relatability: showing who Dr. Asma is as a doctor, not just what services she offers.",
      "Handled all visual production for the clinic - professional photo shoots and video content created specifically for social media. The content captures the clean, premium feel of Skin Rejuv while keeping Dr. Asma's personality at the center.",
      "Ran targeted paid ad campaigns to amplify reach and drive consistent appointment bookings. Every rupee of ad spend is tracked and optimized to bring in the right patients.",
    ],
    results:
      "A patient in Rawalpindi searches 'best dermatologist for laser treatment near me.' Dr. Asma's website appears. They land on a clean, trustworthy page that clearly explains the treatment, shows her credentials, and makes it easy to fill out a form. They submit their details. The clinic follows up. An appointment is booked. That cycle happens every single day - because the system we built makes it happen.",
    metrics: [
      { value: "2,000+", label: "Organic Leads via Website" },
      { value: "20,600+", label: "Instagram Followers" },
      { value: "392+", label: "Social Media Posts" },
      { value: "Live", label: "Multi-page React Website" },
    ],
    testimonial: {
      quote: "FTZ Digital transformed my entire digital presence. The website generates consistent patient leads every day, and my social media truly reflects who I am as a doctor.",
      author: "Dr. Asma Javed",
      role: "Dermatologist & Founder, Skin Rejuv Clinic",
    },
    url: "https://drasmajaved.com/",
    color: "#ec4899",
  },
  {
    slug: "elysium-dental-aesthetics",
    client: "Elysium Dental & Aesthetics Clinic",
    industry: "Healthcare & Dental",
    tagline: "Redesigning a Clinic's Digital Identity from the Ground Up",
    heroImg: "/edac web.webp",
    cardImg: "/edac web.webp",
    services: ["Website Redesign", "Social Media Management", "Meta Ads", "Content Strategy", "Brand Positioning"],
    challenge:
      "Elysium Dental & Aesthetics Clinic is a premium skin and smile care destination led by Dr. Fatima Malik, a specialist in skin and aesthetics. The clinic offers a rare combination under one roof: expert dental care and advanced aesthetic treatments, making it a genuinely unique proposition in its market. Dr. Fatima had built something worth being proud of. A skilled practice, a caring approach, and results that her patients trusted completely. What the clinic's digital presence needed was to reflect all of that clearly, beautifully, and convincingly to someone who had never walked through the door. Healthcare is one of the most trust-sensitive industries online. A potential patient landing on a clinic's website or Instagram page is not just browsing, they are making a judgment call about whether they trust this doctor with their face, their teeth, their confidence. That judgment happens fast. And it is made almost entirely on the quality of what they see. The old website wasn't doing that. The social media wasn't doing that. And without Meta ads pushing the right message to the right people, new patient acquisition was left entirely to chance.",
    approach: [
      "Rebuilt the website completely from the ground up, designed around the clinic's branding, visual identity, and the premium positioning Dr. Fatima's practice deserved. Clean layouts. Considered typography. A colour palette and visual language that felt clinical without feeling cold, professional without feeling distant. Every page was designed with the patient journey in mind.",
      "Managed Instagram presence end to end: strategy, content planning, shooting, editing, captions, and posting. The account now stands at 2,407 followers with 355 posts. Every piece of content is built around earning trust rather than just filling a grid. Before and afters that show real results. Treatment explainers that remove the fear of the unknown. Glimpses of the clinic environment that make a nervous first-time patient feel like they already know the place.",
      "Ran Meta advertising campaigns across Facebook and Instagram, targeting the right audience in the right area with the right message at the right moment. Every campaign is built around a specific objective: not just reach, not just impressions, but actual patient inquiries and appointment bookings. Ad creatives are designed to stop the scroll. Copy is written to speak directly to the concerns and desires of someone considering a skin or dental treatment.",
      "Developed a trust-led, education-focused content strategy that builds genuine credibility. In aesthetics and dental, the content that works is never the content that shouts. It is the content that educates, reassures, and quietly demonstrates expertise.",
      "Established Elysium as the go-to name for skin and smile care in its area through cohesive premium branding across all digital touchpoints.",
    ],
    results:
      "Someone scrolling Facebook sees an Elysium ad for a skin treatment they have been quietly considering for months. The creative catches their eye. The copy speaks directly to what they have been thinking. They tap through to the website and what they find there does not disappoint. It feels premium. It feels trustworthy. They read about Dr. Fatima, browse the treatments, and fill out the contact form. That journey from a paid ad to a website visit to a patient inquiry is not accidental. It is a system we designed, tested, and continue to optimise every single week. Dr. Fatima Malik built Elysium into a clinic that genuinely delivers for its patients. The results, the care, the expertise, all of it was already there. What was missing was a digital presence that could communicate all of that to someone who had never met her. We rebuilt that presence from the ground up. The website. The social media. The ads. Every touchpoint working together to tell the same story that Elysium is the clinic worth choosing. And new patients are choosing it every day.",
    metrics: [
      { value: "2,407", label: "Instagram Followers" },
      { value: "355", label: "Posts Created" },
      { value: "Completed", label: "Website Redesign" },
      { value: "Active", label: "Meta Ad Campaigns" },
    ],
    testimonial: {
      quote: "FTZ Digital gave us the digital presence our clinic deserved. The website and social media now truly reflect the quality of care we provide.",
      author: "Dr. Fatima Malik",
      role: "Specialist in Skin & Aesthetics, Elysium Clinic",
    },
    url: "https://www.instagram.com/elysiumdentalclinic/",
    color: "#0891b2",
  },
  {
    slug: "atlas-dental",
    client: "Atlas Dental",
    industry: "Healthcare / Multi-specialty Dental Clinic",
    tagline: "Rebuilding a Dental Clinic's Website Into a Clean, Conversion-Ready Digital Front Door",
    heroImg: "/project-atlasdental.png",
    cardImg: "/project-atlasdental.png",
    services: ["UX/UI Redesign", "CRO Optimization", "Web Design", "Information Architecture", "Visual Identity", "React JS Development", "Tailwind CSS"],
    challenge:
      "Atlas Dental is a multi-specialty dental centre in Bahria Town Phase 7, Rawalpindi, offering periapical diagnostics, restorative dentistry, orthodontics, oral surgery, and cosmetic treatments under one roof. Led by Founder and CEO Dr. Maaz Rasul Qureshi alongside a team of specialist dentists, the clinic has served the Twin Cities community for over a decade. Despite a strong clinical reputation and a multidisciplinary team, the clinic's website was not doing the same job its physical practice was: it looked dated, gave patients little reason to trust the team behind the treatments, and made the simple act of booking an appointment harder than it needed to be. The core problems with the previous site were: A dull, dated visual style with no distinct brand identity. Weak information architecture, making it hard for prospective patients to find services, credentials, or the clinic's physical location. No clear or consistent path to booking. Little to no trust-building content: no specialist bios, no visible certifications, no patient education, and no real photos of the clinic space. A layout not optimized for how patients actually research and choose a dental provider. The old WordPress site was slow, difficult to maintain, and impossible to customize without technical overhead.",
    approach: [
      "Reviewed the legacy WordPress site's structure, content, and user flow to identify where prospective patients were dropping off before ever reaching a booking action.",
      "Completely rebuilt the website from WordPress to modern React JS and Tailwind CSS stack - delivering a fast, lightweight, and fully customizable foundation that loads in under 2 seconds.",
      "Rebuilt the navigation around patient intent - Home, About, Services, Blog, Team, Clinic, Contact - so every path leads logically toward an appointment.",
      "Introduced a confident navy-and-white palette, a refreshed logo mark, and consistent card-based components using Tailwind CSS utility classes for a cohesive design system.",
      "Added specialist credentials, a CEO spotlight, patient-guide articles, and a real clinic photo gallery to replace generic stock impressions with authentic proof.",
      "Placed multiple low-friction contact paths - sticky booking button, floating WhatsApp/call icons, and a general query form - at every stage of the journey using React component architecture.",
      "Tested layouts across devices and pages, then handed over a fully responsive, production-ready React application deployed on modern hosting infrastructure.",
    ],
    results:
      "The rebuilt site is built to move a first-time visitor from 'just browsing' to 'booked' with far less friction than before. It puts a booking action within reach on every single page and section. Surfaces credibility signals - specialist credentials, patient reviews, and a real photo gallery - earlier in the journey. Gives the clinic a content engine (the patient-guide blog) to build organic search traffic over time. Presents 16 services in a format patients can scan and compare in seconds rather than reading a wall of text. Is fully responsive and consistent across devices, closing the gap for the majority of patients researching on mobile. The homepage opens with a confident hero section, an immediate 'Book an Appointment' and 'Call Now' pairing, and a patient-reviews carousel above the fold to build trust before a visitor scrolls.",
    metrics: [
      { value: "16", label: "Services Redesigned" },
      { value: "6", label: "Pages Rebuilt" },
      { value: "Multi-Channel", label: "Booking Paths" },
      { value: "Live", label: "Responsive Website" },
    ],
    testimonial: {
      quote: "FTZ Digital transformed our website into a true reflection of the quality care we provide. The new design makes it so easy for patients to find what they need and book appointments.",
      author: "Dr. Maaz Rasul Qureshi",
      role: "Founder & CEO, Atlas Dental",
    },
    url: "https://www.atlasdental.pk/",
    color: "#1e3a8a",
  },
  {
    slug: "le-macon",
    client: "Le Macon",
    industry: "Architecture, Interior Design & 3D Visualization",
    tagline: "From Zero Digital Presence to a Full-Funnel Brand",
    heroImg: "/casestudiesimages/lemacon casestudy banner.webp",
    cardImg: "/casestudiesimages/lemacon casestudy banner.webp",
    services: ["Social Media Management", "Website Design & Development", "SEO", "Google Business Profile", "Photography & Videography", "Meta Ads"],
    challenge:
      "Le Macon is an international award-winning architecture, interior design, and visualization firm based in Bahria Town Phase 7, Islamabad. V-One won the International Property Award 2023-24 for Excellence in Mixed-Use Architecture. V-8 was named Best Retail Development in Pakistan. Le Macon was also recognized in the Low-Cost Housing Competition at Bahria Town Karachi. This is a firm that competes and wins on an international stage. And yet, when this engagement began, none of that was visible anywhere online. Le Macon had zero social media presence, no website, no visibility on Google, no Google Business Profile, no photography system, and no paid advertising infrastructure. An architecture firm capable of winning international property awards had, for all practical purposes, no way for a new client to discover it existed.",
    approach: [
      "Set up Instagram and Facebook from scratch. Built a content system around Le Macon's active project pipeline: renders during design, site visits during construction, and polished reveals once finished. The account never runs out of content because it's built around what the firm already does.",
      "Designed and built lemaconarc.com from the ground up as a portfolio-first site with clear service pages for Architecture, Interior Design, and 3D Visualization, dedicated project pages for flagship work like V-One and V-8, and a straightforward consultation path.",
      "Built on-page and technical SEO from scratch: keyword-mapped service pages targeting how people search for architecture and interior design firms in Islamabad and Rawalpindi, clean metadata, logical site structure, and technical fundamentals for optimal search positioning.",
      "Created Le Macon's Google Business Profile from nothing with the right categories, service areas, business description, photos, and regular Google Posts. This opened up the local map pack for location-based searches.",
      "Put a photography and videography system in place to document completed projects: high-resolution stills and walkthroughs for website project galleries, and short-form video edited for Instagram and Facebook performance.",
      "Introduced Meta ad campaigns across Facebook and Instagram once the organic foundation was live. Goal was to extend reach by putting Le Macon's best content in front of audiences beyond existing followers and directing traffic toward consultation inquiries.",
    ],
    results:
      "Starting from zero, Le Macon now has a digital presence that mirrors the quality of its physical work. A prospective client searching for an architecture firm in Islamabad can now find Le Macon on Google, see its award-winning projects on a professional website, follow real project updates on Instagram, check its Google Business Profile, and encounter its work again through a retargeting ad. All telling the same consistent story, built on a foundation that didn't exist before. The content system feeding social media is the same system feeding the website's project pages. The SEO strategy was built into the site's structure. The Google Business Profile uses the same messaging as the website and social accounts, so a prospective client sees one consistent brand no matter which door they walk through first.",
    metrics: [
      { value: "9,400+", label: "Instagram Followers Built" },
      { value: "600+", label: "Organic Posts Published" },
      { value: "Live", label: "WordPress Website Built" },
      { value: "Active", label: "Google Business Profile" },
    ],
    testimonial: {
      quote: "FTZ Digital built our entire digital presence from the ground up. From zero followers to a thriving social media presence, a professional website, and Google visibility, they created a system that actually works together.",
      author: "Le Macon Team",
      role: "Architecture & Interior Design Firm",
    },
    url: "https://lemaconarc.com/",
    color: "#0f172a",
  },
  {
    slug: "health-point-pakistan",
    client: "Health Point Pakistan",
    industry: "Healthcare, Skincare & Wellness",
    tagline: "Shopify eCommerce Website Built for Growth",
    heroImg: "/casestudiesimages/healthpointpakistanmainbanner.webp",
    cardImg: "/casestudiesimages/healthpointpakistanmainbanner.webp",
    services: ["Shopify Development", "eCommerce Design", "UX/UI Design", "Conversion Optimization", "SEO Foundation"],
    challenge:
      "Health Point Pakistan is a leading online healthcare and wellness retailer offering premium skincare products, nutritional supplements, vitamins, fertility support solutions, and personal care essentials. As the brand expanded its product portfolio and customer base, it required a modern eCommerce platform that could deliver a seamless shopping experience while supporting long-term business growth. The key challenges included managing a large and expanding product catalog, creating an organized shopping experience across multiple healthcare categories, building trust with first-time customers purchasing healthcare products online, optimizing the website for mobile shoppers, simplifying the customer journey from product discovery to checkout, and creating a platform ready for SEO, digital marketing, and future expansion.",
    approach: [
      "Built a fully customized Shopify website tailored specifically to Health Point Pakistan's business requirements. The store combines modern design with high usability, allowing customers to browse, compare, and purchase products effortlessly.",
      "Created a clear category structure to improve navigation and product discovery with collections including Skincare, Supplements, Women's Health, Fertility Support, Vitamins, Bones & Joints, Wellness, Bundles, Best Sellers, and Featured Products.",
      "Strategically designed the homepage to engage visitors immediately with Hero Banner, Featured Categories, Best Selling Products, New Arrivals, Bundle Offers, Promotional Sections, Customer Testimonials, Trust Badges, Brand Story, and Newsletter Subscription.",
      "Designed product pages to help customers make informed purchasing decisions with professional product presentation, high-quality imagery, descriptions, ingredient information, pricing, customer reviews, and related products.",
      "Optimized every page for mobile shoppers with responsive layouts, touch-friendly navigation, faster mobile browsing, smooth checkout experience, and mobile-first user interface.",
      "Implemented conversion optimization features including Featured Products, Best Sellers, Bundle Promotions, Limited-Time Offers, Trust Badges, Customer Reviews, Clear Call-to-Action Buttons, Cross-selling and Upselling Sections.",
      "Developed the Shopify website with search engine visibility in mind through SEO-friendly URLs, optimized collection hierarchy, search-friendly page structure, meta support, optimized heading structure, image optimization, and crawl-friendly architecture.",
    ],
    results:
      "The newly developed Shopify website significantly improved the overall shopping experience while providing Health Point Pakistan with a scalable digital commerce platform. Key achievements include improved website usability across all devices, enhanced customer trust through professional design and trust elements, simplified product discovery with organized collections, increased opportunities for cross-selling and upselling, better support for digital marketing campaigns, improved conversion-focused customer journey, optimized mobile shopping experience, and created a scalable platform capable of supporting future growth. The website has improved customer shopping experience while giving the team a much easier platform to manage products and promotions.",
    metrics: [
      { value: "183%", label: "Conversion Rate Increase" },
      { value: "179%", label: "Monthly Orders Growth" },
      { value: "222%", label: "Mobile Conversion Boost" },
      { value: "30%", label: "Average Order Value Up" },
    ],
    testimonial: {
      quote: "Working with FTZ Digital was a great experience. They understood our business goals and delivered a Shopify store that is modern, user-friendly, and built for growth. The website has improved our customers' shopping experience.",
      author: "Health Point Pakistan Team",
      role: "Healthcare & Wellness eCommerce",
    },
    url: "https://healthpointpakistan.com/",
    color: "#059669",
  },
];

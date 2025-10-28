import { industries, slugify } from "@/lib/industries";

export type UseCaseContent = {
  hero: {
    titleA: string;
    titleB: string;
    description: string;
  };
  benefits: {
    title: string;
    content: Array<{
      title: string;
      description: string;
      icon: string; // lucide icon name; components resolve icons
      gradient: string;
    }>;
  };
  how: {
    title: string;
    description: string;
    badges: Array<{ icon: string; label: string }>;
    image: string;
  };
  features: Array<{
    title: string;
    description: string;
    icon: string;
    gradient: string;
    image: string;
    reverse?: boolean;
  }>;
};

const data: Record<string, UseCaseContent> = {
  "healthcare-and-clinics": {
    hero: {
      titleA: "AI-Powered Healthtech Conversations:",
      titleB: "Put Patients First",
      description:
        "Transform your healthcare contact center into a hub of empathy, speed, and compliance. Deliver seamless experiences for patients and their families while driving higher appointment bookings and satisfaction.",
    },
    benefits: {
      title: "Why Choose AIplacers for HealthTech?",
      content: [
        {
          title: "Seamless AI Integration",
          description: "Works with your existing systems and workflows.",
          icon: "Zap",
          gradient: "from-blue-500 to-cyan-500",
        },
        {
          title: "Actionable Analytics",
          description: "Turn conversation data into clear strategies.",
          icon: "BarChart3",
          gradient: "from-green-500 to-emerald-500",
        },
        {
          title: "Scalable & Reliable",
          description: "Designed for growing organizations.",
          icon: "TrendingUp",
          gradient: "from-purple-500 to-pink-500",
        },
        {
          title: "Customer-Centered Design",
          description: "Every feature improves the end-user journey.",
          icon: "Heart",
          gradient: "from-orange-500 to-red-500",
        },
      ],
    },
    how: {
      title: "How AIPlacers Helps HealthTech Contact Centers",
      description:
        "AIPlacers transforms communication by combining advanced AI with a human-first approach. From streamlining interactions to ensuring regulatory compliance, our platform empowers contact centers to deliver service with precision, empathy, and speed.",
      badges: [
        { icon: "Shield", label: "Compliance Ready" },
        { icon: "Lock", label: "End-to-End Encryption" },
      ],
      image:
        "/use-cases/healthcareAndClinics/How AIPlacers Helps HealthTech Contact Centers.png",
    },
    features: [
      {
        title: "AI-Powered Patient Conversations",
        description:
          "Engage patients like never before. AIplacers analyzes every call or chat in real time, giving your agents intelligent suggestions, quick answers, and instant alerts. This means shorter wait times, fewer escalations, and a compassionate experience that builds long-term trust.",
        icon: "MessageSquare",
        gradient: "from-blue-500 to-cyan-500",
        image:
          "/use-cases/healthcareAndClinics/AI-Powered Patient Conversations.png",
      },
      {
        title: "Faster Resolutions, Happier Patients",
        description:
          "No one likes waiting when it comes to healthcare. Our AI-driven routing and real-time guidance help your team resolve issues on the first call—whether it's booking appointments, clarifying test results, or handling urgent concerns. The result: improved satisfaction scores and loyal patients.",
        icon: "Clock",
        gradient: "from-green-500 to-emerald-500",
        image:
          "/use-cases/healthcareAndClinics/Faster Resolutions, Happier Patients.png",
        reverse: true,
      },
      {
        title: "Compliance You Can Count On",
        description:
          "Healthcare data is sensitive, and we treat it that way. AIplacers automatically redacts private information, tracks every conversation for HIPAA and healthcare compliance, and provides complete audit-ready records—so you can focus on care, not risk.",
        icon: "Shield",
        gradient: "from-purple-500 to-pink-500",
        image:
          "/use-cases/healthcareAndClinics/Compliance You Can Count On.png",
      },
      {
        title: "Proactive Patient Support & Insights",
        description:
          "Stay one step ahead. AIplacers detects sentiment shifts, highlights potential issues before they become complaints, and uncovers trends to guide strategic decisions. Turn challenges into opportunities to improve care and build stronger patient relationships.",
        icon: "Eye",
        gradient: "from-orange-500 to-red-500",
        image:
          "/use-cases/healthcareAndClinics/Proactive Patient Support & Insights.png",
        reverse: true,
      },
      {
        title: "Empower Your Agents, Reduce Burnout",
        description:
          "Your agents are the heartbeat of your contact center. Our automated evaluations, skill-gap analysis, and personalized coaching tools help them grow professionally while reducing stress and turnover. Happier agents mean better patient experiences and lower operational costs.",
        icon: "Users",
        gradient: "from-indigo-500 to-purple-500",
        image:
          "/use-cases/healthcareAndClinics/Empower Your Agents, Reduce Burnout.png",
      },
      {
        title: "Drive Appointments and Revenue Growth",
        description:
          "With AIplacers' intelligent conversation analytics, your team can optimize every touchpoint—from initial inquiry to follow-up care. Increase appointment bookings, speed up response times, and unlock new revenue opportunities without adding extra workload.",
        icon: "Calendar",
        gradient: "from-teal-500 to-blue-500",
        image:
          "/use-cases/healthcareAndClinics/Drive Appointments and Revenue Growth.png",
        reverse: true,
      },
    ],
  },
  "e-commerce-and-retail": {
    hero: {
      titleA: "AI-Powered E-commerce Conversations:",
      titleB: "Put Customers First",
      description:
        "Turn your retail and e-commerce contact center into a powerhouse of speed, personalization, and seamless service. Deliver exceptional shopping experiences that boost conversions, encourage repeat purchases, and build brand loyalty.",
    },
    benefits: {
      title: "Why Choose AIplacers for E-commerce & Retail?",
      content: [
        {
          title: "Seamless AI Integration",
          description:
            "Works effortlessly with your existing CRM, order management, and support platforms.",
          icon: "Zap",
          gradient: "from-blue-500 to-cyan-500",
        },
        {
          title: "Actionable Analytics",
          description:
            "Transform every customer conversation into insights that refine your sales strategies and marketing campaigns.",
          icon: "BarChart3",
          gradient: "from-green-500 to-emerald-500",
        },
        {
          title: "Scalable & Reliable",
          description:
            "Built to handle peak shopping seasons, flash sales, and expanding global audiences without downtime.",
          icon: "TrendingUp",
          gradient: "from-purple-500 to-pink-500",
        },
        {
          title: "Customer-Centric Design",
          description:
            "Every feature is tailored to enhance the buyer journey, from browsing to post-purchase support.",
          icon: "Heart",
          gradient: "from-orange-500 to-red-500",
        },
      ],
    },
    how: {
      title: "How AIplacers Helps E-commerce & Retail Contact Centers",
      description:
        "AIplacers empowers your customer support team with AI-driven tools that streamline order management, personalize interactions, and resolve issues faster. Whether it's a product inquiry or a returns request, our platform ensures your customers feel valued and supported every step of the way.",
      badges: [
        { icon: "Shield", label: "Compliance Ready" },
        { icon: "Lock", label: "End-to-End Encryption" },
      ],
      image:
        "/use-cases/eCommerceAndRetail/How AIplacers Helps E-commerce & Retail Contact Centers.png",
    },
    features: [
      {
        title: "AI-Powered Customer Conversations",
        description:
          "Engage shoppers in real time with intelligent suggestions, instant responses, and personalized recommendations. From product details to payment assistance, AIplacers helps agents deliver precise, helpful answers that convert interest into sales.",
        icon: "MessageSquare",
        gradient: "from-blue-500 to-cyan-500",
        image:
          "/use-cases/eCommerceAndRetail/AI-Powered Customer Conversations.png",
      },
      {
        title: "Faster Resolutions, Happier Shoppers",
        description:
          "No one wants to wait when their cart is ready to check out. Our smart routing and live AI guidance speed up resolutions—reducing abandoned carts, increasing upsells, and keeping customers delighted.",
        icon: "Clock",
        gradient: "from-green-500 to-emerald-500",
        image:
          "/use-cases/eCommerceAndRetail/Faster Resolutions, Happier Shoppers.png",
        reverse: true,
      },
      {
        title: "Compliance and Data Security You Can Trust",
        description:
          "Customer data is critical, and AIplacers safeguards it with robust encryption, automatic redaction, and full compliance with retail data protection standards. Sell confidently without compromising privacy.",
        icon: "Shield",
        gradient: "from-purple-500 to-pink-500",
        image:
          "/use-cases/eCommerceAndRetail/Compliance and Data Security You Can Trust.png",
      },
      {
        title: "Proactive Support & Predictive Insights",
        description:
          "Spot buying trends, identify potential issues before they escalate, and anticipate customer needs. AIplacers transforms your contact center into a proactive growth engine for your brand.",
        icon: "Eye",
        gradient: "from-orange-500 to-red-500",
        image:
          "/use-cases/eCommerceAndRetail/Proactive Support & Predictive Insights.png",
        reverse: true,
      },
      {
        title: "Empower Your Agents, Reduce Turnover",
        description:
          "Equip your team with automated performance reviews, skill-gap insights, and tailored coaching. Reduce burnout during high-volume seasons and create a motivated workforce that delivers premium customer care.",
        icon: "Users",
        gradient: "from-indigo-500 to-purple-500",
        image:
          "/use-cases/eCommerceAndRetail/Empower Your Agents, Reduce Turnover.png",
      },
      {
        title: "Drive Sales and Brand Growth",
        description:
          "Leverage AI-driven conversation analytics to increase order value, boost customer lifetime value, and create upsell opportunities—all while streamlining operations and reducing costs.",
        icon: "TrendingUp",
        gradient: "from-teal-500 to-blue-500",
        image: "/use-cases/eCommerceAndRetail/Drive Sales and Brand Growth.png",
        reverse: true,
      },
    ],
  },
  "hospitality-and-travel": {
    hero: {
      titleA: "AI-Powered Hospitality Conversations:",
      titleB: "Put Guests First",
      description:
        "Transform your hospitality and travel contact center into a seamless, guest-focused experience hub. Deliver personalized support, faster bookings, and memorable interactions that turn first-time visitors into loyal travelers.",
    },
    benefits: {
      title: "Why Choose AIplacers for Hospitality & Travel?",
      content: [
        {
          title: "Seamless AI Integration",
          description:
            "Connect effortlessly with your booking systems, CRM, and customer support tools.",
          icon: "Zap",
          gradient: "from-blue-500 to-cyan-500",
        },
        {
          title: "Actionable Analytics",
          description:
            "Turn every guest interaction into insights that refine marketing campaigns, upsell opportunities, and service strategies.",
          icon: "BarChart3",
          gradient: "from-green-500 to-emerald-500",
        },
        {
          title: "Scalable & Reliable",
          description:
            "Built to handle peak holiday seasons, last-minute travel surges, and global customer bases without disruption.",
          icon: "TrendingUp",
          gradient: "from-purple-500 to-pink-500",
        },
        {
          title: "Guest-Centric Design",
          description:
            "Every feature is crafted to elevate the traveler’s journey, from planning and booking to post-trip follow-up.",
          icon: "Heart",
          gradient: "from-orange-500 to-red-500",
        },
      ],
    },
    how: {
      title: "How AIplacers Helps Hospitality & Travel Contact Centers",
      description:
        "AIplacers equips your team with intelligent tools to streamline reservations, personalize travel recommendations, and provide quick solutions. Whether it's a hotel upgrade, itinerary change, or urgent assistance, our platform ensures every interaction is efficient, accurate, and friendly.",
      badges: [
        { icon: "Shield", label: "Compliance Ready" },
        { icon: "Lock", label: "End-to-End Encryption" },
      ],
      image:
        "/use-cases/hospitalityAndTravel/How AIplacers Helps Hospitality & Travel Contact Centers.png",
    },
    features: [
      {
        title: "AI-Powered Guest Conversations",
        description:
          "Engage travelers instantly with tailored recommendations, instant responses, and real-time support. From hotel bookings to flight inquiries, AIplacers makes every conversation smooth, helpful, and memorable.",
        icon: "MessageSquare",
        gradient: "from-blue-500 to-cyan-500",
        image:
          "/use-cases/hospitalityAndTravel/AI-Powered Guest Conversations.png",
      },
      {
        title: "Faster Resolutions, Happier Guests",
        description:
          "No traveler wants delays when planning their dream vacation or handling last-minute changes. Our AI-guided routing and smart suggestions reduce wait times, resolve issues on the first call, and enhance overall guest satisfaction.",
        icon: "Clock",
        gradient: "from-green-500 to-emerald-500",
        image:
          "/use-cases/hospitalityAndTravel/Faster Resolutions, Happier Guests.png",
        reverse: true,
      },
      {
        title: "Compliance and Data Security You Can Trust",
        description:
          "Protect sensitive traveler information with AIplacers' built-in encryption, automatic redaction, and adherence to industry data privacy standards. Serve guests confidently, knowing their data is safe.",
        icon: "Shield",
        gradient: "from-purple-500 to-pink-500",
        image:
          "/use-cases/hospitalityAndTravel/Compliance and Data Security You Can Trust.png",
      },
      {
        title: "Proactive Support & Travel Insights",
        description:
          "Predict booking trends, detect potential service issues early, and uncover upsell opportunities like excursions or premium packages. AIplacers turns your contact center into a revenue-generating, guest-delighting powerhouse.",
        icon: "Eye",
        gradient: "from-orange-500 to-red-500",
        image:
          "/use-cases/hospitalityAndTravel/Proactive Support & Travel Insights.png",
        reverse: true,
      },
      {
        title: "Empower Your Team, Reduce Stress",
        description:
          "Equip your agents with automated coaching, skill evaluations, and real-time guidance. Lower burnout during peak travel times and foster a motivated team that delivers exceptional service.",
        icon: "Users",
        gradient: "from-indigo-500 to-purple-500",
        image:
          "/use-cases/hospitalityAndTravel/Empower Your Team, Reduce Stress.png",
      },
      {
        title: "Drive Bookings and Loyalty",
        description:
          "Boost reservation rates, increase repeat bookings, and grow customer lifetime value. AIplacers' AI-driven analytics optimize every touchpoint to grow your brand in a competitive hospitality and travel market.",
        icon: "TrendingUp",
        gradient: "from-teal-500 to-blue-500",
        image: "/use-cases/hospitalityAndTravel/Drive Bookings and Loyalty.png",
        reverse: true,
      },
    ],
  },
  "real-estate": {
    hero: {
      titleA: "AI-Powered Real Estate Conversations:",
      titleB: "Put Clients First",
      description:
        "Turn your real estate contact center into a hub of efficiency, personalization, and trust. Deliver fast responses, tailored property recommendations, and seamless experiences that convert prospects into happy homeowners or investors.",
    },
    benefits: {
      title: "Why Choose AIplacers for Real Estate?",
      content: [
        {
          title: "Seamless AI Integration",
          description:
            "Works flawlessly with your CRM, MLS listings, and communication tools for smooth operations.",
          icon: "Zap",
          gradient: "from-blue-500 to-cyan-500",
        },
        {
          title: "Actionable Analytics",
          description:
            "Transform every inquiry into valuable insights to refine marketing strategies and close deals faster.",
          icon: "BarChart3",
          gradient: "from-green-500 to-emerald-500",
        },
        {
          title: "Scalable & Reliable",
          description:
            "Perfect for handling high inquiry volumes during peak property seasons or rapid market growth.",
          icon: "TrendingUp",
          gradient: "from-purple-500 to-pink-500",
        },
        {
          title: "Client-Centered Design",
          description:
            "Every feature is crafted to simplify the buying, selling, and renting journey for your clients.",
          icon: "Heart",
          gradient: "from-orange-500 to-red-500",
        },
      ],
    },
    how: {
      title: "How AIplacers Helps Real Estate Contact Centers",
      description:
        "AIplacers empowers your team with AI-driven solutions to streamline lead management, personalize client interactions, and resolve inquiries quickly. From property details to financing questions, our platform ensures every conversation builds confidence and moves deals forward.",
      badges: [
        { icon: "Shield", label: "Data Protection" },
        { icon: "Lock", label: "Privacy First" },
      ],
      image:
        "/use-cases/realEstate/How AIplacers Helps Real Estate Contact Centers.png",
    },
    features: [
      {
        title: "AI-Powered Client Conversations",
        description:
          "Engage potential buyers, sellers, and renters instantly with intelligent recommendations and accurate answers. Whether it's scheduling a property tour, discussing mortgage options, or following up on an inquiry, AIplacers ensures every interaction feels professional and personal.",
        icon: "MessageSquare",
        gradient: "from-blue-500 to-cyan-500",
        image: "/use-cases/realEstate/AI-Powered Client Conversations.png",
      },
      {
        title: "Faster Resolutions, More Closed Deals",
        description:
          "No one wants delays in a competitive housing market. Our smart routing and real-time assistance help agents respond quickly, reduce missed opportunities, and accelerate the sales cycle.",
        icon: "Clock",
        gradient: "from-green-500 to-emerald-500",
        image:
          "/use-cases/realEstate/Faster Resolutions, More Closed Deals.png",
        reverse: true,
      },
      {
        title: "Compliance and Data Security You Can Trust",
        description:
          "Real estate transactions involve sensitive financial and personal information. AIplacers protects this data through robust encryption, automatic redaction, and adherence to privacy regulations.",
        icon: "Shield",
        gradient: "from-purple-500 to-pink-500",
        image:
          "/use-cases/realEstate/Compliance and Data Security You Can Trust.png",
      },
      {
        title: "Proactive Support & Market Insights",
        description:
          "Identify trends in buyer preferences, anticipate potential obstacles, and uncover upsell opportunities like premium listings or property management services. AIplacers gives you a competitive edge in any market.",
        icon: "Eye",
        gradient: "from-orange-500 to-red-500",
        image: "/use-cases/realEstate/Proactive Support & Market Insights.png",
        reverse: true,
      },
      {
        title: "Empower Your Agents, Reduce Turnover",
        description:
          "Support your agents with automated evaluations, personalized coaching, and performance insights. Minimize stress, improve retention, and create a high-performing team ready to close more deals.",
        icon: "Users",
        gradient: "from-indigo-500 to-purple-500",
        image: "/use-cases/realEstate/Empower Your Agents, Reduce Turnover.png",
      },
      {
        title: "Drive Revenue and Client Loyalty",
        description:
          "Boost lead conversions, shorten the sales cycle, and strengthen client relationships. With AIplacers' advanced analytics, every conversation becomes an opportunity for growth.",
        icon: "Calendar",
        gradient: "from-teal-500 to-blue-500",
        image: "/use-cases/realEstate/Drive Revenue and Client Loyalty.png",
        reverse: true,
      },
    ],
  },
  "banking-and-financial-services": {
    hero: {
      titleA: "AI-Powered Banking Conversations:",
      titleB: "Put Customers First",
      description:
        "Transform your financial contact center into a trusted partner for clients. Deliver quick, accurate, and personalized support that builds loyalty, strengthens relationships, and drives financial growth.",
    },
    benefits: {
      title: "Why Choose AIplacers for Banking & Financial Services?",
      content: [
        {
          title: "Seamless AI Integration",
          description:
            "Works effortlessly with your core banking systems, CRMs, and payment platforms for smooth operations.",
          icon: "Zap",
          gradient: "from-blue-500 to-cyan-500",
        },
        {
          title: "Actionable Analytics",
          description:
            "Convert every customer interaction into insights that shape smarter lending strategies, fraud prevention, and service improvements.",
          icon: "BarChart3",
          gradient: "from-green-500 to-emerald-500",
        },
        {
          title: "Scalable & Reliable",
          description:
            "Built to handle high transaction volumes, regulatory demands, and expanding financial networks without disruption.",
          icon: "TrendingUp",
          gradient: "from-purple-500 to-pink-500",
        },
        {
          title: "Customer-Centered Design",
          description:
            "Every feature is designed to simplify financial journeys—from account inquiries to investment advice.",
          icon: "Heart",
          gradient: "from-orange-500 to-red-500",
        },
      ],
    },
    how: {
      title: "How AIplacers Helps Banking & Financial Contact Centers",
      description:
        "AIplacers empowers your team with AI-driven tools to streamline transactions, resolve issues quickly, and provide tailored financial guidance. From credit card disputes to loan applications, our platform ensures clients receive secure, efficient, and trustworthy service.",
      badges: [
        { icon: "Shield", label: "Regulatory Ready" },
        { icon: "Lock", label: "End-to-End Encryption" },
      ],
      image:
        "/use-cases/bankingAndFinancialServices/How AIplacers Helps Banking & Financial Contact Centers.png",
    },
    features: [
      {
        title: "AI-Powered Customer Conversations",
        description:
          "Engage clients with intelligent recommendations, instant responses, and proactive alerts. Whether it’s balance inquiries, investment guidance, or fraud notifications, AIplacers makes every conversation smooth, accurate, and reassuring.",
        icon: "MessageSquare",
        gradient: "from-blue-500 to-cyan-500",
        image:
          "/use-cases/bankingAndFinancialServices/AI-Powered Customer Conversations.png",
      },
      {
        title: "Faster Resolutions, Stronger Trust",
        description:
          "In finance, time is money. Our AI-guided routing and real-time support minimize wait times, resolve issues on the first interaction, and build lasting trust with your customers.",
        icon: "Clock",
        gradient: "from-green-500 to-emerald-500",
        image:
          "/use-cases/bankingAndFinancialServices/Faster Resolutions, Stronger Trust.png",
        reverse: true,
      },
      {
        title: "Compliance and Data Security You Can Trust",
        description:
          "Banking data is sensitive, and AIplacers treats it with the highest security standards. With encryption, automatic redaction, and full adherence to financial regulations, your clients’ information stays protected.",
        icon: "Shield",
        gradient: "from-purple-500 to-pink-500",
        image:
          "/use-cases/bankingAndFinancialServices/Compliance and Data Security You Can Trust.png",
      },
      {
        title: "Proactive Support & Financial Insights",
        description:
          "Anticipate client needs, detect suspicious activity early, and uncover opportunities for cross-selling or upselling. AIplacers turns customer service into a strategic growth channel.",
        icon: "Eye",
        gradient: "from-orange-500 to-red-500",
        image:
          "/use-cases/bankingAndFinancialServices/Proactive Support & Financial Insights.png",
        reverse: true,
      },
      {
        title: "Empower Your Agents, Reduce Burnout",
        description:
          "Support your team with automated evaluations, targeted coaching, and performance insights. Reduce stress in high-pressure financial environments and retain top talent.",
        icon: "Users",
        gradient: "from-indigo-500 to-purple-500",
        image:
          "/use-cases/bankingAndFinancialServices/Empower Your Agents, Reduce Burnout.png",
      },
      {
        title: "Drive Revenue and Client Loyalty",
        description:
          "Boost customer satisfaction, increase product adoption, and enhance retention rates. AIplacers’ analytics and AI-powered tools transform every interaction into measurable financial success.",
        icon: "Calendar",
        gradient: "from-teal-500 to-blue-500",
        image:
          "/use-cases/bankingAndFinancialServices/Drive Revenue and Client Loyalty.png",
        reverse: true,
      },
    ],
  },
  "education-and-edtech": {
    hero: {
      titleA: "AI-Powered Education Conversations:",
      titleB: "Put Learners First",
      description:
        "Transform your education and EdTech contact center into a hub of support, personalization, and innovation. Deliver fast responses, tailored guidance, and inspiring interactions that empower students, educators, and parents alike.",
    },
    benefits: {
      title: "Why Choose AIplacers for EdTech?",
      content: [
        {
          title: "Seamless AI Integration",
          description:
            "Works smoothly with your LMS, CRM, and communication tools for effortless adoption.",
          icon: "Zap",
          gradient: "from-blue-500 to-cyan-500",
        },
        {
          title: "Actionable Analytics",
          description:
            "Turn every inquiry into insights that improve student engagement, retention, and institutional strategies.",
          icon: "BarChart3",
          gradient: "from-green-500 to-emerald-500",
        },
        {
          title: "Scalable & Reliable",
          description:
            "Built to handle peak enrollment periods, growing user bases, and diverse educational programs without disruptions.",
          icon: "TrendingUp",
          gradient: "from-purple-500 to-pink-500",
        },
        {
          title: "Learner-Centered Design",
          description:
            "Every feature is designed to enrich the educational journey—from enrollment to alumni support.",
          icon: "Heart",
          gradient: "from-orange-500 to-red-500",
        },
      ],
    },
    how: {
      title: "How AIplacers Helps EdTech Contact Centers",
      description:
        "AIplacers equips your support team with AI-powered tools to streamline admissions, respond to student queries, and personalize academic recommendations. Whether it’s course registration, tuition questions, or online learning assistance, our platform ensures meaningful and efficient interactions.",
      badges: [
        { icon: "Shield", label: "FERPA Ready" },
        { icon: "Lock", label: "Secure Data Handling" },
      ],
      image:
        "/use-cases/educationAndEdtech/How AIplacers Helps EdTech Contact Centers.png",
    },
    features: [
      {
        title: "AI-Powered Student Conversations",
        description:
          "Engage learners instantly with intelligent suggestions, quick answers, and proactive support. From helping students pick the right courses to guiding parents on admissions, AIplacers creates smooth, friendly, and impactful interactions.",
        icon: "MessageSquare",
        gradient: "from-blue-500 to-cyan-500",
        image:
          "/use-cases/educationAndEdtech/AI-Powered Student Conversations.png",
      },
      {
        title: "Faster Resolutions, Better Learning Experiences",
        description:
          "No one likes delays in their learning journey. Our AI-driven routing and real-time guidance reduce wait times, resolve issues on the first call, and keep students motivated and satisfied.",
        icon: "Clock",
        gradient: "from-green-500 to-emerald-500",
        image:
          "/use-cases/educationAndEdtech/Faster Resolutions, Better Learning Experiences.png",
        reverse: true,
      },
      {
        title: "Compliance and Data Security You Can Trust",
        description:
          "Educational data is sensitive, and AIplacers secures it with encryption, automatic redaction, and adherence to data privacy standards like FERPA—so institutions can focus on teaching, not worrying about compliance.",
        icon: "Shield",
        gradient: "from-purple-500 to-pink-500",
        image:
          "/use-cases/educationAndEdtech/Compliance and Data Security You Can Trust.png",
      },
      {
        title: "Proactive Support & Learning Insights",
        description:
          "Identify trends in student needs, detect challenges early, and uncover opportunities for program improvements. AIplacers turns conversations into actionable insights for growth and innovation.",
        icon: "Eye",
        gradient: "from-orange-500 to-red-500",
        image:
          "/use-cases/educationAndEdtech/Proactive Support & Learning Insights.png",
        reverse: true,
      },
      {
        title: "Empower Your Staff, Reduce Workload",
        description:
          "Support your academic and administrative teams with automated performance reviews, targeted coaching, and intelligent tools. Reduce burnout, improve efficiency, and create an empowered workforce that delivers exceptional support.",
        icon: "Users",
        gradient: "from-indigo-500 to-purple-500",
        image:
          "/use-cases/educationAndEdtech/Empower Your Staff, Reduce Workload.png",
      },
      {
        title: "Drive Enrollment and Retention Growth",
        description:
          "Increase student sign-ups, improve retention rates, and build long-lasting relationships with alumni. AIplacers’ analytics and AI-driven solutions optimize every touchpoint in the educational journey.",
        icon: "Calendar",
        gradient: "from-teal-500 to-blue-500",
        image:
          "/use-cases/educationAndEdtech/Drive Enrollment and Retention Growth.png",
        reverse: true,
      },
    ],
  },
  "logistics-and-transportation": {
    hero: {
      titleA: "AI-Powered Logistics Conversations:",
      titleB: "Put Customers First",
      description:
        "Transform your logistics and transportation contact center into a hub of support, personalization, and innovation. Deliver fast responses, tailored guidance, and seamless interactions that empower shippers, carriers, and customers alike.",
    },
    benefits: {
      title: "Why Choose AIplacers for Logistics & Transportation?",
      content: [
        {
          title: "Seamless AI Integration",
          description:
            "Works smoothly with your TMS, CRM, and communication tools for effortless adoption.",
          icon: "Zap",
          gradient: "from-blue-500 to-cyan-500",
        },
        {
          title: "Actionable Analytics",
          description:
            "Turn every inquiry into insights that improve delivery performance, customer satisfaction, and operational strategies.",
          icon: "BarChart3",
          gradient: "from-green-500 to-emerald-500",
        },
        {
          title: "Scalable & Reliable",
          description:
            "Built to handle peak shipping seasons, growing fleets, and diverse logistics networks without disruptions.",
          icon: "TrendingUp",
          gradient: "from-purple-500 to-pink-500",
        },
        {
          title: "Customer-Centered Design",
          description:
            "Every feature is designed to simplify the shipping journey—from order placement to final delivery confirmation.",
          icon: "Heart",
          gradient: "from-orange-500 to-red-500",
        },
      ],
    },
    how: {
      title: "How AIplacers Helps Logistics & Transportation Contact Centers",
      description:
        "AIplacers equips your support team with AI-powered tools to streamline order management, respond to shipment queries, and personalize logistics recommendations. Whether it’s delivery status, freight quotes, or issue resolution, our platform ensures efficient and meaningful interactions.",
      badges: [
        { icon: "Shield", label: "Regulation Ready" },
        { icon: "Lock", label: "Secure Data Handling" },
      ],
      image:
        "/use-cases/logisticsAndTransportation/How AIplacers Helps Logistics & Transportation Contact Centers.png",
    },
    features: [
      {
        title: "AI-Powered Customer Conversations",
        description:
          "Engage shippers and customers instantly with intelligent suggestions, quick answers, and proactive support. From booking shipments to tracking deliveries, AIplacers ensures smooth and reliable interactions.",
        icon: "MessageSquare",
        gradient: "from-blue-500 to-cyan-500",
        image:
          "/use-cases/logisticsAndTransportation/AI-Powered Customer Conversations.png",
      },
      {
        title: "Faster Resolutions, Better Delivery Experiences",
        description:
          "No one likes delays in logistics. Our AI-driven routing and real-time guidance reduce wait times, resolve issues on the first call, and keep customers satisfied with on-time deliveries.",
        icon: "Clock",
        gradient: "from-green-500 to-emerald-500",
        image:
          "/use-cases/logisticsAndTransportation/Faster Resolutions, Better Delivery Experiences.png",
        reverse: true,
      },
      {
        title: "Compliance and Data Security You Can Trust",
        description:
          "Transportation data is sensitive, and AIplacers secures it with encryption, automatic redaction, and adherence to data privacy and trade compliance standards—so you can focus on operations, not risk.",
        icon: "Shield",
        gradient: "from-purple-500 to-pink-500",
        image:
          "/use-cases/logisticsAndTransportation/Compliance and Data Security You Can Trust.png",
      },
      {
        title: "Proactive Support & Logistics Insights",
        description:
          "Identify trends in delivery performance, detect bottlenecks early, and uncover opportunities for route optimization. AIplacers turns conversations into actionable insights for operational growth.",
        icon: "Eye",
        gradient: "from-orange-500 to-red-500",
        image:
          "/use-cases/logisticsAndTransportation/Proactive Support & Logistics Insights.png",
        reverse: true,
      },
      {
        title: "Empower Your Staff, Reduce Workload",
        description:
          "Support your logistics and support teams with automated performance reviews, targeted coaching, and intelligent tools. Reduce burnout, improve efficiency, and build a workforce ready to deliver excellence.",
        icon: "Users",
        gradient: "from-indigo-500 to-purple-500",
        image:
          "/use-cases/logisticsAndTransportation/Empower Your Staff, Reduce Workload.png",
      },
      {
        title: "Drive Revenue and Customer Loyalty",
        description:
          "Increase shipment bookings, improve retention rates, and strengthen customer relationships. AIplacers’ analytics and AI-driven solutions optimize every touchpoint in the logistics journey.",
        icon: "Calendar",
        gradient: "from-teal-500 to-blue-500",
          image:
          "/use-cases/logisticsAndTransportation/Drive Revenue and Customer Loyalty.png",
        reverse: true,
      },
    ],
  },
  bpo: {
    hero: {
      titleA: "AI-Powered BPO Conversations:",
      titleB: "Put Clients First",
      description:
        "Transform your BPO operations into a dynamic, efficient, and client-focused powerhouse. Deliver exceptional service, faster resolutions, and intelligent insights that keep your customers satisfied and your partners impressed.",
    },
    benefits: {
      title: "Why Choose AIplacers for BPO?",
      content: [
        {
          title: "Seamless AI Integration",
          description:
            "Works effortlessly with your CRM, ticketing systems, and workforce management tools for smooth implementation.",
          icon: "Zap",
          gradient: "from-blue-500 to-cyan-500",
        },
        {
          title: "Actionable Analytics",
          description:
            "Convert every interaction into valuable data to optimize workflows, improve KPIs, and exceed client expectations.",
          icon: "BarChart3",
          gradient: "from-green-500 to-emerald-500",
        },
        {
          title: "Scalable & Reliable",
          description:
            "Built to handle high call volumes, diverse industries, and global operations without interruptions.",
          icon: "TrendingUp",
          gradient: "from-purple-500 to-pink-500",
        },
        {
          title: "Client-Centered Design",
          description:
            "Every feature is tailored to deliver superior experiences and strengthen long-term business relationships.",
          icon: "Heart",
          gradient: "from-orange-500 to-red-500",
        },
      ],
    },
    how: {
      title: "How AIplacers Helps BPO Contact Centers",
      description:
        "AIplacers equips BPO teams with advanced AI solutions to streamline processes, reduce manual workload, and boost performance. Whether it’s customer support, technical helpdesk, or sales campaigns, our platform empowers your agents to deliver fast, accurate, and impactful service.",
      badges: [
        { icon: "Shield", label: "Compliance Ready" },
        { icon: "Lock", label: "Data Security First" },
      ],
      image: "/use-cases/bpo/How AIplacers Helps BPO Contact Centers.png",
    },
    features: [
      {
        title: "AI-Powered Customer Conversations",
        description:
          "Engage customers in real-time with intelligent prompts, quick resolutions, and personalized responses. From handling service inquiries to managing complex accounts, AIplacers ensures every interaction is efficient and meaningful.",
        icon: "MessageSquare",
        gradient: "from-blue-500 to-cyan-500",
        image: "/use-cases/bpo/AI-Powered Customer Conversations.png",
      },
      {
        title: "Faster Resolutions, Higher Satisfaction",
        description:
          "In BPO, speed and quality matter. Our AI-guided routing and live recommendations help your agents resolve issues on the first call—boosting client satisfaction and meeting SLAs consistently.",
        icon: "Clock",
        gradient: "from-green-500 to-emerald-500",
        image: "/use-cases/bpo/Faster Resolutions, Higher Satisfaction.png",
        reverse: true,
      },
      {
        title: "Compliance and Data Security You Can Trust",
        description:
          "BPO operations handle sensitive information across multiple industries. AIplacers safeguards data with advanced encryption, automatic redaction, and strict adherence to compliance standards.",
        icon: "Shield",
        gradient: "from-purple-500 to-pink-500",
        image: "/use-cases/bpo/Compliance and Data Security You Can Trust.png",
      },
      {
        title: "Proactive Support & Performance Insights",
        description:
          "Spot potential issues before they affect your clients, monitor agent performance, and uncover opportunities for upselling or process improvements. AIplacers turns your contact center into a proactive growth engine.",
        icon: "Eye",
        gradient: "from-orange-500 to-red-500",
        image: "/use-cases/bpo/Proactive Support & Performance Insights.png",
        reverse: true,
      },
      {
        title: "Empower Your Agents, Reduce Turnover",
        description:
          "Provide your workforce with automated evaluations, coaching tools, and performance feedback. Reduce stress, improve morale, and retain top talent across your BPO operations.",
        icon: "Users",
        gradient: "from-indigo-500 to-purple-500",
        image: "/use-cases/bpo/Empower Your Agents, Reduce Turnover.png",
      },
      {
        title: "Drive Revenue and Strengthen Client Relationships",
        description:
          "Increase operational efficiency, unlock cross-sell opportunities, and deliver measurable results for your clients. AIplacers ensures every conversation contributes to business growth and long-term partnerships.",
        icon: "Calendar",
        gradient: "from-teal-500 to-blue-500",
        image: "/use-cases/bpo/Drive Revenue and Strengthen Client Relationships.png",
        reverse: true,
      },
    ],
  },
  insurance: {
    hero: {
      titleA: "AI-Powered Insurance Conversations:",
      titleB: "Put Policyholders First",
      description:
        "Transform your insurance contact center into a hub of trust, speed, and personalized service. Deliver quick claims assistance, tailored policy guidance, and proactive support that strengthens customer loyalty and accelerates growth.",
    },
    benefits: {
      title: "Why Choose AIplacers for Insurance?",
      content: [
        {
          title: "Seamless AI Integration",
          description:
            "Works effortlessly with your CRM, policy management, and claims processing systems for smooth operations.",
          icon: "Zap",
          gradient: "from-blue-500 to-cyan-500",
        },
        {
          title: "Actionable Analytics",
          description:
            "Turn every customer interaction into insights that improve claims handling, cross-selling strategies, and customer satisfaction.",
          icon: "BarChart3",
          gradient: "from-green-500 to-emerald-500",
        },
        {
          title: "Scalable & Reliable",
          description:
            "Built to handle peak claim periods, large customer bases, and evolving insurance markets without disruption.",
          icon: "TrendingUp",
          gradient: "from-purple-500 to-pink-500",
        },
        {
          title: "Customer-Centered Design",
          description:
            "Every feature is crafted to simplify policyholder interactions, from quotes and renewals to claim settlements.",
          icon: "Heart",
          gradient: "from-orange-500 to-red-500",
        },
      ],
    },
    how: {
      title: "How AIplacers Helps Insurance Contact Centers",
      description:
        "AIplacers empowers your insurance team with AI-driven tools to handle claims faster, provide clear policy explanations, and personalize every customer interaction. Whether it’s a first-time quote or an urgent claim, our platform ensures accuracy, transparency, and exceptional service.",
      badges: [
        { icon: "Shield", label: "Regulatory Compliant" },
        { icon: "Lock", label: "Data Security First" },
      ],
          image: "/use-cases/insurance/How AIplacers Helps Insurance Contact Centers.png",
    },
    features: [
      {
        title: "AI-Powered Policyholder Conversations",
        description:
          "Engage customers instantly with intelligent recommendations, real-time answers, and proactive alerts. From explaining coverage details to guiding them through claims, AIplacers ensures every conversation builds confidence and trust.",
        icon: "MessageSquare",
        gradient: "from-blue-500 to-cyan-500",
        image: "/use-cases/insurance/AI-Powered Policyholder Conversations.png",
      },
      {
        title: "Faster Resolutions, Happier Customers",
        description:
          "Time matters when customers face emergencies or losses. Our AI-guided routing and live assistance reduce claim processing time, resolve issues on the first call, and boost satisfaction scores.",
        icon: "Clock",
        gradient: "from-green-500 to-emerald-500",
        image: "/use-cases/insurance/Faster Resolutions, Happier Customers.png",
        reverse: true,
      },
      {
        title: "Compliance and Data Security You Can Trust",
        description:
          "Insurance involves sensitive personal and financial data. AIplacers secures this information with advanced encryption, automatic redaction, and compliance with industry regulations.",
        icon: "Shield",
        gradient: "from-purple-500 to-pink-500",
        image: "/use-cases/insurance/Compliance and Data Security You Can Trust.png",
      },
      {
        title: "Proactive Support & Market Insights",
        description:
          "Identify customer needs before they escalate, spot upsell opportunities like additional coverage, and track emerging market trends. AIplacers turns your contact center into a strategic growth engine.",
        icon: "Eye",
        gradient: "from-orange-500 to-red-500",
        image: "/use-cases/insurance/Proactive Support & Market Insights.png",
        reverse: true,
      },
      {
        title: "Empower Your Agents, Reduce Burnout",
        description:
          "Equip your workforce with automated evaluations, personalized coaching, and real-time insights. Minimize stress, improve performance, and retain top talent in competitive markets.",
        icon: "Users",
        gradient: "from-indigo-500 to-purple-500",
        image: "/use-cases/insurance/Empower Your Agents, Reduce Burnout.png",
      },
      {
        title: "Drive Renewals and Revenue Growth",
        description:
          "Increase policy renewals, uncover cross-sell opportunities, and enhance customer lifetime value. AIplacers’ analytics and AI-powered tools turn every policyholder interaction into measurable success.",
        icon: "Calendar",
        gradient: "from-teal-500 to-blue-500",
        image: "/use-cases/insurance/Drive Renewals and Revenue Growth.png",
        reverse: true,
      },
    ],
  },
  "coaching-and-marketing": {
    hero: {
      titleA: "AI-Powered Coaching & Marketing Conversations:",
      titleB: "Put Clients First",
      description:
        "Transform your coaching and marketing contact center into a hub of clarity, creativity, and results. Deliver personalized guidance, faster responses, and strategic insights that help your clients grow their businesses and achieve their goals.",
    },
    benefits: {
      title: "Why Choose AIplacers for Coaching & Marketing?",
      content: [
        {
          title: "Seamless AI Integration",
          description:
            "Works effortlessly with your CRM, campaign management tools, and communication platforms for smooth adoption.",
          icon: "Zap",
          gradient: "from-blue-500 to-cyan-500",
        },
        {
          title: "Actionable Analytics",
          description:
            "Convert every conversation into insights that refine marketing strategies, improve coaching sessions, and boost campaign performance.",
          icon: "BarChart3",
          gradient: "from-green-500 to-emerald-500",
        },
        {
          title: "Scalable & Reliable",
          description:
            "Built to handle growing client bases, busy launch periods, and dynamic marketing needs without disruptions.",
          icon: "TrendingUp",
          gradient: "from-purple-500 to-pink-500",
        },
        {
          title: "Client-Centered Design",
          description:
            "Every feature is tailored to enhance the coaching and marketing journey, from onboarding to measurable results.",
          icon: "Heart",
          gradient: "from-orange-500 to-red-500",
        },
      ],
    },
    how: {
      title: "How AIplacers Helps Coaching & Marketing Contact Centers",
      description:
        "AIplacers empowers your team with AI-driven tools to streamline lead nurturing, personalize outreach, and resolve client inquiries quickly. Whether it’s campaign adjustments, progress tracking, or strategic advice, our platform ensures every interaction builds trust and drives results.",
      badges: [
        { icon: "Shield", label: "Privacy First" },
        { icon: "Lock", label: "Secure Integrations" },
      ],
      image: "/use-cases/coachingAndMarketing/How AIplacers Helps Coaching & Marketing Contact Centers.png",
    },
    features: [
      {
        title: "AI-Powered Client Conversations",
        description:
          "Engage clients instantly with intelligent prompts, accurate answers, and real-time recommendations. From planning marketing campaigns to guiding coaches through tough decisions, AIplacers makes every conversation impactful and meaningful.",
        icon: "MessageSquare",
        gradient: "from-blue-500 to-cyan-500",
        image: "/use-cases/coachingAndMarketing/AI-Powered Client Conversations.png",
      },
      {
        title: "Faster Resolutions, Better Client Outcomes",
        description:
          "Speed matters when managing campaigns or coaching milestones. Our AI-guided routing and real-time support minimize delays, accelerate campaign adjustments, and keep your clients on track for success.",
        icon: "Clock",
        gradient: "from-green-500 to-emerald-500",
        image: "/use-cases/coachingAndMarketing/Faster Resolutions, Better Client Outcomes.png",
        reverse: true,
      },
      {
        title: "Compliance and Data Security You Can Trust",
        description:
          "Marketing data and client details are sensitive. AIplacers protects all information with encryption, automatic redaction, and adherence to privacy regulations, giving you and your clients peace of mind.",
        icon: "Shield",
        gradient: "from-purple-500 to-pink-500",
        image: "/use-cases/coachingAndMarketing/Compliance and Data Security You Can Trust.png",
      },
      {
        title: "Proactive Support & Growth Insights",
        description:
          "Identify opportunities for campaign optimization, detect potential roadblocks early, and uncover upsell possibilities like premium coaching packages or advanced marketing services. AIplacers transforms your operations into a growth engine.",
        icon: "Eye",
        gradient: "from-orange-500 to-red-500",
          image: "/use-cases/coachingAndMarketing/Proactive Support & Growth Insights.png",
        reverse: true,
      },
      {
        title: "Empower Your Team, Reduce Burnout",
        description:
          "Equip your coaches and marketers with automated performance insights, coaching tools, and personalized guidance. Lower stress levels, boost morale, and retain top talent in competitive industries.",
        icon: "Users",
        gradient: "from-indigo-500 to-purple-500",
        image: "/use-cases/coachingAndMarketing/Empower Your Team, Reduce Burnout.png",
      },
      {
        title: "Drive Conversions and Client Loyalty",
        description:
          "Increase campaign ROI, grow client retention rates, and expand your customer base. AIplacers’ AI-powered analytics ensure every interaction drives measurable success and long-term relationships.",
        icon: "Calendar",
        gradient: "from-teal-500 to-blue-500",
        image: "/use-cases/coachingAndMarketing/Drive Conversions and Client Loyalty.png",
        reverse: true,
      },
    ],
  },
  "accounting-and-recruitment": {
    hero: {
      titleA: "AI-Powered Accounting & Recruitment Conversations:",
      titleB: "Put Clients First",
      description:
        "Transform your accounting and recruitment contact centers into hubs of precision, speed, and reliability. Deliver accurate financial insights, seamless candidate experiences, and faster responses that strengthen client trust and drive business growth.",
    },
    benefits: {
      title: "Why Choose AIplacers for Accounting & Recruitment?",
      content: [
        {
          title: "Seamless AI Integration",
          description:
            "Works effortlessly with your accounting software, ATS, and CRM tools for smooth adoption.",
          icon: "Zap",
          gradient: "from-blue-500 to-cyan-500",
        },
        {
          title: "Actionable Analytics",
          description:
            "Turn every conversation into insights that refine hiring strategies, improve financial reporting, and enhance overall operations.",
          icon: "BarChart3",
          gradient: "from-green-500 to-emerald-500",
        },
        {
          title: "Scalable & Reliable",
          description:
            "Built to handle high recruitment seasons, growing client lists, and complex accounting tasks without disruptions.",
          icon: "TrendingUp",
          gradient: "from-purple-500 to-pink-500",
        },
        {
          title: "Client-Centered Design",
          description:
            "Every feature is tailored to improve financial management, hiring outcomes, and long-term business relationships.",
          icon: "Heart",
          gradient: "from-orange-500 to-red-500",
        },
      ],
    },
    how: {
      title: "How AIplacers Helps Accounting & Recruitment Contact Centers",
      description:
        "AIplacers empowers firms and agencies with AI-driven tools to streamline processes, respond quickly to queries, and personalize interactions. Whether it’s clarifying tax details, managing invoices, sourcing candidates, or scheduling interviews, our platform ensures every conversation is efficient, accurate, and impactful.",
      badges: [
        { icon: "Shield", label: "Compliance Ready" },
        { icon: "Lock", label: "Secure Data Handling" },
      ],
      image: "/use-cases/accountingAndRecruitment/How AIplacers Helps Accounting & Recruitment Contact Centers.png",
    },
    features: [
      {
        title: "AI-Powered Client & Candidate Conversations",
        description:
          "Engage clients and candidates instantly with intelligent recommendations, instant answers, and proactive alerts. From financial consultations to recruitment follow-ups, AIplacers ensures every interaction is smooth and professional.",
        icon: "MessageSquare",
        gradient: "from-blue-500 to-cyan-500",
        image: "/use-cases/accountingAndRecruitment/AI-Powered Client & Candidate Conversations.png",
      },
      {
        title: "Faster Resolutions, Greater Efficiency",
        description:
          "Time is critical in accounting and hiring. Our AI-guided routing and real-time support minimize delays, resolve issues on the first contact, and help you close deals or fill positions faster.",
        icon: "Clock",
        gradient: "from-green-500 to-emerald-500",
        image: "/use-cases/accountingAndRecruitment/Faster Resolutions, Greater Efficiency.png",
        reverse: true,
      },
      {
        title: "Compliance and Data Security You Can Trust",
        description:
          "Sensitive financial and candidate information demands the highest security. AIplacers safeguards data with robust encryption, automatic redaction, and adherence to industry compliance standards.",
        icon: "Shield",
        gradient: "from-purple-500 to-pink-500",
        image: "/use-cases/accountingAndRecruitment/Compliance and Data Security You Can Trust.png",
      },
      {
        title: "Proactive Support & Strategic Insights",
        description:
          "Spot hiring trends, forecast financial challenges, and uncover upsell opportunities for premium services. AIplacers turns your contact center into a proactive growth and advisory engine.",
        icon: "Eye",
        gradient: "from-orange-500 to-red-500",
        image: "/use-cases/accountingAndRecruitment/Proactive Support & Strategic Insights.png",
        reverse: true,
      },
      {
        title: "Empower Your Team, Reduce Burnout",
        description:
          "Provide your accountants and recruiters with automated evaluations, skill-gap analysis, and personalized coaching. Minimize stress, improve efficiency, and retain top performers.",
        icon: "Users",
        gradient: "from-indigo-500 to-purple-500",
        image: "/use-cases/accountingAndRecruitment/Empower Your Team, Reduce Burnout.png",
      },
      {
        title: "Drive Revenue and Build Stronger Relationships",
        description:
          "Boost client retention, improve hiring success rates, and unlock new revenue streams. With AIplacers’ advanced analytics, every conversation becomes a stepping stone toward growth and success.",
        icon: "Calendar",
        gradient: "from-teal-500 to-blue-500",
          image: "/use-cases/accountingAndRecruitment/Drive Revenue and Build Stronger Relationships.png",
        reverse: true,
      },
    ],
  },
  "automobile-and-car-dealership": {
    hero: {
      titleA: "AI-Powered Automobile Conversations:",
      titleB: "Put Customers First",
      description:
        "Transform your automobile and car dealership contact center into a hub of speed, personalization, and trust. Deliver seamless customer experiences, faster vehicle inquiries, and tailored recommendations that convert interest into sales and loyal buyers.",
    },
    benefits: {
      title: "Why Choose AIplacers for Automobile & Car Dealership?",
      content: [
        {
          title: "Seamless AI Integration",
          description:
            "Works effortlessly with your CRM, inventory management, and sales platforms for smooth adoption.",
          icon: "Zap",
          gradient: "from-blue-500 to-cyan-500",
        },
        {
          title: "Actionable Analytics",
          description:
            "Turn every customer conversation into insights that refine sales strategies, marketing campaigns, and service processes.",
          icon: "BarChart3",
          gradient: "from-green-500 to-emerald-500",
        },
        {
          title: "Scalable & Reliable",
          description:
            "Built to handle high showroom traffic, seasonal promotions, and growing customer demands without interruptions.",
          icon: "TrendingUp",
          gradient: "from-purple-500 to-pink-500",
        },
        {
          title: "Customer-Centered Design",
          description:
            "Every feature is crafted to make car buying, servicing, and follow-ups smooth and memorable.",
          icon: "Heart",
          gradient: "from-orange-500 to-red-500",
        },
      ],
    },
    how: {
      title: "How AIplacers Helps Automobile & Car Dealership Contact Centers",
      description:
        "AIplacers equips your sales and service teams with AI-powered tools to streamline inquiries, track leads, and provide personalized vehicle recommendations. Whether it’s a test drive request, financing question, or service follow-up, our platform ensures every interaction builds confidence and accelerates sales.",
      badges: [
        { icon: "Shield", label: "Data Privacy Ready" },
        { icon: "Lock", label: "End-to-End Encryption" },
      ],
      image: "/use-cases/automobileAndCarDealership/How AIplacers Helps Automobile & Car Dealership Contact Centers.png",
    },
    features: [
      {
        title: "AI-Powered Customer Conversations",
        description:
          "Engage potential buyers and service clients instantly with intelligent prompts, instant answers, and proactive suggestions. From model comparisons to maintenance scheduling, AIplacers makes every conversation impactful and easy.",
        icon: "MessageSquare",
        gradient: "from-blue-500 to-cyan-500",
        image: "/use-cases/automobileAndCarDealership/AI-Powered Customer Conversations.png",
      },
      {
        title: "Faster Resolutions, More Sales",
        description:
          "In automotive sales, timing is everything. Our AI-guided routing and live support minimize delays, help close deals faster, and reduce lost opportunities.",
        icon: "Clock",
        gradient: "from-green-500 to-emerald-500",
        image: "/use-cases/automobileAndCarDealership/Faster Resolutions, More Sales.png",
        reverse: true,
      },
      {
        title: "Compliance and Data Security You Can Trust",
        description:
          "Automobile sales involve sensitive customer and financial data. AIplacers protects it with strong encryption, automatic redaction, and full compliance with data privacy standards.",
        icon: "Shield",
        gradient: "from-purple-500 to-pink-500",
        image: "/use-cases/automobileAndCarDealership/Compliance and Data Security You Can Trust.png",
      },
      {
        title: "Proactive Support & Market Insights",
        description:
          "Predict buying trends, identify upsell opportunities like extended warranties or accessories, and uncover service follow-up needs. AIplacers transforms your contact center into a revenue-driving engine.",
        icon: "Eye",
        gradient: "from-orange-500 to-red-500",
        image: "/use-cases/automobileAndCarDealership/Proactive Support & Market Insights.png",
        reverse: true,
      },
      {
        title: "Empower Your Team, Reduce Turnover",
        description:
          "Provide your sales and service teams with automated evaluations, real-time coaching, and performance insights. Reduce stress, boost morale, and retain top talent.",
        icon: "Users",
        gradient: "from-indigo-500 to-purple-500",
        image: "/use-cases/automobileAndCarDealership/Empower Your Team, Reduce Turnover.png",
      },
      {
        title: "Drive Conversions and Customer Loyalty",
        description:
          "Increase test drives, improve closing rates, and enhance customer retention. AIplacers’ advanced analytics and AI-driven tools optimize every touchpoint to grow your dealership’s success.",
        icon: "Calendar",
        gradient: "from-teal-500 to-blue-500",
        image: "/use-cases/automobileAndCarDealership/Drive Conversions and Customer Loyalty.png",
        reverse: true,
      },
    ],
  },
};

export function getUseCaseContent(slug: string): UseCaseContent | null {
  const match = industries.find((i) => slugify(i.name) === slug);
  if (!match) return null;

  if (data[slug]) return data[slug];
  return null;
}

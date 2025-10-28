import {
  Stethoscope,
  ShoppingCart,
  Plane,
  Home,
  CreditCard,
  GraduationCap,
  Truck,
  Headset,
  Shield,
  Megaphone,
  Briefcase,
  Car,
} from "lucide-react";

export function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export const industries = [
  {
    name: "Healthcare & Clinics",
    icon: Stethoscope,
    gradient: "from-red-500 to-pink-500",
    features: [
      "Appointment booking and reminders",
      "Patient pre-screening before visits",
      "Post-care follow-ups and satisfaction surveys",
    ],
  },
  {
    name: "E-commerce & Retail",
    icon: ShoppingCart,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Voice-based order tracking and delivery updates",
      "Handling return/exchange requests",
      "Personalized product recommendations over calls",
    ],
  },
  {
    name: "Hospitality & Travel",
    icon: Plane,
    gradient: "from-green-500 to-emerald-500",
    features: [
      "Hotel and restaurant reservation confirmations",
      "Automated check-in reminders and upgrades",
      "Travel itinerary updates and booking support",
    ],
  },
  {
    name: "Real Estate",
    icon: Home,
    gradient: "from-orange-500 to-red-500",
    features: [
      "Qualify property leads with scripted calls",
      "Schedule site visits and open house appointments",
      "Provide instant property details and financing options",
    ],
  },
  {
    name: "Banking & Financial Services",
    icon: CreditCard,
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Automate loan inquiry and eligibility checks",
      "Payment reminders and EMI notifications",
      "Fraud alerts and account information assistance",
    ],
  },
  {
    name: "Education & EdTech",
    icon: GraduationCap,
    gradient: "from-indigo-500 to-blue-500",
    features: [
      "Handle admission inquiries and course details",
      "Remind students about classes, exams, or deadlines",
      "Collect feedback from parents and students",
    ],
  },
  {
    name: "Logistics & Transportation",
    icon: Truck,
    gradient: "from-yellow-500 to-orange-500",
    features: [
      "Delivery updates and pickup confirmations",
      "Driver assistance with navigation or instructions",
      "Customer feedback collection after service",
    ],
  },
  {
    name: "BPO",
    icon: Headset,
    gradient: "from-teal-500 to-emerald-500",
    features: [
      "Automate workflows for faster client handling",
      "Enhance customer satisfaction with AI tools",
      "Reduce operational costs through smart solutions",
    ],
  },
  {
    name: "Insurance",
    icon: Shield,
    gradient: "from-slate-500 to-indigo-500",
    features: [
      "Streamline claims with automated processing",
      "Improve risk assessment with data analytics",
      "Boost client trust using AI-driven insights",
    ],
  },
  {
    name: "Coaching & Marketing",
    icon: Megaphone,
    gradient: "from-fuchsia-500 to-rose-500",
    features: [
      "Personalize campaigns for higher engagement",
      "Analyze performance with real-time insights",
      "Optimize strategies using AI recommendations",
    ],
  },
  {
    name: "Accounting & Recruitment",
    icon: Briefcase,
    gradient: "from-cyan-500 to-blue-500",
    features: [
      "Simplify bookkeeping with automated tools",
      "Improve hiring through AI-driven screening",
      "Ensure accuracy with data-powered insights",
    ],
  },
  {
    name: "Automobile & Car Dealership",
    icon: Car,
    gradient: "from-amber-500 to-red-500",
    features: [
      "Automate sales and inventory management",
      "Enhance customer experience with AI tools",
      "Boost lead conversion through smart analytics",
    ],
  },
];

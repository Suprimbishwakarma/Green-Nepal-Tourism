const trek = [
  {
    id: 1,
    title: "Everest Base Camp Trek",
    description:
      "Journey to the foot of the world's highest peak through pristine Sherpa villages and breathtaking mountain landscapes.",
    image: "/src/assets/everest.jpg",
    duration: "14 Days",
    difficulty: "Moderate",
    groupSize: "Max 12",
    price: "$1,299",
  },
  {
    id: 2,
    title: "Annapurna Circuit Adventure",
    description:
      "Experience diverse landscapes from subtropical forests to alpine meadows, with stunning rhododendron blooms.",
    image: "/src/assets/annapurna.jpg",
    duration: "16 Days",
    difficulty: "Challenging",
    groupSize: "Max 10",
    price: "$1,499",
  },
  {
    id: 3,
    title: "Chitwan Wildlife Safari",
    description:
      "Explore Nepal's lush jungle paradise, home to rare one-horned rhinos, Bengal tigers, and exotic bird species.",
    image: "/src/assets/chitwan.jpg",
    duration: "4 Days",
    difficulty: "Easy",
    groupSize: "Max 8",
    price: "$599",
  },
  {
    id: 4,
    title: "Manaslu circuit trek",
    description:
      "Explore Nepal's lush jungle paradise, home to rare one-horned rhinos, Bengal tigers, and exotic bird species.",
    image: "/src/assets/homebackground.png",
    duration: "4 Days",
    difficulty: "Easy",
    groupSize: "Max 8",
    price: "$599",
  },
];

const sustainabilityFeatures = [
  {
    id: 1,
    icon: "🌱",
    title: "Carbon Neutral Treks",
    description:
      "Every trek is 100% carbon neutral. We offset emissions through reforestation projects in the Himalayas.",
  },
  {
    id: 2,
    icon: "♻️",
    title: "Zero Waste Policy",
    description:
      "We carry out all waste, use biodegradable products, and support local recycling initiatives.",
  },
  {
    id: 3,
    icon: "🤝",
    title: "Community Support",
    description:
      "10% of profits go directly to local communities for education, healthcare, and sustainable development.",
  },
  {
    id: 4,
    icon: "🏔️",
    title: "Trail Conservation",
    description:
      "Active participation in trail maintenance and mountain clean-up expeditions throughout the year.",
  },
];

const features = [
  {
    id: 1,
    icon: "🎯",
    title: "Expert Local Guides",
    description:
      "Our certified guides are born in the Himalayas, bringing authentic cultural insights and unmatched expertise.",
  },
  {
    id: 2,
    icon: "🛡️",
    title: "Safety First",
    description:
      "Comprehensive safety protocols, emergency evacuation insurance, and 24/7 support throughout your journey.",
  },
  {
    id: 3,
    icon: "🌍",
    title: "Cultural Immersion",
    description:
      "Authentic experiences with local communities, traditional homestays, and meaningful cultural exchanges.",
  },
  {
    id: 4,
    icon: "⭐",
    title: "Premium Quality",
    description:
      "High-quality equipment, comfortable accommodations, and carefully planned itineraries for the best experience.",
  },
];

const trustBadges = [
  { icon: "🌿", text: "100% Carbon Neutral" },
  { icon: "⭐", text: "500+ 5-Star Reviews" },
  { icon: "🏆", text: "Eco-Tourism Certified" },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    country: "United Kingdom",
    avatar: "SM",
    text: "An absolutely life-changing experience! The trek to Everest Base Camp was challenging but incredibly rewarding. What impressed me most was Green Nepal's commitment to sustainability and supporting local communities.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Chen",
    country: "Australia",
    avatar: "JC",
    text: "The Annapurna Circuit exceeded all expectations. Our guide was knowledgeable, the accommodations were comfortable, and knowing that our trip was carbon neutral made it even more special. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Maria Perez",
    country: "Spain",
    avatar: "MP",
    text: "The cultural village experience was profound. Living with local families and learning about their sustainable practices was eye-opening. Green Nepal truly walks the talk on eco-tourism.",
    rating: 5,
  },
];

export { trek, trustBadges, features, sustainabilityFeatures, testimonials };

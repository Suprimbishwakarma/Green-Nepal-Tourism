import { ebc_map } from "../assets/asset";
import {
  MdOutlineLocationOn,
  MdOutlineAccessTime,
  MdOutlineTerrain,
  MdOutlineShowChart,
  MdOutlineGroups,
  MdOutlineWbSunny
} from "react-icons/md";

const packageData = {
  "1": {
    title: "Everest Base Camp Trek",
    subtitle: "Journey to the foot of the worlds highest peak through pristine Sherpa villages and breathtaking mountain landscapes.",
    overview: {
      id: "overview",
      title: "Overview",
      content: [
        "Embark on a life-changing adventure to the foot of the world's highest peak with our premium Everest Base Camp Trek. This 14-day expedition is more than just a hike; it is a pilgrimage through the heart of the Khumbu region, immersing you in the rich traditions of the Sherpa people and the awe-inspiring grandeur of the Himalayas.",
        "Your journey begins with a scenic and adrenaline-pumping flight to Lukla, the gateway to the Everest region. From there, you will follow the footsteps of legendary mountaineers Sir Edmund Hillary and Tenzing Norgay. The trail winds through verdant rhododendron forests, crosses suspension bridges draped in colorful prayer flags, and ascends into the rugged alpine terrain.",
        "We have carefully designed this itinerary to allow for proper acclimatization, maximizing your chances of reaching Base Camp (5,364m) safely and comfortably. Along the way, you will visit the ancient Tengboche Monastery, witness the sunrise painting the summit of Everest from Kala Patthar (5,545m), and stand in the shadow of giants like Lhotse, Nuptse, and Ama Dablam.",
        "Whether you are seeking a physical challenge, spiritual connection, or simply the most spectacular views on Earth, the Everest Base Camp Trek with Green Nepal Tourism promises an unforgettable experience, supported by our expert local guides and commitment to sustainable travel."
      ],
      highlights: [
        "Experience the thrill of flying into Lukla's Tenzing-Hillary Airport, one of the world's most spectacular airstrips.",
        "Trek through the legendary Sagarmatha National Park, a UNESCO World Heritage site known for its unique flora and fauna.",
        "Immerse yourself in Sherpa culture while visiting ancient monasteries like Tengboche and exploring vibrant villages like Namche Bazaar.",
        "Reach the iconic Everest Base Camp (5,364m) and stand at the threshold of the Khumbu Icefall.",
        "Hike to the summit of Kala Patthar (5,545m) for the most comprehensive and breathtaking panoramic views of Mt. Everest.",
        "Witness a stunning assembly of Himalayan giants, including Lhotse, Nuptse, Ama Dablam, Thamserku, and Kantega."
      ],
      groupPricing: [
        { pax: "1-2 Person", price: 1350 },
        { pax: "3-6 Person", price: 1320 },
        { pax: "7-12 Person", price: 1299 },
      ],
    },
    itinerary: {
      id: "itinerary",
      title: "Detailed Itinerary",
      days: [
        { day: "Day 1", title: "Arrival in Kathmandu (1,350m)", desc: "Upon your arrival at Tribhuvan International Airport, our representative will warmly welcome you and transfer you to your hotel. We'll have a pre-trip briefing in the evening." },
        { day: "Day 2", title: "Kathmandu Valley Sightseeing and Preparation", desc: "Explore heritage sites like Swayambhunath and Boudhanath Stupa while we finalize permits and gear checks." },
        { day: "Day 3", title: "Fly to Lukla (2,860m) and Trek to Phakding (2,610m)", desc: "Scenic mountain flight followed by a gentle hike through Sherpa villages and farms. Trekking: 3-4 hours." },
        { day: "Day 4", title: "Trek from Phakding to Namche Bazaar (3,440m)", desc: "Cross the high Hillary suspension bridge and climb steeply to the bustling Sherpa capital. Trekking: 5-6 hours." },
        { day: "Day 5", title: "Acclimatization Day in Namche Bazaar", desc: "Hike to Everest View Hotel for panoramas of Everest and Ama Dablam. Explore Namche's local bakeries." },
        { day: "Day 6", title: "Trek from Namche Bazaar to Tengboche (3,860m)", desc: "Walk through rhododendron forests to reach the famous Tengboche Monastery, the spiritual heart of Khumbu." },
        { day: "Day 7", title: "Trek from Tengboche to Dingboche (4,410m)", desc: "Descend to the river and climb gradually into the high-altitude landscape of Dingboche. Trekking: 5-6 hours." },
        { day: "Day 8", title: "Acclimatization Day in Dingboche", desc: "Recommended hike to Nagerjun Hill for views of Makalu and Lhotse. Rest and enjoy the mountain air." },
        { day: "Day 9", title: "Trek from Dingboche to Lobuche (4,940m)", desc: "Follow the lateral moraine of the Khumbu Glacier. Pass the memorial dedicated to climbers. Trekking: 5-6 hours." },
        { day: "Day 10", title: "Trek to Gorak Shep (5,164m) and Everest Base Camp (5,364m)", desc: "The highlight! Reach the base of the world's highest peak. Return to Gorak Shep for the night. Trekking: 7-8 hours." },
        { day: "Day 11", title: "Hike to Kala Patthar (5,550m) and Trek to Pheriche (4,371m)", desc: "Sunrise views on Everest. Descend down the valley to Pheriche. Trekking: 7-8 hours." },
        { day: "Day 12", title: "Trek from Pheriche back to Namche Bazaar (3,440m)", desc: "Long day of descent through forests. Celebrate your success back in Namche. Trekking: 6-7 hours." },
        { day: "Day 13", title: "Trek from Namche Bazaar to Lukla (2,860m)", desc: "Final day on the trail. Enjoy a farewell dinner with your guide and porter crew in Lukla. Trekking: 6-7 hours." },
        { day: "Day 14", title: "Fly from Lukla to Kathmandu and Farewell", desc: "Return flight to Kathmandu. Rest or last-minute shopping before your flight home." },
      ],
    },
    map: {
      id: "map",
      title: "Trip Map",
      content: "This map details the 14-day trekking route through the Khumbu Valley to Everest Base Camp.",
      image: ebc_map,
    },
    inclusions: {
      id: "inclusions",
      title: "Cost Inclusions & Exclusions",
      items: [
        "Airport pick-up and drop-off service.",
        "Round-trip flights Kathmandu-Lukla-Kathmandu.",
        "Teahouse accommodation during the trek (twin sharing).",
        "Full board meals (Breakfast, Lunch, Dinner) during trek.",
        "Experienced local guide and porters.",
        "All necessary permits and entry fees."
      ],
      excludes: [
        "International visas and insurance.",
        "Personal trekking gear and equipment.",
        "Extra snacks, drinks, and charging fees.",
        "Tips for the trekking crew."
      ],
    },
    dates: {
      id: "dates",
      title: "Departure Dates & Availability",
      dates: [
        { date: "10 Mar 2026", price: "$1299", status: "Available" },
        { date: "25 Mar 2026", price: "$1299", status: "Filling Fast" },
      ],
    },
    info: {
      id: "info",
      title: "Essential Trip Information",
      content: [
        "**Physical Preparation:** Focus on cardiovascular training and leg strength. Try to do some practice hikes before arrival.",
        "**Acclimatization:** Our itinerary is designed with safety as priority. Never ignore symptoms of headache or nausea.",
        "**Best Season:** Spring (Mar-May) and Autumn (Sep-Nov) provide the most stable weather and clearest views."
      ],
    },
    faqs: {
      id: "faqs",
      title: "Frequently Asked Questions",
      questions: [
        { q: "How difficult is the trek?", a: "It is rated strenuous but manageable for most healthy people with decent fitness." },
        { q: "Is water safe?", a: "We recommend using purification tablets or UV sterilizers rather than buying bottled plastic." },
        { q: "What kind of food is available?", a: "Teahouses offer a variety of meals including the traditional Dal Bhat, pasta, pancakes, and eggs. Nutrition is key for trekking!" },
        { q: "Do I need insurance?", a: "Yes, comprehensive travel insurance that covers emergency helicopter evacuation up to 6,000m is mandatory." },
        { q: "Is there Wi-Fi on the trek?", a: "Yes, most teahouses offer Wi-Fi for a small fee, though it can be inconsistent as you go higher." }
      ],
    },
    reviews: {
      id: "reviews",
      title: "Client Reviews",
      reviews: [
        { user: "James Wilson, UK", rating: 5, comment: "Breathtaking experience. The best trip of my life! The guides were professional and very caring." },
        { user: "Sarah Thompson, Australia", rating: 5, comment: "Reaching Base Camp was a dream come true. Green Nepal Tourism made the whole journey flow seamlessly." },
        { user: "Michael Chen, Canada", rating: 5, comment: "Incredible views and wonderful culture. The Sherpa hospitality is something I will never forget." }
      ],
    },
    quickFacts: [
      { label: "Destination", value: "Nepal", icon: MdOutlineLocationOn },
      { label: "Duration", value: "14 Days", icon: MdOutlineAccessTime },
      { label: "Max Altitude", value: "5,545m", icon: MdOutlineTerrain },
      { label: "Difficulty", value: "Strenuous", icon: MdOutlineShowChart },
      { label: "Group Size", value: "2 - 12", icon: MdOutlineGroups },
      { label: "Best Season", value: "Mar-May, Sep-Nov", icon: MdOutlineWbSunny },
    ],
  },
  "2": { // Annapurna Circuit
    title: "Annapurna Circuit Adventure",
    subtitle: "Experience diverse landscapes from subtropical forests to alpine meadows, with stunning rhododendron blooms.",
    overview: {
      id: "overview",
      title: "Overview",
      content: [
        "The Annapurna Circuit is legendary in the trekking world, often cited as one of the best long-distance treks on the planet. This 16-day journey is a masterpiece of transition, taking you from the lush, subtropical lowlands of the Marshyangdi Valley to the high-altitude, wind-swept deserts of the Mustang region.",
        "What sets this trek apart is its incredible diversity. You will walk through terraced rice fields, dense rhododendron forests, and eventually emerge above the tree line into a landscape of stark, majestic beauty. The climax of the trek is the crossing of the Thorong La Pass at 5,416m, a challenging but profoundly rewarding feat.",
        "Along the way, you'll encounter a rich tapestry of cultures, from Hindu communities in the lower valleys to Tibetan Buddhist villages in the higher reaches. You will witness some of the world's most spectacular mountains, including the entire Annapurna Massif, Dhaulagiri, and Manaslu.",
        "Green Nepal Tourism ensures your safety and comfort throughout this epic traverse. Our specialized guides know the rhythms of the mountains and will lead you at a pace that allows you to fully absorb the wonders of the Annapurna region."
      ],
      highlights: [
        "Cross the legendary Thorong La Pass (5,416m), one of the highest trekking passes in the world.",
        "Experience the dramatic shift from lush green forests to the arid, high-altitude desert of the Mustang region.",
        "Visit the sacred Muktinath Temple, a holy pilgrimage site for both Hindus and Buddhists.",
        "Explore the world's deepest gorge, the Kali Gandaki, carved by the river between Annapurna and Dhaulagiri.",
        "Witness unparalleled views of Annapurna I, II, III, IV, Dhaulagiri, and Machhapuchhre (Fishtail).",
        "Soak in natural hot springs at Tatopani to soothe your weary muscles after the pass."
      ],
      groupPricing: [
        { pax: "1-2 Person", price: 1550 },
        { pax: "3-6 Person", price: 1520 },
        { pax: "7-12 Person", price: 1499 },
      ],
    },
    itinerary: {
      id: "itinerary",
      title: "Detailed Itinerary",
      days: [
        { day: "Day 1", title: "Arrival in Kathmandu (1,350m)", desc: "Welcome to Nepal! Upon arrival, we meet you at the airport and transfer you to your hotel. After some rest, we'll have an evening briefing about the Annapurna Circuit." },
        { day: "Day 2", title: "Drive from Kathmandu to Besisahar (760m)", desc: "A scenic journey via the Prithvi Highway, following the Trishuli and Marshyangdi rivers. Gateway to the circuit." },
        { day: "Day 3", title: "Drive to Chame (2,670m)", desc: "Navigate the dramatic road carved into cliffs with views of cascading waterfalls. Administrative center of Manang." },
        { day: "Day 4", title: "Trek from Chame to Pisang (3,300m)", desc: "Deep forests of pine and fir. Pass the sheer rock face of 'Heaven's Gate'. Views of Annapurna II. Trekking: 5-6 hours." },
        { day: "Day 5", title: "Trek from Pisang to Manang (3,540m)", desc: "Take the higher route via Ghyaru for better vistas. Landscape turns stark and dry. Trekking: 6-7 hours." },
        { day: "Day 6", title: "Acclimatization Day in Manang", desc: "Hike to Gangapurna Lake or Ice Lake. Manang is the perfect cultural hub for Buddhist tradition." },
        { day: "Day 7", title: "Trek from Manang to Yak Kharka (4,110m)", desc: "Leave the tree line for alpine pastures. Spot blue sheep and yaks grazing. Trekking: 4-5 hours." },
        { day: "Day 8", title: "Trek from Yak Kharka to Thorong Phedi (4,450m)", desc: "Reach the foot of the pass. Rest early for tomorrow's big climb. Trekking: 3-4 hours." },
        { day: "Day 9", title: "Cross Thorong La (5,416m) and descend to Muktinath (3,760m)", desc: "Early start for the pass! Breathtaking 360-degree views before descending to sacred Muktinath. Trekking: 8-10 hours." },
        { day: "Day 10", title: "Trek to Jomsom via Kagbeni (2,720m)", desc: "Enter the windy Mustang valley. Visit the medieval village of Kagbeni and its mud-brick architecture. Trekking: 5-6 hours." },
        { day: "Day 11", title: "Drive from Jomsom to Tatopani (1,190m)", desc: "Fascinating drive down the deepest gorge in the world. Relax in riverside natural hot springs." },
        { day: "Day 12", title: "Trek from Tatopani to Ghorepani (2,860m)", desc: "Enter lush rhododendron forests. Long ascent through beautiful Gurung villages. Trekking: 7-8 hours." },
        { day: "Day 13", title: "Poon Hill Sunrise and Trek to Tadapani (2,630m)", desc: "Iconic sunrise over Dhaulagiri and Annapurna. Walk through moss-covered magical forests. Trekking: 6-7 hours." },
        { day: "Day 14", title: "Trek to Ghandruk and Drive to Pokhara", desc: "Visit the traditional village of Ghandruk before driving to the lakeside paradise, Pokhara. Trekking: 4 hours." },
        { day: "Day 15", title: "Drive/Fly from Pokhara to Kathmandu", desc: "Return to the capital. Use the time for souvenir shopping in Thamel." },
        { day: "Day 16", title: "Final Departure", desc: "Transfer to airport for your flight home. Farewell!" },
      ]
    },
    map: {
      id: "map",
      title: "Trip Map",
      content: "Complete map of the Annapurna Circuit from the lowlands of Lamjung to the high desert of Mustang.",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop",
    },
    inclusions: {
      id: "inclusions", title: "Cost Inclusions & Exclusions",
      items: ["Airport transfers", "Hotels in KTM/Pokhara", "Teahouses on trek", "Full meals", "Expert guide/porter", "Permits (ACAP/TIMS)"],
      excludes: ["International airfare", "Travel insurance", "Tipping", "Personal trekking gear"]
    },
    dates: {
      id: "dates", title: "Departure Dates & Availability",
      dates: [{ date: "15 Apr 2026", price: "$1499", status: "Open" }, { date: "10 Oct 2026", price: "$1550", status: "Available" }]
    },
    info: {
      id: "info", title: "Essential Trip Information",
      content: [
        "**Difficulty:** Challenging due to the high pass. Previous trekking experience is highly recommended.",
        "**Acclimatization:** We include a rest day in Manang to ensure a safe crossing of Thorong La.",
        "**Weather:** Be prepared for extreme wind in the Kali Gandaki valley and cold at the pass."
      ]
    },
    faqs: {
      id: "faqs", title: "Frequently Asked Questions",
      questions: [
        { q: "How cold is the pass?", a: "Early morning at Thorong La can be -15°C with wind chill. Layers are essential." },
        { q: "Do I need a special permit?", a: "Yes, you need the ACAP (Annapurna Conservation Area Permit) and TIMS card, which we handle for you." },
        { q: "What is the best time for this trek?", a: "Spring (March-May) for flowers and Autumn (September-November) for crystal clear mountain views." },
        { q: "Are there charging spots?", a: "Yes, most teahouses allow you to charge electronics for a small fee of US$2-5 per device." },
        { q: "Is the road construction a problem?", a: "While there is some road development, we use alternative trails to keep you off the dusty roads as much as possible." }
      ]
    },
    reviews: {
      id: "reviews", title: "Client Reviews",
      reviews: [
        { user: "Alex Johnson, USA", rating: 5, comment: "Breathtaking landscapes every single day. The best organization I've ever traveled with!" },
        { user: "Emma Schmidt, Germany", rating: 5, comment: "The diversity of this trek is unbeatable. From jungles to deserts in two weeks. Highly recommend." },
        { user: "Liam Brown, Australia", rating: 5, comment: "Thorong La was the hardest thing I've ever done, but the feeling at the top was worth every step." }
      ]
    },
    quickFacts: [
      { label: "Destination", value: "Annapurna", icon: MdOutlineLocationOn },
      { label: "Duration", value: "16 Days", icon: MdOutlineAccessTime },
      { label: "Max Altitude", value: "5,416m", icon: MdOutlineTerrain },
      { label: "Difficulty", value: "Challenging", icon: MdOutlineShowChart },
      { label: "Group Size", value: "2 - 10", icon: MdOutlineGroups },
      { label: "Best Season", value: "Mar-May, Oct-Dec", icon: MdOutlineWbSunny },
    ],
  },
  "3": { // Chitwan
    title: "Chitwan Wildlife Safari",
    subtitle: "Explore Nepal's lush jungle paradise, home to rare one-horned rhinos, Bengal tigers, and exotic bird species.",
    overview: {
      id: "overview",
      title: "Overview",
      content: [
        "Chitwan National Park, a UNESCO World Heritage site, is the ultimate jungle adventure in South Asia. This 4-day safari takes you deep into the subtropical inner Terai of Nepal, where primeval forests meet grasslands and rivers.",
        "Unlike the high-altitude treks, Chitwan offers a relaxed but thrilling experience. You will explore the wilderness by jeep, canoe, and on foot, searching for the iconic Greater One-horned Rhinoceros and the elusive Royal Bengal Tiger. The park is also a sanctuary for gharial crocodiles, sloth bears, and over 500 species of birds.",
        "Beyond the wildlife, you will immerse yourself in Tharu culture. The Tharu people are the indigenous inhabitants of the Terai, known for their unique architecture and traditional dances. Staying in an eco-lodge on the edge of the park provides a perfect balance of comfort and connection to nature."
      ],
      highlights: [
        "Jeep safari deep into the core areas of the National Park.",
        "Canoe ride on the Rapti River to spot crocodiles and aquatic birds.",
        "Guided jungle walk for an intimate encounter with nature.",
        "Visit to the Elephant Breeding Center or gharial nursery.",
        "Traditional Tharu cultural dance performance in the evening.",
        "Stunning jungle sunset over the Rapti River."
      ],
      groupPricing: [{ pax: "1-2 Person", price: 599 }, { pax: "3-6 Person", price: 550 }],
    },
    itinerary: {
      id: "itinerary",
      title: "Detailed Itinerary",
      days: [
        { day: "Day 1", title: "Arrival in Chitwan", desc: "Welcome to the jungle! Upon arrival at Sauraha bus station or Bharatpur airport, you will be transferred to your wildlife lodge. Enjoy a welcome drink followed by lunch. In the afternoon, visit the local Tharu village to learn about their unique lifestyle. Enjoy a stunning sunset over the Rapti River." },
        { day: "Day 2", title: "Full Day Jungle Activities", desc: "Start your morning with a serene canoe ride on the Rapti River, spotting crocodiles and exotic birds. Follow this with a guided jungle walk to look for rhinos. After lunch, embark on an exciting Jeep Safari into the core area of the national park. End the day with a traditional Tharu cultural dance performance." },
        { day: "Day 3", title: "Bird Watching & Relaxation", desc: "An early morning bird-watching tour led by an expert naturalist. Chitwan is a haven for migratory and native birds. The rest of the morning is free for cycling around Sauraha or visiting the Elephant Breeding Center. Afternoon at leisure or optional extra safari." },
        { day: "Day 4", title: "Departure from Chitwan", desc: "After a final breakfast at the lodge, transfer to your departure point. Your safari adventure ends here." },
      ]
    },
    map: {
      id: "map",
      title: "Trip Map",
      content: "Explore the different zones of Chitwan National Park and Safari routes.",
      image: "https://images.unsplash.com/photo-1581023700445-5d930268ce2d?q=80&w=2000&auto=format&fit=crop",
    },
    inclusions: {
      id: "inclusions", title: "Cost Inclusions & Exclusions",
      items: ["Transport from KTM", "Wildlife resort stay", "All meals", "Safari activities", "National Park fees", "Expert naturalist guide"],
      excludes: ["Bar bills", "Personal expenses", "Tips"]
    },
    dates: {
      id: "dates", title: "Departure Dates & Availability",
      dates: [{ date: "WeeklyDepartures", price: "$599", status: "Open Year Round" }]
    },
    info: {
      id: "info", title: "Essential Trip Information",
      content: [
        "**What to bring:** Wear earth-toned clothing (green, brown, beige) to blend in with the environment. Bring binoculars, high SPF sunscreen, insect repellent, and a good sun hat.",
        "**Best Season:** October to March offers the best visibility as the tall grass is cut. April to June is hot but excellent for tiger sightings as they come to water holes."
      ]
    },
    faqs: {
      id: "faqs", title: "Frequently Asked Questions",
      questions: [
        { q: "Is it safe?", a: "Yes, our guides are highly trained experts in wildlife behavior and safety protocols. Always follow your guide's instructions during jungle walks." },
        { q: "Can I see tigers?", a: "Tiger sightings are rare and lucky, but Chitwan has a healthy population. Your best chances are during the hotter months of April and May." },
        { q: "What should I wear?", a: "Earth colors like olive, khaki, or brown. Avoid bright whites or reds which can alert or disturb animals." },
        { q: "Is there malaria in Chitwan?", a: "The risk is low, but we always recommend using repellent and checking with your doctor before traveling." },
        { q: "Are the animals in cages?", a: "Absolutely not. This is a National Park where animals roam free in their natural habitat." }
      ]
    },
    reviews: {
      id: "reviews",
      title: "Client Reviews",
      reviews: [
        { user: "Sarah Mitchell, UK", rating: 5, comment: "I saw three rhinos in one day! The eco-lodge was fantastic and the food was delicious. A perfect break from the mountains." },
        { user: "Daniel Martinez, Spain", rating: 5, comment: "The canoe ride at sunrise was the most peaceful experience of my life. The guides are incredibly knowledgeable." },
        { user: "Chloe Evans, Canada", rating: 4, comment: "Wonderful wildlife experience. Saw a sloth bear and many crocodiles. The cultural dance was also very interesting." }
      ]
    },
    quickFacts: [
      { label: "Destination", value: "Terai Region", icon: MdOutlineLocationOn },
      { label: "Duration", value: "4 Days", icon: MdOutlineAccessTime },
      { label: "Max Altitude", value: "150m", icon: MdOutlineTerrain },
      { label: "Difficulty", value: "Easy", icon: MdOutlineShowChart },
      { label: "Group Size", value: "2 - 12", icon: MdOutlineGroups },
      { label: "Best Season", value: "Oct-Mar", icon: MdOutlineWbSunny },
    ],
  },
  "4": { // Manaslu
    title: "Manaslu Circuit Trek",
    subtitle: "A remote and culturally rich circuit around the 'Mountain of the Spirit', offering a quieter alternative to Annapurna.",
    overview: {
      id: "overview",
      title: "Overview",
      content: [
        "The Manaslu Circuit is one of Nepal's most exquisite restricted area treks. Circling the world's 8th highest mountain, Manaslu (8,163m), this 15-day journey offers the perfect combination of high-altitude scenery and deep cultural immersion.",
        "Often described as the 'new Annapurna', Manaslu remains far less crowded while offering some of the most dramatic mountain scenery in the world. The trail follows the Buri Gandaki river through deep gorges and eventually opens up into the high-altitude Tibetan-influenced world of Nupri. The pass crossing over the Larkya La (5,106m) provides one of the best mountain panoramas in the Himalayas.",
        "Because it is a restricted area, we handle all the special permits and ensure you are accompanied by a licensed professional. You will stay in local teahouses that have only recently opened to the outside world, providing an authentic glimpse into the lives of mountain people. This is a trek for those seeking the 'real' Nepal, away from the more commercialized routes."
      ],
      highlights: [
        "Circle Mt. Manaslu (8,163m), the 8th highest peak on Earth, through a restricted area trek.",
        "Cross the challenging Larkya La Pass (5,106m) with views of Himlung, Annapurna II, and Cheo Himal.",
        "Explore remote Buddhist villages like Samagaon and Samdo near the Tibetan border.",
        "Witness the dramatic vertical transition from subtropical bamboo forests to massive glacial moraines.",
        "Visit the ancient Pungyen Gompa for a stunning view of Manaslu's east face.",
        "Experience the authentic hospitality of the Tsum and Nupri valley communities."
      ],
      groupPricing: [{ pax: "1-2 Person", price: 1350 }, { pax: "3-6 Person", price: 1299 }],
    },
    itinerary: {
      id: "itinerary",
      title: "Detailed Itinerary",
      days: [
        { day: "Day 1", title: "Arrival in Kathmandu", desc: "Welcome to Nepal! We meet you at the airport and transfer to your hotel. Evening briefing about the Manaslu restricted area regulations." },
        { day: "Day 2", title: "Preparation and Permitting", desc: "While we finalize your restricted area permits (requiring 2-3 people with original passports), you can explore Kathmandu's heritage sites." },
        { day: "Day 3", title: "Drive to Machha Khola (930m)", desc: "A long drive through the hills of Gorkha. The road follows the Trishuli and then the Buri Gandaki river. 8-9 hours drive." },
        { day: "Day 4", title: "Trek to Jagat (1,340m)", desc: "The trail follows the river and crosses several suspension bridges. We pass through 'Khorlabesi' and 'Tatopani' hot springs to reach the entry point for the Manaslu Conservation Area." },
        { day: "Day 5", title: "Trek to Deng (1,860m)", desc: "Ascend through rocky trails and deep forests. The valley opens up to show the first glimpses of Shringi Himal. Pass through Philim village." },
        { day: "Day 6", title: "Trek to Namrung (2,630m)", desc: "Cross the Buri Gandaki several times. The landscape turns Tibetan as we see mani walls and prayer flags. Namrung offers great views of Ganesh Himal." },
        { day: "Day 7", title: "Trek to Samagaon (3,530m)", desc: "Passing through the beautiful village of Lho, we see the massive dual peak of Manaslu. Arrive in the large village of Samagaon." },
        { day: "Day 8", title: "Acclimatization in Samagaon", desc: "A rest day to adjust. Optional hike to Manaslu Base Camp or Pungyen Gompa for spectacular mountain views." },
        { day: "Day 9", title: "Trek to Samdo (3,860m)", desc: "A shorter walk to the last village before the Tibetan border. Samdo is a hub for trade with Tibet." },
        { day: "Day 10", title: "Trek to Dharmasala (4,460m)", desc: "Climb towards the high pass. Dharmasala is a simple lodge meant for the pass crossing preparation." },
        { day: "Day 11", title: "Cross Larkya La (5,106m) and descend to Bhimthang (3,720m)", desc: "The big day! An early start to reach the colorful pass. Spectacular views of Annapurna II and Himlung. A steep descent brings us to Bhimthang." },
        { day: "Day 12", title: "Trek to Tilije (2,300m)", desc: "Descend through breathtaking pine and rhododendron forests with views of the Manaslu range from the rear." },
        { day: "Day 13", title: "Trek to Dharapani and Drive to Besisahar", desc: "Follow the trail to join the Annapurna Circuit road head at Dharapani and drive to Besisahar." },
        { day: "Day 14", title: "Drive back to Kathmandu", desc: "Return journey to the capital for a final celebratory dinner." },
        { day: "Day 15", title: "Final Departure", desc: "Our staff will transfer you to the airport. Farewell!" },
      ]
    },
    map: { id: "map", title: "Trip Map", content: "Detailed map circling the majestic Manaslu massif and the high Larkya La pass.", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop" },
    inclusions: {
      id: "inclusions", title: "Cost Inclusions & Exclusions",
      items: ["Special Restricted Area Permit", "MCAP and ACAP fees", "Professional licensed guide (Restricted area specialist)", "Porter service", "All meals and stays during trek"],
      excludes: ["International airfare", "Travel insurance with rescue", "Personal expenses and gear", "Tips for the crew"]
    },
    dates: { id: "dates", title: "Departure Dates & Availability", dates: [{ date: "15 Sep 2026", price: "$1299", status: "Guaranteed" }, { date: "10 Oct 2026", price: "$1350", status: "Available" }] },
    info: {
      id: "info", title: "Essential Trip Information",
      content: [
        "**Restricted Area:** Manaslu is a restricted area. You MUST be at least 2 people to obtain a permit, and you must have a licensed guide.",
        "**Fitness Level:** This is a strenuous high-altitude trek. You should be comfortable walking 6-8 hours a day for two weeks.",
        "**Culture:** Be prepared for a very authentic Tibetan-Buddhist experience in the upper Nupri region."
      ]
    },
    faqs: {
      id: "faqs",
      title: "Frequently Asked Questions",
      questions: [
        { q: "Can I do this solo?", a: "No, solo trekking is strictly forbidden in the Manaslu restricted area. You need a guide and at least one other trekker." },
        { q: "How crowded is it?", a: "Much less crowded than Everest or Annapurna. You will see far fewer trekkers on the trail." },
        { q: "Do I need technical skills?", a: "No, but you need to be very fit and comfortable with long descents and high altitudes." },
        { q: "Is the pass dangerous?", a: "The Larkya La is weather-dependent. Our guides monitor conditions closely to ensure a safe crossing." },
        { q: "How is the accommodation?", a: "LODGES are simpler than on the Annapurna route, but they are improving every year." }
      ]
    },
    reviews: {
      id: "reviews",
      title: "Client Reviews",
      reviews: [
        { user: "David Hoffman, Germany", rating: 5, comment: "Pristine and quiet. The perfect alternative for those who find Annapurna too busy. The pass day was magical." },
        { user: "Sofia Rossi, Italy", rating: 5, comment: "Authentic culture and incredible views of Manaslu. Larkya La was tough but the organization was top-notch." },
        { user: "Mark Wilson, New Zealand", rating: 5, comment: "The best circuit trek in Nepal. A true adventure away from the crowds." }
      ]
    },
    quickFacts: [
      { label: "Destination", value: "Gorkha/Manaslu", icon: MdOutlineLocationOn },
      { label: "Duration", value: "15 Days", icon: MdOutlineAccessTime },
      { label: "Max Altitude", value: "5,106m", icon: MdOutlineTerrain },
      { label: "Difficulty", value: "Strenuous", icon: MdOutlineShowChart },
      { label: "Group Size", value: "2 - 10", icon: MdOutlineGroups },
      { label: "Best Season", value: "Oct-Nov", icon: MdOutlineWbSunny },
    ],
  },
  "5": { // Langtang
    title: "Langtang Valley Trek",
    subtitle: "Discover the 'Valley of Glaciers' with unique Tamang culture and stunning peak views near Kathmandu.",
    overview: {
      id: "overview",
      title: "Overview",
      content: [
        "The Langtang Valley trek is a beautifully intimate experience, offering some of the most spectacular scenery in Nepal without the crowds. Located just north of Kathmandu, it is the most accessible high-altitude trek.",
        "Known as the 'Valley of Glaciers', Langtang is home to the Tamang people whose culture remains deeply rooted in Tibetan traditions. You will walk through ancient forests of oak and rhododendron, cross glacial rivers, and eventually reach the wide alpine valley of Kyanjin, surrounded by dramatic 7,000m peaks.",
        "This trek visits the communities most affected by the 2015 earthquake, showing the incredible resilience and rebirth of these villages. Since the reconstruction, the trails and lodges are better than ever. Whether it's your first trek or a shorter high-altitude escape, Langtang offers a perfect balance of challenge and beauty."
      ],
      highlights: [
        "Trek through Langtang National Park, Nepal's first Himalayan national park.",
        "Reach Kyanjin Gompa (3,830m), an ancient monastery surrounded by towering snow-capped peaks.",
        "Summit Kyanjin Ri (4,773m) or Tserko Ri (5,000m) for a 360-degree mountain panorama.",
        "Experience authentic Tamang hospitality and unique cultural traditions.",
        "Walk through lush forests home to the rare and beautiful Red Panda.",
        "Witness the spectacular rebirth of Langtang Village after the 2015 earthquake."
      ],
      groupPricing: [{ pax: "1-2 Person", price: 850 }, { pax: "3-6 Person", price: 800 }]
    },
    itinerary: {
      id: "itinerary",
      title: "Detailed Itinerary",
      days: [
        { day: "Day 1", title: "Drive to Syabrubesi (1,550m)", desc: "A scenic 7-8 hour drive north from Kathmandu through hills and small towns. Syabrubesi is the starting point of our trek." },
        { day: "Day 2", title: "Trek to Lama Hotel (2,470m)", desc: "We follow the Langtang Khola river and climb steadily through forests of oak and maple. Keep an eye out for monkeys! Trekking: 5-6 hours." },
        { day: "Day 3", title: "Trek to Langtang Village (3,430m)", desc: "Continue through the forest as the valley opens up. Views of Langtang Lirung begin to dominate the horizon. Reach the newly rebuilt Langtang village. Trekking: 5-6 hours." },
        { day: "Day 4", title: "Trek to Kyanjin Gompa (3,870m)", desc: "A short but high-altitude climb through yak pastures and mani walls to reach the beautiful settlement of Kyanjin. Trekking: 3-4 hours." },
        { day: "Day 5", title: "Exploration in Kyanjin: Summit Kyanjin Ri (4,773m)", desc: "Hike to the top of Kyanjin Ri for an incredible 360-degree view of the Langtang mountains and glaciers. Visit the local yak cheese factory in the afternoon." },
        { day: "Day 6", title: "Optional Hike to Tserko Ri (5,000m)", desc: "For the adventurous, a longer hike to Tserko Ri offers even more dramatic vistas. Alternatively, relax and enjoy the serene atmosphere of the gompa." },
        { day: "Day 7", title: "Trek back to Lama Hotel", desc: "Begin the descent down the valley. The walk is mostly downhill and the air feels much richer as we return to the forest zone. Trekking: 6-7 hours." },
        { day: "Day 8", title: "Trek back to Syabrubesi", desc: "Final day on the trail. Follow the river back to Syabrubesi and enjoy a farewell dinner with your trekking crew. Trekking: 5-6 hours." },
        { day: "Day 9", title: "Drive back to Kathmandu", desc: "Return drive to the capital. Rest and enjoy your last evening in the bustling streets of Thamel." },
        { day: "Day 10", title: "Final Departure", desc: "Our staff will transfer you to the airport. Farewell and namaste!" },
      ]
    },
    map: { id: "map", title: "Trip Map", content: "A detailed view of the Langtang Valley route north of Kathmandu.", image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2000&auto=format&fit=crop" },
    inclusions: { id: "inclusions", title: "Cost Inclusions & Exclusions", items: ["Kathmandu airport transfers", "All teahouse stays (twin sharing)", "3 meals a day during trek", "Licensed guide and porter", "Langtang National Park permit and TIMS card"], excludes: ["International flights", "Nepal visa", "Personal insurance", "Extra drinks and snacks"] },
    dates: { id: "dates", title: "Departure Dates & Availability", dates: [{ date: "15 May 2026", price: "$850", status: "Open" }, { date: "10 Oct 2026", price: "$850", status: "Available" }] },
    info: {
      id: "info", title: "Essential Trip Information",
      content: [
        "**Difficulty:** Moderate. Excellent for beginners or those seeking a shorter high-altitude trek.",
        "**Best Season:** Mar-May for rhododendrons and Oct-Nov for crystal clear skies.",
        "**Cultural Respect:** Passing mani walls should always be done on the left side (clockwise direction)."
      ]
    },
    faqs: {
      id: "faqs",
      title: "Frequently Asked Questions",
      questions: [
        { q: "How difficult is Kyanjin Ri?", a: "It is a challenging uphill hike but very rewarding. No technical climbing is required." },
        { q: "Is it close to Kathmandu?", a: "Yes, it is the closest high-altitude trek. You can start walking on the same day you leave the capital." },
        { q: "Is the trail safe after the earthquake?", a: "Yes, the trail has been fully renovated and many new, safer lodges have been built." },
        { q: "What wildlife can I see?", a: "Red pandas are rare but live here. You will definitely see monkeys, variety of birds, and Himalayan thars." },
        { q: "Do I need a restricted permit?", a: "No, a standard National Park permit is sufficient for Langtang." }
      ]
    },
    reviews: {
      id: "reviews",
      title: "Client Reviews",
      reviews: [
        { user: "Emma Watson, UK", rating: 5, comment: "Intimate, beautiful, and the people were so welcoming. The best trek I've done in Nepal." },
        { user: "Klaus Müllner, Austria", rating: 5, comment: "The scenery in Kyanjin is like a bowl of mountains. Stunning simplicity and great hospitality." },
        { user: "Aarya Sharma, Nepal", rating: 5, comment: "Truly the valley of glaciers. A peaceful escape that everyone should experience once." }
      ]
    },
    quickFacts: [
      { label: "Destination", value: "Langtang Valley", icon: MdOutlineLocationOn },
      { label: "Duration", value: "10 Days", icon: MdOutlineAccessTime },
      { label: "Max Altitude", value: "4,773m", icon: MdOutlineTerrain },
      { label: "Difficulty", value: "Moderate", icon: MdOutlineShowChart },
      { label: "Group Size", value: "2 - 12", icon: MdOutlineGroups },
      { label: "Best Season", value: "Mar-May, Sep-Nov", icon: MdOutlineWbSunny },
    ],
  }
};

export default packageData;

/*
 * SciMentra CBSE chapter catalogue - academic session 2026-27
 * Updated 10 October 2026. Load this file before the Exam Builder / Question Bank.
 * Existing globals remain available: BOARD_CHAPTERS.CBSE and CHAPTERS_CBSE.
 * Arrays contain plain titles, without number prefixes, for existing bank lookup.
 * Numbers, book parts, subject areas and sources are in CBSE_CHAPTER_METADATA.
 * A chapter catalogue does not change the host app's exam allocations or blueprint.
 * Term 1 accumulation / full-syllabus annual examinations must be implemented by
 * the host app. No exam dates or official term allocations are invented here.
 * See CBSE_SYLLABUS_NOTES for course choices and assessment-scope limitations.
 */
(function () {
  "use strict";
  const CBSE_CHAPTERS = {
  "6th Class": {
    "Mathematics": [
      "Patterns in Mathematics",
      "Lines and Angles",
      "Number Play",
      "Data Handling and Presentation",
      "Prime Time",
      "Perimeter and Area",
      "Fractions",
      "Playing with Constructions",
      "Symmetry",
      "The Other Side of Zero"
    ],
    "Science": [
      "The Wonderful World of Science",
      "Diversity in the Living World",
      "Mindful Eating: A Path to a Healthy Body",
      "Exploring Magnets",
      "Measurement of Length and Motion",
      "Materials Around Us",
      "Temperature and its Measurement",
      "A Journey through States of Water",
      "Methods of Separation in Everyday Life",
      "Living Creatures: Exploring their Characteristics",
      "Nature's Treasures",
      "Beyond Earth"
    ],
    "English": [
      "A Bottle of Dew",
      "The Raven and the Fox",
      "Rama to the Rescue",
      "The Unlikely Best Friends",
      "A Friend's Prayer",
      "The Chair",
      "Neem Baba",
      "What a Bird Thought",
      "Spices that Heal Us",
      "Change of Heart",
      "The Winner",
      "Yoga - A Way of Life",
      "Hamara Bharat - Incredible India!",
      "The Kites",
      "Ila Sachani: Embroidering Dreams with her Feet",
      "National War Memorial"
    ],
    "Hindi": [
      "मातृभूमि",
      "गोल",
      "पहली बूँद",
      "हार की जीत",
      "रहीम के दोहे",
      "मेरी माँ",
      "जलाते चलो",
      "सत्रिया और बिहू नृत्य",
      "मैया मैं नहिं माखन खायो",
      "परीक्षा",
      "चेतक की वीरता",
      "हिंद महासागर में छोटा-सा हिंदुस्तान",
      "पेड़ की बात"
    ],
    "Social Science": [
      "Locating Places on the Earth",
      "Oceans and Continents",
      "Landforms and Life",
      "Timeline and Sources of History",
      "India, That Is Bharat",
      "The Beginnings of Indian Civilisation",
      "India's Cultural Roots",
      "Unity in Diversity, or 'Many in the One'",
      "Family and Community",
      "Grassroots Democracy - Part 1: Governance",
      "Grassroots Democracy - Part 2: Local Government in Rural Areas",
      "Grassroots Democracy - Part 3: Local Government in Urban Areas",
      "The Value of Work",
      "Economic Activities Around Us"
    ]
  },
  "7th Class": {
    "Mathematics": [
      "Large Numbers Around Us",
      "Arithmetic Expressions",
      "A Peek Beyond the Point",
      "Expressions using Letter-Numbers",
      "Parallel and Intersecting Lines",
      "Number Play",
      "A Tale of Three Intersecting Lines",
      "Working with Fractions",
      "Geometric Twins",
      "Operations with Integers",
      "Finding Common Ground",
      "Another Peek Beyond the Point",
      "Connecting the Dots...",
      "Constructions and Tilings",
      "Finding the Unknown"
    ],
    "Science": [
      "The Ever-Evolving World of Science",
      "Exploring Substances: Acidic, Basic, and Neutral",
      "Electricity: Circuits and their Components",
      "The World of Metals and Non-metals",
      "Changes Around Us: Physical and Chemical",
      "Adolescence: A Stage of Growth and Change",
      "Heat Transfer in Nature",
      "Measurement of Time and Motion",
      "Life Processes in Animals",
      "Life Processes in Plants",
      "Light: Shadows and Reflections",
      "Earth, Moon, and the Sun"
    ],
    "English": [
      "The Day the River Spoke",
      "Try Again",
      "Three Days to See",
      "Animals, Birds, and Dr. Dolittle",
      "A Funny Man",
      "Say the Right Thing",
      "My Brother's Great Invention",
      "Paper Boats",
      "North, South, East, West",
      "The Tunnel",
      "Travel",
      "Conquering the Summit",
      "A Homage to Our Brave Soldiers",
      "My Dear Soldiers",
      "Rani Abbakka"
    ],
    "Hindi": [
      "माँ, कह एक कहानी",
      "तीन बुद्धिमान",
      "फूल और काँटा",
      "पानी रे पानी",
      "नहीं होना बीमार",
      "गिरिधर कविराय की कुंडलियाँ",
      "वर्षा-बहार",
      "बिरजू महाराज से साक्षात्कार",
      "चिड़िया",
      "मीरा के पद"
    ],
    "Social Science": [
      "Geographical Diversity of India",
      "Understanding the Weather",
      "Climates of India",
      "New Beginnings: Cities and States",
      "The Rise of Empires",
      "The Age of Reorganisation",
      "The Gupta Era: An Age of Tireless Creativity",
      "How the Land Becomes Sacred",
      "From the Rulers to the Ruled: Types of Governments",
      "The Constitution of India - An Introduction",
      "From Barter to Money",
      "Understanding Markets",
      "The Story of Indian Farming",
      "India and Her Neighbours",
      "Empires and Kingdoms: 6th to 10th Centuries",
      "Turning Tides: 11th and 12th Centuries",
      "India, a Home to Many",
      "The State, the Government, and You",
      "Infrastructure: Engine of India's Development",
      "Banks and the Magic of Finance"
    ]
  },
  "8th Class": {
    "Mathematics": [
      "A Square and A Cube",
      "Power Play",
      "A Story of Numbers",
      "Quadrilaterals",
      "Number Play",
      "We Distribute, Yet Things Multiply",
      "Proportional Reasoning-1",
      "Fractions in Disguise",
      "The Baudhayana-Pythagoras Theorem",
      "Proportional Reasoning-2",
      "Exploring Some Geometric Themes",
      "Tales by Dots and Lines",
      "Algebra Play",
      "Area"
    ],
    "Science": [
      "Exploring the Investigative World of Science",
      "The Invisible Living World: Beyond Our Naked Eye",
      "Health: The Ultimate Treasure",
      "Electricity: Magnetic and Heating Effects",
      "Exploring Forces",
      "Pressure, Winds, Storms, and Cyclones",
      "Particulate Nature of Matter",
      "Nature of Matter: Elements, Compounds, and Mixtures",
      "The Amazing World of Solutes, Solvents, and Solutions",
      "Light: Mirrors and Lenses",
      "Keeping Time with the Skies",
      "How Nature Works in Harmony",
      "Our Home: Earth, a Unique Life Sustaining Planet"
    ],
    "English": [
      "The Wit that Won Hearts",
      "A Concrete Example",
      "Wisdom Paves the Way",
      "A Tale of Valour: Major Somnath Sharma and the Battle of Badgam",
      "Somebody's Mother",
      "Verghese Kurien - I Too Had A Dream",
      "The Case of the Fifth Word",
      "The Magic Brush of Dreams",
      "Spectacular Wonders",
      "The Cherry Tree",
      "Harvest Hymn",
      "Waiting for the Rain",
      "Feathered Friend",
      "Magnifying Glass",
      "Bibha Chowdhuri: The Beam of Light that Lit the Path for Women in Indian Science"
    ],
    "Hindi": [
      "स्वदेश",
      "दो गौरैया",
      "एक आशीर्वाद",
      "हरिद्वार",
      "कबीर के दोहे",
      "एक टोकरी भर मिट्टी",
      "मत बाँधो",
      "नए मेहमान",
      "आदमी का अनुपात",
      "तरुण के स्वप्न"
    ],
    "Social Science": [
      "Natural Resources and Their Use",
      "Reshaping India's Political Map",
      "The Rise of the Marathas",
      "The Colonial Era in India",
      "Universal Franchise and India's Electoral System",
      "The Parliamentary System: Legislature and Executive",
      "Factors of Production",
      "World Geography: Some Glimpses",
      "India's Long Road to Independence",
      "A Journey Through Indian Architecture",
      "The Role of the Judiciary in Our Society",
      "Citizenship: Rights and Duties",
      "Dynamics of Population",
      "India's Urban Landscape",
      "Cultural Currents: 13th to 17th Centuries"
    ]
  },
  "9th Class": {
    "Mathematics": [
      "Orienting Yourself: The Use of Coordinates",
      "Introduction to Linear Polynomials",
      "The World of Numbers",
      "Exploring Algebraic Identities",
      "I'm Up and Down, and Round and Round",
      "Measuring Space: Perimeter and Area",
      "The Mathematics of Maybe: Introduction to Probability",
      "Predicting What Comes Next: Exploring Sequences and Progressions",
      "Propositions and their Converses",
      "How Quantities Combine: Understanding Data",
      "The World of Algorithms",
      "Quadrilaterals",
      "Two Variables, One Line",
      "Math of Space: Surface Area and Volume"
    ],
    "Mathematics at Advanced Level": [
      "Sets",
      "Logarithms",
      "Relations and Functions",
      "Coordinate Geometry",
      "Combinatorics",
      "Exploring some more Progressions"
    ],
    "Science": [
      "Exploration: Entering the World of Secondary Science",
      "Cell: The Building Block of Life",
      "Tissues in Action",
      "Describing Motion Around Us",
      "Exploring Mixtures and their Separation",
      "How Forces Affect Motion",
      "Work, Energy, and Simple Machines",
      "Journey Inside the Atom",
      "Atomic Foundations of Matter",
      "Sound Waves: Characteristics and Applications",
      "Reproduction: How Life Continues",
      "Patterns in Life: Diversity and Classification",
      "Earth as a System: Energy, Matter, and Life"
    ],
    "English": [
      "How I Taught My Grandmother to Read",
      "Bharat Our Land",
      "The Pot Maker",
      "Gifts of Grace: Honouring Our Vocations",
      "Winds of Change",
      "Canvas of Soil",
      "Vitamin-M",
      "I Cannot Remember My Mother",
      "The World of Limitless Possibilities",
      "Nine Gold Medals",
      "Twin Melodies",
      "A Friend Found in Music",
      "Carrier of Words",
      "Words",
      "Follow That Dream",
      "Believe in Yourself"
    ],
    "Hindi": [
      "दो बैलों की कथा",
      "क्या लिखूँ?",
      "संवादहीन",
      "ऐसी भी बातें होती हैं (लता मंगेशकर से साक्षात्कार)",
      "आखिरी चट्टान तक",
      "रीढ़ की हड्डी",
      "मैं और मेरा देश",
      "पद",
      "राम-लक्ष्मण-परशुराम संवाद",
      "भारति, जय, विजय करे!",
      "झाँसी की रानी",
      "घर की याद"
    ],
    "Social Science": [
      "Understanding Social Science",
      "Shaping of the Earth's Surface",
      "Atmosphere and Climate",
      "Early Humans and Beginning of Civilisation",
      "State and Society (up to 1000 CE)",
      "Democracy",
      "Elections",
      "Building Blocks in Economics",
      "The Price Puzzle: What Drives the Market",
      "Oceans and Life",
      "Life on Earth",
      "Resistance and Resilience (1000 CE - 1700 CE)",
      "India and the World-I (1900 BCE - 1200 CE)",
      "Authority",
      "From Ideas to Startups",
      "Smart Ways to Manage Your Finances"
    ]
  },
  "10th Class": {
    "Mathematics": [
      "Real Numbers",
      "Polynomials",
      "Pair of Linear Equations in Two Variables",
      "Quadratic Equations",
      "Arithmetic Progressions",
      "Triangles",
      "Coordinate Geometry",
      "Introduction to Trigonometry",
      "Some Applications of Trigonometry",
      "Circles",
      "Areas Related to Circles",
      "Surface Areas and Volumes",
      "Statistics",
      "Probability"
    ],
    "Science": [
      "Chemical Reactions and Equations",
      "Acids, Bases and Salts",
      "Metals and Non-metals",
      "Carbon and its Compounds",
      "Life Processes",
      "Control and Coordination",
      "How do Organisms Reproduce?",
      "Heredity",
      "Light - Reflection and Refraction",
      "The Human Eye and the Colourful World",
      "Electricity",
      "Magnetic Effects of Electric Current",
      "Our Environment"
    ],
    "English": [
      "A Letter to God",
      "Nelson Mandela: Long Walk to Freedom",
      "Two Stories about Flying",
      "From the Diary of Anne Frank",
      "Glimpses of India",
      "Mijbil the Otter",
      "Madam Rides the Bus",
      "The Sermon at Benares",
      "The Proposal",
      "Dust of Snow",
      "Fire and Ice",
      "A Tiger in the Zoo",
      "How to Tell Wild Animals",
      "The Ball Poem",
      "Amanda!",
      "The Trees",
      "Fog",
      "The Tale of Custard the Dragon",
      "For Anne Gregory",
      "A Triumph of Surgery",
      "The Thief's Story",
      "The Midnight Visitor",
      "A Question of Trust",
      "Footprints Without Feet",
      "The Making of a Scientist",
      "The Necklace",
      "Bholi",
      "The Book that Saved the Earth"
    ],
    "Hindi Course A": [
      "सूरदास के पद",
      "राम-लक्ष्मण-परशुराम संवाद",
      "आत्मकथ्य",
      "उत्साह और अट नहीं रही है",
      "यह दंतुरित मुसकान और फसल",
      "संगतकार",
      "नेताजी का चश्मा",
      "बालगोबिन भगत",
      "लखनवी अंदाज़",
      "एक कहानी यह भी",
      "नौबतखाने में इबादत",
      "संस्कृति",
      "माता का अँचल",
      "साना-साना हाथ जोड़ि",
      "मैं क्यों लिखता हूँ?"
    ],
    "Hindi Course B": [
      "साखी",
      "पद",
      "मनुष्यता",
      "पर्वत प्रदेश में पावस",
      "तोप",
      "कर चले हम फ़िदा",
      "आत्मत्राण",
      "बड़े भाई साहब",
      "डायरी का एक पन्ना",
      "तताँरा-वामीरो कथा",
      "तीसरी कसम के शिल्पकार शैलेंद्र",
      "अब कहाँ दूसरे के दुख से दुखी होने वाले",
      "पतझर में टूटी पत्तियाँ",
      "कारतूस",
      "हरिहर काका",
      "सपनों के-से दिन",
      "टोपी शुक्ला"
    ],
    "Social Science": [
      "The Rise of Nationalism in Europe",
      "Nationalism in India",
      "The Making of a Global World",
      "The Age of Industrialisation",
      "Print Culture and the Modern World",
      "Resources and Development",
      "Forest and Wildlife Resources",
      "Water Resources",
      "Agriculture",
      "Minerals and Energy Resources",
      "Manufacturing Industries",
      "Lifelines of National Economy",
      "Power-sharing",
      "Federalism",
      "Gender, Religion and Caste",
      "Political Parties",
      "Outcomes of Democracy",
      "Development",
      "Sectors of the Indian Economy",
      "Money and Credit",
      "Globalisation and the Indian Economy",
      "Consumer Rights"
    ]
  },
  "11th Class": {
    "Mathematics": [
      "Sets",
      "Relations and Functions",
      "Trigonometric Functions",
      "Complex Numbers and Quadratic Equations",
      "Linear Inequalities",
      "Permutations and Combinations",
      "Binomial Theorem",
      "Sequences and Series",
      "Straight Lines",
      "Conic Sections",
      "Introduction to Three Dimensional Geometry",
      "Limits and Derivatives",
      "Statistics",
      "Probability"
    ],
    "Physics": [
      "Units and Measurements",
      "Motion in a Straight Line",
      "Motion in a Plane",
      "Laws of Motion",
      "Work, Energy and Power",
      "System of Particles and Rotational Motion",
      "Gravitation",
      "Mechanical Properties of Solids",
      "Mechanical Properties of Fluids",
      "Thermal Properties of Matter",
      "Thermodynamics",
      "Kinetic Theory",
      "Oscillations",
      "Waves"
    ],
    "Chemistry": [
      "Some Basic Concepts of Chemistry",
      "Structure of Atom",
      "Classification of Elements and Periodicity in Properties",
      "Chemical Bonding and Molecular Structure",
      "Thermodynamics",
      "Equilibrium",
      "Redox Reactions",
      "Organic Chemistry - Some Basic Principles and Techniques",
      "Hydrocarbons"
    ],
    "Biology": [
      "The Living World",
      "Biological Classification",
      "Plant Kingdom",
      "Animal Kingdom",
      "Morphology of Flowering Plants",
      "Anatomy of Flowering Plants",
      "Structural Organisation in Animals",
      "Cell: The Unit of Life",
      "Biomolecules",
      "Cell Cycle and Cell Division",
      "Photosynthesis in Higher Plants",
      "Respiration in Plants",
      "Plant Growth and Development",
      "Breathing and Exchange of Gases",
      "Body Fluids and Circulation",
      "Excretory Products and their Elimination",
      "Locomotion and Movement",
      "Neural Control and Coordination",
      "Chemical Coordination and Integration"
    ],
    "English": [
      "The Portrait of a Lady",
      "We're Not Afraid to Die... if We Can All Be Together",
      "Discovering Tut: The Saga Continues",
      "The Adventure",
      "Silk Road",
      "A Photograph",
      "The Laburnum Top",
      "The Voice of the Rain",
      "Childhood",
      "Father to Son",
      "The Summer of the Beautiful White Horse",
      "The Address",
      "Mother's Day",
      "Birth",
      "The Tale of Melon City"
    ]
  },
  "12th Class": {
    "Mathematics": [
      "Relations and Functions",
      "Inverse Trigonometric Functions",
      "Matrices",
      "Determinants",
      "Continuity and Differentiability",
      "Applications of Derivatives",
      "Integrals",
      "Applications of Integrals",
      "Differential Equations",
      "Vector Algebra",
      "Three Dimensional Geometry",
      "Linear Programming",
      "Probability"
    ],
    "Physics": [
      "Electric Charges and Fields",
      "Electrostatic Potential and Capacitance",
      "Current Electricity",
      "Moving Charges and Magnetism",
      "Magnetism and Matter",
      "Electromagnetic Induction",
      "Alternating Current",
      "Electromagnetic Waves",
      "Ray Optics and Optical Instruments",
      "Wave Optics",
      "Dual Nature of Radiation and Matter",
      "Atoms",
      "Nuclei",
      "Semiconductor Electronics: Materials, Devices and Simple Circuits"
    ],
    "Chemistry": [
      "Solutions",
      "Electrochemistry",
      "Chemical Kinetics",
      "The d- and f-Block Elements",
      "Coordination Compounds",
      "Haloalkanes and Haloarenes",
      "Alcohols, Phenols and Ethers",
      "Aldehydes, Ketones and Carboxylic Acids",
      "Amines",
      "Biomolecules"
    ],
    "Biology": [
      "Sexual Reproduction in Flowering Plants",
      "Human Reproduction",
      "Reproductive Health",
      "Principles of Inheritance and Variation",
      "Molecular Basis of Inheritance",
      "Evolution",
      "Human Health and Disease",
      "Microbes in Human Welfare",
      "Biotechnology: Principles and Processes",
      "Biotechnology and its Applications",
      "Organisms and Populations",
      "Ecosystem",
      "Biodiversity and Conservation"
    ],
    "English": [
      "The Last Lesson",
      "Lost Spring",
      "Deep Water",
      "The Rattrap",
      "Indigo",
      "Poets and Pancakes",
      "The Interview",
      "Going Places",
      "My Mother at Sixty-Six",
      "Keeping Quiet",
      "A Thing of Beauty",
      "A Roadside Stand",
      "Aunt Jennifer's Tigers",
      "The Third Level",
      "The Tiger King",
      "Journey to the End of the Earth",
      "The Enemy",
      "On the Face of It",
      "Memories of Childhood"
    ]
  }
};
  const CBSE_METADATA = {
  "6th Class": {
    "Mathematics": [
      {
        "title": "Patterns in Mathematics",
        "number": 1,
        "book": "Ganita Prakash",
        "part": null,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/fegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Lines and Angles",
        "number": 2,
        "book": "Ganita Prakash",
        "part": null,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/fegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Number Play",
        "number": 3,
        "book": "Ganita Prakash",
        "part": null,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/fegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Data Handling and Presentation",
        "number": 4,
        "book": "Ganita Prakash",
        "part": null,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/fegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Prime Time",
        "number": 5,
        "book": "Ganita Prakash",
        "part": null,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/fegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Perimeter and Area",
        "number": 6,
        "book": "Ganita Prakash",
        "part": null,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/fegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Fractions",
        "number": 7,
        "book": "Ganita Prakash",
        "part": null,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/fegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Playing with Constructions",
        "number": 8,
        "book": "Ganita Prakash",
        "part": null,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/fegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Symmetry",
        "number": 9,
        "book": "Ganita Prakash",
        "part": null,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/fegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "The Other Side of Zero",
        "number": 10,
        "book": "Ganita Prakash",
        "part": null,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/fegp1ps.pdf",
        "numberingBasis": "textbook"
      }
    ],
    "Science": [
      {
        "title": "The Wonderful World of Science",
        "number": 1,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/fecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Diversity in the Living World",
        "number": 2,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/fecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Mindful Eating: A Path to a Healthy Body",
        "number": 3,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/fecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Exploring Magnets",
        "number": 4,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/fecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Measurement of Length and Motion",
        "number": 5,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/fecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Materials Around Us",
        "number": 6,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/fecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Temperature and its Measurement",
        "number": 7,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/fecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "A Journey through States of Water",
        "number": 8,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/fecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Methods of Separation in Everyday Life",
        "number": 9,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/fecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Living Creatures: Exploring their Characteristics",
        "number": 10,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/fecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Nature's Treasures",
        "number": 11,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/fecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Beyond Earth",
        "number": 12,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/fecu1ps.pdf",
        "numberingBasis": "textbook"
      }
    ],
    "English": [
      {
        "title": "A Bottle of Dew",
        "number": 1,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/fepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 1
      },
      {
        "title": "The Raven and the Fox",
        "number": 2,
        "book": "Poorvi",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/fepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 1
      },
      {
        "title": "Rama to the Rescue",
        "number": 3,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/fepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 1
      },
      {
        "title": "The Unlikely Best Friends",
        "number": 4,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/fepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 2
      },
      {
        "title": "A Friend's Prayer",
        "number": 5,
        "book": "Poorvi",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/fepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 2
      },
      {
        "title": "The Chair",
        "number": 6,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/fepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 2
      },
      {
        "title": "Neem Baba",
        "number": 7,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/fepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 3
      },
      {
        "title": "What a Bird Thought",
        "number": 8,
        "book": "Poorvi",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/fepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 3
      },
      {
        "title": "Spices that Heal Us",
        "number": 9,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/fepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 3
      },
      {
        "title": "Change of Heart",
        "number": 10,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/fepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 4
      },
      {
        "title": "The Winner",
        "number": 11,
        "book": "Poorvi",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/fepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 4
      },
      {
        "title": "Yoga - A Way of Life",
        "number": 12,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/fepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 4
      },
      {
        "title": "Hamara Bharat - Incredible India!",
        "number": 13,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/fepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 5
      },
      {
        "title": "The Kites",
        "number": 14,
        "book": "Poorvi",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/fepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 5
      },
      {
        "title": "Ila Sachani: Embroidering Dreams with her Feet",
        "number": 15,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/fepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 5
      },
      {
        "title": "National War Memorial",
        "number": 16,
        "book": "Poorvi",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/fepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 5
      }
    ],
    "Hindi": [
      {
        "title": "मातृभूमि",
        "number": 1,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/fhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "गोल",
        "number": 2,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/fhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "पहली बूँद",
        "number": 3,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/fhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "हार की जीत",
        "number": 4,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/fhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "रहीम के दोहे",
        "number": 5,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/fhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "मेरी माँ",
        "number": 6,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/fhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "जलाते चलो",
        "number": 7,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/fhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "सत्रिया और बिहू नृत्य",
        "number": 8,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/fhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "मैया मैं नहिं माखन खायो",
        "number": 9,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/fhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "परीक्षा",
        "number": 10,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/fhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "चेतक की वीरता",
        "number": 11,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/fhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "हिंद महासागर में छोटा-सा हिंदुस्तान",
        "number": 12,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/fhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "पेड़ की बात",
        "number": 13,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/fhml1ps.pdf",
        "numberingBasis": "textbook"
      }
    ],
    "Social Science": [
      {
        "title": "Locating Places on the Earth",
        "number": 1,
        "book": "Exploring Society: India and Beyond",
        "part": null,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/fees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Oceans and Continents",
        "number": 2,
        "book": "Exploring Society: India and Beyond",
        "part": null,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/fees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Landforms and Life",
        "number": 3,
        "book": "Exploring Society: India and Beyond",
        "part": null,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/fees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Timeline and Sources of History",
        "number": 4,
        "book": "Exploring Society: India and Beyond",
        "part": null,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/fees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "India, That Is Bharat",
        "number": 5,
        "book": "Exploring Society: India and Beyond",
        "part": null,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/fees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "The Beginnings of Indian Civilisation",
        "number": 6,
        "book": "Exploring Society: India and Beyond",
        "part": null,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/fees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "India's Cultural Roots",
        "number": 7,
        "book": "Exploring Society: India and Beyond",
        "part": null,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/fees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Unity in Diversity, or 'Many in the One'",
        "number": 8,
        "book": "Exploring Society: India and Beyond",
        "part": null,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/fees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Family and Community",
        "number": 9,
        "book": "Exploring Society: India and Beyond",
        "part": null,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/fees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Grassroots Democracy - Part 1: Governance",
        "number": 10,
        "book": "Exploring Society: India and Beyond",
        "part": null,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/fees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Grassroots Democracy - Part 2: Local Government in Rural Areas",
        "number": 11,
        "book": "Exploring Society: India and Beyond",
        "part": null,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/fees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Grassroots Democracy - Part 3: Local Government in Urban Areas",
        "number": 12,
        "book": "Exploring Society: India and Beyond",
        "part": null,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/fees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "The Value of Work",
        "number": 13,
        "book": "Exploring Society: India and Beyond",
        "part": null,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/fees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Economic Activities Around Us",
        "number": 14,
        "book": "Exploring Society: India and Beyond",
        "part": null,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/fees1ps.pdf",
        "numberingBasis": "textbook"
      }
    ]
  },
  "7th Class": {
    "Mathematics": [
      {
        "title": "Large Numbers Around Us",
        "number": 1,
        "book": "Ganita Prakash",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/gegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Arithmetic Expressions",
        "number": 2,
        "book": "Ganita Prakash",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/gegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "A Peek Beyond the Point",
        "number": 3,
        "book": "Ganita Prakash",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/gegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Expressions using Letter-Numbers",
        "number": 4,
        "book": "Ganita Prakash",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/gegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Parallel and Intersecting Lines",
        "number": 5,
        "book": "Ganita Prakash",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/gegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Number Play",
        "number": 6,
        "book": "Ganita Prakash",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/gegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "A Tale of Three Intersecting Lines",
        "number": 7,
        "book": "Ganita Prakash",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/gegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Working with Fractions",
        "number": 8,
        "book": "Ganita Prakash",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/gegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Geometric Twins",
        "number": 1,
        "book": "Ganita Prakash",
        "part": 2,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/gegp2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Operations with Integers",
        "number": 2,
        "book": "Ganita Prakash",
        "part": 2,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/gegp2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Finding Common Ground",
        "number": 3,
        "book": "Ganita Prakash",
        "part": 2,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/gegp2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Another Peek Beyond the Point",
        "number": 4,
        "book": "Ganita Prakash",
        "part": 2,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/gegp2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Connecting the Dots...",
        "number": 5,
        "book": "Ganita Prakash",
        "part": 2,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/gegp2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Constructions and Tilings",
        "number": 6,
        "book": "Ganita Prakash",
        "part": 2,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/gegp2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Finding the Unknown",
        "number": 7,
        "book": "Ganita Prakash",
        "part": 2,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/gegp2ps.pdf",
        "numberingBasis": "textbook"
      }
    ],
    "Science": [
      {
        "title": "The Ever-Evolving World of Science",
        "number": 1,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/gecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Exploring Substances: Acidic, Basic, and Neutral",
        "number": 2,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/gecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Electricity: Circuits and their Components",
        "number": 3,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/gecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "The World of Metals and Non-metals",
        "number": 4,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/gecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Changes Around Us: Physical and Chemical",
        "number": 5,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/gecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Adolescence: A Stage of Growth and Change",
        "number": 6,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/gecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Heat Transfer in Nature",
        "number": 7,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/gecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Measurement of Time and Motion",
        "number": 8,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/gecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Life Processes in Animals",
        "number": 9,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/gecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Life Processes in Plants",
        "number": 10,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/gecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Light: Shadows and Reflections",
        "number": 11,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/gecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Earth, Moon, and the Sun",
        "number": 12,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/gecu1ps.pdf",
        "numberingBasis": "textbook"
      }
    ],
    "English": [
      {
        "title": "The Day the River Spoke",
        "number": 1,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/gepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 1
      },
      {
        "title": "Try Again",
        "number": 2,
        "book": "Poorvi",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/gepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 1
      },
      {
        "title": "Three Days to See",
        "number": 3,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/gepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 1
      },
      {
        "title": "Animals, Birds, and Dr. Dolittle",
        "number": 4,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/gepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 2
      },
      {
        "title": "A Funny Man",
        "number": 5,
        "book": "Poorvi",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/gepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 2
      },
      {
        "title": "Say the Right Thing",
        "number": 6,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/gepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 2
      },
      {
        "title": "My Brother's Great Invention",
        "number": 7,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/gepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 3
      },
      {
        "title": "Paper Boats",
        "number": 8,
        "book": "Poorvi",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/gepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 3
      },
      {
        "title": "North, South, East, West",
        "number": 9,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/gepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 3
      },
      {
        "title": "The Tunnel",
        "number": 10,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/gepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 4
      },
      {
        "title": "Travel",
        "number": 11,
        "book": "Poorvi",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/gepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 4
      },
      {
        "title": "Conquering the Summit",
        "number": 12,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/gepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 4
      },
      {
        "title": "A Homage to Our Brave Soldiers",
        "number": 13,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/gepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 5
      },
      {
        "title": "My Dear Soldiers",
        "number": 14,
        "book": "Poorvi",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/gepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 5
      },
      {
        "title": "Rani Abbakka",
        "number": 15,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/gepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 5
      }
    ],
    "Hindi": [
      {
        "title": "माँ, कह एक कहानी",
        "number": 1,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ghml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "तीन बुद्धिमान",
        "number": 2,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ghml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "फूल और काँटा",
        "number": 3,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ghml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "पानी रे पानी",
        "number": 4,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ghml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "नहीं होना बीमार",
        "number": 5,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ghml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "गिरिधर कविराय की कुंडलियाँ",
        "number": 6,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ghml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "वर्षा-बहार",
        "number": 7,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ghml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "बिरजू महाराज से साक्षात्कार",
        "number": 8,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ghml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "चिड़िया",
        "number": 9,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ghml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "मीरा के पद",
        "number": 10,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ghml1ps.pdf",
        "numberingBasis": "textbook"
      }
    ],
    "Social Science": [
      {
        "title": "Geographical Diversity of India",
        "number": 1,
        "book": "Exploring Society: India and Beyond",
        "part": 1,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/gees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Understanding the Weather",
        "number": 2,
        "book": "Exploring Society: India and Beyond",
        "part": 1,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/gees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Climates of India",
        "number": 3,
        "book": "Exploring Society: India and Beyond",
        "part": 1,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/gees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "New Beginnings: Cities and States",
        "number": 4,
        "book": "Exploring Society: India and Beyond",
        "part": 1,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/gees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "The Rise of Empires",
        "number": 5,
        "book": "Exploring Society: India and Beyond",
        "part": 1,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/gees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "The Age of Reorganisation",
        "number": 6,
        "book": "Exploring Society: India and Beyond",
        "part": 1,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/gees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "The Gupta Era: An Age of Tireless Creativity",
        "number": 7,
        "book": "Exploring Society: India and Beyond",
        "part": 1,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/gees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "How the Land Becomes Sacred",
        "number": 8,
        "book": "Exploring Society: India and Beyond",
        "part": 1,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/gees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "From the Rulers to the Ruled: Types of Governments",
        "number": 9,
        "book": "Exploring Society: India and Beyond",
        "part": 1,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/gees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "The Constitution of India - An Introduction",
        "number": 10,
        "book": "Exploring Society: India and Beyond",
        "part": 1,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/gees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "From Barter to Money",
        "number": 11,
        "book": "Exploring Society: India and Beyond",
        "part": 1,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/gees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Understanding Markets",
        "number": 12,
        "book": "Exploring Society: India and Beyond",
        "part": 1,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/gees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "The Story of Indian Farming",
        "number": 1,
        "book": "Exploring Society: India and Beyond",
        "part": 2,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/gees2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "India and Her Neighbours",
        "number": 2,
        "book": "Exploring Society: India and Beyond",
        "part": 2,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/gees2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Empires and Kingdoms: 6th to 10th Centuries",
        "number": 3,
        "book": "Exploring Society: India and Beyond",
        "part": 2,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/gees2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Turning Tides: 11th and 12th Centuries",
        "number": 4,
        "book": "Exploring Society: India and Beyond",
        "part": 2,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/gees2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "India, a Home to Many",
        "number": 5,
        "book": "Exploring Society: India and Beyond",
        "part": 2,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/gees2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "The State, the Government, and You",
        "number": 6,
        "book": "Exploring Society: India and Beyond",
        "part": 2,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/gees2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Infrastructure: Engine of India's Development",
        "number": 7,
        "book": "Exploring Society: India and Beyond",
        "part": 2,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/gees2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Banks and the Magic of Finance",
        "number": 8,
        "book": "Exploring Society: India and Beyond",
        "part": 2,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/gees2ps.pdf",
        "numberingBasis": "textbook"
      }
    ]
  },
  "8th Class": {
    "Mathematics": [
      {
        "title": "A Square and A Cube",
        "number": 1,
        "book": "Ganita Prakash",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/hegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Power Play",
        "number": 2,
        "book": "Ganita Prakash",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/hegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "A Story of Numbers",
        "number": 3,
        "book": "Ganita Prakash",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/hegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Quadrilaterals",
        "number": 4,
        "book": "Ganita Prakash",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/hegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Number Play",
        "number": 5,
        "book": "Ganita Prakash",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/hegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "We Distribute, Yet Things Multiply",
        "number": 6,
        "book": "Ganita Prakash",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/hegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Proportional Reasoning-1",
        "number": 7,
        "book": "Ganita Prakash",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/hegp1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Fractions in Disguise",
        "number": 1,
        "book": "Ganita Prakash",
        "part": 2,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/hegp2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "The Baudhayana-Pythagoras Theorem",
        "number": 2,
        "book": "Ganita Prakash",
        "part": 2,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/hegp2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Proportional Reasoning-2",
        "number": 3,
        "book": "Ganita Prakash",
        "part": 2,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/hegp2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Exploring Some Geometric Themes",
        "number": 4,
        "book": "Ganita Prakash",
        "part": 2,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/hegp2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Tales by Dots and Lines",
        "number": 5,
        "book": "Ganita Prakash",
        "part": 2,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/hegp2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Algebra Play",
        "number": 6,
        "book": "Ganita Prakash",
        "part": 2,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/hegp2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Area",
        "number": 7,
        "book": "Ganita Prakash",
        "part": 2,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/hegp2ps.pdf",
        "numberingBasis": "textbook"
      }
    ],
    "Science": [
      {
        "title": "Exploring the Investigative World of Science",
        "number": 1,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/hecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "The Invisible Living World: Beyond Our Naked Eye",
        "number": 2,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/hecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Health: The Ultimate Treasure",
        "number": 3,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/hecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Electricity: Magnetic and Heating Effects",
        "number": 4,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/hecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Exploring Forces",
        "number": 5,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/hecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Pressure, Winds, Storms, and Cyclones",
        "number": 6,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/hecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Particulate Nature of Matter",
        "number": 7,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/hecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Nature of Matter: Elements, Compounds, and Mixtures",
        "number": 8,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/hecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "The Amazing World of Solutes, Solvents, and Solutions",
        "number": 9,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/hecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Light: Mirrors and Lenses",
        "number": 10,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/hecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Keeping Time with the Skies",
        "number": 11,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/hecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "How Nature Works in Harmony",
        "number": 12,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/hecu1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Our Home: Earth, a Unique Life Sustaining Planet",
        "number": 13,
        "book": "Curiosity",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/hecu1ps.pdf",
        "numberingBasis": "textbook"
      }
    ],
    "English": [
      {
        "title": "The Wit that Won Hearts",
        "number": 1,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/hepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 1
      },
      {
        "title": "A Concrete Example",
        "number": 2,
        "book": "Poorvi",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/hepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 1
      },
      {
        "title": "Wisdom Paves the Way",
        "number": 3,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/hepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 1
      },
      {
        "title": "A Tale of Valour: Major Somnath Sharma and the Battle of Badgam",
        "number": 4,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/hepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 2
      },
      {
        "title": "Somebody's Mother",
        "number": 5,
        "book": "Poorvi",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/hepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 2
      },
      {
        "title": "Verghese Kurien - I Too Had A Dream",
        "number": 6,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/hepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 2
      },
      {
        "title": "The Case of the Fifth Word",
        "number": 7,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/hepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 3
      },
      {
        "title": "The Magic Brush of Dreams",
        "number": 8,
        "book": "Poorvi",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/hepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 3
      },
      {
        "title": "Spectacular Wonders",
        "number": 9,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/hepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 3
      },
      {
        "title": "The Cherry Tree",
        "number": 10,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/hepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 4
      },
      {
        "title": "Harvest Hymn",
        "number": 11,
        "book": "Poorvi",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/hepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 4
      },
      {
        "title": "Waiting for the Rain",
        "number": 12,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/hepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 4
      },
      {
        "title": "Feathered Friend",
        "number": 13,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/hepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 5
      },
      {
        "title": "Magnifying Glass",
        "number": 14,
        "book": "Poorvi",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/hepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 5
      },
      {
        "title": "Bibha Chowdhuri: The Beam of Light that Lit the Path for Women in Indian Science",
        "number": 15,
        "book": "Poorvi",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/hepr1ps.pdf",
        "numberingBasis": "reading-sequence",
        "unit": 5
      }
    ],
    "Hindi": [
      {
        "title": "स्वदेश",
        "number": 1,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/hhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "दो गौरैया",
        "number": 2,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/hhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "एक आशीर्वाद",
        "number": 3,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/hhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "हरिद्वार",
        "number": 4,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/hhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "कबीर के दोहे",
        "number": 5,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/hhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "एक टोकरी भर मिट्टी",
        "number": 6,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/hhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "मत बाँधो",
        "number": 7,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/hhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "नए मेहमान",
        "number": 8,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/hhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "आदमी का अनुपात",
        "number": 9,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/hhml1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "तरुण के स्वप्न",
        "number": 10,
        "book": "मल्हार",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/hhml1ps.pdf",
        "numberingBasis": "textbook"
      }
    ],
    "Social Science": [
      {
        "title": "Natural Resources and Their Use",
        "number": 1,
        "book": "Exploring Society: India and Beyond",
        "part": 1,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/hees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Reshaping India's Political Map",
        "number": 2,
        "book": "Exploring Society: India and Beyond",
        "part": 1,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/hees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "The Rise of the Marathas",
        "number": 3,
        "book": "Exploring Society: India and Beyond",
        "part": 1,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/hees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "The Colonial Era in India",
        "number": 4,
        "book": "Exploring Society: India and Beyond",
        "part": 1,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/hees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Universal Franchise and India's Electoral System",
        "number": 5,
        "book": "Exploring Society: India and Beyond",
        "part": 1,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/hees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "The Parliamentary System: Legislature and Executive",
        "number": 6,
        "book": "Exploring Society: India and Beyond",
        "part": 1,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/hees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Factors of Production",
        "number": 7,
        "book": "Exploring Society: India and Beyond",
        "part": 1,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/hees1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "World Geography: Some Glimpses",
        "number": 1,
        "book": "Exploring Society: India and Beyond",
        "part": 2,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/hees2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "India's Long Road to Independence",
        "number": 2,
        "book": "Exploring Society: India and Beyond",
        "part": 2,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/hees2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "A Journey Through Indian Architecture",
        "number": 3,
        "book": "Exploring Society: India and Beyond",
        "part": 2,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/hees2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "The Role of the Judiciary in Our Society",
        "number": 4,
        "book": "Exploring Society: India and Beyond",
        "part": 2,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/hees2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Citizenship: Rights and Duties",
        "number": 5,
        "book": "Exploring Society: India and Beyond",
        "part": 2,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/hees2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Dynamics of Population",
        "number": 6,
        "book": "Exploring Society: India and Beyond",
        "part": 2,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/hees2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "India's Urban Landscape",
        "number": 7,
        "book": "Exploring Society: India and Beyond",
        "part": 2,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/hees2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Cultural Currents: 13th to 17th Centuries",
        "number": 8,
        "book": "Exploring Society: India and Beyond",
        "part": 2,
        "area": "Social Science",
        "source": "https://ncert.nic.in/textbook/pdf/hees2ps.pdf",
        "numberingBasis": "textbook"
      }
    ]
  },
  "9th Class": {
    "Mathematics": [
      {
        "title": "Orienting Yourself: The Use of Coordinates",
        "number": 1,
        "book": "Ganita Manjari",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/iemh1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Introduction to Linear Polynomials",
        "number": 2,
        "book": "Ganita Manjari",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/iemh1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "The World of Numbers",
        "number": 3,
        "book": "Ganita Manjari",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/iemh1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Exploring Algebraic Identities",
        "number": 4,
        "book": "Ganita Manjari",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/iemh1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "I'm Up and Down, and Round and Round",
        "number": 5,
        "book": "Ganita Manjari",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/iemh1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Measuring Space: Perimeter and Area",
        "number": 6,
        "book": "Ganita Manjari",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/iemh1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "The Mathematics of Maybe: Introduction to Probability",
        "number": 7,
        "book": "Ganita Manjari",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/iemh1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Predicting What Comes Next: Exploring Sequences and Progressions",
        "number": 8,
        "book": "Ganita Manjari",
        "part": 1,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/iemh1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Propositions and their Converses",
        "number": 9,
        "book": "Ganita Manjari",
        "part": 2,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/iemh2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "How Quantities Combine: Understanding Data",
        "number": 10,
        "book": "Ganita Manjari",
        "part": 2,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/iemh2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "The World of Algorithms",
        "number": 11,
        "book": "Ganita Manjari",
        "part": 2,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/iemh2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Quadrilaterals",
        "number": 12,
        "book": "Ganita Manjari",
        "part": 2,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/iemh2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Two Variables, One Line",
        "number": 13,
        "book": "Ganita Manjari",
        "part": 2,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/iemh2ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Math of Space: Surface Area and Volume",
        "number": 14,
        "book": "Ganita Manjari",
        "part": 2,
        "area": "Mathematics",
        "source": "https://ncert.nic.in/textbook/pdf/iemh2ps.pdf",
        "numberingBasis": "textbook"
      }
    ],
    "Mathematics at Advanced Level": [
      {
        "title": "Sets",
        "number": 1,
        "book": "CBSE Mathematics at Advanced Level",
        "part": null,
        "area": "Mathematics at Advanced Level",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/MathsAd_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Logarithms",
        "number": 2,
        "book": "CBSE Mathematics at Advanced Level",
        "part": null,
        "area": "Mathematics at Advanced Level",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/MathsAd_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Relations and Functions",
        "number": 3,
        "book": "CBSE Mathematics at Advanced Level",
        "part": null,
        "area": "Mathematics at Advanced Level",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/MathsAd_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Coordinate Geometry",
        "number": 4,
        "book": "CBSE Mathematics at Advanced Level",
        "part": null,
        "area": "Mathematics at Advanced Level",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/MathsAd_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Combinatorics",
        "number": 5,
        "book": "CBSE Mathematics at Advanced Level",
        "part": null,
        "area": "Mathematics at Advanced Level",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/MathsAd_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Exploring some more Progressions",
        "number": 6,
        "book": "CBSE Mathematics at Advanced Level",
        "part": null,
        "area": "Mathematics at Advanced Level",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/MathsAd_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      }
    ],
    "Science": [
      {
        "title": "Exploration: Entering the World of Secondary Science",
        "number": 1,
        "book": "Exploration",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/iesc1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Cell: The Building Block of Life",
        "number": 2,
        "book": "Exploration",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/iesc1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Tissues in Action",
        "number": 3,
        "book": "Exploration",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/iesc1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Describing Motion Around Us",
        "number": 4,
        "book": "Exploration",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/iesc1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Exploring Mixtures and their Separation",
        "number": 5,
        "book": "Exploration",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/iesc1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "How Forces Affect Motion",
        "number": 6,
        "book": "Exploration",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/iesc1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Work, Energy, and Simple Machines",
        "number": 7,
        "book": "Exploration",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/iesc1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Journey Inside the Atom",
        "number": 8,
        "book": "Exploration",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/iesc1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Atomic Foundations of Matter",
        "number": 9,
        "book": "Exploration",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/iesc1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Sound Waves: Characteristics and Applications",
        "number": 10,
        "book": "Exploration",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/iesc1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Reproduction: How Life Continues",
        "number": 11,
        "book": "Exploration",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/iesc1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Patterns in Life: Diversity and Classification",
        "number": 12,
        "book": "Exploration",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/iesc1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "Earth as a System: Energy, Matter, and Life",
        "number": 13,
        "book": "Exploration",
        "part": null,
        "area": "Science",
        "source": "https://ncert.nic.in/textbook/pdf/iesc1ps.pdf",
        "numberingBasis": "textbook"
      }
    ],
    "English": [
      {
        "title": "How I Taught My Grandmother to Read",
        "number": 1,
        "book": "Kaveri",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/iebe1ps.pdf",
        "numberingBasis": "paired-unit"
      },
      {
        "title": "Bharat Our Land",
        "number": 1,
        "book": "Kaveri",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/iebe1ps.pdf",
        "numberingBasis": "paired-unit"
      },
      {
        "title": "The Pot Maker",
        "number": 2,
        "book": "Kaveri",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/iebe1ps.pdf",
        "numberingBasis": "paired-unit"
      },
      {
        "title": "Gifts of Grace: Honouring Our Vocations",
        "number": 2,
        "book": "Kaveri",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/iebe1ps.pdf",
        "numberingBasis": "paired-unit"
      },
      {
        "title": "Winds of Change",
        "number": 3,
        "book": "Kaveri",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/iebe1ps.pdf",
        "numberingBasis": "paired-unit"
      },
      {
        "title": "Canvas of Soil",
        "number": 3,
        "book": "Kaveri",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/iebe1ps.pdf",
        "numberingBasis": "paired-unit"
      },
      {
        "title": "Vitamin-M",
        "number": 4,
        "book": "Kaveri",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/iebe1ps.pdf",
        "numberingBasis": "paired-unit"
      },
      {
        "title": "I Cannot Remember My Mother",
        "number": 4,
        "book": "Kaveri",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/iebe1ps.pdf",
        "numberingBasis": "paired-unit"
      },
      {
        "title": "The World of Limitless Possibilities",
        "number": 5,
        "book": "Kaveri",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/iebe1ps.pdf",
        "numberingBasis": "paired-unit"
      },
      {
        "title": "Nine Gold Medals",
        "number": 5,
        "book": "Kaveri",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/iebe1ps.pdf",
        "numberingBasis": "paired-unit"
      },
      {
        "title": "Twin Melodies",
        "number": 6,
        "book": "Kaveri",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/iebe1ps.pdf",
        "numberingBasis": "paired-unit"
      },
      {
        "title": "A Friend Found in Music",
        "number": 6,
        "book": "Kaveri",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/iebe1ps.pdf",
        "numberingBasis": "paired-unit"
      },
      {
        "title": "Carrier of Words",
        "number": 7,
        "book": "Kaveri",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/iebe1ps.pdf",
        "numberingBasis": "paired-unit"
      },
      {
        "title": "Words",
        "number": 7,
        "book": "Kaveri",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/iebe1ps.pdf",
        "numberingBasis": "paired-unit"
      },
      {
        "title": "Follow That Dream",
        "number": 8,
        "book": "Kaveri",
        "part": null,
        "area": "Prose",
        "source": "https://ncert.nic.in/textbook/pdf/iebe1ps.pdf",
        "numberingBasis": "paired-unit"
      },
      {
        "title": "Believe in Yourself",
        "number": 8,
        "book": "Kaveri",
        "part": null,
        "area": "Poetry",
        "source": "https://ncert.nic.in/textbook/pdf/iebe1ps.pdf",
        "numberingBasis": "paired-unit"
      }
    ],
    "Hindi": [
      {
        "title": "दो बैलों की कथा",
        "number": 1,
        "book": "गंगा",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ihga1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "क्या लिखूँ?",
        "number": 2,
        "book": "गंगा",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ihga1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "संवादहीन",
        "number": 3,
        "book": "गंगा",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ihga1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "ऐसी भी बातें होती हैं (लता मंगेशकर से साक्षात्कार)",
        "number": 4,
        "book": "गंगा",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ihga1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "आखिरी चट्टान तक",
        "number": 5,
        "book": "गंगा",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ihga1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "रीढ़ की हड्डी",
        "number": 6,
        "book": "गंगा",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ihga1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "मैं और मेरा देश",
        "number": 7,
        "book": "गंगा",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ihga1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "पद",
        "number": 8,
        "book": "गंगा",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ihga1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "राम-लक्ष्मण-परशुराम संवाद",
        "number": 9,
        "book": "गंगा",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ihga1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "भारति, जय, विजय करे!",
        "number": 10,
        "book": "गंगा",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ihga1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "झाँसी की रानी",
        "number": 11,
        "book": "गंगा",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ihga1ps.pdf",
        "numberingBasis": "textbook"
      },
      {
        "title": "घर की याद",
        "number": 12,
        "book": "गंगा",
        "part": null,
        "area": "Hindi",
        "source": "https://ncert.nic.in/textbook/pdf/ihga1ps.pdf",
        "numberingBasis": "textbook"
      }
    ],
    "Social Science": [
      {
        "title": "Understanding Social Science",
        "number": 1,
        "book": "Social Science - Part 1 (CBSE course outline)",
        "part": 1,
        "area": "Social Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1IX_2026-27.pdf",
        "numberingBasis": "curriculum-outline"
      },
      {
        "title": "Shaping of the Earth's Surface",
        "number": 2,
        "book": "Social Science - Part 1 (CBSE course outline)",
        "part": 1,
        "area": "Social Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1IX_2026-27.pdf",
        "numberingBasis": "curriculum-outline"
      },
      {
        "title": "Atmosphere and Climate",
        "number": 3,
        "book": "Social Science - Part 1 (CBSE course outline)",
        "part": 1,
        "area": "Social Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1IX_2026-27.pdf",
        "numberingBasis": "curriculum-outline"
      },
      {
        "title": "Early Humans and Beginning of Civilisation",
        "number": 4,
        "book": "Social Science - Part 1 (CBSE course outline)",
        "part": 1,
        "area": "Social Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1IX_2026-27.pdf",
        "numberingBasis": "curriculum-outline"
      },
      {
        "title": "State and Society (up to 1000 CE)",
        "number": 5,
        "book": "Social Science - Part 1 (CBSE course outline)",
        "part": 1,
        "area": "Social Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1IX_2026-27.pdf",
        "numberingBasis": "curriculum-outline"
      },
      {
        "title": "Democracy",
        "number": 6,
        "book": "Social Science - Part 1 (CBSE course outline)",
        "part": 1,
        "area": "Social Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1IX_2026-27.pdf",
        "numberingBasis": "curriculum-outline"
      },
      {
        "title": "Elections",
        "number": 7,
        "book": "Social Science - Part 1 (CBSE course outline)",
        "part": 1,
        "area": "Social Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1IX_2026-27.pdf",
        "numberingBasis": "curriculum-outline"
      },
      {
        "title": "Building Blocks in Economics",
        "number": 8,
        "book": "Social Science - Part 1 (CBSE course outline)",
        "part": 1,
        "area": "Social Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1IX_2026-27.pdf",
        "numberingBasis": "curriculum-outline"
      },
      {
        "title": "The Price Puzzle: What Drives the Market",
        "number": 9,
        "book": "Social Science - Part 1 (CBSE course outline)",
        "part": 1,
        "area": "Social Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1IX_2026-27.pdf",
        "numberingBasis": "curriculum-outline"
      },
      {
        "title": "Oceans and Life",
        "number": 1,
        "book": "Social Science - Part 2 (CBSE course outline)",
        "part": 2,
        "area": "Social Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1IX_2026-27.pdf",
        "numberingBasis": "curriculum-outline"
      },
      {
        "title": "Life on Earth",
        "number": 2,
        "book": "Social Science - Part 2 (CBSE course outline)",
        "part": 2,
        "area": "Social Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1IX_2026-27.pdf",
        "numberingBasis": "curriculum-outline"
      },
      {
        "title": "Resistance and Resilience (1000 CE - 1700 CE)",
        "number": 3,
        "book": "Social Science - Part 2 (CBSE course outline)",
        "part": 2,
        "area": "Social Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1IX_2026-27.pdf",
        "numberingBasis": "curriculum-outline"
      },
      {
        "title": "India and the World-I (1900 BCE - 1200 CE)",
        "number": 4,
        "book": "Social Science - Part 2 (CBSE course outline)",
        "part": 2,
        "area": "Social Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1IX_2026-27.pdf",
        "numberingBasis": "curriculum-outline"
      },
      {
        "title": "Authority",
        "number": 5,
        "book": "Social Science - Part 2 (CBSE course outline)",
        "part": 2,
        "area": "Social Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1IX_2026-27.pdf",
        "numberingBasis": "curriculum-outline"
      },
      {
        "title": "From Ideas to Startups",
        "number": 6,
        "book": "Social Science - Part 2 (CBSE course outline)",
        "part": 2,
        "area": "Social Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1IX_2026-27.pdf",
        "numberingBasis": "curriculum-outline"
      },
      {
        "title": "Smart Ways to Manage Your Finances",
        "number": 7,
        "book": "Social Science - Part 2 (CBSE course outline)",
        "part": 2,
        "area": "Social Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1IX_2026-27.pdf",
        "numberingBasis": "curriculum-outline"
      }
    ]
  },
  "10th Class": {
    "Mathematics": [
      {
        "title": "Real Numbers",
        "number": 1,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Maths_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Polynomials",
        "number": 2,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Maths_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Pair of Linear Equations in Two Variables",
        "number": 3,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Maths_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Quadratic Equations",
        "number": 4,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Maths_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Arithmetic Progressions",
        "number": 5,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Maths_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Triangles",
        "number": 6,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Maths_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Coordinate Geometry",
        "number": 7,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Maths_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Introduction to Trigonometry",
        "number": 8,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Maths_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Some Applications of Trigonometry",
        "number": 9,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Maths_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Circles",
        "number": 10,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Maths_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Areas Related to Circles",
        "number": 11,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Maths_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Surface Areas and Volumes",
        "number": 12,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Maths_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Statistics",
        "number": 13,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Maths_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Probability",
        "number": 14,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Maths_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      }
    ],
    "Science": [
      {
        "title": "Chemical Reactions and Equations",
        "number": 1,
        "book": "Science",
        "part": null,
        "area": "Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Science_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Acids, Bases and Salts",
        "number": 2,
        "book": "Science",
        "part": null,
        "area": "Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Science_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Metals and Non-metals",
        "number": 3,
        "book": "Science",
        "part": null,
        "area": "Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Science_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Carbon and its Compounds",
        "number": 4,
        "book": "Science",
        "part": null,
        "area": "Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Science_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Life Processes",
        "number": 5,
        "book": "Science",
        "part": null,
        "area": "Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Science_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Control and Coordination",
        "number": 6,
        "book": "Science",
        "part": null,
        "area": "Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Science_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "How do Organisms Reproduce?",
        "number": 7,
        "book": "Science",
        "part": null,
        "area": "Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Science_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Heredity",
        "number": 8,
        "book": "Science",
        "part": null,
        "area": "Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Science_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Light - Reflection and Refraction",
        "number": 9,
        "book": "Science",
        "part": null,
        "area": "Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Science_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "The Human Eye and the Colourful World",
        "number": 10,
        "book": "Science",
        "part": null,
        "area": "Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Science_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Electricity",
        "number": 11,
        "book": "Science",
        "part": null,
        "area": "Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Science_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Magnetic Effects of Electric Current",
        "number": 12,
        "book": "Science",
        "part": null,
        "area": "Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Science_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Our Environment",
        "number": 13,
        "book": "Science",
        "part": null,
        "area": "Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Science_SecP1_2026-27.pdf",
        "numberingBasis": "curriculum"
      }
    ],
    "English": [
      {
        "title": "A Letter to God",
        "number": 1,
        "book": "First Flight",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Nelson Mandela: Long Walk to Freedom",
        "number": 2,
        "book": "First Flight",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Two Stories about Flying",
        "number": 3,
        "book": "First Flight",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list",
        "subtopics": [
          "His First Flight",
          "The Black Aeroplane"
        ]
      },
      {
        "title": "From the Diary of Anne Frank",
        "number": 4,
        "book": "First Flight",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Glimpses of India",
        "number": 5,
        "book": "First Flight",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list",
        "subtopics": [
          "A Baker from Goa",
          "Coorg",
          "Tea from Assam"
        ]
      },
      {
        "title": "Mijbil the Otter",
        "number": 6,
        "book": "First Flight",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Madam Rides the Bus",
        "number": 7,
        "book": "First Flight",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Sermon at Benares",
        "number": 8,
        "book": "First Flight",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Proposal",
        "number": 9,
        "book": "First Flight",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Dust of Snow",
        "number": 1,
        "book": "First Flight",
        "part": null,
        "area": "Poetry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Fire and Ice",
        "number": 2,
        "book": "First Flight",
        "part": null,
        "area": "Poetry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "A Tiger in the Zoo",
        "number": 3,
        "book": "First Flight",
        "part": null,
        "area": "Poetry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "How to Tell Wild Animals",
        "number": 4,
        "book": "First Flight",
        "part": null,
        "area": "Poetry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Ball Poem",
        "number": 5,
        "book": "First Flight",
        "part": null,
        "area": "Poetry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Amanda!",
        "number": 6,
        "book": "First Flight",
        "part": null,
        "area": "Poetry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Trees",
        "number": 7,
        "book": "First Flight",
        "part": null,
        "area": "Poetry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Fog",
        "number": 8,
        "book": "First Flight",
        "part": null,
        "area": "Poetry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Tale of Custard the Dragon",
        "number": 9,
        "book": "First Flight",
        "part": null,
        "area": "Poetry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "For Anne Gregory",
        "number": 10,
        "book": "First Flight",
        "part": null,
        "area": "Poetry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "A Triumph of Surgery",
        "number": 1,
        "book": "Footprints Without Feet",
        "part": null,
        "area": "Supplementary Reader",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Thief's Story",
        "number": 2,
        "book": "Footprints Without Feet",
        "part": null,
        "area": "Supplementary Reader",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Midnight Visitor",
        "number": 3,
        "book": "Footprints Without Feet",
        "part": null,
        "area": "Supplementary Reader",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "A Question of Trust",
        "number": 4,
        "book": "Footprints Without Feet",
        "part": null,
        "area": "Supplementary Reader",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Footprints Without Feet",
        "number": 5,
        "book": "Footprints Without Feet",
        "part": null,
        "area": "Supplementary Reader",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Making of a Scientist",
        "number": 6,
        "book": "Footprints Without Feet",
        "part": null,
        "area": "Supplementary Reader",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Necklace",
        "number": 7,
        "book": "Footprints Without Feet",
        "part": null,
        "area": "Supplementary Reader",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Bholi",
        "number": 8,
        "book": "Footprints Without Feet",
        "part": null,
        "area": "Supplementary Reader",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Book that Saved the Earth",
        "number": 9,
        "book": "Footprints Without Feet",
        "part": null,
        "area": "Supplementary Reader",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/English_LL_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      }
    ],
    "Hindi Course A": [
      {
        "title": "सूरदास के पद",
        "number": 1,
        "book": "क्षितिज भाग 2",
        "part": null,
        "area": "Hindi Course A",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_A_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "राम-लक्ष्मण-परशुराम संवाद",
        "number": 2,
        "book": "क्षितिज भाग 2",
        "part": null,
        "area": "Hindi Course A",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_A_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "आत्मकथ्य",
        "number": 3,
        "book": "क्षितिज भाग 2",
        "part": null,
        "area": "Hindi Course A",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_A_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "उत्साह और अट नहीं रही है",
        "number": 4,
        "book": "क्षितिज भाग 2",
        "part": null,
        "area": "Hindi Course A",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_A_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "यह दंतुरित मुसकान और फसल",
        "number": 5,
        "book": "क्षितिज भाग 2",
        "part": null,
        "area": "Hindi Course A",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_A_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "संगतकार",
        "number": 6,
        "book": "क्षितिज भाग 2",
        "part": null,
        "area": "Hindi Course A",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_A_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "नेताजी का चश्मा",
        "number": 7,
        "book": "क्षितिज भाग 2",
        "part": null,
        "area": "Hindi Course A",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_A_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "बालगोबिन भगत",
        "number": 8,
        "book": "क्षितिज भाग 2",
        "part": null,
        "area": "Hindi Course A",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_A_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "लखनवी अंदाज़",
        "number": 9,
        "book": "क्षितिज भाग 2",
        "part": null,
        "area": "Hindi Course A",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_A_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "एक कहानी यह भी",
        "number": 10,
        "book": "क्षितिज भाग 2",
        "part": null,
        "area": "Hindi Course A",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_A_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "नौबतखाने में इबादत",
        "number": 11,
        "book": "क्षितिज भाग 2",
        "part": null,
        "area": "Hindi Course A",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_A_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "संस्कृति",
        "number": 12,
        "book": "क्षितिज भाग 2",
        "part": null,
        "area": "Hindi Course A",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_A_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "माता का अँचल",
        "number": 1,
        "book": "कृतिका भाग 2",
        "part": null,
        "area": "Hindi Course A",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_A_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "साना-साना हाथ जोड़ि",
        "number": 2,
        "book": "कृतिका भाग 2",
        "part": null,
        "area": "Hindi Course A",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_A_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "मैं क्यों लिखता हूँ?",
        "number": 3,
        "book": "कृतिका भाग 2",
        "part": null,
        "area": "Hindi Course A",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_A_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      }
    ],
    "Hindi Course B": [
      {
        "title": "साखी",
        "number": 1,
        "book": "स्पर्श भाग 2",
        "part": null,
        "area": "Hindi Course B",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_B_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "पद",
        "number": 2,
        "book": "स्पर्श भाग 2",
        "part": null,
        "area": "Hindi Course B",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_B_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "मनुष्यता",
        "number": 3,
        "book": "स्पर्श भाग 2",
        "part": null,
        "area": "Hindi Course B",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_B_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "पर्वत प्रदेश में पावस",
        "number": 4,
        "book": "स्पर्श भाग 2",
        "part": null,
        "area": "Hindi Course B",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_B_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "तोप",
        "number": 5,
        "book": "स्पर्श भाग 2",
        "part": null,
        "area": "Hindi Course B",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_B_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "कर चले हम फ़िदा",
        "number": 6,
        "book": "स्पर्श भाग 2",
        "part": null,
        "area": "Hindi Course B",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_B_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "आत्मत्राण",
        "number": 7,
        "book": "स्पर्श भाग 2",
        "part": null,
        "area": "Hindi Course B",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_B_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "बड़े भाई साहब",
        "number": 8,
        "book": "स्पर्श भाग 2",
        "part": null,
        "area": "Hindi Course B",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_B_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "डायरी का एक पन्ना",
        "number": 9,
        "book": "स्पर्श भाग 2",
        "part": null,
        "area": "Hindi Course B",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_B_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "तताँरा-वामीरो कथा",
        "number": 10,
        "book": "स्पर्श भाग 2",
        "part": null,
        "area": "Hindi Course B",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_B_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "तीसरी कसम के शिल्पकार शैलेंद्र",
        "number": 11,
        "book": "स्पर्श भाग 2",
        "part": null,
        "area": "Hindi Course B",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_B_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "अब कहाँ दूसरे के दुख से दुखी होने वाले",
        "number": 12,
        "book": "स्पर्श भाग 2",
        "part": null,
        "area": "Hindi Course B",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_B_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "पतझर में टूटी पत्तियाँ",
        "number": 13,
        "book": "स्पर्श भाग 2",
        "part": null,
        "area": "Hindi Course B",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_B_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "कारतूस",
        "number": 14,
        "book": "स्पर्श भाग 2",
        "part": null,
        "area": "Hindi Course B",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_B_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "हरिहर काका",
        "number": 1,
        "book": "संचयन भाग 2",
        "part": null,
        "area": "Hindi Course B",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_B_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "सपनों के-से दिन",
        "number": 2,
        "book": "संचयन भाग 2",
        "part": null,
        "area": "Hindi Course B",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_B_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "टोपी शुक्ला",
        "number": 3,
        "book": "संचयन भाग 2",
        "part": null,
        "area": "Hindi Course B",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Hindi_B_SecP1_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      }
    ],
    "Social Science": [
      {
        "title": "The Rise of Nationalism in Europe",
        "number": 1,
        "book": "India and the Contemporary World - II",
        "part": null,
        "area": "History",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Nationalism in India",
        "number": 2,
        "book": "India and the Contemporary World - II",
        "part": null,
        "area": "History",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "The Making of a Global World",
        "number": 3,
        "book": "India and the Contemporary World - II",
        "part": null,
        "area": "History",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "The Age of Industrialisation",
        "number": 4,
        "book": "India and the Contemporary World - II",
        "part": null,
        "area": "History",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Print Culture and the Modern World",
        "number": 5,
        "book": "India and the Contemporary World - II",
        "part": null,
        "area": "History",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Resources and Development",
        "number": 1,
        "book": "Contemporary India - II",
        "part": null,
        "area": "Geography",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Forest and Wildlife Resources",
        "number": 2,
        "book": "Contemporary India - II",
        "part": null,
        "area": "Geography",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Water Resources",
        "number": 3,
        "book": "Contemporary India - II",
        "part": null,
        "area": "Geography",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Agriculture",
        "number": 4,
        "book": "Contemporary India - II",
        "part": null,
        "area": "Geography",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Minerals and Energy Resources",
        "number": 5,
        "book": "Contemporary India - II",
        "part": null,
        "area": "Geography",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Manufacturing Industries",
        "number": 6,
        "book": "Contemporary India - II",
        "part": null,
        "area": "Geography",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Lifelines of National Economy",
        "number": 7,
        "book": "Contemporary India - II",
        "part": null,
        "area": "Geography",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Power-sharing",
        "number": 1,
        "book": "Democratic Politics - II",
        "part": null,
        "area": "Political Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Federalism",
        "number": 2,
        "book": "Democratic Politics - II",
        "part": null,
        "area": "Political Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Gender, Religion and Caste",
        "number": 3,
        "book": "Democratic Politics - II",
        "part": null,
        "area": "Political Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Political Parties",
        "number": 4,
        "book": "Democratic Politics - II",
        "part": null,
        "area": "Political Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Outcomes of Democracy",
        "number": 5,
        "book": "Democratic Politics - II",
        "part": null,
        "area": "Political Science",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Development",
        "number": 1,
        "book": "Understanding Economic Development",
        "part": null,
        "area": "Economics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Sectors of the Indian Economy",
        "number": 2,
        "book": "Understanding Economic Development",
        "part": null,
        "area": "Economics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Money and Credit",
        "number": 3,
        "book": "Understanding Economic Development",
        "part": null,
        "area": "Economics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Globalisation and the Indian Economy",
        "number": 4,
        "book": "Understanding Economic Development",
        "part": null,
        "area": "Economics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Consumer Rights",
        "number": 5,
        "book": "Understanding Economic Development",
        "part": null,
        "area": "Economics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/SocialScience_SecP1X_2026-27.pdf",
        "numberingBasis": "curriculum"
      }
    ]
  },
  "11th Class": {
    "Mathematics": [
      {
        "title": "Sets",
        "number": 1,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Relations and Functions",
        "number": 2,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Trigonometric Functions",
        "number": 3,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Complex Numbers and Quadratic Equations",
        "number": 4,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Linear Inequalities",
        "number": 5,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Permutations and Combinations",
        "number": 6,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Binomial Theorem",
        "number": 7,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Sequences and Series",
        "number": 8,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Straight Lines",
        "number": 9,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Conic Sections",
        "number": 10,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Introduction to Three Dimensional Geometry",
        "number": 11,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Limits and Derivatives",
        "number": 12,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Statistics",
        "number": 13,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Probability",
        "number": 14,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      }
    ],
    "Physics": [
      {
        "title": "Units and Measurements",
        "number": 1,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Motion in a Straight Line",
        "number": 2,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Motion in a Plane",
        "number": 3,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Laws of Motion",
        "number": 4,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Work, Energy and Power",
        "number": 5,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "System of Particles and Rotational Motion",
        "number": 6,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Gravitation",
        "number": 7,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Mechanical Properties of Solids",
        "number": 8,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Mechanical Properties of Fluids",
        "number": 9,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Thermal Properties of Matter",
        "number": 10,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Thermodynamics",
        "number": 11,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Kinetic Theory",
        "number": 12,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Oscillations",
        "number": 13,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Waves",
        "number": 14,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      }
    ],
    "Chemistry": [
      {
        "title": "Some Basic Concepts of Chemistry",
        "number": 1,
        "book": "Chemistry",
        "part": null,
        "area": "Chemistry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Chemistry_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Structure of Atom",
        "number": 2,
        "book": "Chemistry",
        "part": null,
        "area": "Chemistry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Chemistry_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Classification of Elements and Periodicity in Properties",
        "number": 3,
        "book": "Chemistry",
        "part": null,
        "area": "Chemistry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Chemistry_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Chemical Bonding and Molecular Structure",
        "number": 4,
        "book": "Chemistry",
        "part": null,
        "area": "Chemistry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Chemistry_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Thermodynamics",
        "number": 5,
        "book": "Chemistry",
        "part": null,
        "area": "Chemistry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Chemistry_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Equilibrium",
        "number": 6,
        "book": "Chemistry",
        "part": null,
        "area": "Chemistry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Chemistry_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Redox Reactions",
        "number": 7,
        "book": "Chemistry",
        "part": null,
        "area": "Chemistry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Chemistry_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Organic Chemistry - Some Basic Principles and Techniques",
        "number": 8,
        "book": "Chemistry",
        "part": null,
        "area": "Chemistry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Chemistry_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Hydrocarbons",
        "number": 9,
        "book": "Chemistry",
        "part": null,
        "area": "Chemistry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Chemistry_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      }
    ],
    "Biology": [
      {
        "title": "The Living World",
        "number": 1,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Biological Classification",
        "number": 2,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Plant Kingdom",
        "number": 3,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Animal Kingdom",
        "number": 4,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Morphology of Flowering Plants",
        "number": 5,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Anatomy of Flowering Plants",
        "number": 6,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Structural Organisation in Animals",
        "number": 7,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Cell: The Unit of Life",
        "number": 8,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Biomolecules",
        "number": 9,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Cell Cycle and Cell Division",
        "number": 10,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Photosynthesis in Higher Plants",
        "number": 11,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Respiration in Plants",
        "number": 12,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Plant Growth and Development",
        "number": 13,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Breathing and Exchange of Gases",
        "number": 14,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Body Fluids and Circulation",
        "number": 15,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Excretory Products and their Elimination",
        "number": 16,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Locomotion and Movement",
        "number": 17,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Neural Control and Coordination",
        "number": 18,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Chemical Coordination and Integration",
        "number": 19,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      }
    ],
    "English": [
      {
        "title": "The Portrait of a Lady",
        "number": 1,
        "book": "Hornbill",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "We're Not Afraid to Die... if We Can All Be Together",
        "number": 2,
        "book": "Hornbill",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Discovering Tut: The Saga Continues",
        "number": 3,
        "book": "Hornbill",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Adventure",
        "number": 4,
        "book": "Hornbill",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Silk Road",
        "number": 5,
        "book": "Hornbill",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "A Photograph",
        "number": 1,
        "book": "Hornbill",
        "part": null,
        "area": "Poetry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Laburnum Top",
        "number": 2,
        "book": "Hornbill",
        "part": null,
        "area": "Poetry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Voice of the Rain",
        "number": 3,
        "book": "Hornbill",
        "part": null,
        "area": "Poetry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Childhood",
        "number": 4,
        "book": "Hornbill",
        "part": null,
        "area": "Poetry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Father to Son",
        "number": 5,
        "book": "Hornbill",
        "part": null,
        "area": "Poetry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Summer of the Beautiful White Horse",
        "number": 1,
        "book": "Snapshots",
        "part": null,
        "area": "Supplementary Reader",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Address",
        "number": 2,
        "book": "Snapshots",
        "part": null,
        "area": "Supplementary Reader",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Mother's Day",
        "number": 3,
        "book": "Snapshots",
        "part": null,
        "area": "Supplementary Reader",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Birth",
        "number": 4,
        "book": "Snapshots",
        "part": null,
        "area": "Supplementary Reader",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Tale of Melon City",
        "number": 5,
        "book": "Snapshots",
        "part": null,
        "area": "Supplementary Reader",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      }
    ]
  },
  "12th Class": {
    "Mathematics": [
      {
        "title": "Relations and Functions",
        "number": 1,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Inverse Trigonometric Functions",
        "number": 2,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Matrices",
        "number": 3,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Determinants",
        "number": 4,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Continuity and Differentiability",
        "number": 5,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Applications of Derivatives",
        "number": 6,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Integrals",
        "number": 7,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Applications of Integrals",
        "number": 8,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Differential Equations",
        "number": 9,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Vector Algebra",
        "number": 10,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Three Dimensional Geometry",
        "number": 11,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Linear Programming",
        "number": 12,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Probability",
        "number": 13,
        "book": "Mathematics",
        "part": null,
        "area": "Mathematics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Maths_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      }
    ],
    "Physics": [
      {
        "title": "Electric Charges and Fields",
        "number": 1,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Electrostatic Potential and Capacitance",
        "number": 2,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Current Electricity",
        "number": 3,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Moving Charges and Magnetism",
        "number": 4,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Magnetism and Matter",
        "number": 5,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Electromagnetic Induction",
        "number": 6,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Alternating Current",
        "number": 7,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Electromagnetic Waves",
        "number": 8,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Ray Optics and Optical Instruments",
        "number": 9,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Wave Optics",
        "number": 10,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Dual Nature of Radiation and Matter",
        "number": 11,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Atoms",
        "number": 12,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Nuclei",
        "number": 13,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
        "number": 14,
        "book": "Physics",
        "part": null,
        "area": "Physics",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      }
    ],
    "Chemistry": [
      {
        "title": "Solutions",
        "number": 1,
        "book": "Chemistry",
        "part": null,
        "area": "Chemistry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Chemistry_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Electrochemistry",
        "number": 2,
        "book": "Chemistry",
        "part": null,
        "area": "Chemistry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Chemistry_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Chemical Kinetics",
        "number": 3,
        "book": "Chemistry",
        "part": null,
        "area": "Chemistry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Chemistry_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "The d- and f-Block Elements",
        "number": 4,
        "book": "Chemistry",
        "part": null,
        "area": "Chemistry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Chemistry_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Coordination Compounds",
        "number": 5,
        "book": "Chemistry",
        "part": null,
        "area": "Chemistry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Chemistry_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Haloalkanes and Haloarenes",
        "number": 6,
        "book": "Chemistry",
        "part": null,
        "area": "Chemistry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Chemistry_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Alcohols, Phenols and Ethers",
        "number": 7,
        "book": "Chemistry",
        "part": null,
        "area": "Chemistry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Chemistry_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Aldehydes, Ketones and Carboxylic Acids",
        "number": 8,
        "book": "Chemistry",
        "part": null,
        "area": "Chemistry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Chemistry_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Amines",
        "number": 9,
        "book": "Chemistry",
        "part": null,
        "area": "Chemistry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Chemistry_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Biomolecules",
        "number": 10,
        "book": "Chemistry",
        "part": null,
        "area": "Chemistry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Chemistry_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      }
    ],
    "Biology": [
      {
        "title": "Sexual Reproduction in Flowering Plants",
        "number": 1,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Human Reproduction",
        "number": 2,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Reproductive Health",
        "number": 3,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Principles of Inheritance and Variation",
        "number": 4,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Molecular Basis of Inheritance",
        "number": 5,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Evolution",
        "number": 6,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Human Health and Disease",
        "number": 7,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Microbes in Human Welfare",
        "number": 8,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Biotechnology: Principles and Processes",
        "number": 9,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Biotechnology and its Applications",
        "number": 10,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Organisms and Populations",
        "number": 11,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Ecosystem",
        "number": 12,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      },
      {
        "title": "Biodiversity and Conservation",
        "number": 13,
        "book": "Biology",
        "part": null,
        "area": "Biology",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Biology_SecP2_2026-27.pdf",
        "numberingBasis": "curriculum"
      }
    ],
    "English": [
      {
        "title": "The Last Lesson",
        "number": 1,
        "book": "Flamingo",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Lost Spring",
        "number": 2,
        "book": "Flamingo",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Deep Water",
        "number": 3,
        "book": "Flamingo",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Rattrap",
        "number": 4,
        "book": "Flamingo",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Indigo",
        "number": 5,
        "book": "Flamingo",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Poets and Pancakes",
        "number": 6,
        "book": "Flamingo",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Interview",
        "number": 7,
        "book": "Flamingo",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Going Places",
        "number": 8,
        "book": "Flamingo",
        "part": null,
        "area": "Prose",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "My Mother at Sixty-Six",
        "number": 1,
        "book": "Flamingo",
        "part": null,
        "area": "Poetry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Keeping Quiet",
        "number": 2,
        "book": "Flamingo",
        "part": null,
        "area": "Poetry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "A Thing of Beauty",
        "number": 3,
        "book": "Flamingo",
        "part": null,
        "area": "Poetry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "A Roadside Stand",
        "number": 4,
        "book": "Flamingo",
        "part": null,
        "area": "Poetry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Aunt Jennifer's Tigers",
        "number": 5,
        "book": "Flamingo",
        "part": null,
        "area": "Poetry",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Third Level",
        "number": 1,
        "book": "Vistas",
        "part": null,
        "area": "Supplementary Reader",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Tiger King",
        "number": 2,
        "book": "Vistas",
        "part": null,
        "area": "Supplementary Reader",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Journey to the End of the Earth",
        "number": 3,
        "book": "Vistas",
        "part": null,
        "area": "Supplementary Reader",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "The Enemy",
        "number": 4,
        "book": "Vistas",
        "part": null,
        "area": "Supplementary Reader",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "On the Face of It",
        "number": 5,
        "book": "Vistas",
        "part": null,
        "area": "Supplementary Reader",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list"
      },
      {
        "title": "Memories of Childhood",
        "number": 6,
        "book": "Vistas",
        "part": null,
        "area": "Supplementary Reader",
        "source": "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/English_core_SecP2_2026-27.pdf",
        "numberingBasis": "prescribed-list",
        "subtopics": [
          "The Cutting of My Long Hair",
          "We Too are Human Beings"
        ]
      }
    ]
  }
};

  const copy = value => JSON.parse(JSON.stringify(value));
  const unique = values => [...new Set(values)];
  const aliases = {};
  const canonicalSubjects = {};

  function alias(className, original, names) {
    if (!Array.isArray(CBSE_CHAPTERS[className][original])) return;
    names.forEach(name => {
      CBSE_CHAPTERS[className][name] = [...CBSE_CHAPTERS[className][original]];
      CBSE_METADATA[className][name] = copy(CBSE_METADATA[className][original]);
      aliases[className][name] = original;
    });
  }

  function subset(className, source, target, numbers) {
    const rows = CBSE_METADATA[className][source].filter(row => numbers.includes(row.number));
    CBSE_CHAPTERS[className][target] = rows.map(row => row.title);
    CBSE_METADATA[className][target] = copy(rows).map(row => ({...row, area: target}));
  }

  // Class 9 retains the integrated Science catalogue and provides accurate
  // discipline lists. Introduction and Earth Science are kept as shared areas.
  const nine = "9th Class";
  const ten = "10th Class";
  subset(nine, "Science", "Physics", [4, 6, 7, 10]);
  subset(nine, "Science", "Chemistry", [5, 8, 9]);
  subset(nine, "Science", "Biology", [2, 3, 11, 12]);
  subset(nine, "Science", "Earth Science", [13]);
  subset(nine, "Science", "Scientific Inquiry", [1]);
  subset(ten, "Science", "Physics", [9, 10, 11, 12]);
  subset(ten, "Science", "Chemistry", [1, 2, 3, 4]);
  subset(ten, "Science", "Biology", [5, 6, 7, 8, 13]);
  [nine, ten].forEach(className => {
    CBSE_METADATA[className].Science.forEach(row => {
      const subject = ["Physics", "Chemistry", "Biology", "Earth Science", "Scientific Inquiry"]
        .find(name => (CBSE_CHAPTERS[className][name] || []).includes(row.title));
      row.area = subject || "Science";
    });
  });

  // Generic Hindi is an inventory union for legacy screens. Papers must use
  // the correct Course A / Course B list; no default course is guessed.
  CBSE_CHAPTERS[ten].Hindi = unique([
    ...CBSE_CHAPTERS[ten]["Hindi Course A"], ...CBSE_CHAPTERS[ten]["Hindi Course B"]
  ]);
  CBSE_METADATA[ten].Hindi = copy([
    ...CBSE_METADATA[ten]["Hindi Course A"].map(row => ({...row, course: "A"})),
    ...CBSE_METADATA[ten]["Hindi Course B"].map(row => ({...row, course: "B"}))
  ]);

  const languageAreas = ["Grammar", "Writing Skills", "Reading Comprehension"];
  // These are selectable assessment areas, not numbered textbook chapters.
  Object.keys(CBSE_CHAPTERS).forEach(className => {
    const map = CBSE_CHAPTERS[className];
    aliases[className] = {};
    canonicalSubjects[className] = Number.parseInt(className, 10) >= 11
      ? ["English", "Mathematics", "Physics", "Chemistry", "Biology"]
      : ["English", "Mathematics", "Science", "Social Science",
          ...(className === ten ? ["Hindi Course A", "Hindi Course B"] : ["Hindi"])];
    if (className === nine) canonicalSubjects[className].push("Mathematics at Advanced Level");
    ["English", "Hindi", "Hindi Course A", "Hindi Course B"].forEach(subject => {
      if (!map[subject]) return;
      languageAreas.forEach(title => {
        if (!map[subject].includes(title)) map[subject].push(title);
        CBSE_METADATA[className][subject].push({
          title, number: null, book: null, part: null, area: title,
          source: null, numberingBasis: "assessment-area"
        });
      });
    });
    alias(className, "Mathematics", ["Math", "Maths"]);
    alias(className, "Social Science", ["Social", "Social Studies"]);
    alias(className, "English", ["English 1", "English 2", "English-1", "English-2", "English1", "English2"]);
    alias(className, "Science", ["General Science"]);
    if (Number.parseInt(className, 10) <= 8) {
      // Compatibility aliases for older screens; the main subject stays integrated.
      alias(className, "Science", ["Physics", "Chemistry", "Biology", "Physical Science"]);
    } else if (map.Science) {
      alias(className, "Physics", ["Science (Physics)"]);
      alias(className, "Chemistry", ["Science (Chemistry)"]);
      alias(className, "Biology", ["Science (Biology)", "Natural Science", "Biological Science"]);
      map["Physical Science"] = unique([...map.Physics, ...map.Chemistry]);
      CBSE_METADATA[className]["Physical Science"] = copy([
        ...CBSE_METADATA[className].Physics, ...CBSE_METADATA[className].Chemistry
      ]).sort((a, b) => a.number - b.number);
    } else {
      // XI / XII have separate subjects, never one generic Science array.
      alias(className, "Biology", ["Biological Science"]);
      alias(className, "English", ["English Core"]);
    }
    if (className === ten) {
      alias(className, "Hindi Course A", ["Hindi A", "Hindi-A", "Hindi (A)", "Hindi (Group A)"]);
      alias(className, "Hindi Course B", ["Hindi B", "Hindi-B", "Hindi (B)", "Hindi (Group B)"]);
      alias(className, "English", ["English Language and Literature", "English (Language and Literature)"]);
      alias(className, "Mathematics", ["Mathematics Standard", "Mathematics Basic"]);
    }
  });

  const notes = {
    academicSession: "2026-27",
    updatedOn: "2026-10-10",
    scope: "Chapter and assessment-area catalogue for Classes 6-12; not an exam blueprint or exam-wise syllabus plan.",
    numbering: "Use metadata.number with metadata.book and metadata.part. Some Part 2 books restart numbering; flattened array indexes are not official chapter numbers. Language reading-sequence and prescribed-list numbers are explicitly labelled.",
    class9SocialScience: "Uses the official CBSE 2026-27 course-outline titles and part-wise unit numbers. NCERT contents PDFs were not accessible for complete textbook-title/number verification. The uploaded PDF is not used as authority for textbook numbering.",
    class10Hindi: "Generic Hindi combines both course inventories for legacy lookup. Select Hindi Course A or Hindi Course B before generating a paper; do not treat the union as one prescribed course.",
    class10SocialScience: {
      "The Age of Industrialisation": "Periodic assessment only; exclude from Board theory papers.",
      "Consumer Rights": "Project work; exclude from Board theory papers.",
      "Lifelines of National Economy": "Board assessment: map pointing only; other content is for interdisciplinary project work.",
      "The Making of a Global World": "Board theory scope: subtopics 1-1.3; other specified subtopics are for interdisciplinary project work.",
      "Globalisation and the Indian Economy": "Board theory: What is Globalisation? and factors enabling Globalisation; the remaining specified content is for interdisciplinary project work."
    },
    class10Science: {
      source: "https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Science_SecP1_2026-27.pdf",
      formativeOnly: ["Periodic Classification of Elements", "Evolution", "Electric Motor", "Electromagnetic Induction", "Electric Generator"],
      ambiguity: "The official document lists Heredity in Unit II but its teacher note also names Heredity and Evolution among topics excluded from year-end assessment. Heredity remains in the textbook catalogue; confirm the official clarification before automatic year-end inclusion.",
      scope: "The host app must enforce topic-level assessment limits. A chapter-name array alone cannot enforce them."
    },
    class9Science: "Science includes Biology, Chemistry, Physics, Earth Science and a scientific-inquiry introduction. Earth Science and the introduction are not falsely copied into each discipline list.",
    languageAreas: "Grammar, Writing Skills and Reading Comprehension are assessment categories, not textbook chapters. Exact task/topic coverage belongs to the exam configuration.",
    examPolicy: "User-selected school policy: Term 1 includes PT 1 + PT 2 + remaining Term 1 content; Term 2 / Annual covers the full prescribed annual syllabus. This catalogue does not automatically apply that policy in the host app.",
    primarySources: [
      "https://cbseacademic.nic.in/curriculum_2027.html",
      "https://ncert.nic.in/textbook.php"
    ]
  };

  function normalizeClass(value) {
    const text = String(value == null ? "" : value).trim();
    if (CBSE_CHAPTERS[text]) return text;
    const roman = {VI: 6, VII: 7, VIII: 8, IX: 9, X: 10, XI: 11, XII: 12};
    const cleaned = text.replace(/^(class|grade)\s*/i, "").replace(/\s*class$/i, "").trim();
    const number = roman[cleaned.toUpperCase()] || Number.parseInt(cleaned, 10);
    const key = `${number}th Class`;
    return CBSE_CHAPTERS[key] ? key : null;
  }

  function normalizeSubject(className, value) {
    const map = CBSE_CHAPTERS[className] || {};
    const text = String(value == null ? "" : value).trim();
    return Object.keys(map).find(key => key.toLowerCase() === text.toLowerCase()) || null;
  }

  // Optional helpers; existing screens may continue reading the old globals.
  function getChapters(classValue, subjectValue) {
    const className = normalizeClass(classValue);
    const subject = normalizeSubject(className, subjectValue);
    return className && subject ? [...CBSE_CHAPTERS[className][subject]] : [];
  }
  function getMetadata(classValue, subjectValue) {
    const className = normalizeClass(classValue);
    const subject = normalizeSubject(className, subjectValue);
    return className && subject ? copy(CBSE_METADATA[className][subject]) : [];
  }
  function getSubjects(classValue) {
    return [...(canonicalSubjects[normalizeClass(classValue)] || [])];
  }

  window.BOARD_CHAPTERS = window.BOARD_CHAPTERS || {};
  window.BOARD_CHAPTERS.CBSE = CBSE_CHAPTERS;
  window.CHAPTERS_CBSE = CBSE_CHAPTERS;
  window.CBSE_CHAPTER_METADATA = CBSE_METADATA;
  window.CBSE_SUBJECTS = canonicalSubjects;
  window.CBSE_SUBJECT_ALIASES = aliases;
  window.CBSE_SYLLABUS_NOTES = notes;
  window.CBSE_CHAPTERS_VERSION = "2026-27.2026-10-10";
  window.getCBSEChapters = getChapters;
  window.getCBSEChapterMetadata = getMetadata;
  window.getCBSESubjects = getSubjects;
})();

(function () {
  const ICSE_CHAPTERS = {
    "6th Class": {
      "Mathematics": [
        "Numbers",
        "Basic Operations",
        "Factors and Multiples",
        "Fractions",
        "Decimals",
        "Ratio and Proportion",
        "Percentage",
        "Algebra",
        "Geometry",
        "Mensuration",
        "Data Handling"
      ],
      "Science": [
        "Matter",
        "Living and Non-Living Things",
        "Plant Life",
        "Animal Life",
        "Human Body",
        "Food and Health",
        "Force and Work",
        "Light",
        "Sound",
        "Air and Water"
      ],
      "English": [
        "Prose",
        "Poetry",
        "Grammar",
        "Composition",
        "Comprehension"
      ],
      "History": [
        "Early Civilizations",
        "Ancient Egypt",
        "Ancient Mesopotamia",
        "Ancient China",
        "Ancient Greece"
      ],
      "Geography": [
        "The Earth and the Solar System",
        "Maps",
        "Landforms",
        "Weather and Climate",
        "Continents and Oceans"
      ],
      "Hindi": [
        "पाठ 1",
        "पाठ 2",
        "पाठ 3"
      ],
      "Computer Applications": [
        "Computer Fundamentals",
        "Hardware and Software",
        "Operating System",
        "Word Processing",
        "Internet"
      ]
    },

    "7th Class": {
      "Mathematics": [
        "Integers",
        "Fractions and Decimals",
        "Rational Numbers",
        "Ratio and Proportion",
        "Percentage and Simple Interest",
        "Algebraic Expressions",
        "Simple Equations",
        "Lines and Angles",
        "Triangles",
        "Congruency",
        "Perimeter and Area",
        "Data Handling"
      ],
      "Science": [
        "Matter and Its Composition",
        "Physical and Chemical Changes",
        "Acids, Bases and Salts",
        "Plant Life",
        "Animal Life",
        "Human Digestive System",
        "Respiration",
        "Transportation in Plants and Animals",
        "Heat",
        "Light Energy",
        "Sound",
        "Electricity and Magnetism"
      ],
      "English": [
        "Prose",
        "Poetry",
        "Grammar",
        "Composition",
        "Comprehension"
      ],
      "History": [
        "Rise of Islam",
        "The Delhi Sultanate",
        "The Mughal Empire",
        "Regional Kingdoms",
        "Medieval Architecture"
      ],
      "Geography": [
        "Representation of Geographical Features",
        "Atmosphere",
        "Weather and Climate",
        "Natural Vegetation",
        "Human Settlements"
      ],
      "Hindi": [
        "पाठ 1",
        "पाठ 2",
        "पाठ 3"
      ],
      "Computer Applications": [
        "Number System",
        "Computer Virus and Security",
        "Spreadsheet",
        "Presentation Software",
        "Internet Services"
      ]
    },

    "8th Class": {
      "Mathematics": [
        "Rational Numbers",
        "Exponents and Powers",
        "Squares and Square Roots",
        "Cubes and Cube Roots",
        "Algebraic Expressions",
        "Factorisation",
        "Linear Equations",
        "Understanding Quadrilaterals",
        "Practical Geometry",
        "Mensuration",
        "Direct and Inverse Variation",
        "Data Handling"
      ],
      "Science": [
        "Matter",
        "Physical and Chemical Changes",
        "Metals and Non-Metals",
        "Cell",
        "Tissues",
        "Reproduction in Plants and Animals",
        "Adolescence",
        "Force and Pressure",
        "Energy",
        "Light",
        "Sound",
        "Electricity",
        "Magnetism",
        "Pollution"
      ],
      "English": [
        "Prose",
        "Poetry",
        "Grammar",
        "Composition",
        "Comprehension"
      ],
      "History": [
        "The Modern Age in Europe",
        "The American Revolution",
        "The French Revolution",
        "The Industrial Revolution",
        "British Rule in India"
      ],
      "Geography": [
        "Population Dynamics",
        "Migration",
        "Urbanisation",
        "Natural Resources",
        "Industries",
        "Asia"
      ],
      "Hindi": [
        "पाठ 1",
        "पाठ 2",
        "पाठ 3"
      ],
      "Computer Applications": [
        "Computer Network",
        "Ethics and Safety",
        "Introduction to HTML",
        "Lists and Tables in HTML",
        "Forms in HTML"
      ]
    },

    "9th Class": {
      "Mathematics": [
        "Rational and Irrational Numbers",
        "Compound Interest",
        "Expansions",
        "Factorisation",
        "Simultaneous Linear Equations",
        "Indices",
        "Logarithms",
        "Triangles",
        "Mid-Point Theorem",
        "Quadrilaterals",
        "Areas of Parallelograms and Triangles",
        "Circles",
        "Coordinate Geometry",
        "Mensuration",
        "Statistics"
      ],
      "Physics": [
        "Measurements and Experimentation",
        "Motion in One Dimension",
        "Laws of Motion",
        "Pressure in Fluids and Atmospheric Pressure",
        "Upthrust in Fluids, Archimedes' Principle and Floatation",
        "Heat and Energy",
        "Propagation of Sound Waves",
        "Reflection of Light",
        "Electricity and Magnetism"
      ],
      "Chemistry": [
        "The Language of Chemistry",
        "Chemical Changes and Reactions",
        "Water",
        "Atomic Structure and Chemical Bonding",
        "The Periodic Table",
        "Study of the First Element - Hydrogen",
        "Study of Gas Laws",
        "Atmosphere",
        "Practical Chemistry"
      ],
      "Biology": [
        "Introducing Biology",
        "Cell: The Unit of Life",
        "Tissues",
        "Flower",
        "Pollination and Fertilisation",
        "Seeds",
        "Respiration in Plants",
        "Economic Importance of Bacteria and Fungi",
        "Nutrition",
        "Digestive System",
        "Skeleton - Movement and Locomotion",
        "Skin",
        "Hygiene",
        "Diseases: Cause and Control",
        "AIDS"
      ],
      "English": [
        "Drama",
        "Poetry",
        "Short Stories",
        "Grammar",
        "Composition",
        "Comprehension"
      ],
      "History": [
        "The Harappan Civilization",
        "The Vedic Period",
        "Jainism and Buddhism",
        "The Mauryan Empire",
        "The Sangam Age",
        "The Age of the Guptas"
      ],
      "Civics": [
        "Our Constitution",
        "Salient Features of the Constitution",
        "Elections",
        "Local Self-Government in Rural Areas",
        "Local Self-Government in Urban Areas"
      ],
      "Geography": [
        "Earth as a Planet",
        "Geographic Grid",
        "Rotation and Revolution",
        "Structure of the Earth",
        "Earth Movements",
        "Volcanoes",
        "Earthquakes",
        "Weathering and Denudation",
        "Hydrosphere",
        "Atmosphere",
        "Insolation",
        "Winds",
        "Humidity",
        "Pollution"
      ],
      "Hindi": [
        "पाठ 1",
        "पाठ 2",
        "पाठ 3"
      ],
      "Computer Applications": [
        "Introduction to Object-Oriented Programming",
        "Values and Data Types",
        "Operators in Java",
        "Input in Java",
        "Conditional Statements",
        "Iterative Statements",
        "Nested Loops"
      ]
    },

    "10th Class": {
      "Mathematics": [
        "Goods and Services Tax",
        "Banking",
        "Shares and Dividends",
        "Linear Inequations",
        "Quadratic Equations",
        "Ratio and Proportion",
        "Factorisation",
        "Matrices",
        "Arithmetic Progression",
        "Reflection",
        "Section and Mid-Point Formula",
        "Equation of a Line",
        "Similarity",
        "Loci",
        "Circles",
        "Geometrical Theorems",
        "Mensuration",
        "Trigonometry",
        "Heights and Distances",
        "Probability",
        "Statistics"
      ],
      "Physics": [
        "Force",
        "Work, Energy and Power",
        "Machines",
        "Refraction of Light at Plane Surfaces",
        "Refraction through a Lens",
        "Spectrum",
        "Sound",
        "Current Electricity",
        "Household Circuits",
        "Electromagnetism",
        "Radioactivity"
      ],
      "Chemistry": [
        "Periodic Properties and Variations of Properties",
        "Chemical Bonding",
        "Study of Acids, Bases and Salts",
        "Analytical Chemistry",
        "Mole Concept and Stoichiometry",
        "Electrolysis",
        "Metallurgy",
        "Study of Compounds - Ammonia",
        "Study of Compounds - Nitric Acid",
        "Study of Compounds - Sulphuric Acid",
        "Study of Compounds - Hydrochloric Acid",
        "Study of Organic Compounds",
        "Practical Chemistry"
      ],
      "Biology": [
        "Cell Division",
        "Genetics",
        "Absorption by Roots",
        "Transpiration",
        "Photosynthesis",
        "Chemical Coordination in Plants",
        "The Circulatory System",
        "The Excretory System",
        "The Nervous System",
        "Sense Organs",
        "The Endocrine System",
        "The Reproductive System",
        "Population",
        "Pollution",
        "Human Evolution"
      ],
      "English": [
        "Drama",
        "Poetry",
        "Short Stories",
        "Grammar",
        "Composition",
        "Comprehension"
      ],
      "History": [
        "The First War of Independence, 1857",
        "Factors Leading to the Growth of Nationalism",
        "First Phase of the Indian National Movement",
        "Second Phase of the Indian National Movement",
        "Mass Phase of the National Movement",
        "The Contemporary World"
      ],
      "Civics": [
        "The Union Parliament",
        "The President and the Vice-President",
        "Prime Minister and Council of Ministers",
        "The Supreme Court",
        "The High Courts",
        "Subordinate Courts"
      ],
      "Geography": [
        "Map of India",
        "Climate",
        "Soil Resources",
        "Natural Vegetation",
        "Water Resources",
        "Mineral and Energy Resources",
        "Agriculture",
        "Manufacturing Industries",
        "Transport",
        "Waste Management"
      ],
      "Hindi": [
        "पाठ 1",
        "पाठ 2",
        "पाठ 3"
      ],
      "Computer Applications": [
        "Classes and Objects",
        "Constructors",
        "Methods",
        "Method Overloading",
        "Arrays",
        "Strings",
        "Recursion",
        "Class as the Basis of All Computation"
      ]
    }
  };

  function copyArray(arr) {
    return Array.isArray(arr) ? [...arr] : [];
  }

  function addAlias(subjectMap, originalKey, aliasKeys) {
    if (!subjectMap[originalKey]) return;
    aliasKeys.forEach(alias => {
      subjectMap[alias] = copyArray(subjectMap[originalKey]);
    });
  }

  Object.keys(ICSE_CHAPTERS).forEach(className => {
    const subjectMap = ICSE_CHAPTERS[className];

    addAlias(subjectMap, "Mathematics", ["Math", "Maths"]);
    addAlias(subjectMap, "History", ["History & Civics"]);
    addAlias(subjectMap, "Geography", ["Geo"]);
    addAlias(subjectMap, "Computer Applications", ["Computer", "Computers"]);

    if (subjectMap["Physics"]) addAlias(subjectMap, "Physics", ["Physical Science"]);
    if (subjectMap["Chemistry"]) addAlias(subjectMap, "Chemistry", ["Chem"]);
    if (subjectMap["Biology"]) addAlias(subjectMap, "Biology", ["Bio"]);

    if (subjectMap["Science"]) {
      subjectMap["Physics"] = copyArray(subjectMap["Science"]);
      subjectMap["Chemistry"] = copyArray(subjectMap["Science"]);
      subjectMap["Biology"] = copyArray(subjectMap["Science"]);
      subjectMap["Physical Science"] = copyArray(subjectMap["Science"]);
    }
  });

  window.BOARD_CHAPTERS = window.BOARD_CHAPTERS || {};
  window.BOARD_CHAPTERS["ICSE"] = ICSE_CHAPTERS;

  window.CHAPTERS_ICSE = ICSE_CHAPTERS;
})();
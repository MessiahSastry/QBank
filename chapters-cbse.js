(function () {
  const CBSE_CHAPTERS = {
    "6th Class": {
      "Mathematics": [
        "Knowing Our Numbers",
        "Whole Numbers",
        "Playing with Numbers",
        "Basic Geometrical Ideas",
        "Understanding Elementary Shapes",
        "Integers",
        "Fractions",
        "Decimals",
        "Data Handling",
        "Mensuration",
        "Algebra",
        "Ratio and Proportion",
        "Symmetry",
        "Practical Geometry"
      ],
      "Science": [
        "Food: Where Does It Come From?",
        "Components of Food",
        "Fibre to Fabric",
        "Sorting Materials into Groups",
        "Separation of Substances",
        "Changes Around Us",
        "Getting to Know Plants",
        "Body Movements",
        "The Living Organisms and Their Surroundings",
        "Motion and Measurement of Distances",
        "Light, Shadows and Reflections",
        "Electricity and Circuits",
        "Fun with Magnets",
        "Water",
        "Air Around Us",
        "Garbage In, Garbage Out"
      ],
      "English": [
        "Prose",
        "Poetry",
        "Grammar",
        "Writing Skills",
        "Reading Comprehension"
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
        "Grassroots Democracy — Part 1: Governance",
        "Grassroots Democracy — Part 2: Local Government in Rural Areas",
        "Grassroots Democracy — Part 3: Local Government in Urban Areas",
        "The Value of Work",
        "Economic Activities Around Us"
      ],
      "Hindi": [
        "पाठ 1",
        "पाठ 2",
        "पाठ 3"
      ]
    },

    "7th Class": {
      "Mathematics": [
        "Integers",
        "Fractions and Decimals",
        "Data Handling",
        "Simple Equations",
        "Lines and Angles",
        "The Triangle and Its Properties",
        "Congruence of Triangles",
        "Comparing Quantities",
        "Rational Numbers",
        "Practical Geometry",
        "Perimeter and Area",
        "Algebraic Expressions",
        "Exponents and Powers",
        "Symmetry",
        "Visualising Solid Shapes"
      ],
      "Science": [
        "Nutrition in Plants",
        "Nutrition in Animals",
        "Fibre to Fabric",
        "Heat",
        "Acids, Bases and Salts",
        "Physical and Chemical Changes",
        "Weather, Climate and Adaptations of Animals to Climate",
        "Winds, Storms and Cyclones",
        "Soil",
        "Respiration in Organisms",
        "Transportation in Animals and Plants",
        "Reproduction in Plants",
        "Motion and Time",
        "Electric Current and Its Effects",
        "Light",
        "Water: A Precious Resource",
        "Forests: Our Lifeline",
        "Wastewater Story"
      ],
      "English": [
        "Prose",
        "Poetry",
        "Grammar",
        "Writing Skills",
        "Reading Comprehension"
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
        "The Constitution of India — An Introduction",
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
      ],
      "Hindi": [
        "पाठ 1",
        "पाठ 2",
        "पाठ 3"
      ]
    },

    "8th Class": {
      "Mathematics": [
        "Rational Numbers",
        "Linear Equations in One Variable",
        "Understanding Quadrilaterals",
        "Practical Geometry",
        "Data Handling",
        "Squares and Square Roots",
        "Cubes and Cube Roots",
        "Comparing Quantities",
        "Algebraic Expressions and Identities",
        "Visualising Solid Shapes",
        "Mensuration",
        "Exponents and Powers",
        "Direct and Inverse Proportions",
        "Factorisation",
        "Introduction to Graphs",
        "Playing with Numbers"
      ],
      "Science": [
        "Crop Production and Management",
        "Microorganisms: Friend and Foe",
        "Synthetic Fibres and Plastics",
        "Materials: Metals and Non-Metals",
        "Coal and Petroleum",
        "Combustion and Flame",
        "Conservation of Plants and Animals",
        "Cell — Structure and Functions",
        "Reproduction in Animals",
        "Reaching the Age of Adolescence",
        "Force and Pressure",
        "Friction",
        "Sound",
        "Chemical Effects of Electric Current",
        "Some Natural Phenomena",
        "Light",
        "Stars and the Solar System",
        "Pollution of Air and Water"
      ],
      "English": [
        "Prose",
        "Poetry",
        "Grammar",
        "Writing Skills",
        "Reading Comprehension"
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
      ],
      "Hindi": [
        "पाठ 1",
        "पाठ 2",
        "पाठ 3"
      ]
    },

    "9th Class": {
      "Mathematics": [
        "Number Systems",
        "Polynomials",
        "Coordinate Geometry",
        "Linear Equations in Two Variables",
        "Introduction to Euclid's Geometry",
        "Lines and Angles",
        "Triangles",
        "Quadrilaterals",
        "Areas of Parallelograms and Triangles",
        "Circles",
        "Constructions",
        "Heron's Formula",
        "Surface Areas and Volumes",
        "Statistics",
        "Probability"
      ],
      "Science": [
        "Matter in Our Surroundings",
        "Is Matter Around Us Pure?",
        "Atoms and Molecules",
        "Structure of the Atom",
        "The Fundamental Unit of Life",
        "Tissues",
        "Diversity in Living Organisms",
        "Motion",
        "Force and Laws of Motion",
        "Gravitation",
        "Work and Energy",
        "Sound",
        "Why Do We Fall Ill?",
        "Natural Resources",
        "Improvement in Food Resources"
      ],
      "English": [
        "Beehive",
        "Moments",
        "Grammar",
        "Writing Skills",
        "Reading Comprehension"
      ],
           "Social Science": [
        "Understanding Social Science",
        "Shaping of the Earth's Surface",
        "Atmosphere and Climate",
        "Early Humans and Beginning of Civilisation",
        "State and Society up to 1000 CE",
        "Democracy",
        "Elections",
        "Building Blocks in Economics: The Problem of Choice",
        "The Price Puzzle: What Drives the Market"
      ],
      "Hindi": [
        "पाठ 1",
        "पाठ 2",
        "पाठ 3"
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
        "Metals and Non-Metals",
        "Carbon and Its Compounds",
        "Life Processes",
        "Control and Coordination",
        "How Do Organisms Reproduce?",
        "Heredity and Evolution",
        "Light — Reflection and Refraction",
        "The Human Eye and the Colourful World",
        "Electricity",
        "Magnetic Effects of Electric Current",
        "Our Environment",
        "Sustainable Management of Natural Resources"
      ],
      "English": [
        "A Letter to God",
        "A Triumph of Surgery",
        "Change from Active Voice to Passive Voice",
        "Writing Skills",
        "Reading Comprehension"
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
      ],
      "Hindi": [
        "पाठ 1",
        "पाठ 2",
        "पाठ 3"
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

  Object.keys(CBSE_CHAPTERS).forEach(className => {
    const subjectMap = CBSE_CHAPTERS[className];

    addAlias(subjectMap, "Mathematics", ["Math", "Maths"]);
    addAlias(subjectMap, "Science", ["General Science"]);
    addAlias(subjectMap, "Social Science", ["Social"]);
    addAlias(subjectMap, "English", ["English 1", "English 2"]);

    if (subjectMap["Science"]) {
      subjectMap["Physics"] = copyArray(subjectMap["Science"]);
      subjectMap["Chemistry"] = copyArray(subjectMap["Science"]);
      subjectMap["Biology"] = copyArray(subjectMap["Science"]);
      subjectMap["Physical Science"] = copyArray(subjectMap["Science"]);
    }
  });

  window.BOARD_CHAPTERS = window.BOARD_CHAPTERS || {};
  window.BOARD_CHAPTERS["CBSE"] = CBSE_CHAPTERS;

  window.CHAPTERS_CBSE = CBSE_CHAPTERS;
})();

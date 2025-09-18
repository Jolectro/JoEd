// =====================
// QUIZ DATA
// =====================
const quizData = {
    space: [
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Mercury"],
            answer: "Mars"
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Saturn", "Earth", "Jupiter", "Neptune"],
            answer: "Jupiter"
        },
        {
            question: "Which galaxy is Earth located in?",
            options: ["Andromeda Galaxy", "Milky Way Galaxy", "Whirlpool Galaxy", "Sombrero Galaxy"],
            answer: "Milky Way Galaxy"
        },
        {
            question: "The Sun produces energy mainly by:",
            options: ["Nuclear fission", "Chemical combustion", "Nuclear fusion", "Radioactive decay"],
            answer: "Nuclear fusion"
        },
        {
            question: "Which is the hottest planet in the solar system?",
            options: ["Mercury", "Venus", "Mars", "Jupiter"],
            answer: "Venus"
        },
        {
            question: "The first manned mission to land on the Moon was:",
            options: ["Apollo 11", "Apollo 13", "Voyager 1", "Sputnik 1"],
            answer: "Apollo 11"
        },
        {
            question: "What is a light year a measure of?",
            options: ["Time", "Speed", "Distance", "Brightness"],
            answer: "Distance"
        },
        {
            question: "Which planet has the most moons?",
            options: ["Earth", "Jupiter", "Saturn", "Neptune"],
            answer: "Saturn"
        },
        {
            question: "The Great Red Spot is a storm on which planet?",
            options: ["Mars", "Jupiter", "Neptune", "Saturn"],
            answer: "Jupiter"
        },
        {
            question: "Which spacecraft was the first to leave the solar system?",
            options: ["Voyager 1", "Voyager 2", "Pioneer 10", "New Horizons"],
            answer: "Voyager 1"
        }
    ],
    inventions: [
        {
            question: "Who is credited with inventing the telephone?",
            options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
            answer: "Alexander Graham Bell"
        },
        {
            question: "The light bulb was invented by:",
            options: ["James Watt", "Thomas Edison", "Michael Faraday", "Nikola Tesla"],
            answer: "Thomas Edison"
        },
        {
            question: "Who invented the World Wide Web?",
            options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Larry Page"],
            answer: "Tim Berners-Lee"
        },
        {
            question: "The airplane was invented by:",
            options: ["Alexander Fleming", "Wright Brothers", "Henry Ford", "Charles Babbage"],
            answer: "Wright Brothers"
        },
        {
            question: "Who is known as the father of the computer?",
            options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Steve Jobs"],
            answer: "Charles Babbage"
        },
        {
            question: "Who discovered penicillin?",
            options: ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Joseph Lister"],
            answer: "Alexander Fleming"
        },
        {
            question: "The steam engine was improved and made practical by:",
            options: ["James Watt", "George Stephenson", "Michael Faraday", "Thomas Newcomen"],
            answer: "James Watt"
        },
        {
            question: "Who invented the printing press?",
            options: ["Galileo Galilei", "Johannes Gutenberg", "Leonardo da Vinci", "Isaac Newton"],
            answer: "Johannes Gutenberg"
        },
        {
            question: "Which scientist is credited with the discovery of electricity through experiments with a kite?",
            options: ["Michael Faraday", "Nikola Tesla", "Benjamin Franklin", "Alessandro Volta"],
            answer: "Benjamin Franklin"
        },
        {
            question: "Who developed the theory of radioactivity and discovered polonium and radium?",
            options: ["Albert Einstein", "Marie Curie", "Ernest Rutherford", "Dmitri Mendeleev"],
            answer: "Marie Curie"
        }
    ],
    humans: [
        {
            question: "What is the largest organ in the human body?",
            options: ["Heart", "Liver", "Skin", "Lungs"],
            answer: "Skin"
        },
        {
            question: "Which part of the human brain controls balance and coordination?",
            options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
            answer: "Cerebellum"
        },
        {
            question: "How many chambers does the human heart have?",
            options: ["2", "3", "4", "5"],
            answer: "4"
        },
        {
            question: "Which blood cells help fight infections?",
            options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
            answer: "White blood cells"
        },
        {
            question: "Which vitamin is mainly produced when the skin is exposed to sunlight?",
            options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
            answer: "Vitamin D"
        },
        {
            question: "What is the average normal body temperature of humans?",
            options: ["35°C", "36.5°C", "37°C", "38.5°C"],
            answer: "37°C"
        },
        {
            question: "Which part of the body is responsible for filtering blood and producing urine?",
            options: ["Lungs", "Kidneys", "Liver", "Pancreas"],
            answer: "Kidneys"
        },
        {
            question: "What type of joint is the shoulder joint?",
            options: ["Hinge joint", "Pivot joint", "Ball-and-socket joint", "Gliding joint"],
            answer: "Ball-and-socket joint"
        },
        {
            question: "Which system in the human body is responsible for transporting oxygen and nutrients?",
            options: ["Respiratory system", "Circulatory system", "Digestive system", "Nervous system"],
            answer: "Circulatory system"
        },
        {
            question: "Which sense organ is connected to the olfactory nerve?",
            options: ["Eyes", "Ears", "Nose", "Tongue"],
            answer: "Nose"
        }
    ],
    animals: [
        {
            question: "Which is the fastest land animal?",
            options: ["Lion", "Cheetah", "Horse", "Leopard"],
            answer: "Cheetah"
        },
        {
            question: "Which animal is known as the 'ship of the desert'?",
            options: ["Donkey", "Camel", "Horse", "Elephant"],
            answer: "Camel"
        },
        {
            question: "What is the largest mammal on Earth?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
            answer: "Blue Whale"
        },
        {
            question: "Which bird is a universal symbol of peace?",
            options: ["Eagle", "Swan", "Dove", "Parrot"],
            answer: "Dove"
        },
        {
            question: "Which animal lays the largest eggs?",
            options: ["Crocodile", "Ostrich", "Turtle", "Penguin"],
            answer: "Ostrich"
        },
        {
            question: "How many legs does a spider have?",
            options: ["6", "8", "10", "12"],
            answer: "8"
        },
        {
            question: "Which animal is known to have the longest lifespan?",
            options: ["Elephant", "Blue Whale", "Tortoise", "Shark"],
            answer: "Tortoise"
        },
        {
            question: "What is a group of lions called?",
            options: ["Pack", "Pride", "Herd", "Swarm"],
            answer: "Pride"
        },
        {
            question: "Which animal can change its skin color to blend with its surroundings?",
            options: ["Frog", "Chameleon", "Snake", "Lizard"],
            answer: "Chameleon"
        },
        {
            question: "Which bird is known for its ability to mimic human speech?",
            options: ["Crow", "Owl", "Parrot", "Pigeon"],
            answer: "Parrot"
        }
    ],
    countries: [
        {
            question: "Which is the largest country in the world by area?",
            options: ["Canada", "China", "USA", "Russia"],
            answer: "Russia"
        },
        {
            question: "What is the most populated country in the world?",
            options: ["India", "USA", "China", "Indonesia"],
            answer: "India"
        },
        {
            question: "Which country is called the 'Land of the Rising Sun'?",
            options: ["Japan", "Thailand", "South Korea", "China"],
            answer: "Japan"
        },
        {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
            answer: "Canberra"
        },
        {
            question: "Which African country has the largest population?",
            options: ["South Africa", "Egypt", "Nigeria", "Kenya"],
            answer: "Nigeria"
        },
        {
            question: "Which country is famous for its pyramids?",
            options: ["Peru", "Egypt", "Mexico", "Iraq"],
            answer: "Egypt"
        },
        {
            question: "Which European country uses the city of Bern as its capital?",
            options: ["Switzerland", "Germany", "Austria", "Belgium"],
            answer: "Switzerland"
        },
        {
            question: "Which country is the smallest in the world by area?",
            options: ["Monaco", "Vatican City", "Liechtenstein", "Malta"],
            answer: "Vatican City"
        },
        {
            question: "Which South American country is known for the Amazon rainforest?",
            options: ["Brazil", "Argentina", "Peru", "Colombia"],
            answer: "Brazil"
        },
        {
            question: "Which Asian country is the birthplace of yoga?",
            options: ["Nepal", "China", "India", "Sri Lanka"],
            answer: "India"
        }
    ],
    wonders: [
        {
            question: "Which of the Seven Ancient Wonders still exists today?",
            options: ["Colossus of Rhodes", "Great Pyramid of Giza", "Hanging Gardens of Babylon", "Temple of Artemis"],
            answer: "Great Pyramid of Giza"
        },
        {
            question: "Where is the Taj Mahal located?",
            options: ["India", "Pakistan", "Bangladesh", "Nepal"],
            answer: "India"
        },
        {
            question: "Christ the Redeemer statue overlooks which city?",
            options: ["Rio de Janeiro", "São Paulo", "Lisbon", "Buenos Aires"],
            answer: "Rio de Janeiro"
        },
        {
            question: "The Colosseum, one of the New Seven Wonders, is in which country?",
            options: ["France", "Spain", "Italy", "Greece"],
            answer: "Italy"
        },
        {
            question: "Machu Picchu, an Incan citadel, is located in which South American country?",
            options: ["Chile", "Peru", "Bolivia", "Ecuador"],
            answer: "Peru"
        },
        {
            question: "Which wonder is carved into the rose-red cliffs of Jordan?",
            options: ["Stonehenge", "Petra", "Angkor Wat", "Acropolis"],
            answer: "Petra"
        },
        {
            question: "The Great Wall of China was primarily built to protect against invasions from which direction?",
            options: ["North", "South", "East", "West"],
            answer: "North"
        },
        {
            question: "Chichen Itza, a famous Mayan pyramid, is in which country?",
            options: ["Mexico", "Guatemala", "Honduras", "Belize"],
            answer: "Mexico"
        },
        {
            question: "Which ancient wonder was said to have hanging gardens, though its existence is debated?",
            options: ["Great Lighthouse of Alexandria", "Mausoleum at Halicarnassus", "Hanging Gardens of Babylon", "Statue of Zeus"],
            answer: "Hanging Gardens of Babylon"
        },
        {
            question: "Which wonder is also known as the 'Lighthouse of Alexandria'?",
            options: ["Pharos of Alexandria", "Temple of Artemis", "Colossus of Rhodes", "Acropolis"],
            answer: "Pharos of Alexandria"
        }
    ],
    oceans: [
        {
            question: "Which is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
            answer: "Pacific Ocean"
        },
        {
            question: "The Red Sea lies between which two continents?",
            options: ["Asia and Europe", "Africa and Asia", "Europe and Africa", "North America and South America"],
            answer: "Africa and Asia"
        },
        {
            question: "Which ocean is the smallest and shallowest?",
            options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
            answer: "Arctic Ocean"
        },
        {
            question: "The Mariana Trench, the deepest part of the ocean, is located in which ocean?",
            options: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Southern Ocean"],
            answer: "Pacific Ocean"
        },
        {
            question: "The Mediterranean Sea is connected to the Atlantic Ocean by which strait?",
            options: ["Strait of Malacca", "Strait of Gibraltar", "Bering Strait", "Bosporus Strait"],
            answer: "Strait of Gibraltar"
        },
        {
            question: "Which sea is the saltiest in the world?",
            options: ["Caspian Sea", "Dead Sea", "Black Sea", "Mediterranean Sea"],
            answer: "Dead Sea"
        },
        {
            question: "Which ocean current is known as the warm current of the Atlantic Ocean?",
            options: ["Kuroshio Current", "Gulf Stream", "California Current", "Humboldt Current"],
            answer: "Gulf Stream"
        },
        {
            question: "The Sargasso Sea is unique because it has no land boundaries. In which ocean is it found?",
            options: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Southern Ocean"],
            answer: "Atlantic Ocean"
        },
        {
            question: "Which sea is the world’s largest inland body of water?",
            options: ["Dead Sea", "Caspian Sea", "Aral Sea", "Black Sea"],
            answer: "Caspian Sea"
        },
        {
            question: "The Southern Ocean surrounds which continent?",
            options: ["Asia", "Africa", "Antarctica", "Australia"],
            answer: "Antarctica"
        }
    ],
    ancient: [
        {
            question: "Which ancient civilization built the pyramids of Giza?",
            options: ["Mesopotamian", "Egyptian", "Greek", "Mayan"],
            answer: "Egyptian"
        },
        {
            question: "The Hanging Gardens, one of the Seven Wonders of the Ancient World, were located in which civilization?",
            options: ["Babylonian", "Greek", "Roman", "Persian"],
            answer: "Babylonian"
        },
        {
            question: "Which ancient civilization is credited with the invention of democracy?",
            options: ["Roman", "Greek", "Chinese", "Egyptian"],
            answer: "Greek"
        },
        {
            question: "Which writing system was developed in ancient Mesopotamia?",
            options: ["Hieroglyphics", "Cuneiform", "Sanskrit", "Latin"],
            answer: "Cuneiform"
        },
        {
            question: "The Indus Valley Civilization was mainly located in which present-day countries?",
            options: ["Egypt and Sudan", "India and Pakistan", "Greece and Turkey", "Iran and Iraq"],
            answer: "India and Pakistan"
        },
        {
            question: "Which ancient empire built the famous road network called the Royal Road?",
            options: ["Greek Empire", "Persian Empire", "Roman Empire", "Mayan Empire"],
            answer: "Persian Empire"
        },
        {
            question: "Machu Picchu, the famous ancient city, belonged to which civilization?",
            options: ["Aztec", "Inca", "Mayan", "Olmec"],
            answer: "Inca"
        },
        {
            question: "The Great Wall was originally built by which ancient civilization?",
            options: ["Persian", "Egyptian", "Chinese", "Roman"],
            answer: "Chinese"
        },
        {
            question: "Which ancient civilization developed the concept of zero in mathematics?",
            options: ["Greek", "Mayan", "Egyptian", "Roman"],
            answer: "Mayan"
        },
        {
            question: "Which Roman structure was used for gladiator contests and public spectacles?",
            options: ["Pantheon", "Colosseum", "Forum", "Circus Maximus"],
            answer: "Colosseum"
        }
    ],
    natural: [
        {
            question: "What scale is used to measure the magnitude of earthquakes?",
            options: ["Richter Scale", "Beaufort Scale", "Fujita Scale", "Mercalli Scale"],
            answer: "Richter Scale"
        },
        {
            question: "What natural disaster is measured using the Saffir-Simpson scale?",
            options: ["Tornado", "Hurricane", "Earthquake", "Volcano"],
            answer: "Hurricane"
        },
        {
            question: "Which natural disaster is caused by the sudden movement of tectonic plates under the ocean?",
            options: ["Hurricane", "Tsunami", "Cyclone", "Drought"],
            answer: "Tsunami"
        },
        {
            question: "The eruption of Mount Vesuvius buried which Roman city in 79 AD?",
            options: ["Athens", "Pompeii", "Rome", "Alexandria"],
            answer: "Pompeii"
        },
        {
            question: "What is a long period of abnormally low rainfall called?",
            options: ["Flood", "Drought", "Heatwave", "Storm surge"],
            answer: "Drought"
        },
        {
            question: "Which country is most prone to earthquakes and tsunamis due to its location on the Ring of Fire?",
            options: ["India", "Japan", "Italy", "Brazil"],
            answer: "Japan"
        },
        {
            question: "What natural disaster is measured by the Fujita Scale?",
            options: ["Earthquake", "Volcano", "Tornado", "Flood"],
            answer: "Tornado"
        },
        {
            question: "Which natural disaster involves molten rock, ash, and gas erupting from Earth’s crust?",
            options: ["Earthquake", "Hurricane", "Volcano", "Landslide"],
            answer: "Volcano"
        },
        {
            question: "What is the sudden downhill movement of rock, soil, and debris called?",
            options: ["Avalanche", "Landslide", "Mudflow", "Sinkhole"],
            answer: "Landslide"
        },
        {
            question: "What phenomenon occurs when frozen snow rapidly slides down a mountain slope?",
            options: ["Glacier flow", "Avalanche", "Mudslide", "Ice drift"],
            answer: "Avalanche"
        }
    ],
    famous: [
        {
            question: "Where is the Eiffel Tower located?",
            options: ["Paris, France", "London, UK", "Rome, Italy", "Berlin, Germany"],
            answer: "Paris, France"
        },
        {
            question: "The Great Wall of China was originally built to protect against invasions from which group?",
            options: ["Romans", "Mongols", "Persians", "Turks"],
            answer: "Mongols"
        },
        {
            question: "Christ the Redeemer statue is located in which country?",
            options: ["Argentina", "Spain", "Brazil", "Portugal"],
            answer: "Brazil"
        },
        {
            question: "Machu Picchu, the famous Incan site, is located in which country?",
            options: ["Mexico", "Peru", "Chile", "Bolivia"],
            answer: "Peru"
        },
        {
            question: "Which famous landmark is located in Agra, India?",
            options: ["Taj Mahal", "Lotus Temple", "Red Fort", "Qutub Minar"],
            answer: "Taj Mahal"
        },
        {
            question: "Which city is home to the Colosseum?",
            options: ["Athens", "Rome", "Istanbul", "Venice"],
            answer: "Rome"
        },
        {
            question: "Which landmark connects San Francisco and Marin County in California?",
            options: ["Golden Gate Bridge", "Brooklyn Bridge", "Tower Bridge", "Sydney Harbour Bridge"],
            answer: "Golden Gate Bridge"
        },
        {
            question: "Petra, the ancient city carved into rose-red cliffs, is in which country?",
            options: ["Egypt", "Jordan", "Greece", "Turkey"],
            answer: "Jordan"
        },
        {
            question: "Which famous clock tower is located in London?",
            options: ["Big Ben", "Clock Tower of Pisa", "Brandenburg Gate", "Westminster Clock"],
            answer: "Big Ben"
        },
        {
            question: "The Statue of Liberty was a gift to the United States from which country?",
            options: ["Italy", "Germany", "France", "Spain"],
            answer: "France"
        }
    ]
};


let currentQuiz = [];
let currentIndex = 0;
let score = 0;
let currentTopic = "";

function openQuiz(topic) {
    currentTopic = topic;
    currentQuiz = (quizData[topic]) || [];

    if (currentQuiz.length === 0) {
        alert(`No quiz found for "${topic}".`);
        return;
    }

    // Title auto-generated
    document.getElementById('quizTitle').textContent = 
        `${capitalize(topic)} Quiz`;

    currentIndex = 0;
    score = 0;
    showQuestion();
    document.getElementById('quizModal').style.display = 'block';
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function showQuestion() {
    const container = document.getElementById('quizQuestions');
    container.innerHTML = "";

    const progressFill = document.getElementById('quizProgressFill');
    const progressText = document.getElementById('quizProgressText');

    // Calculate progress percentage
    const progressPercent = Math.round((currentIndex / currentQuiz.length) * 100);
    progressFill.style.width = progressPercent + "%";

    // Calculate performance percentage
    let performance = 0;
    if (currentIndex > 0) {
        performance = Math.round((score / currentIndex) * 100);
    }

    // Choose emoji based on performance
    let emoji = "🤔";
    if (performance >= 70) {
        emoji = "😃";
        progressFill.style.background = "linear-gradient(90deg, #4CAF50, #2E7D32)";
    } else if (performance >= 40) {
        emoji = "😐";
        progressFill.style.background = "linear-gradient(90deg, #FFC107, #FFA000)";
    } else {
        emoji = "😢";
        progressFill.style.background = "linear-gradient(90deg, #F44336, #B71C1C)";
    }

    // Set progress bar text
    progressText.textContent = `${emoji} ${progressPercent}%`;

    // Show question or results
    if (currentIndex < currentQuiz.length) {
        const q = currentQuiz[currentIndex];
        const qElem = document.createElement('div');
        qElem.innerHTML = `<h3>${q.question}</h3>`;
        
        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.className = "btn quiz-option";
            btn.onclick = () => checkAnswer(opt);
            qElem.appendChild(btn);
        });
        
        container.appendChild(qElem);
    } else {
        // Final = 100% with emoji
        progressFill.style.width = "100%";
        progressText.textContent = `${emoji} 100%`;

        container.innerHTML = `
            <h3>You scored ${score} / ${currentQuiz.length}</h3>
            <button class="btn learn" onclick="closeQuiz()">Close</button>
        `;
    }
}

function checkAnswer(selected) {
    const currentQuestion = currentQuiz[currentIndex];
    const options = document.querySelectorAll(".quiz-option");

    options.forEach(btn => {
        btn.disabled = true; // prevent multiple clicks
        if (btn.textContent === currentQuestion.answer) {
            btn.classList.add("correct");
        }
        if (btn.textContent === selected && selected !== currentQuestion.answer) {
            btn.classList.add("wrong");
        }
    });

    if (selected === currentQuestion.answer) {
        score++;
    }

    // Wait before showing next question
    setTimeout(() => {
        currentIndex++;
        showQuestion();
    }, 1000);
}

function closeQuiz() {
    document.getElementById('quizModal').style.display = 'none';
}

// =====================
// QUIZ DATA
// =====================
const quizData = {
    numbers: [
        {
            question: "Which of the following is NOT a type of number system?",
            options: ["Binary", "Octal", "Hexadecimal", "Triangular"],
            answer: "Triangular"
        },
        {
            question: "What is the base of the decimal number system?",
            options: ["2", "8", "10", "16"],
            answer: "10"
        },
        {
            question: "Which number system uses only the digits 0 and 1?",
            options: ["Decimal", "Binary", "Octal", "Hexadecimal"],
            answer: "Binary"
        },
        {
            question: "Convert the binary number 1011 to decimal.",
            options: ["9", "10", "11", "12"],
            answer: "11"
        },
        {
            question: "Which number is the identity element for addition?",
            options: ["0", "1", "-1", "10"],
            answer: "0"
        },
        {
            question: "Which number is the identity element for multiplication?",
            options: ["0", "1", "-1", "10"],
            answer: "1"
        },
        {
            question: "What is 25 divided by 0?",
            options: ["0", "25", "Undefined", "Infinity"],
            answer: "Undefined"
        },
        {
            question: "Which property states that a + b = b + a?",
            options: ["Associative property", "Commutative property", "Distributive property", "Identity property"],
            answer: "Commutative property"
        },
        {
            question: "Simplify: 6 × (2 + 3).",
            options: ["12", "15", "18", "30"],
            answer: "30"
        },
        {
            question: "What is the product of -7 and -8?",
            options: ["-56", "56", "-15", "15"],
            answer: "56"
        }
    ],
    functions: [
        {
            question: "Which of the following represents a function?",
            options: ["y² = x", "y = 2x + 1", "x² + y² = 25", "x = ±√y"],
            answer: "y = 2x + 1"
        },
        {
            question: "The graph of y = mx + c is a:",
            options: ["Circle", "Straight line", "Parabola", "Hyperbola"],
            answer: "Straight line"
        },
        {
            question: "What is the slope of the line: y = 3x - 2?",
            options: ["-2", "3", "1/3", "0"],
            answer: "3"
        },
        {
            question: "The function f(x) = x² is called a:",
            options: ["Linear function", "Quadratic function", "Cubic function", "Exponential function"],
            answer: "Quadratic function"
        },
        {
            question: "If f(x) = 2x + 5, what is f(3)?",
            options: ["8", "9", "11", "12"],
            answer: "11"
        },
        {
            question: "Which graph has a U-shape?",
            options: ["Linear", "Quadratic", "Cubic", "Exponential"],
            answer: "Quadratic"
        },
        {
            question: "The point where a graph cuts the y-axis is called?",
            options: ["x-intercept", "y-intercept", "Slope", "Vertex"],
            answer: "y-intercept"
        },
        {
            question: "If f(x) = x + 2 and g(x) = x², find (f ∘ g)(2).",
            options: ["4", "6", "8", "10"],
            answer: "6"
        },
        {
            question: "The maximum or minimum point of a quadratic graph is called?",
            options: ["Vertex", "Slope", "Root", "Axis"],
            answer: "Vertex"
        },
        {
            question: "What is the equation of a straight line passing through (0,4) with slope -2?",
            options: ["y = -2x + 4", "y = 2x + 4", "y = -2x - 4", "y = 4x - 2"],
            answer: "y = -2x + 4"
        }
    ],
    geometry: [
        {
            question: "The sum of interior angles of a triangle is:",
            options: ["90°", "180°", "270°", "360°"],
            answer: "180°"
        },
        {
            question: "What is the sum of interior angles of a hexagon?",
            options: ["360°", "540°", "720°", "900°"],
            answer: "720°"
        },
        {
            question: "A polygon with 8 sides is called a:",
            options: ["Heptagon", "Octagon", "Nonagon", "Decagon"],
            answer: "Octagon"
        },
        {
            question: "What is the area of a rectangle with length 8 cm and width 5 cm?",
            options: ["13 cm²", "30 cm²", "40 cm²", "50 cm²"],
            answer: "40 cm²"
        },
        {
            question: "Which triangle has all sides equal?",
            options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
            answer: "Equilateral"
        },
        {
            question: "The diagonals of a rectangle:",
            options: ["Are always equal", "Are always perpendicular", "Are unequal", "Form a triangle"],
            answer: "Are always equal"
        },
        {
            question: "The distance around a circle is called:",
            options: ["Radius", "Diameter", "Circumference", "Chord"],
            answer: "Circumference"
        },
        {
            question: "If the radius of a circle is 7 cm, what is its diameter?",
            options: ["7 cm", "14 cm", "21 cm", "28 cm"],
            answer: "14 cm"
        },
        {
            question: "A quadrilateral with one pair of parallel sides is called:",
            options: ["Parallelogram", "Rhombus", "Trapezium", "Kite"],
            answer: "Trapezium"
        },
        {
            question: "The three-dimensional shape with 6 faces, all rectangles, is called:",
            options: ["Cube", "Cuboid", "Pyramid", "Prism"],
            answer: "Cuboid"
        }
    ],
    trigonometry: [
        {
            question: "In a right-angled triangle, sin θ is defined as:",
            options: ["Adjacent/Hypotenuse", "Opposite/Hypotenuse", "Adjacent/Opposite", "Hypotenuse/Opposite"],
            answer: "Opposite/Hypotenuse"
        },
        {
            question: "cos θ is the ratio of:",
            options: ["Opposite/Hypotenuse", "Adjacent/Hypotenuse", "Hypotenuse/Opposite", "Opposite/Adjacent"],
            answer: "Adjacent/Hypotenuse"
        },
        {
            question: "tan θ equals:",
            options: ["sin θ / cos θ", "cos θ / sin θ", "1 / sin θ", "1 / cos θ"],
            answer: "sin θ / cos θ"
        },
        {
            question: "The value of sin 90° is:",
            options: ["0", "1", "√3/2", "1/2"],
            answer: "1"
        },
        {
            question: "The value of cos 0° is:",
            options: ["0", "1", "√2/2", "Undefined"],
            answer: "1"
        },
        {
            question: "The Pythagoras identity is:",
            options: ["sin²θ + cos²θ = 1", "tan²θ + 1 = cos²θ", "cos²θ – sin²θ = 1", "sin²θ – cos²θ = 1"],
            answer: "sin²θ + cos²θ = 1"
        },
        {
            question: "If tan θ = 1, then θ is:",
            options: ["0°", "30°", "45°", "60°"],
            answer: "45°"
        },
        {
            question: "What is the value of cos 60°?",
            options: ["0", "1/2", "√3/2", "1"],
            answer: "1/2"
        },
        {
            question: "If sin θ = 3/5, what is cos θ (θ acute)?",
            options: ["4/5", "5/3", "√3/5", "1/2"],
            answer: "4/5"
        },
        {
            question: "Which of these is equal to sec θ?",
            options: ["1/cos θ", "1/sin θ", "1/tan θ", "1/cot θ"],
            answer: "1/cos θ"
        }
    ],
    calculus: [
        {
            question: "The derivative of x² with respect to x is:",
            options: ["2x", "x", "x²", "1"],
            answer: "2x"
        },
        {
            question: "The derivative of sin x is:",
            options: ["cos x", "-cos x", "sin x", "-sin x"],
            answer: "cos x"
        },
        {
            question: "The derivative of cos x is:",
            options: ["cos x", "-sin x", "sin x", "-cos x"],
            answer: "-sin x"
        },
        {
            question: "∫ x dx equals:",
            options: ["x² + C", "x²/2 + C", "2x + C", "ln x + C"],
            answer: "x²/2 + C"
        },
        {
            question: "∫ e^x dx equals:",
            options: ["x e^x + C", "e^x + C", "ln x + C", "1/x + C"],
            answer: "e^x + C"
        },
        {
            question: "The slope of the tangent to y = x³ at x = 2 is:",
            options: ["4", "6", "8", "12"],
            answer: "12"
        },
        {
            question: "The derivative of ln x is:",
            options: ["1/x", "ln x", "x ln x", "e^x"],
            answer: "1/x"
        },
        {
            question: "If f(x) = 3x², what is f’(x)?",
            options: ["6x", "3x", "x²", "9x"],
            answer: "6x"
        },
        {
            question: "The area under the curve y = 2x between x=0 and x=3 is:",
            options: ["6", "9", "12", "18"],
            answer: "9"
        },
        {
            question: "The second derivative of x³ is:",
            options: ["3", "6x", "3x²", "9x"],
            answer: "6x"
        }
    ],
    probability: [
        {
            question: "The probability of getting a head in a fair coin toss is:",
            options: ["0", "0.25", "0.5", "1"],
            answer: "0.5"
        },
        {
            question: "If a die is rolled, the probability of getting a 6 is:",
            options: ["1/2", "1/3", "1/6", "1/12"],
            answer: "1/6"
        },
        {
            question: "The mean of the numbers 2, 4, 6, 8 is:",
            options: ["4", "5", "6", "10"],
            answer: "5"
        },
        {
            question: "The median of the set {3, 7, 2, 9, 5} is:",
            options: ["3", "5", "7", "9"],
            answer: "5"
        },
        {
            question: "The mode of the data set {2, 4, 4, 6, 8, 8, 8} is:",
            options: ["2", "4", "6", "8"],
            answer: "8"
        },
        {
            question: "Variance measures:",
            options: ["The middle value", "The spread of data", "The sum of values", "The frequency"],
            answer: "The spread of data"
        },
        {
            question: "If two events are independent, P(A and B) equals:",
            options: ["P(A) + P(B)", "P(A) × P(B)", "P(A)/P(B)", "P(A) - P(B)"],
            answer: "P(A) × P(B)"
        },
        {
            question: "The probability of drawing a red card from a standard 52-card deck is:",
            options: ["1/2", "1/3", "1/4", "1/13"],
            answer: "1/2"
        },
        {
            question: "The sum of probabilities of all possible outcomes of an experiment is:",
            options: ["0", "0.5", "1", "Depends on sample space"],
            answer: "1"
        },
        {
            question: "A bell-shaped curve in statistics is called:",
            options: ["Normal distribution", "Poisson distribution", "Binomial distribution", "Uniform distribution"],
            answer: "Normal distribution"
        }
    ],
    sequences: [
        {
            question: "A sequence is defined as:",
            options: [
                "An arrangement of random numbers",
                "An ordered list of numbers following a rule",
                "Any collection of digits",
                "A type of equation"
            ],
            answer: "An ordered list of numbers following a rule"
        },
        {
            question: "In the arithmetic sequence 2, 5, 8, 11, … the common difference is:",
            options: ["2", "3", "4", "5"],
            answer: "3"
        },
        {
            question: "The nth term of an arithmetic progression (AP) is given by:",
            options: ["a + (n-1)d", "a × n", "a + nd", "a - (n-1)d"],
            answer: "a + (n-1)d"
        },
        {
            question: "The sum of the first n terms of an AP is:",
            options: [
                "n/2 [2a + (n-1)d]",
                "n × a",
                "n × d",
                "a + d"
            ],
            answer: "n/2 [2a + (n-1)d]"
        },
        {
            question: "In the geometric sequence 3, 6, 12, 24, … the common ratio is:",
            options: ["2", "3", "4", "6"],
            answer: "2"
        },
        {
            question: "The nth term of a geometric progression (GP) is given by:",
            options: ["ar^(n-1)", "a + nd", "a/n", "a - r"],
            answer: "ar^(n-1)"
        },
        {
            question: "The sum of the first n terms of a GP is:",
            options: [
                "a(r^n - 1)/(r - 1)",
                "a + (n-1)d",
                "n/2 [2a + (n-1)d]",
                "ar^(n-1)"
            ],
            answer: "a(r^n - 1)/(r - 1)"
        },
        {
            question: "The sum of an infinite GP (|r| < 1) is:",
            options: ["a/(1 - r)", "a(1-r)", "ar", "n/2 [2a + (n-1)d]"],
            answer: "a/(1 - r)"
        },
        {
            question: "Which sequence is a Fibonacci sequence?",
            options: [
                "1, 2, 3, 4, 5, …",
                "1, 1, 2, 3, 5, 8, …",
                "2, 4, 8, 16, …",
                "3, 6, 9, 12, …"
            ],
            answer: "1, 1, 2, 3, 5, 8, …"
        },
        {
            question: "If the first term of an AP is 7 and the common difference is 3, the 10th term is:",
            options: ["34", "35", "36", "37"],
            answer: "34"
        }
    ],
    vectors: [
        {
            question: "What is the magnitude of the vector **a = (3, 4)?**",
            options: ["5", "7", "12", "25"],
            answer: "5"
        },
        {
            question: "Which of the following is the unit vector in the direction of **(6, 8)?**",
            options: ["(0.6, 0.8)", "(3, 4)", "(6, 8)", "(0.36, 0.48)"],
            answer: "(0.6, 0.8)"
        },
        {
            question: "The dot product of vectors **a = (2, 3)** and **b = (1, 4)** is:",
            options: ["10", "12", "14", "20"],
            answer: "14"
        },
        {
            question: "If two vectors are perpendicular, their dot product is:",
            options: ["0", "1", "Infinity", "Equal to their magnitudes"],
            answer: "0"
        },
        {
            question: "The slope of the line passing through points (2, 3) and (5, 11) is:",
            options: ["3", "8/3", "11/5", "5/2"],
            answer: "8/3"
        },
        {
            question: "The distance between points (–2, 1) and (4, 5) is:",
            options: ["6", "√52", "10", "√20"],
            answer: "√52"
        },
        {
            question: "If vector a = (x, 2) is parallel to vector b = (3, 6), then x equals:",
            options: ["1", "2", "3", "6"],
            answer: "1"
        },
        {
            question: "The midpoint of the line joining (–6, 4) and (2, –8) is:",
            options: ["(–2, –2)", "(–4, –2)", "(–2, –4)", "(–3, –6)"],
            answer: "(–2, –2)"
        },
        {
            question: "The equation of a circle with center (0, 0) and radius 5 is:",
            options: ["x² + y² = 25", "x² + y² = 5", "x² + y² = 10", "x² + y² = 20"],
            answer: "x² + y² = 25"
        },
        {
            question: "If vector a = (2, –1, 3) and b = (–1, 4, 2), their cross product is:",
            options: ["(–14, –7, 7)", "(–10, –7, 7)", "(–14, –7, 8)", "(–10, –7, 8)"],
            answer: "(–14, –7, 7)"
        }
    ],
    logic: [
        {
            question: "If all roses are flowers and some flowers fade quickly, can we conclude that some roses fade quickly?",
            options: ["Yes", "No", "Cannot be determined", "All roses fade quickly"],
            answer: "Cannot be determined"
        },
        {
            question: "Which number logically completes the sequence: 2, 6, 12, 20, 30, ...?",
            options: ["36", "40", "42", "48"],
            answer: "42"
        },
        {
            question: "If p → q is true and q is false, what can be said about p?",
            options: ["True", "False", "Cannot be determined", "Both true and false"],
            answer: "False"
        },
        {
            question: "Which statement is a tautology?",
            options: ["p ∨ ¬p", "p ∧ ¬p", "p → ¬p", "¬p → p"],
            answer: "p ∨ ¬p"
        },
        {
            question: "Find the odd one out: 3, 5, 7, 11, 15, 13",
            options: ["3", "7", "15", "11"],
            answer: "15"
        },
        {
            question: "If A = {2, 4, 6} and B = {4, 6, 8}, what is A ∩ B?",
            options: ["{2, 4, 6, 8}", "{4, 6}", "{2, 8}", "{}"],
            answer: "{4, 6}"
        },
        {
            question: "Which of the following is an example of deductive reasoning?",
            options: [
                "All humans are mortal, Socrates is human, therefore Socrates is mortal.",
                "It rained yesterday, so it might rain today.",
                "The sun rose today, so it will rise tomorrow.",
                "Some dogs bark, therefore all dogs bark."
            ],
            answer: "All humans are mortal, Socrates is human, therefore Socrates is mortal."
        },
        {
            question: "If the sum of two consecutive integers is 25, the integers are:",
            options: ["12 and 13", "11 and 14", "10 and 15", "13 and 14"],
            answer: "12 and 13"
        },
        {
            question: "A logical statement that is false in all possible scenarios is called:",
            options: ["Tautology", "Contradiction", "Contingency", "Implication"],
            answer: "Contradiction"
        },
        {
            question: "Which pattern comes next in the sequence: 2, 4, 8, 16, ...?",
            options: ["20", "24", "32", "64"],
            answer: "32"
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

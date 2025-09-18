// =====================
// QUIZ DATA
// =====================
const quizData = {
    atomic: [
        {
            question: "What is the smallest unit of matter that retains the properties of an element?",
            options: ["Atom", "Molecule", "Proton", "Electron"],
            answer: "Atom"
        },
        {
            question: "Which particle in the atom has a negative charge?",
            options: ["Proton", "Neutron", "Electron", "Nucleus"],
            answer: "Electron"
        },
        {
            question: "The nucleus of an atom contains:",
            options: ["Protons only", "Neutrons only", "Protons and neutrons", "Electrons and protons"],
            answer: "Protons and neutrons"
        },
        {
            question: "The number of protons in an atom is also known as its:",
            options: ["Atomic number", "Mass number", "Valency", "Isotope"],
            answer: "Atomic number"
        },
        {
            question: "Which element has the atomic number 1?",
            options: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
            answer: "Hydrogen"
        },
        {
            question: "Isotopes of an element differ in:",
            options: ["Number of protons", "Number of neutrons", "Number of electrons", "Atomic number"],
            answer: "Number of neutrons"
        },
        {
            question: "Which scientist proposed the planetary model of the atom?",
            options: ["Dalton", "Thomson", "Bohr", "Rutherford"],
            answer: "Bohr"
        },
        {
            question: "Elements in the same group of the periodic table have similar:",
            options: ["Atomic numbers", "Mass numbers", "Chemical properties", "Number of neutrons"],
            answer: "Chemical properties"
        },
        {
            question: "What is the horizontal row in the periodic table called?",
            options: ["Period", "Group", "Family", "Block"],
            answer: "Period"
        },
        {
            question: "Which of the following is a noble gas?",
            options: ["Nitrogen", "Oxygen", "Neon", "Chlorine"],
            answer: "Neon"
        }
    ],
    bonding: [
        {
            question: "Which type of bond involves the sharing of electron pairs between atoms?",
            options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
            answer: "Covalent bond"
        },
        {
            question: "What type of bond is formed when one atom donates an electron to another?",
            options: ["Covalent bond", "Ionic bond", "Metallic bond", "Van der Waals bond"],
            answer: "Ionic bond"
        },
        {
            question: "The bond between hydrogen and oxygen in a water molecule is:",
            options: ["Ionic", "Covalent", "Hydrogen", "Metallic"],
            answer: "Covalent"
        },
        {
            question: "What is the shape of a methane (CH₄) molecule according to VSEPR theory?",
            options: ["Linear", "Tetrahedral", "Trigonal planar", "Bent"],
            answer: "Tetrahedral"
        },
        {
            question: "Which type of bond holds sodium and chlorine atoms together in NaCl?",
            options: ["Covalent bond", "Ionic bond", "Metallic bond", "Hydrogen bond"],
            answer: "Ionic bond"
        },
        {
            question: "A double bond consists of:",
            options: ["Two sigma bonds", "One sigma bond and one pi bond", "Two pi bonds", "One sigma bond only"],
            answer: "One sigma bond and one pi bond"
        },
        {
            question: "Which molecule has a bent shape?",
            options: ["CO₂", "H₂O", "CH₄", "BF₃"],
            answer: "H₂O"
        },
        {
            question: "Which bond is generally the strongest?",
            options: ["Ionic bond", "Single covalent bond", "Triple covalent bond", "Hydrogen bond"],
            answer: "Triple covalent bond"
        },
        {
            question: "Metallic bonds are characterized by:",
            options: ["Sharing of electrons between specific atoms", "Electrons delocalized over many atoms", "Transfer of electrons", "Hydrogen attraction"],
            answer: "Electrons delocalized over many atoms"
        },
        {
            question: "Hydrogen bonding is strongest in which compound?",
            options: ["H₂S", "H₂O", "HCl", "PH₃"],
            answer: "H₂O"
        }
    ],
    states: [
        {
            question: "Which state of matter has a definite shape and definite volume?",
            options: ["Solid", "Liquid", "Gas", "Plasma"],
            answer: "Solid"
        },
        {
            question: "Which gas law states that the volume of a gas is inversely proportional to its pressure at constant temperature?",
            options: ["Boyle’s Law", "Charles’ Law", "Avogadro’s Law", "Dalton’s Law"],
            answer: "Boyle’s Law"
        },
        {
            question: "Which gas law states that the volume of a gas is directly proportional to its temperature at constant pressure?",
            options: ["Boyle’s Law", "Charles’ Law", "Avogadro’s Law", "Gay-Lussac’s Law"],
            answer: "Charles’ Law"
        },
        {
            question: "The combined gas law is written as:",
            options: ["PV = nRT", "P₁V₁/T₁ = P₂V₂/T₂", "V ∝ T", "P ∝ 1/V"],
            answer: "P₁V₁/T₁ = P₂V₂/T₂"
        },
        {
            question: "The SI unit of pressure is:",
            options: ["atm", "Pa", "bar", "torr"],
            answer: "Pa"
        },
        {
            question: "At STP (standard temperature and pressure), 1 mole of an ideal gas occupies:",
            options: ["11.2 L", "22.4 L", "44.8 L", "1 L"],
            answer: "22.4 L"
        },
        {
            question: "Which gas law relates the pressure of a gas to its absolute temperature at constant volume?",
            options: ["Avogadro’s Law", "Boyle’s Law", "Gay-Lussac’s Law", "Dalton’s Law"],
            answer: "Gay-Lussac’s Law"
        },
        {
            question: "Which law states that equal volumes of gases at the same temperature and pressure contain equal numbers of molecules?",
            options: ["Avogadro’s Law", "Dalton’s Law", "Charles’ Law", "Boyle’s Law"],
            answer: "Avogadro’s Law"
        },
        {
            question: "Which of the following is NOT a state of matter?",
            options: ["Solid", "Liquid", "Gas", "Light"],
            answer: "Light"
        },
        {
            question: "The ideal gas equation is given by:",
            options: ["PV = nRT", "P/T = V", "PV/T = k", "V = nR/P"],
            answer: "PV = nRT"
        }
    ],
    pH: [
        {
            question: "Which of the following is a strong acid?",
            options: ["HCl", "CH₃COOH", "NH₃", "H₂O"],
            answer: "HCl"
        },
        {
            question: "Which of the following is a strong base?",
            options: ["NaOH", "NH₃", "CaCO₃", "H₂O"],
            answer: "NaOH"
        },
        {
            question: "What is the pH of a neutral solution at 25°C?",
            options: ["0", "7", "14", "1"],
            answer: "7"
        },
        {
            question: "A solution with pH < 7 is classified as:",
            options: ["Acidic", "Neutral", "Basic", "Salt"],
            answer: "Acidic"
        },
        {
            question: "A solution with pH > 7 is classified as:",
            options: ["Acidic", "Neutral", "Basic", "Salt"],
            answer: "Basic"
        },
        {
            question: "The pH scale ranges from:",
            options: ["-14 to +14", "0 to 14", "1 to 7", "0 to 7"],
            answer: "0 to 14"
        },
        {
            question: "Which indicator turns red in acidic solution and blue in basic solution?",
            options: ["Methyl orange", "Phenolphthalein", "Litmus", "Universal indicator"],
            answer: "Litmus"
        },
        {
            question: "What is the pH of a 0.001 M HCl solution?",
            options: ["1", "2", "3", "4"],
            answer: "3"
        },
        {
            question: "Which of these substances is amphoteric (can act as both acid and base)?",
            options: ["NaOH", "H₂O", "HCl", "NH₃"],
            answer: "H₂O"
        },
        {
            question: "The conjugate base of H₂SO₄ is:",
            options: ["HSO₄⁻", "SO₄²⁻", "H₃O⁺", "OH⁻"],
            answer: "HSO₄⁻"
        }
    ],
    stoichiometry: [
        {
            question: "The mole is defined as the amount of substance containing:",
            options: ["6.022 × 10²³ particles", "1 g of atoms", "12 g of hydrogen", "6.022 × 10²⁶ particles"],
            answer: "6.022 × 10²³ particles"
        },
        {
            question: "How many moles are in 22.4 L of an ideal gas at STP?",
            options: ["0.5 mol", "1 mol", "2 mol", "22.4 mol"],
            answer: "1 mol"
        },
        {
            question: "The molar mass of NaCl is:",
            options: ["58.5 g/mol", "23 g/mol", "35.5 g/mol", "60 g/mol"],
            answer: "58.5 g/mol"
        },
        {
            question: "Which law states that the total mass of reactants equals the total mass of products?",
            options: ["Law of Multiple Proportions", "Law of Definite Proportions", "Law of Conservation of Mass", "Ideal Gas Law"],
            answer: "Law of Conservation of Mass"
        },
        {
            question: "What is the mass of 2 moles of CO₂? (C=12, O=16)",
            options: ["22 g", "44 g", "88 g", "132 g"],
            answer: "88 g"
        },
        {
            question: "How many atoms are in 3 moles of oxygen atoms?",
            options: ["6.022 × 10²³", "1.806 × 10²⁴", "3 × 10²³", "9 × 10²³"],
            answer: "1.806 × 10²⁴"
        },
        {
            question: "Which of the following is the limiting reagent if 2 mol of H₂ reacts with 1 mol of O₂? (2H₂ + O₂ → 2H₂O)",
            options: ["H₂", "O₂", "Both", "None"],
            answer: "H₂"
        },
        {
            question: "The percentage composition of water (H₂O) by mass of hydrogen is:",
            options: ["11.1%", "22.2%", "33.3%", "50%"],
            answer: "11.1%"
        },
        {
            question: "If 16 g of O₂ reacts completely with hydrogen, how many grams of H₂O are formed? (H=1, O=16)",
            options: ["9 g", "18 g", "32 g", "36 g"],
            answer: "18 g"
        },
        {
            question: "Empirical formula of a compound with 40% C, 6.7% H, and 53.3% O is:",
            options: ["CH₂O", "C₂H₄O₂", "C₆H₁₂O₆", "CHO"],
            answer: "CH₂O"
        }
    ],
    thermodynamics: [
        {
            question: "Which of the following is a state function?",
            options: ["Heat (q)", "Work (w)", "Enthalpy (H)", "Path taken"],
            answer: "Enthalpy (H)"
        },
        {
            question: "The First Law of Thermodynamics states that:",
            options: [
                "Energy can be created but not destroyed",
                "Energy can neither be created nor destroyed, only transformed",
                "Entropy of the universe always increases",
                "Heat flows from cold to hot spontaneously"
            ],
            answer: "Energy can neither be created nor destroyed, only transformed"
        },
        {
            question: "If ΔH < 0, the reaction is:",
            options: ["Endothermic", "Exothermic", "At equilibrium", "Impossible"],
            answer: "Exothermic"
        },
        {
            question: "Which of the following is NOT an intensive property?",
            options: ["Temperature", "Pressure", "Density", "Heat capacity"],
            answer: "Heat capacity"
        },
        {
            question: "Standard enthalpy change of formation of elements in their standard states is:",
            options: ["0", "1", "Depends on element", "Negative"],
            answer: "0"
        },
        {
            question: "Hess’s Law states that:",
            options: [
                "Heat of reaction is independent of the path taken",
                "Entropy always increases",
                "Work is equal to force × distance",
                "Energy is always conserved"
            ],
            answer: "Heat of reaction is independent of the path taken"
        },
        {
            question: "Which process has ΔS > 0 (increase in entropy)?",
            options: ["Freezing of water", "Condensation of steam", "Melting of ice", "Formation of crystals"],
            answer: "Melting of ice"
        },
        {
            question: "In an endothermic process:",
            options: ["System releases heat", "System absorbs heat", "Work is always positive", "Enthalpy decreases"],
            answer: "System absorbs heat"
        },
        {
            question: "The Gibbs free energy equation is:",
            options: ["ΔG = ΔH – TΔS", "ΔG = ΔU + PΔV", "ΔG = q – w", "ΔG = ΔH + TΔS"],
            answer: "ΔG = ΔH – TΔS"
        },
        {
            question: "For a spontaneous reaction at constant temperature and pressure:",
            options: ["ΔG < 0", "ΔG > 0", "ΔH = 0", "ΔS < 0"],
            answer: "ΔG < 0"
        }
    ],
    kinetics: [
        {
            question: "The rate of a chemical reaction depends on:",
            options: ["Concentration of reactants", "Temperature", "Presence of catalyst", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "The unit of rate constant for a first-order reaction is:",
            options: ["mol⁻¹ L s⁻¹", "s⁻¹", "mol L⁻¹ s⁻¹", "L mol⁻¹ s⁻¹"],
            answer: "s⁻¹"
        },
        {
            question: "Which statement about a catalyst is correct?",
            options: [
                "It increases the activation energy",
                "It is consumed during the reaction",
                "It speeds up the reaction without being consumed",
                "It alters the equilibrium position"
            ],
            answer: "It speeds up the reaction without being consumed"
        },
        {
            question: "At equilibrium:",
            options: [
                "Forward reaction stops",
                "Backward reaction stops",
                "Forward and backward rates are equal",
                "Concentrations of reactants and products are always equal"
            ],
            answer: "Forward and backward rates are equal"
        },
        {
            question: "The Arrhenius equation relates rate constant with:",
            options: ["Activation energy and temperature", "Concentration", "Pressure", "Catalyst type"],
            answer: "Activation energy and temperature"
        },
        {
            question: "Le Chatelier’s Principle states that:",
            options: [
                "At equilibrium, Gibbs free energy is zero",
                "A system at equilibrium will shift to oppose applied changes",
                "All reactions proceed in the forward direction",
                "Catalysts change equilibrium position"
            ],
            answer: "A system at equilibrium will shift to oppose applied changes"
        },
        {
            question: "If temperature is increased in an endothermic reaction at equilibrium:",
            options: ["Forward reaction is favored", "Backward reaction is favored", "Equilibrium constant decreases", "Reaction stops"],
            answer: "Forward reaction is favored"
        },
        {
            question: "For a zero-order reaction, the rate of reaction depends on:",
            options: ["Concentration", "Temperature only", "Pressure", "None"],
            answer: "None"
        },
        {
            question: "The equilibrium constant (K) is related to Gibbs free energy by:",
            options: ["ΔG = -RT ln K", "ΔG = RT ln K", "ΔG = K/RT", "ΔG = ΔH - TΔS"],
            answer: "ΔG = -RT ln K"
        },
        {
            question: "Which factor does NOT affect the equilibrium constant (K)?",
            options: ["Concentration", "Pressure", "Catalyst", "Temperature"],
            answer: "Catalyst"
        }
    ],
    organic: [
        {
            question: "Which of the following is the general formula of alkanes?",
            options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₁"],
            answer: "CₙH₂ₙ₊₂"
        },
        {
            question: "The simplest aromatic hydrocarbon is:",
            options: ["Toluene", "Benzene", "Phenol", "Naphthalene"],
            answer: "Benzene"
        },
        {
            question: "Which type of isomerism is shown by but-2-ene (CH₃CH=CHCH₃)?",
            options: ["Chain isomerism", "Functional isomerism", "Geometrical isomerism", "Metamerism"],
            answer: "Geometrical isomerism"
        },
        {
            question: "Markovnikov’s rule is applicable in:",
            options: [
                "Addition of HX to alkenes",
                "Hydrogenation of alkynes",
                "Halogenation of alkanes",
                "Dehydration of alcohols"
            ],
            answer: "Addition of HX to alkenes"
        },
        {
            question: "Which of the following is a secondary alcohol?",
            options: ["CH₃CH₂OH", "CH₃CHOHCH₃", "CH₃CH₂CH₂OH", "(CH₃)₃COH"],
            answer: "CH₃CHOHCH₃"
        },
        {
            question: "The functional group –COOH belongs to:",
            options: ["Aldehydes", "Carboxylic acids", "Ketones", "Esters"],
            answer: "Carboxylic acids"
        },
        {
            question: "Which reagent is used to test for unsaturation (C=C)?",
            options: ["Tollen’s reagent", "Fehling’s solution", "Bromine water", "Iodoform test"],
            answer: "Bromine water"
        },
        {
            question: "The product of oxidation of a primary alcohol is:",
            options: ["Ketone", "Carboxylic acid", "Aldehyde", "Alkene"],
            answer: "Aldehyde"
        },
        {
            question: "Which compound undergoes substitution rather than addition?",
            options: ["Alkanes", "Alkenes", "Alkynes", "Arenes"],
            answer: "Arenes"
        },
        {
            question: "Urea was the first organic compound synthesized artificially by:",
            options: ["Arrhenius", "Wöhler", "Kekulé", "Fischer"],
            answer: "Wöhler"
        }
    ],
    electrochemistry: [
        {
            question: "Which of the following is used as the standard reference electrode?",
            options: [
                "Calomel electrode",
                "Copper-copper sulfate electrode",
                "Standard hydrogen electrode",
                "Silver-silver chloride electrode"
            ],
            answer: "Standard hydrogen electrode"
        },
        {
            question: "Electrochemical cells that convert chemical energy into electrical energy are called:",
            options: ["Electrolytic cells", "Galvanic cells", "Photocells", "Fuel cells"],
            answer: "Galvanic cells"
        },
        {
            question: "In electrolysis of molten NaCl, which products are formed at cathode and anode respectively?",
            options: [
                "Na at cathode, Cl₂ at anode",
                "Cl₂ at cathode, Na at anode",
                "NaCl at cathode, Cl₂ at anode",
                "NaOH at cathode, O₂ at anode"
            ],
            answer: "Na at cathode, Cl₂ at anode"
        },
        {
            question: "The unit of electrode potential is:",
            options: ["Joule", "Ampere", "Volt", "Ohm"],
            answer: "Volt"
        },
        {
            question: "The pH of a solution can be determined using:",
            options: ["Calorimeter", "Conductivity meter", "pH meter", "Voltmeter"],
            answer: "pH meter"
        },
        {
            question: "The process in which a metal is coated on another metal surface using electricity is called:",
            options: ["Electrolysis", "Electroplating", "Electrorefining", "Electrospinning"],
            answer: "Electroplating"
        },
        {
            question: "Which of the following is not a primary battery?",
            options: ["Dry cell", "Mercury cell", "Lead-acid accumulator", "Lithium cell"],
            answer: "Lead-acid accumulator"
        },
        {
            question: "Faraday’s first law of electrolysis states that the mass of a substance deposited is proportional to:",
            options: [
                "Square of current",
                "Quantity of electricity",
                "Resistance of electrolyte",
                "Electrode potential"
            ],
            answer: "Quantity of electricity"
        },
        {
            question: "What is the function of a salt bridge in a galvanic cell?",
            options: [
                "Prevents mixing of solutions",
                "Maintains electrical neutrality",
                "Provides electrons to cathode",
                "Increases cell voltage"
            ],
            answer: "Maintains electrical neutrality"
        },
        {
            question: "The Daniell cell consists of:",
            options: [
                "Zn anode and Cu cathode",
                "Cu anode and Zn cathode",
                "Ag anode and Cu cathode",
                "Zn anode and Ag cathode"
            ],
            answer: "Zn anode and Cu cathode"
        }
    ],
    environmental: [
        {
            question: "Which gas is primarily responsible for ozone layer depletion?",
            options: ["Carbon dioxide", "Methane", "Chlorofluorocarbons (CFCs)", "Nitrous oxide"],
            answer: "Chlorofluorocarbons (CFCs)"
        },
        {
            question: "The phenomenon of excess nutrients in water bodies leading to algal bloom is called:",
            options: ["Eutrophication", "Biomagnification", "Deforestation", "Acidification"],
            answer: "Eutrophication"
        },
        {
            question: "Acid rain is mainly caused by which gases?",
            options: [
                "SO₂ and NOx",
                "CO₂ and O₃",
                "CH₄ and CO",
                "H₂S and Cl₂"
            ],
            answer: "SO₂ and NOx"
        },
        {
            question: "The most dangerous form of pollution caused by incomplete combustion of fuels is:",
            options: ["Carbon dioxide", "Carbon monoxide", "Sulfur dioxide", "Nitrogen dioxide"],
            answer: "Carbon monoxide"
        },
        {
            question: "Which of the following is a greenhouse gas?",
            options: ["CO₂", "CH₄", "N₂O", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "Biomagnification refers to:",
            options: [
                "Increase in population of organisms",
                "Accumulation of pesticides along food chains",
                "Expansion of forests",
                "Growth of algae in lakes"
            ],
            answer: "Accumulation of pesticides along food chains"
        },
        {
            question: "The main component of photochemical smog is:",
            options: ["Ozone", "Carbon dioxide", "Methane", "Sulfur dioxide"],
            answer: "Ozone"
        },
        {
            question: "DDT is a pesticide that is problematic because it is:",
            options: ["Biodegradable", "Non-biodegradable", "Quickly decomposed", "Water-soluble"],
            answer: "Non-biodegradable"
        },
        {
            question: "The term BOD in water pollution refers to:",
            options: [
                "Biochemical Oxygen Demand",
                "Biological Organic Decomposition",
                "Basic Oxygen Data",
                "Biological Oxygen Deficiency"
            ],
            answer: "Biochemical Oxygen Demand"
        },
        {
            question: "Which metal causes Minamata disease through water pollution?",
            options: ["Lead", "Arsenic", "Mercury", "Cadmium"],
            answer: "Mercury"
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

// =====================
// QUIZ DATA
// =====================
const quizData = {
    cells: [
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
            answer: "Mitochondria"
        },
        {
            question: "Which part of the cell contains genetic material?",
            options: ["Cytoplasm", "Nucleus", "Mitochondria", "Cell membrane"],
            answer: "Nucleus"
        },
        {
            question: "What is the jelly-like substance inside the cell where organelles are found?",
            options: ["Cytoplasm", "Nucleoplasm", "Vacuole", "Cell wall"],
            answer: "Cytoplasm"
        },
        {
            question: "Which structure controls what enters and leaves the cell?",
            options: ["Nucleus", "Cell membrane", "Cell wall", "Chloroplast"],
            answer: "Cell membrane"
        },
        {
            question: "Which organelle is responsible for protein synthesis?",
            options: ["Mitochondria", "Ribosome", "Golgi apparatus", "Lysosome"],
            answer: "Ribosome"
        },
        {
            question: "What provides structural support and protection in plant cells?",
            options: ["Cell wall", "Cytoplasm", "Cell membrane", "Mitochondria"],
            answer: "Cell wall"
        },
        {
            question: "Which organelle is responsible for photosynthesis in plant cells?",
            options: ["Chloroplast", "Mitochondria", "Nucleus", "Golgi apparatus"],
            answer: "Chloroplast"
        },
        {
            question: "Which organelle modifies, sorts, and packages proteins?",
            options: ["Ribosome", "Endoplasmic Reticulum", "Golgi apparatus", "Lysosome"],
            answer: "Golgi apparatus"
        },
        {
            question: "Which organelle breaks down waste materials and cellular debris?",
            options: ["Mitochondria", "Lysosome", "Vacuole", "Endoplasmic Reticulum"],
            answer: "Lysosome"
        },
        {
            question: "Which structure in plant cells stores water, nutrients, and waste?",
            options: ["Nucleus", "Chloroplast", "Large central vacuole", "Cell membrane"],
            answer: "Large central vacuole"
        }
    ],
    photosynthesis: [
        {
            question: "What is the primary pigment used in photosynthesis?",
            options: ["Chlorophyll", "Carotene", "Xanthophyll", "Hemoglobin"],
            answer: "Chlorophyll"
        },
        {
            question: "Which organelle is responsible for photosynthesis?",
            options: ["Mitochondria", "Chloroplast", "Nucleus", "Golgi apparatus"],
            answer: "Chloroplast"
        },
        {
            question: "What are the raw materials required for photosynthesis?",
            options: [
                "Carbon dioxide and water",
                "Oxygen and glucose",
                "Carbon dioxide and oxygen",
                "Water and nitrogen"
            ],
            answer: "Carbon dioxide and water"
        },
        {
            question: "What is the main product of photosynthesis?",
            options: ["Glucose", "Oxygen", "Carbon dioxide", "ATP"],
            answer: "Glucose"
        },
        {
            question: "Which gas is released during photosynthesis?",
            options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
            answer: "Oxygen"
        },
        {
            question: "Where do the light-dependent reactions of photosynthesis take place?",
            options: ["Stroma", "Thylakoid membrane", "Cytoplasm", "Nucleus"],
            answer: "Thylakoid membrane"
        },
        {
            question: "What provides the energy for photosynthesis?",
            options: ["ATP", "Glucose", "Sunlight", "Oxygen"],
            answer: "Sunlight"
        },
        {
            question: "What molecule carries energy produced in the light reactions to the Calvin cycle?",
            options: ["ATP and NADPH", "Glucose and Oxygen", "ADP and NADP+", "Carbon dioxide"],
            answer: "ATP and NADPH"
        },
        {
            question: "Which cycle in photosynthesis fixes carbon dioxide into glucose?",
            options: ["Krebs cycle", "Calvin cycle", "Electron transport chain", "Glycolysis"],
            answer: "Calvin cycle"
        },
        {
            question: "What is the ultimate source of energy for nearly all living organisms?",
            options: ["The Sun", "Glucose", "ATP", "Oxygen"],
            answer: "The Sun"
        }
    ],
    genetics: [
        {
            question: "Who is considered the father of genetics?",
            options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "James Watson"],
            answer: "Gregor Mendel"
        },
        {
            question: "What is the physical appearance of an organism called?",
            options: ["Genotype", "Phenotype", "Allele", "Trait"],
            answer: "Phenotype"
        },
        {
            question: "What do we call the genetic makeup of an organism?",
            options: ["Phenotype", "Genotype", "Chromosome", "Gene"],
            answer: "Genotype"
        },
        {
            question: "Which type of allele is expressed even if only one copy is present?",
            options: ["Recessive", "Dominant", "Codominant", "Incomplete"],
            answer: "Dominant"
        },
        {
            question: "How many pairs of chromosomes are found in humans?",
            options: ["22", "23", "44", "46"],
            answer: "23"
        },
        {
            question: "What are different forms of the same gene called?",
            options: ["Alleles", "Loci", "Traits", "Chromatids"],
            answer: "Alleles"
        },
        {
            question: "What do we call a chart used to predict genetic crosses?",
            options: ["Pedigree", "Punnett square", "Karyotype", "Chromosome map"],
            answer: "Punnett square"
        },
        {
            question: "Which sex chromosomes are found in a normal human female?",
            options: ["XY", "YY", "XX", "XO"],
            answer: "XX"
        },
        {
            question: "What is the condition where both alleles contribute equally to the phenotype?",
            options: ["Dominance", "Codominance", "Recessive", "Mutation"],
            answer: "Codominance"
        },
        {
            question: "What is a sudden change in the DNA sequence called?",
            options: ["Mutation", "Variation", "Replication", "Transcription"],
            answer: "Mutation"
        }
    ],
    ecology: [
        {
            question: "What term describes the community of organisms and their physical environment?",
            options: ["Population", "Ecosystem", "Habitat", "Biosphere"],
            answer: "Ecosystem"
        },
        {
            question: "Which level of organization includes all life on Earth?",
            options: ["Community", "Biosphere", "Ecosystem", "Biome"],
            answer: "Biosphere"
        },
        {
            question: "What is the role an organism plays in its environment called?",
            options: ["Habitat", "Niche", "Community", "Biome"],
            answer: "Niche"
        },
        {
            question: "What is the primary source of energy in most ecosystems?",
            options: ["Glucose", "The Sun", "Oxygen", "Water"],
            answer: "The Sun"
        },
        {
            question: "Which organisms are known as producers in a food chain?",
            options: ["Herbivores", "Carnivores", "Plants", "Decomposers"],
            answer: "Plants"
        },
        {
            question: "What term describes species that are at risk of extinction?",
            options: ["Endangered", "Extinct", "Invasive", "Dominant"],
            answer: "Endangered"
        },
        {
            question: "Which gas is most associated with global warming?",
            options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Methane"],
            answer: "Carbon dioxide"
        },
        {
            question: "What type of biodiversity refers to the variety of ecosystems?",
            options: ["Genetic diversity", "Species diversity", "Ecosystem diversity", "Habitat diversity"],
            answer: "Ecosystem diversity"
        },
        {
            question: "Which process helps recycle nutrients back into the soil?",
            options: ["Photosynthesis", "Decomposition", "Respiration", "Transpiration"],
            answer: "Decomposition"
        },
        {
            question: "What is the practice of protecting and preserving natural resources called?",
            options: ["Deforestation", "Conservation", "Pollution control", "Urbanization"],
            answer: "Conservation"
        }
    ],
    physiology: [
        {
            question: "Which organ is responsible for pumping blood throughout the body?",
            options: ["Lungs", "Heart", "Kidneys", "Liver"],
            answer: "Heart"
        },
        {
            question: "Which system controls voluntary and involuntary actions using electrical signals?",
            options: ["Digestive system", "Respiratory system", "Nervous system", "Circulatory system"],
            answer: "Nervous system"
        },
        {
            question: "Which organ filters waste products from the blood?",
            options: ["Liver", "Lungs", "Kidneys", "Stomach"],
            answer: "Kidneys"
        },
        {
            question: "What type of blood cells help defend the body against infections?",
            options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
            answer: "White blood cells"
        },
        {
            question: "Which organ is the primary site of nutrient absorption?",
            options: ["Stomach", "Large intestine", "Small intestine", "Pancreas"],
            answer: "Small intestine"
        },
        {
            question: "What muscle plays a major role in breathing?",
            options: ["Diaphragm", "Intercostal muscles", "Abdominal muscles", "Pectorals"],
            answer: "Diaphragm"
        },
        {
            question: "Which hormone regulates blood sugar levels?",
            options: ["Adrenaline", "Insulin", "Thyroxine", "Estrogen"],
            answer: "Insulin"
        },
        {
            question: "Which part of the brain controls balance and coordination?",
            options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
            answer: "Cerebellum"
        },
        {
            question: "Which organ produces bile to aid in digestion?",
            options: ["Gallbladder", "Pancreas", "Liver", "Stomach"],
            answer: "Liver"
        },
        {
            question: "Which blood vessels carry blood away from the heart?",
            options: ["Veins", "Capillaries", "Arteries", "Venules"],
            answer: "Arteries"
        }
    ],
    microbiology: [
        {
            question: "Which scientist is credited with discovering microorganisms using a microscope?",
            options: ["Louis Pasteur", "Robert Koch", "Anton van Leeuwenhoek", "Alexander Fleming"],
            answer: "Anton van Leeuwenhoek"
        },
        {
            question: "Which type of microorganism is not considered living because it cannot reproduce without a host?",
            options: ["Bacteria", "Fungi", "Virus", "Protozoa"],
            answer: "Virus"
        },
        {
            question: "Which structure do bacteria use for movement?",
            options: ["Cilia", "Flagella", "Pili", "Fimbriae"],
            answer: "Flagella"
        },
        {
            question: "Which staining technique differentiates bacteria into Gram-positive and Gram-negative groups?",
            options: ["Acid-fast stain", "Gram stain", "Endospore stain", "Simple stain"],
            answer: "Gram stain"
        },
        {
            question: "Who developed the postulates linking microbes to specific diseases?",
            options: ["Robert Koch", "Louis Pasteur", "Joseph Lister", "Edward Jenner"],
            answer: "Robert Koch"
        },
        {
            question: "Which cells are the main defenders in the immune system?",
            options: ["Red blood cells", "White blood cells", "Platelets", "Neurons"],
            answer: "White blood cells"
        },
        {
            question: "Which type of immunity develops after vaccination?",
            options: ["Innate immunity", "Passive immunity", "Active immunity", "Natural immunity"],
            answer: "Active immunity"
        },
        {
            question: "Which protein molecules are produced by B-cells to neutralize pathogens?",
            options: ["Hormones", "Antibodies", "Enzymes", "Cytokines"],
            answer: "Antibodies"
        },
        {
            question: "Which organ is the primary site for T-cell maturation?",
            options: ["Bone marrow", "Thymus", "Spleen", "Liver"],
            answer: "Thymus"
        },
        {
            question: "Which pioneer created the first successful vaccine against smallpox?",
            options: ["Louis Pasteur", "Edward Jenner", "Alexander Fleming", "Joseph Lister"],
            answer: "Edward Jenner"
        }
    ],
    neuroscience: [
        {
            question: "What is the basic functional unit of the nervous system?",
            options: ["Neuron", "Axon", "Dendrite", "Synapse"],
            answer: "Neuron"
        },
        {
            question: "Which part of the neuron receives signals from other neurons?",
            options: ["Axon", "Dendrite", "Cell body", "Myelin sheath"],
            answer: "Dendrite"
        },
        {
            question: "What is the gap between two neurons where communication occurs?",
            options: ["Axon terminal", "Myelin sheath", "Synapse", "Nucleus"],
            answer: "Synapse"
        },
        {
            question: "Which neurotransmitter is most associated with reward and pleasure?",
            options: ["Serotonin", "Dopamine", "Acetylcholine", "GABA"],
            answer: "Dopamine"
        },
        {
            question: "Which part of the brain controls reasoning, planning, and decision-making?",
            options: ["Cerebellum", "Frontal lobe", "Medulla oblongata", "Temporal lobe"],
            answer: "Frontal lobe"
        },
        {
            question: "What is the insulating layer that speeds up nerve impulse transmission?",
            options: ["Synapse", "Myelin sheath", "Neurotransmitter", "Axon terminal"],
            answer: "Myelin sheath"
        },
        {
            question: "Which part of the brain regulates basic life functions like breathing and heartbeat?",
            options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
            answer: "Medulla oblongata"
        },
        {
            question: "Which lobe of the brain processes visual information?",
            options: ["Temporal lobe", "Frontal lobe", "Occipital lobe", "Parietal lobe"],
            answer: "Occipital lobe"
        },
        {
            question: "Which part of the brain is strongly linked with emotions and memory?",
            options: ["Hippocampus", "Amygdala", "Thalamus", "Pituitary gland"],
            answer: "Amygdala"
        },
        {
            question: "What type of behavior is inherited and present from birth without prior learning?",
            options: ["Instinct", "Conditioned response", "Reflex", "Habit"],
            answer: "Instinct"
        }
    ],
    epidemiology: [
        {
            question: "What is the study of the distribution and determinants of health-related states called?",
            options: ["Pathology", "Microbiology", "Epidemiology", "Virology"],
            answer: "Epidemiology"
        },
        {
            question: "What term describes a disease that spreads rapidly and affects many people in a community?",
            options: ["Endemic", "Pandemic", "Epidemic", "Outbreak"],
            answer: "Epidemic"
        },
        {
            question: "What do we call a disease that is constantly present in a particular population?",
            options: ["Epidemic", "Pandemic", "Endemic", "Sporadic"],
            answer: "Endemic"
        },
        {
            question: "Which type of disease is caused by organisms such as bacteria, viruses, fungi, or parasites?",
            options: ["Genetic diseases", "Infectious diseases", "Degenerative diseases", "Autoimmune diseases"],
            answer: "Infectious diseases"
        },
        {
            question: "What is the first known case of a disease in an outbreak called?",
            options: ["Patient Zero", "Carrier", "Vector", "Host"],
            answer: "Patient Zero"
        },
        {
            question: "Which type of immunity occurs when a large portion of a population becomes immune to a disease?",
            options: ["Passive immunity", "Active immunity", "Innate immunity", "Herd immunity"],
            answer: "Herd immunity"
        },
        {
            question: "What is the time between exposure to a pathogen and the appearance of symptoms?",
            options: ["Incubation period", "Infectious period", "Latency period", "Recovery period"],
            answer: "Incubation period"
        },
        {
            question: "Which scientist is famous for identifying the cholera outbreak source in London using a map?",
            options: ["Louis Pasteur", "Robert Koch", "John Snow", "Joseph Lister"],
            answer: "John Snow"
        },
        {
            question: "What is a living organism that transmits pathogens from one host to another called?",
            options: ["Vector", "Carrier", "Reservoir", "Parasite"],
            answer: "Vector"
        },
        {
            question: "Which global organization is responsible for coordinating international public health responses?",
            options: ["CDC", "UNICEF", "WHO", "Red Cross"],
            answer: "WHO"
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

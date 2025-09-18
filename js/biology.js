// ==========================
// Lessons Data
// ==========================
const lessons = [
    {
        id: "cells",
        title: "Biology - Cell Biology",
        content: `
            <p>Imagine throwing a party so small that you’d need an electron microscope to attend. 🥳 Welcome to the <strong>microscopic universe</strong> inside you! Every living thing—from the tiniest bacterium on your kitchen sponge to the tallest redwood tree—begins with <strong>cells</strong>, the <em>fundamental structural, functional, and biological units of life</em>. Think of cells as microscopic cities, each with its own power plants, factories, waste management systems, and even security guards… all working non-stop so you can blink, breathe, and binge-watch your favourite series. They are the smallest units capable of performing all processes necessary for life, often called the "building blocks of life."</p>
            <p><strong>Definition:</strong> A cell is the smallest structural and functional unit of an organism, typically microscopic, and enclosed by a membrane, containing genetic material and various organelles that perform specialized functions.</p>
            <img src="images/cell-diagram.png" alt="Cell Diagram" style="margin:15px 0; border-radius:8px;">
            <h3>Major Categories of Cells</h3>
            <ul>
                <li><strong>Prokaryotic Cells:</strong> The <em>minimalist pioneers</em> of life. They lack a nucleus and most membrane-bound organelles. Their DNA floats freely in the cytoplasm. Example: Bacteria and Archaea.<br><em>Analogy:</em> Like a food truck—compact, self-sufficient, and efficient.</li>
                <li><strong>Eukaryotic Cells:</strong> The <em>high-rise complexes</em> of biology. They contain a membrane-bound <strong>nucleus</strong> and specialized <strong>organelles</strong> for different tasks:
                    <ul>
                        <li><strong>Mitochondria:</strong> Power plants generating ATP (energy).</li>
                        <li><strong>Endoplasmic Reticulum (ER):</strong> Protein and lipid production centers (Rough ER with ribosomes makes proteins; Smooth ER synthesizes lipids).</li>
                        <li><strong>Golgi Apparatus:</strong> Packaging and shipping hub of the cell.</li>
                        <li><strong>Lysosomes:</strong> Waste management and recycling crew.</li>
                        <li><strong>Chloroplasts:</strong> (in plants) Solar panels converting sunlight into chemical energy via photosynthesis.</li>
                    </ul>
                    <em>Analogy:</em> Like a skyscraper where each floor handles a specific department—energy, manufacturing, packaging, and security—all coordinated from the management office (nucleus).
                </li>
            </ul>
            <h3>Cell Theory</h3>
            <p>The cell theory is a cornerstone of biology, stating that: (1) All living things are composed of one or more cells, (2) The cell is the basic unit of structure and organization in organisms, (3) All cells arise from pre-existing cells through cell division.</p>
            <h3>Cell Structure</h3>
            <p>Although cells differ in form and function, most share key components:</p>
            <ul>
                <li><strong>Cell Membrane:</strong> A protective barrier controlling the movement of substances in and out of the cell.</li>
                <li><strong>Cytoplasm:</strong> Gel-like fluid where cellular processes occur and organelles are suspended.</li>
                <li><strong>Nucleus:</strong> The command center containing DNA and directing cellular activities.</li>
                <li><strong>Ribosomes:</strong> Protein factories, either floating freely or attached to the ER.</li>
                <li><strong>Mitochondria:</strong> Energy generators converting food into ATP.</li>
                <li><strong>Chloroplasts:</strong> In plant cells, the site of photosynthesis.</li>
                <li><strong>Vacuoles:</strong> Storage sacs for water, nutrients, and waste.</li>
                <li><strong>Cell Wall:</strong> (in plants, fungi, bacteria) Rigid outer layer providing structure and support.</li>
            </ul>
            <h3>Types of Cells (by Function)</h3>
            <p>Cells can also be classified according to their role in the body:</p>
            <ul>
                <li><strong>Muscle Cells:</strong> Contract to produce movement.</li>
                <li><strong>Nerve Cells (Neurons):</strong> Transmit signals for communication.</li>
                <li><strong>Blood Cells:</strong> Red blood cells transport oxygen; white blood cells fight infections.</li>
                <li><strong>Epithelial Cells:</strong> Form protective layers and aid absorption.</li>
                <li><strong>Reproductive Cells:</strong> Sperm and egg cells for reproduction.</li>
            </ul>
            <h3>Functions of Cells</h3>
            <p>Cells perform a range of vital functions:</p>
            <ul>
                <li>Providing structure and support to the body.</li>
                <li>Facilitating growth through cell division.</li>
                <li>Producing energy via respiration or photosynthesis.</li>
                <li>Synthesizing proteins and enzymes for body processes.</li>
                <li>Transporting substances within and between cells.</li>
                <li>Removing waste products.</li>
                <li>Reproducing to maintain life continuity.</li>
            </ul>
            <h3>Cell Diversity and Specialization</h3>
            <p>Cells vary greatly in size, shape, and function. A nerve cell can be over a meter long, transmitting signals rapidly, while a red blood cell is small and disc-shaped to squeeze through capillaries. In multicellular organisms, cell specialization allows complex life to thrive.</p>
            <h3>Why Cells Matter</h3>
            <p>Without cells, life as we know it wouldn’t exist. Your heartbeat, your laughter, your ability to scroll this lesson—all of it depends on these tireless little workers. Every breath you take is powered by trillions of microscopic laborers who never go on strike. They adapt, repair, communicate, and replicate—an unending cycle of life. Respect them. In fact, the next time you feel lazy, remember your cells have been hustling since before you were born… and they don’t even take weekends off.</p>
            <h3>Mind-Blowing Fact</h3>
            <p>If you uncoiled all the DNA in just <strong>one human cell</strong>, it would stretch to about <strong>2 meters</strong> long, yet it’s stored inside a nucleus smaller than a grain of sand. That’s like fitting a skyscraper into a shoebox—neatly!</p>
            <p><em>Closing Thought:</em> You are a living galaxy of 37 trillion cells, each a masterpiece of engineering. Next time you feel lazy, remind yourself—your mitochondria are clocking overtime. So, give your cells the respect they deserve… after all, without them, you’d be nothing more than an interesting pile of organic chemistry. 😏</p>
            <p>Now go forth, cellular commander, and appreciate the micro-marvels that make you… you. And if anyone calls you lazy, tell them, “Speak for yourself—my mitochondria are doing overtime.” 😏</p>
        `
    },
    {
        id: "photosynthesis",
        title: "Biology - Photosynthesis & Energy Flow",
        content: `
            <p>Imagine if your body could run directly on sunshine, skipping breakfast, lunch, and dinner entirely. 🌞 That’s exactly what plants, algae, and some bacteria do through <strong>photosynthesis</strong>—a process that transforms light energy into chemical energy. This remarkable ability forms the very foundation of life on Earth, fuelling food webs and driving ecosystems. Without it, we’d be in the dark—literally and figuratively.</p>
            <p><strong>Definition:</strong> Photosynthesis is the biochemical process by which green plants, algae, and some bacteria use light energy, water, and carbon dioxide to produce glucose and oxygen. In essence, it is nature’s way of converting solar energy into usable chemical energy.</p>
            <img src="images/photosynthesis-diagram.png" alt="Photosynthesis Diagram" style="margin:15px 0; border-radius:8px;">
            <h3>Basic Equation of Photosynthesis</h3>
            <p><strong>6CO<sub>2</sub> + 6H<sub>2</sub>O + light energy → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub></strong></p>
            <p>Carbon dioxide and water, in the presence of light and chlorophyll, produce glucose and oxygen.</p>
            <h3>Structure Involved in Photosynthesis</h3>
            <ul>
                <li><strong>Chloroplasts:</strong> Organelles containing chlorophyll where photosynthesis occurs.</li>
                <li><strong>Chlorophyll:</strong> The green pigment that captures light energy.</li>
                <li><strong>Thylakoids:</strong> Flattened sacs inside chloroplasts where light-dependent reactions take place.</li>
                <li><strong>Stroma:</strong> Fluid-filled space where light-independent reactions (Calvin cycle) occur.</li>
            </ul>
            <h3>Stages of Photosynthesis</h3>
            <ul>
                <li><strong>Light-Dependent Reactions:</strong> Occur in the thylakoid membranes, convert light energy into ATP and NADPH, and release oxygen as a by-product.</li>
                <li><strong>Light-Independent Reactions (Calvin Cycle):</strong> Occur in the stroma, use ATP and NADPH to fix carbon dioxide into glucose.</li>
            </ul>
            <h3>Energy Flow in Ecosystems</h3>
            <p>Photosynthesis is the primary gateway for energy entering the biosphere. Energy flows in one direction—from the sun to producers (plants), then to consumers (animals), and finally to decomposers. At each step, energy is lost as heat, making continuous energy input from the sun essential.</p>
            <ul>
                <li><strong>Producers (Autotrophs):</strong> Organisms that make their own food through photosynthesis.</li>
                <li><strong>Primary Consumers:</strong> Herbivores that feed on producers.</li>
                <li><strong>Secondary & Tertiary Consumers:</strong> Carnivores and omnivores that feed on other animals.</li>
                <li><strong>Decomposers:</strong> Break down dead organisms, recycling nutrients back into the ecosystem.</li>
            </ul>
            <h3>Importance of Photosynthesis</h3>
            <ul>
                <li>Provides the oxygen we breathe.</li>
                <li>Forms the base of food chains and webs.</li>
                <li>Removes carbon dioxide from the atmosphere, helping regulate climate.</li>
                <li>Supports global energy flow and nutrient cycles.</li>
            </ul>
            <h3>Mind-Blowing Fact</h3>
            <p>The total energy captured by photosynthesis in one year is estimated to be over <strong>100 trillion watts</strong>—about six times the current power consumption of human civilization.</p>
            <p><em>Closing Thought:</em> Every bite you eat and every breath you take owes a debt to photosynthesis. The next time you see a leaf basking in sunlight, remember—it’s not just relaxing, it’s working overtime to power the planet. 🌿</p>
        `
    },
    {
        id: "genetics",
        title: "Biology - Genetics & Inheritance",
        content: `
            <p>Imagine receiving a recipe book at birth that contains instructions for building and running every part of you—hair color, blood type, even whether you can roll your tongue. 📜 That’s the magic of <strong>genetics</strong>—the study of how traits are passed from one generation to the next through the language of DNA. It’s like a biological lottery, except the numbers are A, T, C, and G.</p>
            <p><strong>Definition:</strong> Genetics is the branch of biology concerned with heredity and variation in organisms. Inheritance refers to the process by which genetic information is transmitted from parents to offspring.</p>
            <img src="images/genetics-diagram.png" alt="Genetics Diagram" style="margin:15px 0; border-radius:8px;">
            <h3>The Genetic Material</h3>
            <ul>
                <li><strong>DNA (Deoxyribonucleic Acid):</strong> The molecule that carries genetic instructions. Its double-helix structure consists of nucleotides (adenine, thymine, cytosine, guanine).</li>
                <li><strong>Genes:</strong> Segments of DNA that code for specific proteins, determining traits.</li>
                <li><strong>Chromosomes:</strong> Thread-like structures made of DNA and proteins, found in the nucleus. Humans have 46 (23 pairs).</li>
                <li><strong>RNA:</strong> A single-stranded molecule that helps in protein synthesis (mRNA, tRNA, rRNA).</li>
            </ul>
            <h3>Patterns of Inheritance</h3>
            <ul>
                <li><strong>Mendelian Inheritance:</strong> Discovered by Gregor Mendel, includes dominant and recessive traits, segregation, and independent assortment.</li>
                <li><strong>Dominant Traits:</strong> Expressed if at least one dominant allele is present.</li>
                <li><strong>Recessive Traits:</strong> Expressed only when both alleles are recessive.</li>
                <li><strong>Co-dominance:</strong> Both alleles are expressed equally (e.g., AB blood type).</li>
                <li><strong>Incomplete Dominance:</strong> The heterozygote shows a blend of traits (e.g., pink flowers from red and white parents).</li>
                <li><strong>Polygenic Inheritance:</strong> Traits controlled by multiple genes (e.g., skin color, height).</li>
            </ul>
            <h3>Genotype & Phenotype</h3>
            <p><strong>Genotype:</strong> The genetic makeup of an organism (e.g., Aa). <strong>Phenotype:</strong> The observable traits resulting from the genotype and environment (e.g., brown eyes).</p>
            <h3>DNA to Trait – The Central Dogma</h3>
            <p>Genetic information flows from DNA → RNA → Protein. DNA is transcribed into mRNA, which is translated into proteins that carry out cell functions and determine traits.</p>
            <h3>Mutations</h3>
            <p>Mutations are changes in the DNA sequence. They can be harmless, beneficial (driving evolution), or harmful (causing diseases like sickle-cell anemia).</p>
            <h3>Applications of Genetics</h3>
            <ul>
                <li>Forensic science (DNA fingerprinting).</li>
                <li>Medical research and genetic therapy.</li>
                <li>Agriculture (genetically modified crops).</li>
                <li>Understanding evolutionary relationships.</li>
            </ul>
            <h3>Mind-Blowing Fact</h3>
            <p>If all the DNA in your body were stretched out, it would reach to the Sun and back over 300 times—yet it’s packed into the microscopic nuclei of your cells. That’s like storing the entire Internet on a flash drive the size of a pinhead. 💾</p>
            <p><em>Closing Thought:</em> Your genes tell a story that began billions of years ago and is still being written. While you can’t choose the script you’re given, you can choose how to perform it. So make your genetic story one worth remembering… and maybe thank your parents for the good bits. 😉</p>
        `
    },
    {
        id: "ecology",
        title: "Biology - Ecology & Conservation",
        content: `
            <p>Picture the Earth as a giant, interconnected web where every thread—plant, animal, microbe, and environment—is woven together. 🌍 That’s the realm of <strong>ecology</strong>—the study of interactions between organisms and their surroundings. Add <strong>conservation</strong> and you get the effort to protect and sustain this delicate web, ensuring it remains intact for future generations.</p>
            <p><strong>Definition:</strong> Ecology is the branch of biology that examines the relationships between living organisms, including humans, and their physical environment. Conservation is the responsible management of natural resources to prevent exploitation, degradation, and extinction.</p>
            <img src="images/ecology-diagram.png" alt="Ecology Diagram" style="margin:15px 0; border-radius:8px;">
            <h3>Levels of Ecological Organization</h3>
            <ul>
                <li><strong>Organism:</strong> An individual living thing.</li>
                <li><strong>Population:</strong> A group of individuals of the same species in a given area.</li>
                <li><strong>Community:</strong> All the different populations in an area.</li>
                <li><strong>Ecosystem:</strong> A community plus its non-living environment.</li>
                <li><strong>Biosphere:</strong> The global sum of all ecosystems.</li>
            </ul>
            <h3>Energy Flow in Ecosystems</h3>
            <p>Energy enters ecosystems primarily through photosynthesis, flows from producers to consumers to decomposers, and dissipates as heat at each trophic level. Unlike energy, matter cycles through ecosystems repeatedly.</p>
            <h3>Biogeochemical Cycles</h3>
            <ul>
                <li><strong>Water Cycle:</strong> Movement of water through evaporation, condensation, precipitation, and runoff.</li>
                <li><strong>Carbon Cycle:</strong> Circulation of carbon through photosynthesis, respiration, decomposition, and combustion.</li>
                <li><strong>Nitrogen Cycle:</strong> Conversion of nitrogen into usable forms through fixation, nitrification, and denitrification.</li>
            </ul>
            <h3>Conservation Strategies</h3>
            <ul>
                <li><strong>Habitat Protection:</strong> Establishing protected areas like national parks.</li>
                <li><strong>Restoration Ecology:</strong> Rehabilitating degraded habitats.</li>
                <li><strong>Sustainable Use:</strong> Managing resources to meet current needs without harming future supply.</li>
                <li><strong>Legislation & Policy:</strong> Laws such as the Endangered Species Act.</li>
            </ul>
            <h3>Threats to Biodiversity</h3>
            <ul>
                <li>Habitat destruction and fragmentation.</li>
                <li>Pollution (air, water, soil).</li>
                <li>Overexploitation of species.</li>
                <li>Climate change and invasive species.</li>
            </ul>
            <h3>Importance of Conservation</h3>
            <ul>
                <li>Maintains ecosystem services like pollination, water purification, and climate regulation.</li>
                <li>Preserves genetic diversity for adaptation and resilience.</li>
                <li>Ensures sustainable resources for future generations.</li>
            </ul>
            <h3>Mind-Blowing Fact</h3>
            <p>Tropical rainforests cover less than 2% of Earth’s surface yet house over 50% of all known species—losing even a small area can erase thousands of unique organisms forever.</p>
            <p><em>Closing Thought:</em> In the book of life, every species is a page, and every ecosystem is a chapter. Tear out too many, and the story no longer makes sense. Our role? Be guardians of the library. 📚</p>
        `
    },
    {
        id: "physiology",
        title: "Biology - Human Physiology",
        content: `
            <p>Think of the human body as the most advanced city ever built—billions of citizens (cells) working in harmony, a network of roads (blood vessels), communication lines (nerves), and power plants (mitochondria) keeping life running. 🏙️ This intricate masterpiece is the realm of <strong>human physiology</strong>—the science of how the body’s systems function and interact to sustain life.</p>
            <p><strong>Definition:</strong> Human physiology is the branch of biology that studies the normal mechanical, physical, and biochemical functions of the human body, encompassing all organ systems and their integration.</p>
            <img src="images/human-physiology-diagram.png" alt="Human Physiology Diagram" style="margin:15px 0; border-radius:8px;">
            <h3>Nervous System</h3>
            <ul>
                <li><strong>Central Nervous System (CNS):</strong> Brain and spinal cord; processes information and coordinates responses.</li>
                <li><strong>Peripheral Nervous System (PNS):</strong> Nerves connecting CNS to the rest of the body.</li>
                <li><strong>Autonomic Nervous System:</strong> Controls involuntary functions (sympathetic and parasympathetic divisions).</li>
            </ul>
            <h3>Circulatory System</h3>
            <ul>
                <li><strong>Heart:</strong> Pumps blood through the body.</li>
                <li><strong>Blood Vessels:</strong> Arteries, veins, and capillaries transport nutrients, gases, and wastes.</li>
                <li><strong>Blood:</strong> Composed of plasma, red blood cells, white blood cells, and platelets.</li>
            </ul>
            <h3>Respiratory System</h3>
            <ul>
                <li><strong>Lungs:</strong> Facilitate gas exchange—oxygen in, carbon dioxide out.</li>
                <li><strong>Airways:</strong> Nose, trachea, bronchi, and bronchioles conduct air.</li>
                <li><strong>Diaphragm:</strong> Muscle aiding breathing by changing thoracic volume.</li>
            </ul>
            <h3>Digestive System</h3>
            <ul>
                <li><strong>Mouth:</strong> Mechanical and chemical digestion begins here.</li>
                <li><strong>Stomach:</strong> Uses acid and enzymes to break down food.</li>
                <li><strong>Intestines:</strong> Small intestine absorbs nutrients; large intestine absorbs water and forms feces.</li>
                <li><strong>Accessory Organs:</strong> Liver, pancreas, and gallbladder aid digestion.</li>
            </ul>
            <h3>Excretory System</h3>
            <ul>
                <li><strong>Kidneys:</strong> Filter blood to remove waste and regulate fluid balance.</li>
                <li><strong>Urinary Tract:</strong> Ureters, bladder, and urethra store and eliminate urine.</li>
            </ul>
            <h3>Musculoskeletal System</h3>
            <ul>
                <li><strong>Bones:</strong> Provide structure, protect organs, store minerals, and produce blood cells.</li>
                <li><strong>Muscles:</strong> Skeletal muscles enable movement; smooth and cardiac muscles handle involuntary actions.</li>
                <li><strong>Joints & Ligaments:</strong> Allow flexibility and movement.</li>
            </ul>
            <h3>Integumentary System</h3>
            <ul>
                <li><strong>Skin:</strong> Protects, regulates temperature, and senses stimuli.</li>
                <li><strong>Hair & Nails:</strong> Offer additional protection and sensory functions.</li>
                <li><strong>Glands:</strong> Sweat and sebaceous glands maintain homeostasis.</li>
            </ul>
            <h3>Endocrine System</h3>
            <ul>
                <li><strong>Glands:</strong> Pituitary, thyroid, adrenal, pancreas, etc., secrete hormones.</li>
                <li><strong>Hormones:</strong> Chemical messengers regulating metabolism, growth, and reproduction.</li>
            </ul>
            <h3>Immune System</h3>
            <ul>
                <li><strong>White Blood Cells:</strong> Detect and destroy pathogens.</li>
                <li><strong>Lymphatic System:</strong> Transports lymph and supports immunity.</li>
                <li><strong>Antibodies:</strong> Proteins that neutralize invaders.</li>
            </ul>
            <h3>Reproductive System</h3>
            <ul>
                <li><strong>Male:</strong> Testes produce sperm; ducts and glands aid delivery.</li>
                <li><strong>Female:</strong> Ovaries produce eggs; uterus supports fetal development.</li>
            </ul>
            <h3>Integration & Homeostasis</h3>
            <p>All systems work together to maintain a stable internal environment—adjusting temperature, pH, hydration, and nutrient supply in response to internal and external changes.</p>
            <h3>Mind-Blowing Fact</h3>
            <p>Your blood vessels, if stretched end to end, would circle the Earth more than twice—yet they fit neatly inside you.</p>
            <p><em>Closing Thought:</em> Your body is a silent orchestra of systems playing in perfect harmony. Treat it well, and it will perform symphonies for decades. 🎶</p>
        `
    },
    {
        id: "microbiology",
        title: "Microbiology & Immunology – The Invisible World & Your Body’s Defense System",
        content: `
            <p>Picture this: you’re walking through your day, shaking hands, touching surfaces, breathing air—completely unaware that you are constantly surrounded by, and even full of, trillions of microscopic organisms. 🦠 Some are friendly allies, others are neutral bystanders, and a few are silent troublemakers. Welcome to the realm of <strong>Microbiology</strong> and <strong>Immunology</strong>—where tiny organisms shape life, and your body’s immune system stands as an ever-vigilant guardian.</p>

            <h3>Definition</h3>
            <ul>
                <li><strong>Microbiology:</strong> The scientific study of microscopic organisms—including bacteria, viruses, fungi, protozoa, and algae—and their roles in health, disease, industry, and the environment.</li>
                <li><strong>Immunology:</strong> The branch of biology that studies the immune system—the complex network of cells, tissues, and molecules that protect the body from harmful invaders.</li>
            </ul>

            <img src="images/microbiology-immunology-overview.png" alt="Microbiology & Immunology Overview" style="margin:15px 0; border-radius:8px;">

            <h3>Major Groups of Microorganisms</h3>
            <ul>
                <li><strong>Bacteria:</strong> Single-celled prokaryotes; some beneficial (e.g., gut flora), others pathogenic (e.g., Mycobacterium tuberculosis).</li>
                <li><strong>Viruses:</strong> Acellular infectious agents that require a host cell to replicate (e.g., Influenza virus, HIV).</li>
                <li><strong>Fungi:</strong> Eukaryotic organisms like yeasts and molds; some cause disease (e.g., Candida), others are useful (e.g., in antibiotics production).</li>
                <li><strong>Protozoa:</strong> Unicellular eukaryotes, often motile, sometimes parasitic (e.g., Plasmodium causing malaria).</li>
                <li><strong>Algae:</strong> Photosynthetic eukaryotes, mostly aquatic, some producing harmful toxins.</li>
                <li><strong>Prions:</strong> Infectious proteins with no nucleic acids, causing neurodegenerative diseases (e.g., Creutzfeldt-Jakob disease).</li>
            </ul>

            <h3>Structure & Characteristics</h3>
            <ul>
                <li><strong>Prokaryotic vs. Eukaryotic:</strong> Prokaryotes lack a true nucleus (bacteria, archaea); eukaryotes have a nucleus (fungi, protozoa, algae).</li>
                <li><strong>Cell Wall:</strong> Present in most bacteria and fungi, providing shape and protection.</li>
                <li><strong>Genetic Material:</strong> DNA or RNA; location and form vary between microorganisms.</li>
            </ul>

            <h3>Importance of Microorganisms</h3>
            <ul>
                <li>Decomposition and nutrient recycling.</li>
                <li>Food production (e.g., yogurt, cheese, bread).</li>
                <li>Biotechnology (e.g., antibiotics, vaccines, enzymes).</li>
                <li>Bioremediation—using microbes to clean pollutants.</li>
                <li>Human health—gut microbiota aiding digestion and immunity.</li>
            </ul>

            <h3>Introduction to Immunology</h3>
            <p>Your immune system is your body’s personalized security force—fast, adaptive, and relentless against threats. It works in two main modes:</p>
            <ul>
                <li><strong>Innate Immunity:</strong> The first line of defense; includes skin, mucous membranes, and immune cells like macrophages. Non-specific but rapid.</li>
                <li><strong>Adaptive Immunity:</strong> Specific and long-lasting defense; involves lymphocytes (B and T cells) that remember past infections for faster future responses.</li>
            </ul>

            <h3>Key Components of the Immune System</h3>
            <ul>
                <li><strong>White Blood Cells (Leukocytes):</strong> Includes neutrophils, lymphocytes, monocytes, eosinophils, and basophils.</li>
                <li><strong>Antibodies:</strong> Proteins produced by B cells that bind specifically to antigens.</li>
                <li><strong>Lymphoid Organs:</strong> Thymus, spleen, lymph nodes, bone marrow.</li>
                <li><strong>Cytokines:</strong> Signaling molecules coordinating immune responses.</li>
            </ul>

            <h3>Immune Response Stages</h3>
            <ol>
                <li><strong>Recognition:</strong> Immune cells detect foreign antigens.</li>
                <li><strong>Activation:</strong> Immune cells multiply and prepare defenses.</li>
                <li><strong>Attack:</strong> Pathogens are destroyed through phagocytosis, antibodies, or cytotoxic actions.</li>
                <li><strong>Memory Formation:</strong> Adaptive immunity stores “blueprints” for faster response in future encounters.</li>
            </ol>

            <h3>Microbiology & Immunology in Disease</h3>
            <ul>
                <li><strong>Infectious Diseases:</strong> Caused by pathogenic microbes (e.g., tuberculosis, malaria, COVID-19).</li>
                <li><strong>Autoimmune Diseases:</strong> Immune system mistakenly attacks the body (e.g., rheumatoid arthritis).</li>
                <li><strong>Immunodeficiency:</strong> Weak or absent immune function (e.g., AIDS).</li>
                <li><strong>Allergies:</strong> Hypersensitive immune responses to harmless substances.</li>
            </ul>

            <h3>Applications in Modern Science</h3>
            <ul>
                <li>Vaccine development.</li>
                <li>Antibiotic and antiviral drug discovery.</li>
                <li>Gene editing using microbial enzymes (e.g., CRISPR from bacteria).</li>
                <li>Cancer immunotherapy harnessing the immune system to fight tumors.</li>
            </ul>

            <h3>Mind-Blowing Fact</h3>
            <p>Your body contains roughly as many microbial cells as human cells—meaning you are, in a sense, half microbe. Without them, your digestion, immunity, and even mood could be severely impaired.</p>

            <p><em>Closing Thought:</em> The world of microbes is not just about disease—it’s about the hidden partnerships that keep life on Earth thriving. And your immune system? Think of it as the tireless hero working 24/7, without coffee breaks, to keep you alive. 🛡️</p>
        `
    },
    {
        id: "neuroscience",
        title: "Neuroscience & Behavior – How the Brain Drives Our Actions",
        content: `
            <p>Imagine your brain as a bustling city: electrical signals zip through it like cars on highways, chemical messengers act like postal workers delivering important messages, and different neighborhoods (brain regions) specialize in unique tasks. 🧠 From solving math problems to feeling love, from reflexively pulling your hand away from a hot stove to writing poetry—<strong>Neuroscience</strong> and <strong>Behavior</strong> are the twin sciences that help us understand how it all works.</p>

            <h3>Definition</h3>
            <ul>
                <li><strong>Neuroscience:</strong> The scientific study of the nervous system, including its structure, function, development, and disorders.</li>
                <li><strong>Behavior:</strong> The actions or reactions of an organism, often in response to internal or external stimuli.</li>
            </ul>

            <img src="images/neuron-structure.png" alt="Neuron Structure" style="margin:15px 0; border-radius:8px; max-width:100%;">
            <p><em>Above:</em> The structure of a typical neuron—the basic building block of the nervous system.</p>

            <h3>Main Divisions of the Nervous System</h3>
            <ul>
                <li><strong>Central Nervous System (CNS):</strong> The brain and spinal cord—control center for processing and interpreting information.</li>
                <li><strong>Peripheral Nervous System (PNS):</strong> Nerves outside the CNS that connect the brain and spinal cord to the rest of the body.</li>
            </ul>

            <h3>Types of Neurons</h3>
            <ul>
                <li><strong>Sensory Neurons:</strong> Carry information from sensory receptors to the CNS.</li>
                <li><strong>Motor Neurons:</strong> Transmit instructions from the CNS to muscles and glands.</li>
                <li><strong>Interneurons:</strong> Connect neurons within the CNS and integrate information.</li>
            </ul>

            <h3>Neurotransmission – How Neurons Communicate</h3>
            <p>Neurons send messages using both <strong>electrical impulses</strong> (action potentials) and <strong>chemical signals</strong> (neurotransmitters). The signal travels down the axon to the synapse, where neurotransmitters cross to the next neuron, muscle, or gland.</p>

            <img src="images/synapse-diagram.png" alt="Synaptic Transmission Diagram" style="margin:15px 0; border-radius:8px; max-width:100%;">

            <h3>Key Neurotransmitters & Their Roles</h3>
            <ul>
                <li><strong>Dopamine:</strong> Movement control, pleasure, reward learning.</li>
                <li><strong>Serotonin:</strong> Mood regulation, appetite, sleep.</li>
                <li><strong>Acetylcholine:</strong> Muscle activation, memory, learning.</li>
                <li><strong>GABA:</strong> Main inhibitory neurotransmitter—reduces overactivity.</li>
                <li><strong>Glutamate:</strong> Main excitatory neurotransmitter—enhances signaling and learning.</li>
            </ul>

            <h3>Major Brain Regions & Functions</h3>
            <ul>
                <li><strong>Cerebrum:</strong> Higher thinking, language, memory, voluntary movement.</li>
                <li><strong>Cerebellum:</strong> Coordination, balance, fine motor control.</li>
                <li><strong>Brainstem:</strong> Vital functions like breathing, heartbeat, and sleep cycles.</li>
                <li><strong>Limbic System:</strong> Emotional regulation, motivation, memory (includes amygdala and hippocampus).</li>
                <li><strong>Prefrontal Cortex:</strong> Decision making, planning, self-control.</li>
            </ul>

            <img src="images/brain-regions.png" alt="Brain Regions Diagram" style="margin:15px 0; border-radius:8px; max-width:100%;">

            <h3>Behavior & Neural Control</h3>
            <p>Behavior arises from the interaction of neural circuits, hormones, and environmental factors. The nervous system integrates sensory input, processes it, and coordinates responses—sometimes in milliseconds.</p>
            <ul>
                <li><strong>Reflex Actions:</strong> Automatic responses controlled by the spinal cord (e.g., knee-jerk reflex).</li>
                <li><strong>Learned Behaviors:</strong> Skills acquired through experience (e.g., riding a bicycle).</li>
                <li><strong>Innate Behaviors:</strong> Hardwired actions present at birth (e.g., sucking reflex in babies).</li>
            </ul>

            <h3>Neuroplasticity – The Brain’s Superpower</h3>
            <p>Neuroplasticity is the brain’s ability to reorganize itself by forming new connections. This allows learning, recovery from injury, and adaptation to new experiences—even in adulthood.</p>

            <h3>Disorders of the Nervous System</h3>
            <ul>
                <li><strong>Alzheimer’s Disease:</strong> Progressive memory loss due to neuron degeneration.</li>
                <li><strong>Parkinson’s Disease:</strong> Motor impairment caused by loss of dopamine-producing neurons.</li>
                <li><strong>Epilepsy:</strong> Seizures due to abnormal electrical activity.</li>
                <li><strong>Depression & Anxiety:</strong> Linked to imbalances in neurotransmitters.</li>
            </ul>

            <h3>Applications of Neuroscience</h3>
            <ul>
                <li>Brain-machine interfaces for controlling devices with thoughts.</li>
                <li>Neuroimaging techniques like fMRI to study brain activity.</li>
                <li>Cognitive-behavioral therapies for mental health.</li>
                <li>Neuropharmacology for developing new drugs.</li>
            </ul>

            <h3>Mind-Blowing Fact</h3>
            <p>Your brain contains about <strong>86 billion neurons</strong>—and each can form thousands of connections, creating trillions of possible pathways. In terms of complexity, it outshines any supercomputer on Earth.</p>

            <p><em>Closing Thought:</em> Neuroscience reveals that every thought, emotion, and movement is the product of an intricate dance between electrical sparks and chemical whispers. Behavior is not just what you do—it’s the final act of a microscopic drama playing out inside your head, every second of your life. ⚡</p>
        `
    },
    {
        id: "disease",
        title: "Disease & Epidemiology – Understanding Illness and Its Spread",
        content: `
            <p>Imagine a detective working at the microscopic level, tracking an invisible culprit that moves silently through communities. 🕵️‍♂️ That’s the world of <strong>Disease</strong> and <strong>Epidemiology</strong>—where biology meets public health to identify causes of illness, understand patterns of spread, and develop strategies to protect populations.</p>

            <h3>Definition</h3>
            <ul>
                <li><strong>Disease:</strong> Any condition that disrupts the normal structure or function of the body, leading to specific signs and symptoms.</li>
                <li><strong>Epidemiology:</strong> The scientific study of how diseases occur, spread, and can be controlled within populations.</li>
            </ul>

            <img src="images/disease-epidemiology-overview.png" alt="Disease & Epidemiology Overview" style="margin:15px 0; border-radius:8px; max-width:100%;">

            <h3>Types of Diseases</h3>
            <ul>
                <li><strong>Infectious Diseases:</strong> Caused by pathogens like bacteria, viruses, fungi, and parasites (e.g., malaria, COVID-19).</li>
                <li><strong>Non-Infectious Diseases:</strong> Not caused by pathogens; may result from genetics, lifestyle, or environment (e.g., diabetes, cancer).</li>
                <li><strong>Acute Diseases:</strong> Develop suddenly and last a short time (e.g., influenza).</li>
                <li><strong>Chronic Diseases:</strong> Long-lasting or recurring conditions (e.g., heart disease, asthma).</li>
                <li><strong>Communicable Diseases:</strong> Can be transmitted from person to person.</li>
                <li><strong>Non-Communicable Diseases:</strong> Cannot be spread between individuals.</li>
            </ul>

            <h3>Causes of Diseases</h3>
            <ul>
                <li><strong>Biological Agents:</strong> Bacteria, viruses, fungi, protozoa, and helminths.</li>
                <li><strong>Genetic Factors:</strong> Mutations and inherited disorders.</li>
                <li><strong>Environmental Factors:</strong> Pollution, toxins, climate.</li>
                <li><strong>Lifestyle Choices:</strong> Poor diet, lack of exercise, substance abuse.</li>
            </ul>

            <img src="images/disease-cycle.png" alt="Disease Transmission Cycle" style="margin:15px 0; border-radius:8px; max-width:100%;">

            <h3>Transmission of Infectious Diseases</h3>
            <ul>
                <li><strong>Direct Contact:</strong> Person-to-person touch, kissing, sexual contact.</li>
                <li><strong>Indirect Contact:</strong> Contaminated objects (fomites).</li>
                <li><strong>Droplet Transmission:</strong> Sneezing, coughing.</li>
                <li><strong>Airborne Transmission:</strong> Microorganisms suspended in the air.</li>
                <li><strong>Vector-borne:</strong> Transmission through insects or animals (e.g., mosquitoes, ticks).</li>
                <li><strong>Foodborne & Waterborne:</strong> Consuming contaminated food or water.</li>
            </ul>

            <h3>Key Concepts in Epidemiology</h3>
            <ul>
                <li><strong>Incidence:</strong> Number of new cases in a specific time period.</li>
                <li><strong>Prevalence:</strong> Total number of cases (new and existing) at a given time.</li>
                <li><strong>Morbidity:</strong> Rate of disease in a population.</li>
                <li><strong>Mortality:</strong> Rate of death in a population.</li>
                <li><strong>Outbreak:</strong> Sudden increase in cases in a specific area.</li>
                <li><strong>Epidemic:</strong> Disease occurrence above expected levels in a region.</li>
                <li><strong>Pandemic:</strong> Worldwide spread of a disease.</li>
                <li><strong>Endemic:</strong> Disease constantly present in a population or area.</li>
            </ul>

            <h3>Steps in an Epidemiological Investigation</h3>
            <ol>
                <li>Identify and define the health problem.</li>
                <li>Collect and analyze data.</li>
                <li>Formulate and test hypotheses.</li>
                <li>Implement control measures.</li>
                <li>Evaluate effectiveness and adjust strategies.</li>
            </ol>

            <h3>Prevention & Control</h3>
            <ul>
                <li><strong>Primary Prevention:</strong> Avoiding disease before it starts (e.g., vaccination, sanitation).</li>
                <li><strong>Secondary Prevention:</strong> Early detection and treatment (e.g., screenings).</li>
                <li><strong>Tertiary Prevention:</strong> Managing and reducing complications in existing disease (e.g., rehabilitation).</li>
            </ul>

            <img src="images/epidemic-curve.png" alt="Epidemic Curve Example" style="margin:15px 0; border-radius:8px; max-width:100%;">

            <h3>Modern Tools in Epidemiology</h3>
            <ul>
                <li>GIS mapping to track disease spread.</li>
                <li>Molecular epidemiology using genetic sequencing.</li>
                <li>Mathematical modeling for outbreak predictions.</li>
                <li>Digital health surveillance systems.</li>
            </ul>

            <h3>Case Studies</h3>
            <ul>
                <li><strong>1918 Influenza Pandemic:</strong> Estimated 50 million deaths worldwide.</li>
                <li><strong>Smallpox Eradication:</strong> Achieved through a coordinated global vaccination effort.</li>
                <li><strong>COVID-19 Pandemic:</strong> Highlighted global interconnectedness and importance of rapid response.</li>
            </ul>

            <h3>Mind-Blowing Fact</h3>
            <p>The successful eradication of smallpox in 1980 is considered one of humanity’s greatest public health achievements—proof that coordinated science and policy can defeat even the deadliest diseases.</p>

            <p><em>Closing Thought:</em> Understanding disease is not just about biology—it’s about people, patterns, and prevention. Epidemiology gives us the map; public health gives us the tools; and together, they can save millions of lives. 🌍</p>
        `
    }
];

let currentLessonIndex = 0;
window.openLesson = function(topicId) {
  const index = lessons.findIndex(l => l.id === topicId);
  if(index === -1){
    alert("Lesson not found.");
    return;
  }
  currentLessonIndex = index;

  let completed = JSON.parse(localStorage.getItem("completedLessons") || "[]");
  if(!completed.includes(topicId)){
    completed.push(topicId);
    localStorage.setItem("completedLessons", JSON.stringify(completed));
  }
  updateLessonCompletionUI(); // refresh card UI
  showLesson();
  document.getElementById('lessonModal').classList.add('active');
};
window.closeLesson = function() {
  document.getElementById('lessonModal').classList.remove('active');
};
function showLesson() {
  const lesson = lessons[currentLessonIndex];
  const lessonContent = document.querySelector(".lesson-content");
  lessonContent.classList.add("fade-out");
  setTimeout(() => {
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonBody').innerHTML = lesson.content;
    lessonContent.classList.remove("fade-out");
    lessonContent.classList.add("fade-in");
    setTimeout(() => {
      lessonContent.classList.remove("fade-in");
    }, 350);
  }, 200);
}
window.nextLesson = function() {
  if(currentLessonIndex < lessons.length - 1 && lessons[currentLessonIndex+1].subject === lessons[currentLessonIndex].subject){
    currentLessonIndex++;
    showLesson();
  }
};
window.prevLesson = function() {
  if(currentLessonIndex > 0 && lessons[currentLessonIndex-1].subject === lessons[currentLessonIndex].subject){
    currentLessonIndex--;
    showLesson();
  }
};
function updateLessonCompletionUI() {
  const completed = JSON.parse(localStorage.getItem("completedLessons") || "[]");
  document.querySelectorAll(".lesson-card").forEach(card => {
    const lessonId = card.dataset.lessonId;
    if(completed.includes(lessonId)){
      card.classList.add("completed");
    } else {
      card.classList.remove("completed");
    }
  });
}
document.addEventListener("DOMContentLoaded", updateLessonCompletionUI);
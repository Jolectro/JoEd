// ==========================
// Lessons Data
// ==========================
const lessons = [
    {
        id: "atomic",
        title: "Atomic Structure & Periodic Table – Building Blocks of Matter",
        content: `
            <p>Imagine shrinking yourself down to a size so small you could stand on a proton, wave at an electron zipping past, and peek at the quantum playground that makes up all matter. ⚛️ <strong>Atomic Structure</strong> and the <strong>Periodic Table</strong> are the keys to understanding everything from why water is liquid to why gold is yellow.</p>
            <h3>Definition</h3>
            <ul>
                <li><strong>Atomic Structure:</strong> The arrangement of subatomic particles—protons, neutrons, and electrons—inside an atom.</li>
                <li><strong>Periodic Table:</strong> A systematic arrangement of all known chemical elements based on their atomic number, electron configuration, and recurring chemical properties.</li>
            </ul>
            <img src="images/atom-model.png" alt="Bohr Model of the Atom" style="margin:15px 0; border-radius:8px; max-width:100%;">
            <p><em>Above:</em> A simplified Bohr model of a lithium atom, showing electrons in discrete shells.</p>
            <h3>Structure of the Atom</h3>
            <ul>
                <li><strong>Nucleus:</strong> Dense center containing positively charged protons and neutral neutrons; accounts for most of the atom’s mass.</li>
                <li><strong>Electrons:</strong> Negatively charged particles orbiting the nucleus in energy levels (shells).</li>
                <li><strong>Protons:</strong> Determine the element’s identity (atomic number).</li>
                <li><strong>Neutrons:</strong> Stabilize the nucleus; variations create isotopes.</li>
            </ul>
            <h3>Atomic Numbers & Mass Numbers</h3>
            <ul>
                <li><strong>Atomic Number (Z):</strong> Number of protons in the nucleus.</li>
                <li><strong>Mass Number (A):</strong> Sum of protons and neutrons.</li>
                <li><strong>Isotopes:</strong> Atoms of the same element with different neutron counts.</li>
            </ul>
            <h3>Electron Arrangement</h3>
            <ul>
                <li>Electrons occupy specific energy levels (shells) around the nucleus.</li>
                <li>Energy levels are filled in order: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p … (Aufbau principle).</li>
                <li>Hund’s rule and Pauli exclusion principle determine electron distribution in orbitals.</li>
            </ul>
            <h3>The Periodic Table – Organization</h3>
            <ul>
                <li><strong>Groups:</strong> Vertical columns; elements in the same group share similar chemical properties.</li>
                <li><strong>Periods:</strong> Horizontal rows; properties change progressively across a period.</li>
                <li><strong>Metals, Non-metals, Metalloids:</strong> Classified based on physical and chemical characteristics.</li>
                <li><strong>Blocks:</strong> s-block, p-block, d-block, and f-block based on electron configuration.</li>
            </ul>
            <img src="images/periodic-table.png" alt="Periodic Table of Elements" style="margin:15px 0; border-radius:8px; max-width:100%;">
            <h3>Periodic Trends</h3>
            <ul>
                <li><strong>Atomic Radius:</strong> Decreases across a period, increases down a group.</li>
                <li><strong>Ionization Energy:</strong> Increases across a period, decreases down a group.</li>
                <li><strong>Electronegativity:</strong> Increases across a period, decreases down a group.</li>
                <li><strong>Metallic Character:</strong> Decreases across a period, increases down a group.</li>
            </ul>
            <h3>Importance in Chemistry</h3>
            <ul>
                <li>Helps predict chemical reactivity and bonding behavior.</li>
                <li>Identifies relationships between elements.</li>
                <li>Guides the discovery of new elements.</li>
            </ul>
            <h3>Mind-Blowing Fact</h3>
            <p>If you could line up a million hydrogen atoms side-by-side, the line would only be about 1 millimeter long—smaller than the thickness of a credit card!</p>
            <p><em>Closing Thought:</em> Understanding atomic structure and the periodic table is like learning the alphabet of the universe. Once you know the letters, you can read the story of matter itself. 📖</p>
        `
    },
    {   id: "bonding",
        title: "Molecular Bonding – The Glue of Chemistry",
        content: `
        <p>Why does diamond cut glass while graphite writes softly on paper—even though both are pure carbon? The secret sauce is <strong>chemical bonding</strong> and <strong>molecular structure</strong>. Understand how atoms connect, and you’ll predict properties, reactivity, and even why salt dissolves in water but oil refuses—like stubborn Lagos traffic. 🚗⚡</p>
        <h3>Definitions</h3>
        <ul>
        <li><strong>Chemical Bond:</strong> An attraction that holds atoms or ions together to form compounds.</li>
        <li><strong>Molecule:</strong> Two or more atoms bonded covalently acting as a single unit.</li>
        <li><strong>Lattice:</strong> Repeating 3D ionic/metallic framework of particles.</li>
        </ul>
        <img src="images/bond-types-overview.png" alt="Bond Types Overview" style="margin:12px 0;border-radius:8px;max-width:100%;">
        <h3>Why Bonds Form – Energy & Stability</h3>
        <ul>
        <li><strong>Lower Potential Energy:</strong> Bond formation releases energy (exothermic), creating more stable arrangements.</li>
        <li><strong>Octet Rule (guideline):</strong> Main-group atoms tend to achieve 8 valence electrons (exceptions: H, He, B, Be; expanded octets P, S, etc.).</li>
        <li><strong>Electronegativity (EN):</strong> Tendency to attract shared electrons; EN difference guides bond type.</li>
        </ul>
        <h3>Main Bond Types</h3>
        <ul>
        <li><strong>Ionic:</strong> Electron transfer between metal (cation) and nonmetal (anion); strong electrostatic attraction; high melting point; often soluble in polar solvents; conduct electricity when molten/aqueous. <em>Example:</em> NaCl.</li>
        <li><strong>Covalent:</strong> Electron sharing between nonmetals; discrete molecules (H<sub>2</sub>O) or networks (SiO<sub>2</sub>); directionality gives shapes and specific properties.</li>
        <li><strong>Polar Covalent:</strong> Unequal sharing; creates partial charges (δ+, δ−). <em>Example:</em> H–O in water.</li>
        <li><strong>Metallic:</strong> Positive ions in a “sea of delocalized electrons”; malleable, ductile, good conductors; luster. <em>Example:</em> Cu, Fe.</li>
        </ul>
        <img src="images/ionic-covalent-metallic.png" alt="Ionic vs Covalent vs Metallic" style="margin:12px 0;border-radius:8px;max-width:100%;">
        <h3>Beyond Primary Bonds – Intermolecular Forces (IMFs)</h3>
        <ul>
        <li><strong>London Dispersion:</strong> Instantaneous dipoles; present in all; strength ↑ with molar mass & surface area.</li>
        <li><strong>Dipole–Dipole:</strong> Between permanent dipoles (polar molecules).</li>
        <li><strong>Hydrogen Bonding:</strong> Strong IMF when H is bonded to N, O, or F and interacts with a lone pair; gives water high boiling point and ice’s open lattice.</li>
        <li><strong>Ion–Dipole:</strong> Key in dissolving salts in water.</li>
        </ul>
        <img src="images/intermolecular-forces.png" alt="Intermolecular Forces Diagram" style="margin:12px 0;border-radius:8px;max-width:100%;">
        <h3>Lewis Structures – The Blueprint</h3>
        <ol>
        <li>Count total valence electrons (adjust for charges).</li>
        <li>Skeleton: connect atoms with single bonds (least EN central; H & F terminal).</li>
        <li>Complete octets on terminals, then central; create multiple bonds if needed.</li>
        <li>Check formal charges; prefer minimal and negative charge on the most EN atom.</li>
        </ol>
        <p><strong>Formal Charge:</strong> FC = (valence e<sup>−</sup>) − (lone-pair e<sup>−</sup>) − (bond pairs/2)</p>
        <img src="images/lewis-example.png" alt="Lewis Structure Example" style="margin:12px 0;border-radius:8px;max-width:100%;">
        <h3>Resonance & Delocalization</h3>
        <ul>
        <li><strong>Resonance Structures:</strong> Different valid Lewis forms for the same arrangement of atoms; the true structure is a <em>hybrid</em>.</li>
        <li>Delocalization lowers energy and spreads charge (e.g., NO<sub>3</sub><sup>−</sup>, benzene).</li>
        </ul>
        <h3>VSEPR – Predicting Molecular Shapes</h3>
        <p><strong>Idea:</strong> Electron domains (bonding + lone pairs) repel; arrange to minimize repulsion.</p>
        <ul>
        <li><strong>2 domains:</strong> Linear, 180° (CO<sub>2</sub>).</li>
        <li><strong>3 domains:</strong> Trigonal planar 120° (BF<sub>3</sub>); with 1 lone pair → bent (~120°).</li>
        <li><strong>4 domains:</strong> Tetrahedral 109.5° (CH<sub>4</sub>); 1 LP → trigonal pyramidal (~107°); 2 LP → bent (~104.5°).</li>
        <li><strong>5 domains:</strong> Trigonal bipyramidal (90°,120°); variants: seesaw, T-shaped, linear.</li>
        <li><strong>6 domains:</strong> Octahedral (90°); variants: square pyramidal, square planar.</li>
        </ul>
        <img src="images/vsepr-shapes.png" alt="Common VSEPR Shapes" style="margin:12px 0;border-radius:8px;max-width:100%;">
        <h3>Valence Bond (VB) Theory & Hybridization</h3>
        <ul>
        <li><strong>Hybrid Orbitals:</strong> Mixing of atomic orbitals on the same atom to explain geometry.</li>
        <li><strong>sp:</strong> Linear; 2 domains (C≡C).</li>
        <li><strong>sp<sup>2</sup>:</strong> Trigonal planar; 3 domains; one unhybridized p forms π bonds (C=C).</li>
        <li><strong>sp<sup>3</sup>:</strong> Tetrahedral; 4 domains (CH<sub>4</sub>, H<sub>2</sub>O with LPs).</li>
        <li><strong>sp<sup>3</sup>d / sp<sup>3</sup>d<sup>2</sup>:</strong> For hypervalent main-group structures (PCl<sub>5</sub>, SF<sub>6</sub>) as a model.</li>
        <li><strong>σ & π Bonds:</strong> σ from head-on overlap; π from side-by-side overlap of p orbitals; multiple bonds = 1 σ + remaining π.</li>
        </ul>
        <img src="images/hybridization-sigma-pi.png" alt="Hybridization and σ/π Bonds" style="margin:12px 0;border-radius:8px;max-width:100%;">
        <h3>Molecular Orbital (MO) Theory – A Deeper Lens</h3>
        <ul>
        <li>Atomic orbitals combine to form <strong>bonding</strong> (lower E) and <strong>antibonding</strong> (higher E, marked *) molecular orbitals.</li>
        <li><strong>Bond Order</strong> = (bonding e<sup>−</sup> − antibonding e<sup>−</sup>)/2; BO &gt; 0 implies stability.</li>
        <li>Explains paramagnetism of O<sub>2</sub> (unpaired electrons in π*).</li>
        </ul>
        <img src="images/mo-diagram-o2.png" alt="MO Diagram for O2" style="margin:12px 0;border-radius:8px;max-width:100%;">
        <h3>Polarity & Properties</h3>
        <ul>
        <li><strong>Bond Polarity:</strong> Increases with EN difference (H–F &gt; H–Cl).</li>
        <li><strong>Molecular Polarity:</strong> Vector sum of bond dipoles + geometry (CO<sub>2</sub> nonpolar; H<sub>2</sub>O polar).</li>
        <li>Polarity drives <strong>solubility</strong> (“like dissolves like”), <strong>boiling/melting points</strong>, <strong>surface tension</strong>, and <strong>viscosity</strong>.</li>
        </ul>
        <h3>Crystal Types & Macroscopic Behavior</h3>
        <ul>
        <li><strong>Ionic Solids:</strong> Hard, brittle, high mp, conduct when molten/aqueous.</li>
        <li><strong>Molecular Solids:</strong> Low mp, soft, poor conductors (e.g., dry ice).</li>
        <li><strong>Network Covalent:</strong> Very hard, very high mp (diamond, SiC, SiO<sub>2</sub>).</li>
        <li><strong>Metallic:</strong> Variable hardness, conduct heat/electricity, malleable.</li>
        </ul>
        <img src="images/crystal-types.png" alt="Crystal Types Comparison" style="margin:12px 0;border-radius:8px;max-width:100%;">
        <h3>Common Pitfalls (Exam Gold)</h3>
        <ul>
        <li>Confusing <strong>bond order</strong> with number of bonds per molecule—bond order is orbital occupancy-based.</li>
        <li>Forgetting that <strong>shape</strong> comes from electron domains but <strong>molecular polarity</strong> depends on geometry + bond dipoles.</li>
        <li>Overusing the <strong>octet rule</strong> where exceptions apply (BCl<sub>3</sub>, SF<sub>6</sub>, NO).</li>
        </ul>
        <h3>Mini-Playbook (Fast Decisions)</h3>
        <ol>
        <li>Find <strong>valence electrons</strong> → draw <strong>Lewis structure</strong> → minimize <strong>formal charge</strong>.</li>
        <li>Count <strong>electron domains</strong> → apply <strong>VSEPR</strong> → predict <strong>shape</strong>.</li>
        <li>Assign <strong>hybridization</strong> → identify <strong>σ/π</strong> framework.</li>
        <li>Evaluate <strong>polarity</strong> → infer <strong>IMFs</strong> → predict <strong>properties</strong>.</li>
        </ol>
        <h3>Mind-Blowing Fact</h3>
        <p>The difference between soft graphite and ultra-hard diamond is just bonding: 2D sheets (sp<sup>2</sup> + π) sliding vs a 3D network (sp<sup>3</sup>) locked tight. Same carbon, wildly different worlds.</p>
        <p><em>Closing Thought:</em> Bonds are the handshake agreements of atoms; structure is the choreography. Master both, and materials, reactivity, and properties start dancing to your tune. 🧪💃</p>
        `
    },
    {   id: "states",
        title: "States of Matter – The Many Faces of Matter",
        content: `
            <p>Picture the universe as a grand masquerade ball 🎭, where matter keeps changing costumes. Sometimes it stands firm as a rock, sometimes it flows like water, and other times it drifts invisibly as air. These disguises are what we call the <strong>States of Matter</strong>—the different physical forms in which matter can exist, depending on particle arrangement and energy.</p>
            
            <h3>Definition</h3>
            <ul>
                <li><strong>States of Matter:</strong> The distinct physical forms—solid, liquid, gas (and plasma)—that matter can take based on particle arrangement, movement, and energy.</li>
            </ul>
            
            <img src="images/states-of-matter.png" alt="States of Matter Diagram" style="margin:15px 0; border-radius:8px; max-width:100%;">
            <p><em>Above:</em> Particle models showing the arrangement of solids, liquids, and gases.</p>
            
            <h3>Characteristics of States</h3>
            <ul>
                <li><strong>Solids:</strong> Particles are tightly packed, vibrating in fixed positions. They have <em>fixed shape</em> and <em>volume</em>.</li>
                <li><strong>Liquids:</strong> Particles are close but can slide past each other. They have <em>fixed volume</em> but take the shape of their container.</li>
                <li><strong>Gases:</strong> Particles are far apart and move freely. They have <em>no fixed shape or volume</em>, filling any container.</li>
                <li><strong>Plasma:</strong> A super-energized state where particles are ionized (common in stars, lightning, and neon signs).</li>
            </ul>
            
            <h3>Changes of State</h3>
            <ul>
                <li><strong>Melting:</strong> Solid → Liquid.</li>
                <li><strong>Freezing:</strong> Liquid → Solid.</li>
                <li><strong>Boiling/Evaporation:</strong> Liquid → Gas.</li>
                <li><strong>Condensation:</strong> Gas → Liquid.</li>
                <li><strong>Sublimation:</strong> Solid → Gas directly (e.g., dry ice, iodine).</li>
                <li><strong>Deposition:</strong> Gas → Solid (e.g., frost on a window).</li>
            </ul>
            <p><em>Note:</em> During these changes, temperature can remain constant while energy is absorbed or released as <strong>latent heat</strong>.</p>
            
            <h3>Kinetic Theory of Matter</h3>
            <ul>
                <li>Matter is made up of tiny particles in constant motion.</li>
                <li>The higher the temperature, the faster the particles move.</li>
                <li>The behavior of gases (pressure, volume, temperature) is explained by collisions of these particles.</li>
            </ul>
            
            <h3>Real-Life Examples</h3>
            <ul>
                <li><strong>Solid:</strong> Ice cubes, metals, wood.</li>
                <li><strong>Liquid:</strong> Water, oil, mercury.</li>
                <li><strong>Gas:</strong> Oxygen in the air, steam.</li>
                <li><strong>Plasma:</strong> The sun, lightning, neon lamps.</li>
            </ul>
            
            <h3>Why It Matters</h3>
            <ul>
                <li>Explains everyday phenomena (ice melting, clothes drying, water boiling).</li>
                <li>Forms the basis for advanced concepts like gas laws, thermodynamics, and plasma physics.</li>
                <li>Helps in understanding natural events (cloud formation, volcanic eruptions, star formation).</li>
            </ul>
            
            <h3>Mind-Blowing Fact</h3>
            <p>Over <strong>99% of the visible universe</strong> is actually in the plasma state, not solid, liquid, or gas. The stars you see at night? They’re giant glowing plasma balls. 🌌</p>
            
            <p><em>Closing Thought:</em> Matter is a master of disguise. Whether it’s standing solid as a mountain, flowing as a river, drifting as a breeze, or blazing as a star, its different states remind us that change is the only constant in the universe. 🔄</p>
        `
    },
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
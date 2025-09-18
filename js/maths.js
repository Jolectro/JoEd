// ==========================
// Lessons Data
// ==========================
const lessons = [
    {
        id: "numbers",
        title: "Mathematics - Number Systems and Operations",
        content: `
            <p>Imagine a universe where numbers are the citizens, and each has its own personality, rules, and secret powers. 🌌 Welcome to the fascinating world of <strong>Number Systems</strong>—the backbone of mathematics! From counting your fingers to launching rockets into space, understanding numbers is your first step to becoming a <em>mathematical superhero</em>.</p>
            
            <h3>What is a Number System?</h3>
            <p>A <strong>number system</strong> is a writing scheme for expressing numbers using consistent symbols and rules. Think of it as a language, but instead of words, you use digits and operations. Just like languages vary across countries, number systems vary in their base and notation.</p>

            <h3>Major Types of Number Systems</h3>
            <ul>
                <li><strong>Natural Numbers (ℕ):</strong> Counting numbers starting from 1. <em>Examples:</em> 1, 2, 3, 4, …<br><em>Analogy:</em> The eager kids lining up to enter a candy store.</li>
                <li><strong>Whole Numbers (W):</strong> Natural numbers including 0. <em>Examples:</em> 0, 1, 2, 3, …<br><em>Analogy:</em> Even the quiet observer at the start of the line counts!</li>
                <li><strong>Integers (ℤ):</strong> Whole numbers plus their negative counterparts. <em>Examples:</em> …, -3, -2, -1, 0, 1, 2, 3, …<br><em>Analogy:</em> Elevator floors: below ground (negative), ground floor (0), and above ground (positive).</li>
                <li><strong>Rational Numbers (ℚ):</strong> Numbers that can be expressed as a fraction of integers. <em>Examples:</em> 1/2, -3/4, 5, 0<br><em>Analogy:</em> Sharing a pizza: you can divide it into any number of slices.</li>
                <li><strong>Irrational Numbers:</strong> Numbers that cannot be expressed as exact fractions. <em>Examples:</em> √2, π, e<br><em>Analogy:</em> Endless storybooks with no repeated chapters—you can keep reading forever!</li>
                <li><strong>Real Numbers (ℝ):</strong> All rational and irrational numbers combined. <em>Examples:</em> -3, 0, 1/2, π<br><em>Analogy:</em> A cosmic highway connecting every possible point.</li>
                <li><strong>Complex Numbers (ℂ):</strong> Numbers in the form a + bi, where i = √-1. <em>Examples:</em> 3 + 2i, -1 - i<br><em>Analogy:</em> A magical dimension where numbers can travel vertically (real) and horizontally (imaginary) at the same time.</li>
            </ul>

            <h3>Number Bases</h3>
            <p>Numbers can be expressed in different <strong>bases</strong> (radix), which tells us how many digits are used before starting over:</p>
            <ul>
                <li><strong>Binary (Base 2):</strong> Digits 0, 1. <em>Example:</em> 1010₂ = 10₁₀</li>
                <li><strong>Octal (Base 8):</strong> Digits 0–7. <em>Example:</em> 17₈ = 15₁₀</li>
                <li><strong>Decimal (Base 10):</strong> Digits 0–9. Standard system for daily life. <em>Example:</em> 245₁₀</li>
                <li><strong>Hexadecimal (Base 16):</strong> Digits 0–9 and A–F. <em>Example:</em> 1A₁₆ = 26₁₀</li>
            </ul>

            <h3>Basic Operations in Number Systems</h3>
            <p>Numbers are fun, but they become supercharged when you perform <strong>operations</strong>. Let's see how each works with examples:</p>
            
            <h4>Addition (+)</h4>
            <p>Combining numbers to get a total.</p>
            <ul>
                <li>Decimal: 7 + 5 = 12</li>
                <li>Binary: 101₁ + 11₂ = 1000₂</li>
                <li>Hexadecimal: A + 5 = F</li>
            </ul>

            <h4>Subtraction (−)</h4>
            <p>Finding the difference between numbers.</p>
            <ul>
                <li>Decimal: 15 − 7 = 8</li>
                <li>Binary: 1011₂ − 10₂ = 1001₂</li>
                <li>Hexadecimal: F − 9 = 6</li>
            </ul>

            <h4>Multiplication (×)</h4>
            <p>Repeated addition in action.</p>
            <ul>
                <li>Decimal: 6 × 4 = 24</li>
                <li>Binary: 101₂ × 11₂ = 1111₂</li>
                <li>Hexadecimal: B × 3 = 21₁₆</li>
            </ul>

            <h4>Division (÷)</h4>
            <p>Splitting into equal parts.</p>
            <ul>
                <li>Decimal: 20 ÷ 4 = 5</li>
                <li>Binary: 1100₂ ÷ 10₂ = 110₂</li>
                <li>Hexadecimal: 1C ÷ 4 = 7</li>
            </ul>

            <h4>Advanced Operation: Modulo (%)</h4>
            <p>Gives the remainder of a division.</p>
            <ul>
                <li>Decimal: 17 % 5 = 2</li>
                <li>Binary: 1011₂ % 10₂ = 1₂</li>
                <li>Hexadecimal: 1F % A = 5</li>
            </ul>

            <h3>Why Number Systems Matter</h3>
            <p>From coding computers (binary) to digital clocks, GPS, and engineering calculations, number systems are everywhere. They are the secret code of technology and the foundation of logical thinking.</p>

            <h3>Mind-Blowing Example</h3>
            <p>Did you know? Computers don’t understand decimals. Every photo, video, or game you enjoy is converted into <strong>millions of 0s and 1s</strong>. Binary is their native tongue. Your favorite selfie is basically a tiny army of tiny switches saying “on” or “off.” 💡</p>

            <h3>Closing Thought</h3>
            <p>Numbers are not just symbols—they are <em>tools of the universe</em>. Mastering number systems gives you a superpower to decode everything from patterns in nature to the secrets of the digital world. So next time you count your snacks, remember: you are practicing the same skills astronauts use to land on the Moon. 🌕🚀</p>
        `
    },
    {
        id: "algebra",
        title: "Mathematics - Algebra and Equations",
        content: `
            <p>Imagine a world where letters are numbers in disguise, waiting for you to crack their secret identities. 🕵️‍♂️ Welcome to <strong>Algebra</strong>—the magical realm where x, y, and z become your partners in solving mysteries, from daily budgeting to rocket science!</p>
            
            <h3>What is Algebra?</h3>
            <p><strong>Algebra</strong> is a branch of mathematics that uses symbols (usually letters) to represent numbers in expressions, formulas, and equations. It's like creating a code: letters stand in for unknown quantities, making it possible to solve problems that numbers alone can't easily handle.</p>
            
            <h3>Key Concepts in Algebra</h3>
            <ul>
                <li><strong>Variables:</strong> Letters like x, y, z representing unknown values. <em>Example:</em> In x + 5 = 12, x is unknown.</li>
                <li><strong>Constants:</strong> Fixed numbers in expressions. <em>Example:</em> In 3x + 7, the number 7 is a constant.</li>
                <li><strong>Coefficients:</strong> Numbers multiplying the variables. <em>Example:</em> In 4x, 4 is the coefficient.</li>
                <li><strong>Expressions:</strong> Combinations of variables, constants, and operations without an equals sign. <em>Example:</em> 2x + 5, 3y - 7</li>
                <li><strong>Equations:</strong> Statements showing equality between expressions, containing an equals sign. <em>Example:</em> 2x + 5 = 15</li>
            </ul>

            <h3>Types of Equations</h3>
            <ul>
                <li><strong>Linear Equations:</strong> Highest power of variable is 1. <em>Example:</em> 2x + 3 = 11<br><em>Solution:</em> 2x = 8 → x = 4</li>
                <li><strong>Quadratic Equations:</strong> Highest power of variable is 2. <em>Example:</em> x² - 5x + 6 = 0<br><em>Factor:</em> (x - 2)(x - 3) = 0 → x = 2, x = 3</li>
                <li><strong>Polynomial Equations:</strong> Variables with powers 1, 2, 3, … <em>Example:</em> x³ - 4x² + x - 6 = 0</li>
                <li><strong>Simultaneous Equations:</strong> Two or more equations solved together. <em>Example:</em> x + y = 10, 2x - y = 3 → Solve to get x = 13/3, y = 17/3</li>
            </ul>

            <h3>Basic Algebraic Operations</h3>
            <p>Manipulating equations is like balancing a scale—you must do the same thing on both sides.</p>
            
            <h4>Addition & Subtraction</h4>
            <ul>
                <li>Example: x + 5 = 12 → x = 12 - 5 = 7</li>
                <li>Example: 3y - 4 = 11 → 3y = 15 → y = 5</li>
            </ul>

            <h4>Multiplication & Division</h4>
            <ul>
                <li>Example: 4x = 20 → x = 20 ÷ 4 = 5</li>
                <li>Example: y/3 + 2 = 7 → y/3 = 5 → y = 15</li>
            </ul>

            <h4>Expanding & Factoring</h4>
            <ul>
                <li>Expand: (x + 3)(x + 2) = x² + 5x + 6</li>
                <li>Factor: x² + 7x + 10 = (x + 5)(x + 2)</li>
            </ul>

            <h4>Solving Quadratics</h4>
            <p>Quadratic equations can be solved using:</p>
            <ul>
                <li><strong>Factoring:</strong> x² - 9 = 0 → (x - 3)(x + 3) = 0 → x = 3, x = -3</li>
                <li><strong>Quadratic Formula:</strong> x = [-b ± √(b² - 4ac)] / 2a<br>Example: x² + 5x + 6 = 0 → x = [-5 ± √(25 - 24)] / 2 → x = -2, -3</li>
                <li><strong>Completing the Square:</strong> x² + 6x + 5 = 0 → (x + 3)² - 4 = 0 → x + 3 = ±2 → x = -1, -5</li>
            </ul>

            <h3>Simultaneous Equations Examples</h3>
            <ul>
                <li>Example 1 (Substitution): x + y = 8, y = 3x → x + 3x = 8 → 4x = 8 → x = 2, y = 6</li>
                <li>Example 2 (Elimination): 2x + 3y = 16, 3x - y = 5<br>Multiply second by 3: 9x - 3y = 15 → Add to first: 11x = 31 → x = 31/11, y = 6/11</li>
            </ul>

            <h3>Why Algebra Matters</h3>
            <p>Algebra is the language of logic. It powers everything from engineering designs to finance, coding, physics, and even predicting the weather. It trains your brain to think in patterns, solve problems, and see relationships where others see chaos.</p>

            <h3>Mind-Blowing Fact</h3>
            <p>Did you know that every app, game, and AI you use relies on equations and algebraic models? The x’s and y’s you solve in class are the same type of tools used to land rockets on Mars or to simulate your favorite video game worlds. 🚀🎮</p>

            <h3>Closing Thought</h3>
            <p>Algebra is more than just letters and numbers—it’s a superpower that lets you unlock hidden patterns in the universe. Every time you solve for x, remember: you are decoding secrets that mathematicians, engineers, and scientists have been uncovering for centuries. So pick up your pencil and channel your inner problem-solver—the universe is waiting for your solution!</p>
        `

    },
    {
        id: "functions",
        title: "Mathematics - Functions and Graphs",
        content: `
            <p>Imagine each number in the universe has a destiny, and <strong>functions</strong> are the rules that tell it where to go. 🎯 Welcome to the world of <strong>Functions and Graphs</strong>, where math becomes a map, guiding every input to its output with precision and style.</p>

            <h3>What is a Function?</h3>
            <p>A <strong>function</strong> is a rule that assigns exactly one output to each input. Think of it as a magic machine: you feed in a number, press a button, and out pops another number. Each input has only one output, like a vending machine—choose one button, get one snack. 🍫</p>

            <h3>Function Notation</h3>
            <p>Functions are often written as <strong>f(x)</strong>, meaning “f of x.”</p>
            <ul>
                <li>Example: f(x) = 2x + 3 → If x = 4, then f(4) = 2(4) + 3 = 11</li>
                <li>Example: g(x) = x² - 1 → If x = 5, g(5) = 25 - 1 = 24</li>
            </ul>

            <h3>Types of Functions</h3>
            <ul>
                <li><strong>Linear Functions:</strong> Graph is a straight line. Form: f(x) = mx + c<br>Example: f(x) = 3x + 2 → Slope = 3, y-intercept = 2</li>
                <li><strong>Quadratic Functions:</strong> Graph is a parabola. Form: f(x) = ax² + bx + c<br>Example: f(x) = x² - 4x + 3 → Opens upwards, vertex at (2, -1)</li>
                <li><strong>Polynomial Functions:</strong> Form: f(x) = axⁿ + … + k → Can have curves, peaks, and valleys</li>
                <li><strong>Exponential Functions:</strong> Form: f(x) = a^x → Growth or decay<br>Example: f(x) = 2^x → 2, 4, 8, 16 …</li>
                <li><strong>Absolute Value Functions:</strong> Form: f(x) = |x| → Graph makes a V-shape<br>Example: f(-3) = 3, f(2) = 2</li>
            </ul>

            <h3>Domain and Range</h3>
            <p><strong>Domain:</strong> All possible inputs (x-values).<br>
            <strong>Range:</strong> All possible outputs (y-values).</p>
            <ul>
                <li>Example: f(x) = √x → Domain: x ≥ 0, Range: y ≥ 0</li>
                <li>Example: f(x) = x² → Domain: all real numbers, Range: y ≥ 0</li>
            </ul>

            <h3>Graphing Functions</h3>
            <p>Graphs are visual stories of functions. The x-axis represents input values, the y-axis represents output values. Plotting points and connecting them reveals the shape of the function.</p>
            <ul>
                <li><strong>Linear Function Graph:</strong> Straight line → constant slope<br>Example: f(x) = 2x + 1 → Points: (0,1), (1,3), (2,5)</li>
                <li><strong>Quadratic Function Graph:</strong> Parabola → vertex is the turning point<br>Example: f(x) = x² - 4x + 3 → Vertex at (2,-1), roots at x=1 and x=3</li>
                <li><strong>Exponential Graph:</strong> Rapidly increases or decreases → never touches x-axis<br>Example: f(x) = 2^x → Points: (0,1), (1,2), (2,4), (-1,0.5)</li>
            </ul>

            <h3>Important Graph Concepts</h3>
            <ul>
                <li><strong>Intercepts:</strong> Points where graph crosses axes → x-intercept(s), y-intercept</li>
                <li><strong>Slope (m):</strong> Rise over run → steepness of line</li>
                <li><strong>Vertex:</strong> Peak or trough of a parabola</li>
                <li><strong>Increasing/Decreasing:</strong> Where function values go up or down</li>
                <li><strong>Asymptotes:</strong> Lines that graphs approach but never touch (common in exponential and rational functions)</li>
            </ul>

            <h3>Worked Examples</h3>
            <ul>
                <li><strong>Linear:</strong> f(x) = 3x - 2 → Points: (0,-2), (1,1), (2,4)</li>
                <li><strong>Quadratic:</strong> f(x) = x² + 2x - 3 → Factor: (x+3)(x-1), roots: -3, 1, vertex at (-1,-4)</li>
                <li><strong>Exponential:</strong> f(x) = 2^x → f(-1)=0.5, f(0)=1, f(2)=4</li>
                <li><strong>Absolute Value:</strong> f(x) = |x-2| → V-shape vertex at (2,0)</li>
            </ul>

            <h3>Real-Life Applications</h3>
            <ul>
                <li>Predicting population growth (exponential functions)</li>
                <li>Modeling projectile motion (quadratic functions)</li>
                <li>Analyzing profit and cost (linear functions)</li>
                <li>Computer graphics and animations (functions as transformations)</li>
                <li>Engineering structures and bridges (graphs for stability)</li>
            </ul>

            <h3>Mind-Blowing Fact</h3>
            <p>Your smartphone, GPS, and video games are all powered by functions and their graphs. Every swipe, tap, and digital effect is a point plotted on a function graph somewhere in a hidden algorithm. 📱🎮</p>

            <h3>Closing Thought</h3>
            <p>Functions and graphs turn abstract numbers into visual stories. By mastering them, you gain the power to predict, model, and understand patterns in nature, technology, and life itself. Plot your points wisely, connect them thoughtfully, and watch as mathematics paints a picture of the universe before your eyes. 🌌</p>
        `

    },
    {
        id: "geometry",
        title: "Mathematics - Geometry, Angles and Shapes",
        content: `
            <p>Imagine stepping into a world where every corner, curve, and line tells a story. 📐 Welcome to <strong>Geometry</strong>—the art and science of shapes, sizes, and the magical relationships between points, lines, and angles. From designing buildings to creating animations, geometry is everywhere!</p>

            <h3>What is Geometry?</h3>
            <p><strong>Geometry</strong> is the branch of mathematics concerned with the properties, measurement, and relationships of points, lines, surfaces, and solids. It's like being a detective for space—figuring out how shapes fit, how angles align, and how everything connects.</p>

            <h3>Basic Elements</h3>
            <ul>
                <li><strong>Point:</strong> A location in space with no size. <em>Example:</em> Vertex of a triangle.</li>
                <li><strong>Line:</strong> Extends infinitely in both directions. <em>Example:</em> Line AB.</li>
                <li><strong>Line Segment:</strong> Part of a line with two endpoints. <em>Example:</em> Segment CD.</li>
                <li><strong>Ray:</strong> Starts at a point and extends infinitely in one direction. <em>Example:</em> Ray EF.</li>
                <li><strong>Plane:</strong> A flat surface extending infinitely in all directions. <em>Example:</em> The surface of a wall.</li>
            </ul>

            <h3>Angles</h3>
            <p>An <strong>angle</strong> is formed by two rays sharing a common endpoint called the vertex. Angles are the spice of geometry!</p>
            <ul>
                <li><strong>Acute Angle:</strong> Less than 90°</li>
                <li><strong>Right Angle:</strong> Exactly 90°</li>
                <li><strong>Obtuse Angle:</strong> Between 90° and 180°</li>
                <li><strong>Straight Angle:</strong> Exactly 180°</li>
                <li><strong>Reflex Angle:</strong> Between 180° and 360°</li>
            </ul>

            <h3>Angle Relationships</h3>
            <ul>
                <li><strong>Complementary:</strong> Two angles adding up to 90°</li>
                <li><strong>Supplementary:</strong> Two angles adding up to 180°</li>
                <li><strong>Vertically Opposite:</strong> Angles opposite each other when two lines intersect, always equal</li>
                <li><strong>Adjacent Angles:</strong> Share a common side and vertex</li>
            </ul>

            <h3>Types of Shapes</h3>
            <p>Shapes are everywhere—from your room to the streets outside. Understanding their properties is key!</p>
            <ul>
                <li><strong>Triangles:</strong> Three sides, three angles. Types include:
                    <ul>
                        <li>Equilateral: All sides equal, all angles 60°</li>
                        <li>Isosceles: Two sides equal, base angles equal</li>
                        <li>Scalene: All sides and angles different</li>
                        <li>Right-angled: One angle 90°</li>
                    </ul>
                </li>
                <li><strong>Quadrilaterals:</strong> Four sides. Types include:
                    <ul>
                        <li>Square: All sides equal, all angles 90°</li>
                        <li>Rectangle: Opposite sides equal, all angles 90°</li>
                        <li>Rhombus: All sides equal, opposite angles equal</li>
                        <li>Parallelogram: Opposite sides equal and parallel</li>
                        <li>Trapezium: One pair of parallel sides</li>
                    </ul>
                </li>
                <li><strong>Polygons:</strong> Closed figures with more than four sides, e.g., pentagon (5 sides), hexagon (6 sides)</li>
                <li><strong>Circles:</strong> Set of points equidistant from a center. Important terms:
                    <ul>
                        <li>Radius: Distance from center to any point on the circle</li>
                        <li>Diameter: Twice the radius</li>
                        <li>Circumference: Perimeter of the circle</li>
                        <li>Chord: Line connecting two points on a circle</li>
                    </ul>
                </li>
                <li><strong>3D Shapes:</strong> Solid objects: cubes, cuboids, spheres, cones, cylinders, pyramids</li>
            </ul>

            <h3>Worked Examples</h3>
            <ul>
                <li><strong>Triangle Angles:</strong> A triangle has angles 50° and 60°. Third angle = 180° - (50+60) = 70°</li>
                <li><strong>Complementary Angles:</strong> One angle = 35°, complementary = 90 - 35 = 55°</li>
                <li><strong>Rectangle Perimeter:</strong> Length = 8 cm, Width = 5 cm → Perimeter = 2(8+5)=26 cm</li>
                <li><strong>Circle Circumference:</strong> Radius = 7 cm → Circumference = 2πr = 2×3.14×7 ≈ 43.96 cm</li>
            </ul>

            <h3>Why Geometry Matters</h3>
            <p>Geometry is everywhere—from architecture and art to robotics and navigation. Understanding angles and shapes helps us measure, design, and model the world accurately. Without it, bridges would collapse, buildings would tilt, and even video games would look wonky!</p>

            <h3>Mind-Blowing Fact</h3>
            <p>The Great Pyramid of Giza is a perfect example of geometry in action. Its base is almost a perfect square, and its angles are precisely calculated so it has stood strong for over 4,500 years! 🏛️</p>

            <h3>Closing Thought</h3>
            <p>Geometry is like the skeleton of the universe. Every building, every art piece, every design depends on points, lines, angles, and shapes. Mastering it turns you into a spatial wizard, able to see patterns, create designs, and understand the structure of the world around you. So grab your ruler and compass—adventure awaits in every angle and every curve!</p>
        `

    },
    {
        id: "trigonometry",
        title: "Mathematics - Trigonometry",
        content: `
            <p>Imagine standing on the edge of a cliff, looking at the ocean below, and wanting to know the height of a lighthouse across the bay. 🏖️ This is where <strong>Trigonometry</strong>—the mathematics of triangles and angles—becomes your superpower. With just a few measurements and formulas, you can unlock hidden distances, heights, and angles!</p>

            <h3>What is Trigonometry?</h3>
            <p><strong>Trigonometry</strong> is a branch of mathematics that studies the relationships between the angles and sides of triangles, especially right-angled triangles. It’s like a secret code that nature uses for mountains, waves, buildings, and even sound waves.</p>

            <h3>Basic Trigonometric Ratios</h3>
            <p>For a right-angled triangle with angle θ:</p>
            <ul>
                <li><strong>Sine (sin θ)</strong> = Opposite / Hypotenuse</li>
                <li><strong>Cosine (cos θ)</strong> = Adjacent / Hypotenuse</li>
                <li><strong>Tangent (tan θ)</strong> = Opposite / Adjacent</li>
                <li><strong>Cosecant (csc θ)</strong> = 1 / sin θ = Hypotenuse / Opposite</li>
                <li><strong>Secant (sec θ)</strong> = 1 / cos θ = Hypotenuse / Adjacent</li>
                <li><strong>Cotangent (cot θ)</strong> = 1 / tan θ = Adjacent / Opposite</li>
            </ul>
            <p>Mnemonic to remember: <em>“Some People Have Curly Black Hair Through Proper Brushing”</em> → Sine, Cosine, Tangent, Cosecant, Secant, Cotangent</p>

            <h3>Worked Examples</h3>
            <ul>
                <li>Right triangle: Opposite = 3, Adjacent = 4, Hypotenuse = 5  
                    → sin θ = 3/5 = 0.6, cos θ = 4/5 = 0.8, tan θ = 3/4 = 0.75
                </li>
                <li>Find height of tree using angle of elevation: Angle = 30°, distance = 10 m  
                    → tan 30° = height / 10 → height = 10 × tan 30° ≈ 5.77 m
                </li>
            </ul>

            <h3>Important Trigonometric Identities</h3>
            <ul>
                <li>Pythagorean Identity: sin²θ + cos²θ = 1</li>
                <li>1 + tan²θ = sec²θ</li>
                <li>1 + cot²θ = csc²θ</li>
                <li>Reciprocal Relations: csc θ = 1 / sin θ, sec θ = 1 / cos θ, cot θ = 1 / tan θ</li>
            </ul>

            <h3>Trigonometric Graphs</h3>
            <p>Trigonometric functions are periodic, meaning they repeat in cycles. Graphs help visualize angles and values.</p>
            <ul>
                <li><strong>Sine Graph (y = sin x):</strong> Wave starting from 0, peaks at 1, trough at -1, period = 360° or 2π radians</li>
                <li><strong>Cosine Graph (y = cos x):</strong> Wave starting from 1, peaks at 1, trough at -1, period = 360° or 2π radians</li>
                <li><strong>Tangent Graph (y = tan x):</strong> Repeats every 180°, vertical asymptotes where cos x = 0</li>
            </ul>

            <h3>Real-Life Applications</h3>
            <ul>
                <li>Surveying land and measuring heights of buildings and mountains</li>
                <li>Architecture and engineering for angles and slopes</li>
                <li>Navigation and GPS, calculating distances</li>
                <li>Sound and light waves analysis</li>
                <li>Animation and gaming for rotation and movement</li>
            </ul>

            <h3>Mind-Blowing Fact</h3>
            <p>Trigonometry isn’t just for triangles. It’s used in astronomy to calculate distances to stars, in music to analyze sound waves, and in smartphones to interpret touch and motion sensors. 📱🎵✨</p>

            <h3>Closing Thought</h3>
            <p>Trigonometry is the magic wand that lets you measure what can’t be touched. From the smallest wave to the tallest tower, it connects angles, sides, and distances with elegance. Master these ratios and identities, and you hold the key to unlocking the secrets of space, structures, and waves. So next time you look at a mountain or a clock, remember: there’s a triangle waiting for you to solve its mystery. ⛰️🕒</p>
        `

    },
    {
        id: "calculus",
        title: "Mathematics - Calculus",
        content: `
            <p>Imagine trying to measure the speed of a racing car at every instant, or calculating the area under a curve of a winding river. 🏎️🌊 Welcome to <strong>Calculus</strong>—the mathematics of change and motion, where numbers meet curves, and every tiny change matters!</p>

            <h3>What is Calculus?</h3>
            <p><strong>Calculus</strong> is the branch of mathematics that studies <strong>change</strong> (differential calculus) and <strong>accumulation</strong> (integral calculus). It’s like having a microscope and a map at the same time: you can zoom into the tiniest change and also measure the big picture.</p>

            <h3>Two Main Branches</h3>
            <ul>
                <li><strong>Differential Calculus:</strong> Focuses on rates of change and slopes of curves. <em>Think:</em> How fast is the car speeding up at this exact moment? <br>Key concept: <strong>Derivative</strong></li>
                <li><strong>Integral Calculus:</strong> Focuses on accumulation and areas under curves. <em>Think:</em> How much water fills the river over a stretch? <br>Key concept: <strong>Integral</strong></li>
            </ul>

            <h3>Derivative Basics</h3>
            <p>The derivative of a function measures how fast the function value changes with respect to its input:</p>
            <ul>
                <li>Notation: f'(x) or dy/dx</li>
                <li>Example: f(x) = x² → f'(x) = 2x</li>
                <li>Interpretation: If x = 3, rate of change = 2*3 = 6 → slope of tangent at x=3</li>
            </ul>

            <h3>Common Derivative Rules</h3>
            <ul>
                <li>Power Rule: d/dx [xⁿ] = n*xⁿ⁻¹</li>
                <li>Sum Rule: d/dx [f(x) + g(x)] = f'(x) + g'(x)</li>
                <li>Difference Rule: d/dx [f(x) - g(x)] = f'(x) - g'(x)</li>
                <li>Product Rule: d/dx [u*v] = u'v + uv'</li>
                <li>Quotient Rule: d/dx [u/v] = (u'v - uv') / v²</li>
                <li>Chain Rule: d/dx [f(g(x))] = f'(g(x)) * g'(x)</li>
            </ul>

            <h3>Integral Basics</h3>
            <p>Integrals are like “adding up” infinitely small pieces to find a total:</p>
            <ul>
                <li>Notation: ∫ f(x) dx</li>
                <li>Example: ∫ 2x dx = x² + C (C = constant of integration)</li>
                <li>Area under y = f(x) from x = a to x = b: ∫[a to b] f(x) dx</li>
            </ul>

            <h3>Common Integration Rules</h3>
            <ul>
                <li>∫ xⁿ dx = xⁿ⁺¹ / (n+1) + C, n ≠ -1</li>
                <li>∫ k dx = kx + C, where k is constant</li>
                <li>∫ (f(x) ± g(x)) dx = ∫ f(x) dx ± ∫ g(x) dx</li>
                <li>∫ e^x dx = e^x + C</li>
                <li>∫ sin x dx = -cos x + C, ∫ cos x dx = sin x + C</li>
            </ul>

            <h3>Worked Examples</h3>
            <ul>
                <li><strong>Derivative:</strong> f(x) = 3x³ - 5x² + 2x → f'(x) = 9x² - 10x + 2</li>
                <li><strong>Derivative at a point:</strong> f(x) = x², x = 4 → f'(4) = 2*4 = 8 → slope of tangent at x=4</li>
                <li><strong>Integral:</strong> ∫ (4x³ + 2x) dx = x⁴ + x² + C</li>
                <li><strong>Definite Integral:</strong> ∫[0 to 2] (x²) dx = [x³/3]₀² = 8/3 - 0 = 8/3</li>
            </ul>

            <h3>Real-Life Applications</h3>
            <ul>
                <li>Physics: Motion, velocity, acceleration</li>
                <li>Engineering: Structures, forces, stress analysis</li>
                <li>Economics: Cost, revenue, optimization</li>
                <li>Biology: Growth rates, population modeling</li>
                <li>Computer Graphics: Curves, animation, 3D rendering</li>
            </ul>

            <h3>Mind-Blowing Fact</h3>
            <p>Calculus is the hidden engine behind almost every modern technology—from rockets to smartphones, from weather prediction to Netflix recommendations. Every animation, every app, every curve on your favorite design relies on calculus! 🚀📱</p>

            <h3>Closing Thought</h3>
            <p>Calculus gives you a lens to see change and accumulation in the world. With derivatives, you measure the instant; with integrals, you sum it all up. Master these tools, and you can decode motion, growth, and patterns anywhere—from the tiniest particle to the vast cosmos. So grab your pencil, and start tracing the curves of the universe. 🌌✏️</p>
        `

    },
    {
        id: "probability",
        title: "Mathematics - Probability and Statistics",
        content: `
            <p>Imagine predicting the outcome of a dice roll, the weather, or even the winner of a football match. 🎲⚽ This is the world of <strong>Probability and Statistics</strong>, where math helps us make sense of uncertainty and data, turning chaos into insight!</p>

            <h3>What is Probability?</h3>
            <p><strong>Probability</strong> measures how likely an event is to happen. It’s a number between 0 and 1, where 0 means impossible, and 1 means certain. Think of it as the “chance-o-meter” of life!</p>
            <ul>
                <li>Formula: Probability (P) = Number of favorable outcomes / Total number of outcomes</li>
                <li>Example: Rolling a 6 on a fair die → P = 1/6</li>
                <li>Example: Tossing a coin → P(Heads) = 1/2, P(Tails) = 1/2</li>
            </ul>

            <h3>Types of Events</h3>
            <ul>
                <li><strong>Independent Events:</strong> One event does not affect the other. Example: Tossing two coins.</li>
                <li><strong>Dependent Events:</strong> One event affects the other. Example: Drawing cards from a deck without replacement.</li>
                <li><strong>Mutually Exclusive Events:</strong> Cannot happen at the same time. Example: Rolling a 3 or a 5 on a single die.</li>
                <li><strong>Complementary Events:</strong> One happens if the other does not. Example: Rolling a 6 → complement = not 6</li>
            </ul>

            <h3>Worked Probability Examples</h3>
            <ul>
                <li>Rolling a die: P(even number) = 3/6 = 1/2</li>
                <li>Picking a card: P(king) = 4/52 = 1/13</li>
                <li>Tossing two coins: P(2 heads) = 1/4 → Outcomes: HH, HT, TH, TT</li>
            </ul>

            <h3>What is Statistics?</h3>
            <p><strong>Statistics</strong> is the science of collecting, organizing, analyzing, and interpreting data. It’s like turning raw numbers into a story that tells you what’s really going on.</p>

            <h3>Data Types</h3>
            <ul>
                <li><strong>Qualitative (Categorical):</strong> Describes qualities or categories. Example: Eye color, type of fruit</li>
                <li><strong>Quantitative (Numerical):</strong> Represents numbers. Example: Age, height, temperature</li>
            </ul>

            <h3>Measures of Central Tendency</h3>
            <ul>
                <li><strong>Mean:</strong> Average → sum of values / number of values. Example: 2,4,6 → mean = (2+4+6)/3 = 4</li>
                <li><strong>Median:</strong> Middle value when data is ordered. Example: 3,7,5 → order: 3,5,7 → median = 5</li>
                <li><strong>Mode:</strong> Most frequent value. Example: 2,2,3,4 → mode = 2</li>
            </ul>

            <h3>Measures of Dispersion</h3>
            <ul>
                <li><strong>Range:</strong> Difference between highest and lowest. Example: 3,7,10 → range = 10-3=7</li>
                <li><strong>Variance:</strong> Average of squared differences from the mean</li>
                <li><strong>Standard Deviation:</strong> Square root of variance → measures spread of data</li>
            </ul>

            <h3>Graphs in Statistics</h3>
            <ul>
                <li><strong>Bar Chart:</strong> Compares categorical data</li>
                <li><strong>Histogram:</strong> Shows frequency of numerical data intervals</li>
                <li><strong>Pie Chart:</strong> Shows proportions of categories</li>
                <li><strong>Line Graph:</strong> Shows trends over time</li>
                <li><strong>Box Plot:</strong> Shows median, quartiles, and outliers</li>
            </ul>

            <h3>Worked Statistics Examples</h3>
            <ul>
                <li>Data: 4,7,3,6,7 → Mean = (4+7+3+6+7)/5 = 27/5 = 5.4</li>
                <li>Median: Order data → 3,4,6,7,7 → median = 6</li>
                <li>Mode: 7 occurs twice → mode = 7</li>
                <li>Range: 7 - 3 = 4</li>
            </ul>

            <h3>Real-Life Applications</h3>
            <ul>
                <li>Weather forecasting (probability of rain)</li>
                <li>Insurance (calculating risk)</li>
                <li>Business (sales trends, market research)</li>
                <li>Medicine (success rates of treatments)</li>
                <li>Sports (predicting outcomes, player statistics)</li>
            </ul>
            <h3>Mind-Blowing Fact</h3>
            <p>Probability and statistics help you make informed decisions in everyday life. From predicting the chance of getting caught in traffic to understanding stock market risks, these tools turn uncertainty into insight. 📊🎲</p>

            <h3>Closing Thought</h3>
            <p>Probability and statistics are like the compass and map of the numerical world. They guide decisions, reveal patterns, and make sense of chaos. Master them, and you can predict, analyze, and understand the world better—one dataset, one probability, one insight at a time. 🧭📈</p>
        `

    },
    {
        id: "sequences",
        title: "Mathematics - Sequences and Series",
        content: `
            <p>Imagine lining up dominoes, each one falling into the next, or stacking coins so each layer follows a pattern. 🀄💰 This is the world of <strong>Sequences and Series</strong>, where numbers march in order and patterns reveal the secrets of math!</p>

            <h3>What is a Sequence?</h3>
            <p>A <strong>sequence</strong> is an ordered list of numbers following a specific rule or pattern. Think of it as a number parade, each number knowing exactly where it should go.</p>
            <ul>
                <li>Example: 2, 4, 6, 8, 10… → each number increases by 2</li>
                <li>Example: 1, 1, 2, 3, 5, 8… → Fibonacci sequence, each number is the sum of the two previous numbers</li>
            </ul>

            <h3>Types of Sequences</h3>
            <ul>
                <li><strong>Arithmetic Sequence (AP):</strong> Difference between consecutive terms is constant (common difference, d).  
                    Example: 3, 7, 11, 15 → d = 4
                </li>
                <li><strong>Geometric Sequence (GP):</strong> Ratio between consecutive terms is constant (common ratio, r).  
                    Example: 2, 6, 18, 54 → r = 3
                </li>
                <li><strong>Fibonacci Sequence:</strong> Each term is sum of previous two terms.  
                    Example: 0, 1, 1, 2, 3, 5, 8, 13…
                </li>
            </ul>

            <h3>Formulas</h3>
            <ul>
                <li><strong>nth term of AP:</strong> aₙ = a₁ + (n-1)d</li>
                <li><strong>Sum of first n terms of AP:</strong> Sₙ = n/2 × (2a₁ + (n-1)d) or Sₙ = n/2 × (a₁ + aₙ)</li>
                <li><strong>nth term of GP:</strong> aₙ = a₁ × rⁿ⁻¹</li>
                <li><strong>Sum of first n terms of GP (r ≠ 1):</strong> Sₙ = a₁ × (1 - rⁿ) / (1 - r)</li>
                <li><strong>Sum of infinite GP (|r|<1):</strong> S∞ = a₁ / (1 - r)</li>
            </ul>

            <h3>Worked Examples</h3>
            <ul>
                <li><strong>AP Example:</strong> Find 10th term of 5, 8, 11… → a₁=5, d=3 → a₁₀ = 5 + (10-1)×3 = 32</li>
                <li><strong>AP Sum Example:</strong> Sum of first 20 terms of 3, 7, 11… → a₁=3, d=4 → S₂₀ = 20/2 × (2*3 + 19*4) = 10 × (6+76)=10×82=820</li>
                <li><strong>GP Example:</strong> Find 6th term of 2, 6, 18… → a₁=2, r=3 → a₆ = 2×3⁵ = 2×243 = 486</li>
                <li><strong>GP Sum Example:</strong> Sum of first 5 terms of 3, 6, 12… → a₁=3, r=2 → S₅ = 3*(1-2⁵)/(1-2) = 3*(1-32)/(-1)=3*31=93</li>
            </ul>

            <h3>Applications</h3>
            <ul>
                <li>Finance: Calculating compound interest (GP) and installment payments</li>
                <li>Computer Science: Algorithms, recursion, and data structures (Fibonacci)</li>
                <li>Engineering: Signal processing and wave patterns</li>
                <li>Physics: Motion under uniform acceleration (AP), growth/decay models (GP)</li>
                <li>Nature: Patterns in leaves, shells, and population growth</li>
            </ul>

            <h3>Mind-Blowing Fact</h3>
            <p>Fibonacci numbers appear in nature everywhere—from the spirals of sunflowers to the scales of pinecones. 🌻🐚 Math isn’t just on paper; it’s the language of the universe.</p>

            <h3>Closing Thought</h3>
            <p>Sequences and series are like the heartbeat of numbers, revealing hidden rhythms and patterns in math and nature. Master them, and you can predict the next term, calculate totals, and even explore the mysteries of the natural world. Next time you see a spiral, a staircase, or a pattern, remember: it’s mathematics in action! 🌀📊</p>
        `
    },
    {
        id: "vectors",
        title: "Mathematics - Vectors and Coordinate Geometry",
        content: `
            <p>Imagine navigating a ship across the ocean, or aiming a spaceship in 3D space. 🚢🚀 This is where <strong>Vectors and Coordinate Geometry</strong> become your navigation tools, helping you measure direction, distance, and position with precision!</p>

            <h3>What is a Vector?</h3>
            <p>A <strong>vector</strong> is a quantity that has both <strong>magnitude</strong> (size) and <strong>direction</strong>. Think of it as an arrow pointing from one point to another.</p>
            <ul>
                <li>Example: Wind blowing at 10 m/s towards the north → vector (magnitude 10, direction north)</li>
                <li>Notation: Often written as **\(\vec{v}\)** or <strong>AB</strong> with arrow over it</li>
            </ul>

            <h3>Types of Vectors</h3>
            <ul>
                <li><strong>Zero Vector:</strong> Magnitude = 0, no direction</li>
                <li><strong>Unit Vector:</strong> Magnitude = 1, often used to indicate direction (i, j, k)</li>
                <li><strong>Position Vector:</strong> From origin to a point</li>
                <li><strong>Equal Vectors:</strong> Same magnitude and direction</li>
            </ul>

            <h3>Vector Operations</h3>
            <ul>
                <li><strong>Addition:</strong> Tip-to-tail method or component-wise:  
                    \(\vec{a} + \vec{b} = (a₁ + b₁, a₂ + b₂, a₃ + b₃)\)  
                    Example: (2,3,1) + (1,4,2) = (3,7,3)
                </li>
                <li><strong>Subtraction:</strong> \(\vec{a} - \vec{b} = (a₁ - b₁, a₂ - b₂, a₃ - b₃)\)</li>
                <li><strong>Scalar Multiplication:</strong> k·\(\vec{a} = (k·a₁, k·a₂, k·a₃)\)</li>
                <li><strong>Dot Product:</strong> \(\vec{a} · \vec{b} = a₁b₁ + a₂b₂ + a₃b₃\) → gives a scalar</li>
                <li><strong>Cross Product:</strong> \(\vec{a} × \vec{b}\) → gives a vector perpendicular to both</li>
            </ul>

            <h3>Coordinate Geometry Basics</h3>
            <p>Coordinate Geometry connects algebra with geometry, using points, lines, and planes in space.</p>
            <ul>
                <li><strong>Point:</strong> Location in 2D (x, y) or 3D (x, y, z)</li>
                <li><strong>Distance Formula:</strong> Distance between P(x₁,y₁) and Q(x₂,y₂) = \(\sqrt{(x₂-x₁)² + (y₂-y₁)²}\)</li>
                <li><strong>Midpoint Formula:</strong> Midpoint of PQ = \(\left(\frac{x₁+x₂}{2}, \frac{y₁+y₂}{2}\right)\)</li>
                <li><strong>Slope of a line:</strong> m = \(\frac{y₂-y₁}{x₂-x₁}\)</li>
                <li><strong>Equation of a line:</strong> y - y₁ = m(x - x₁)</li>
            </ul>

            <h3>Worked Examples</h3>
            <ul>
                <li>Vector addition: \(\vec{a} = (3,2), \vec{b} = (1,4)\) → \(\vec{a} + \vec{b} = (4,6)\)</li>
                <li>Dot product: \(\vec{a} = (2,3), \vec{b} = (4,1)\) → \(\vec{a}·\vec{b} = 2*4 + 3*1 = 11\)</li>
                <li>Distance between P(1,2) and Q(4,6): \(\sqrt{(4-1)² + (6-2)²} = \sqrt{9+16} = 5\)</li>
                <li>Midpoint between P(2,3) and Q(6,7): \(\left(\frac{2+6}{2}, \frac{3+7}{2}\right) = (4,5)\)</li>
                <li>Equation of line through P(1,2) with slope 3: y-2 = 3(x-1) → y = 3x -1</li>
            </ul>

            <h3>Applications</h3>
            <ul>
                <li>Physics: Representing forces, velocities, and accelerations as vectors</li>
                <li>Engineering: Navigation, robotics, structural analysis</li>
                <li>Computer Graphics: Movement, rotation, 3D modeling</li>
                <li>Geography: Mapping coordinates, GPS, surveying</li>
                <li>Astronomy: Tracking positions and trajectories of stars and planets</li>
            </ul>

            <h3>Mind-Blowing Fact</h3>
            <p>Vectors are everywhere! The force you feel pushing a swing, the direction of your phone’s GPS signal, even the path of a thrown football—all can be represented as vectors. They turn complex 3D reality into manageable math. 🌍🏈📡</p>

            <h3>Closing Thought</h3>
            <p>Vectors and coordinate geometry are the rulers and compasses of the mathematical universe. They let you measure, navigate, and visualize space in 2D and 3D. Master them, and you hold the key to understanding motion, forces, and positions—not just on paper, but in the world around you. So next time you throw a ball or pilot a drone, thank vectors for making sense of the journey! 🏀🚁</p>
        `

    },
    {
        id: "logic",
        title: "Mathematics - Mathematical Reasoning and Logic",
        content: `
            <p>Imagine being a detective in a world of numbers and statements, where every clue is a hint and every deduction matters. 🕵️‍♂️🔎 Welcome to <strong>Mathematical Reasoning and Logic</strong>—the toolkit for sharp thinking, problem-solving, and seeing patterns where others see chaos!</p>

            <h3>What is Mathematical Reasoning?</h3>
            <p><strong>Mathematical reasoning</strong> is the ability to analyze situations, recognize patterns, and make logical conclusions based on facts. It’s the “why” behind every calculation.</p>
            <ul>
                <li>Example: If all roses are flowers, and some flowers fade quickly, can we conclude that some roses fade quickly? → Yes, using reasoning.</li>
                <li>It helps in forming proofs, solving puzzles, and verifying statements.</li>
            </ul>

            <h3>What is Logic?</h3>
            <p><strong>Logic</strong> studies <strong>correct reasoning</strong>. In mathematics, it helps determine if statements are true, false, or conditional.</p>
            <ul>
                <li><strong>Proposition:</strong> A statement that is either true or false, but not both.  
                    Example: “2+2=4” → True; “The moon is made of cheese” → False</li>
                <li><strong>Logical Connectives:</strong> Combine statements:  
                    <ul>
                        <li>AND (∧): True if both statements are true</li>
                        <li>OR (∨): True if at least one statement is true</li>
                        <li>NOT (¬): Negates a statement</li>
                        <li>IMPLIES (→): p → q is true except when p is true and q is false</li>
                    </ul>
                </li>
            </ul>

            <h3>Types of Reasoning</h3>
            <ul>
                <li><strong>Inductive Reasoning:</strong> Observing patterns and forming a general rule.  
                    Example: 2, 4, 6, 8… → all even numbers → conjecture: next number is 10</li>
                <li><strong>Deductive Reasoning:</strong> Applying general rules to reach a specific conclusion.  
                    Example: All men are mortal. Socrates is a man → Socrates is mortal.</li>
            </ul>

            <h3>Truth Tables</h3>
            <p>Truth tables help visualize logical statements:</p>
            <table border="1" cellpadding="5" style="border-collapse:collapse;">
                <tr><th>P</th><th>Q</th><th>P ∧ Q</th><th>P ∨ Q</th><th>¬P</th></tr>
                <tr><td>T</td><td>T</td><td>T</td><td>T</td><td>F</td></tr>
                <tr><td>T</td><td>F</td><td>F</td><td>T</td><td>F</td></tr>
                <tr><td>F</td><td>T</td><td>F</td><td>T</td><td>T</td></tr>
                <tr><td>F</td><td>F</td><td>F</td><td>F</td><td>T</td></tr>
            </table>

            <h3>Worked Examples</h3>
            <ul>
                <li><strong>Inductive:</strong> Sequence: 3, 6, 12, 24 → pattern: multiply by 2 → next term = 48</li>
                <li><strong>Deductive:</strong> All birds have feathers. A sparrow is a bird → a sparrow has feathers.</li>
                <li><strong>Logical Statement:</strong> If it rains (P), then I will carry an umbrella (Q). It rains → I carry an umbrella → statement true.</li>
            </ul>

            <h3>Applications</h3>
            <ul>
                <li>Computer Science: Algorithms, programming logic, AI decision-making</li>
                <li>Mathematics: Proofs, problem-solving, theorem verification</li>
                <li>Everyday Life: Making decisions, reasoning through situations, spotting inconsistencies</li>
                <li>Puzzles and Games: Sudoku, chess strategies, brain teasers</li>
            </ul>

            <h3>Mind-Blowing Fact</h3>
            <p>Logic forms the backbone of computers and AI. Every program, every app, every calculation is powered by logical reasoning—tiny TRUE/FALSE switches deciding the flow of your digital world. 💻🤯</p>

            <h3>Closing Thought</h3>
            <p>Mathematical reasoning and logic train your brain to think clearly, spot patterns, and solve problems like a detective. Master them, and you can decode puzzles, verify statements, and even write algorithms that make machines “think.” The next time you solve a tricky problem, remember: you’re not just doing math—you’re flexing your inner Sherlock Holmes! 🕵️‍♂️🧠</p>
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
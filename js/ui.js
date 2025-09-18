document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("lessonSearch");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const filter = this.value.toLowerCase();
            const cards = document.querySelectorAll(".lesson-card");

            cards.forEach(card => {
                const title = card.querySelector("h3").textContent.toLowerCase();
                const desc = card.querySelector("p").textContent.toLowerCase();

                if (title.includes(filter) || desc.includes(filter)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});
// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save preference to localStorage
    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

// Apply saved preference on load
document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("darkMode") === "enabled"){
        document.body.classList.add("dark-mode");
    }
});

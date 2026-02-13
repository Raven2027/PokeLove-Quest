const questions = [
    { q: "1. Who is Ash’s partner Pokémon?", a: "pikachu" },
    { q: "2. What type is Giratina?", a: "ghost" },
    { q: "3. What type is Darkrai?", a: "dark" },
    { q: "4. What region is Giratina from?", a: "sinnoh" },
    { q: "5. What device stores Pokémon data?", a: "pokedex" },
    { q: "6. What type is Pikachu?", a: "electric" },
    { q: "7. What type is Charmander?", a: "fire" },
    { q: "8. What type is Squirtle?", a: "water" },
    { q: "9. Who leads Team Rocket?", a: "giovanni" },
    { q: "10. What legendary controls time?", a: "dialga" },
    { q: "11. What legendary controls space?", a: "palkia" },
    { q: "12. What is the red capture ball called?", a: "pokeball" },
    { q: "13. Who says 'I choose you'?", a: "ash" },
    { q: "14. What Pokémon sings people to sleep?", a: "jigglypuff" },
    { q: "15. Who owns your heart? 💖", a: "raven" } // change if needed
];

const quizDiv = document.getElementById("quiz");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

questions.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `
        <p>${item.q}</p>
        <input type="text" id="q${index}" oninput="updateProgress()">
    `;
    quizDiv.appendChild(div);
});

function updateProgress() {
    let correct = 0;

    questions.forEach((item, index) => {
        let value = document.getElementById(`q${index}`).value.toLowerCase().trim();
        if (value === item.a) correct++;
    });

    let percent = (correct / questions.length) * 100;
    progressBar.style.width = percent + "%";
    progressText.innerText = `${correct} / ${questions.length} Completed 💕`;
}

function checkAnswers() {
    let correct = 0;

    questions.forEach((item, index) => {
        let value = document.getElementById(`q${index}`).value.toLowerCase().trim();
        if (value === item.a) correct++;
    });

    if (correct === questions.length) {

        document.querySelector(".game-container").style.display = "none";
        document.getElementById("loveLetter").style.display = "block";
        document.getElementById("bgMusic").play();

        confetti({
            particleCount: 250,
            spread: 140,
            origin: { y: 0.6 }
        });

    } else {
        document.getElementById("error").innerText =
            "Almost there trainer! 💖";
    }
}

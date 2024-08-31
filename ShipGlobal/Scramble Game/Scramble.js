const words = [
    { word: "javascript", scrambled: "scriptjav" },
    { word: "html", scrambled: "mlht" },
    { word: "css", scrambled: "scs" },
    { word: "react", scrambled: "tearc" },
    { word: "node", scrambled: "oden" }
];

let currentWord = {};
let attempts = 0;

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    document.getElementById('scrambled-word').innerText = currentWord.scrambled;
    document.getElementById('feedback').innerText = '';
    document.getElementById('user-input').value = '';
    document.getElementById('attempts').innerText = 'Attempts: 0';
    attempts = 0;
    document.getElementById('new-word').style.display = 'none';
}

document.getElementById('submit-guess').addEventListener('click', () => {
    const userGuess = document.getElementById('user-input').value.trim();
    attempts++;
    document.getElementById('attempts').innerText = `Attempts: ${attempts}`;

    if (userGuess.toLowerCase() === currentWord.word) {
        document.getElementById('feedback').innerText = "Correct! Well done!";
        document.getElementById('new-word').style.display = 'inline-block';
    } else {
        document.getElementById('feedback').innerText = "Incorrect guess. Try again!";
    }
});

document.getElementById('new-word').addEventListener('click', getRandomWord);


getRandomWord();

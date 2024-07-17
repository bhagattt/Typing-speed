const sentences = [
    "Winking cow is love",
    "I used to sell furniture for a living. The trouble was, it was my own ",
    
    "I put the pro in procrastinate",
    "Virar Fast"
    
];

let startTime, endTime;
let button = document.getElementById('start-btn');

function handleclick() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const sentence = sentences[randomIndex];
    document.getElementById('sentence').innerText = sentence;
    document.getElementById('input').value = ''; 
    document.getElementById('input').disabled = false;
    document.getElementById('input').focus();
    document.getElementById('result').innerText = '';

    startTime = new Date().getTime();
}

button.addEventListener('click', handleclick);

function handleInput() {
    let inputText = document.getElementById('input').value;
    let sentenceText = document.getElementById('sentence').innerText;

    if (inputText === sentenceText) {
        endTime = new Date().getTime();

        let difTime = (endTime - startTime) / 1000;
        let wordPM = (sentenceText.split(' ').length / difTime) * 60;
        document.getElementById('result').innerText = `Your typing speed is ${wordPM.toFixed(2)} WPM.`;

        document.getElementById('input').disabled = true;
    }
}

let input = document.getElementById('input');
input.addEventListener('input', handleInput);

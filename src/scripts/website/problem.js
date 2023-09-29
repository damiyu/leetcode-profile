import * as Util from './utilities.js';

init();

async function init() {
    const problems = await Util.getJSON('../database/problems.json');
    const problemNum = localStorage.getItem('problem-num');

    homePage();
    copyGmail();
    searchCall(problems);

    // Stops problem display if problem can't be found.
    if (problemNum == null) {
        buildContainer(false);
    } else {
        const problemIdx = Util.problemSearch(problems, problemNum);
        const problem = problems[problemIdx];

        buildContainer(true);
        displayImage(problem);
        displayProblemStats(problem);
        fileTextDisplay(problem);
    }
}

function homePage() {
    const titleDivRef = document.getElementById('title-div');
    
    titleDivRef.addEventListener('click', function() {
        window.location = './index.html';
    });
}

function copyGmail() {
    const link = document.getElementById('gmail-link');

    link.addEventListener('click', function() {
        navigator.clipboard.writeText(link.textContent);
        alert("Gmail Copied to Clipboard");
    });
}

function searchCall(problems) {
    const searchRef = document.getElementById('search-button');
    const inputRef = document.getElementById('search-input');

    searchRef.addEventListener('click', function () {
        let problemNum = inputRef.value;

        // If problem exists, set the search card to that problem idx.
        if (Util.problemSearch(problems, problemNum) != -1) {
            localStorage.setItem('problem-num', problemNum);
            window.location = './problem.html';
        } else {
            alert("Sorry, but your requested search isn't in the database/incomplete. Try searching for another problem number.");
        }
    });

    inputRef.addEventListener("keypress", function(press) {
        if (press.key === "Enter") searchRef.click();
    });
}

function buildContainer(bool) {
    const problemContainerRef = document.getElementById('problem-container');

    // Display problem only if it exists.
    if (bool) {
        problemContainerRef.innerHTML += `<div id="problem-div">
            <p id="problem-title">Problem: #<span id="number">N/A</span></p>
            <hr id="problem-bar">
            <p id="type">N/A</p>
            <p class="props">Date: <span id="date">MMM DD, YYYY</span>
            <p class="props">Language: <span id="lang">N/A</span></p>
            <p class="props">Runtime: <span id="time">0.00</span></p>
            <p class="props">Memory: <span id="memory">0.00</span></p>
            <p class="props">Received Help: <span id="help">Null</span></p>
        </div>
        <img id="problem-image" src="../media/images/misc/blank.png" height="450px">`

        document.getElementById('code-box').style.border = "2px solid navy";
    } else {
        problemContainerRef.innerHTML = `<p id="problem-null">Please return to the home page and select a problem or search a problem!</p>`
        document.getElementById('problem-null').addEventListener('click', function() {
            window.location = './index.html';
        });
    }
}

function displayImage(problem) {
    const problemImageRef = document.getElementById('problem-image');
    let problemDiff = problem.difficulty;

    if (problemDiff == "Easy") problemDiff = "easy";
    else if (problemDiff == "Medium") problemDiff = "med";
    else if (problemDiff == "Hard") problemDiff = "hard";
    
    let path = "../media/images/" + problemDiff + "/" + problemDiff + problem.number + ".png", checkImg = new Image();
    checkImg.onerror = function () {problemImageRef.src = "../media/images/misc/blank.png";}
    checkImg.onload = function () {problemImageRef.src = path;}
    checkImg.src = path;
}

function displayProblemStats(problem) {
    const typeRef = document.getElementById('type');
    const timeRef = document.getElementById('time');
    const memRef = document.getElementById('memory');

    typeRef.textContent = problem.difficulty;
    if (problem.difficulty == "Easy") {
        typeRef.style.color = "lime";
        typeRef.style.backgroundImage = "radial-gradient(black 30%, lime)";
    } else if (problem.difficulty == "Medium") {
        typeRef.style.color = "gold";
        typeRef.style.backgroundImage = "radial-gradient(black 30%, gold)";
    } else if (problem.difficulty == "Hard") {
        typeRef.style.color = "crimson";
        typeRef.style.backgroundImage = "radial-gradient(black 30%, crimson)";
    }

    let time = parseFloat(problem.runtime);
    timeRef.textContent = problem.runtime + "%";
    if (time >= 80) timeRef.style.color = "lime";
    else if (time >= 50) timeRef.style.color = "yellow";
    else if (time > 0) timeRef.style.color = "brown";

    let mem = parseFloat(problem.memory);
    memRef.textContent = problem.memory + "%";
    if (mem >= 80) memRef.style.color = "lime";
    else if (mem >= 50) memRef.style.color = "yellow";
    else if (mem > 0) memRef.style.color = "brown";

    document.getElementById('number').textContent = problem.number;
    document.getElementById('date').textContent = problem.date;
    document.getElementById('lang').textContent = problem.language;
    document.getElementById('help').textContent = problem.help;
}

async function fileTextDisplay(problem) {
    const codeBoxRef = document.getElementById('code-box');
    let diff = "easy", lang = "java";

    // Find the correct file path to the file.
    if (problem.difficulty == "Medium") diff = "med";
    else if (problem.difficulty == "Hard") diff = "hard";
    if (problem.language == "C") lang = "c";
    else if (problem.language == "C++") lang = "cpp";
    else if (problem.language == "Python3") lang = "py";
    else if (problem.language == "JavaScript") lang = "js";

    let fileText = await fetch('../../algorithms/' + diff + '/' + diff + problem.number + '/Solution.' + lang);

    // Some problems will have a different file name.
    if (problem.number == 225) fileText = await fetch('../../algorithms/' + diff + '/' + diff + problem.number + '/MyStack.java');

    // Segement the text by line breaks.
    let lines = (await fileText.text()).split('\n');
    let linesLen = lines.length;

    // Traverse the text lines and insert their content into a new paragraph.
    for (let i = 0; i < linesLen; i++) {
        const newLine = document.createElement('p');

        // Ignore all new lines in the file.
        if (lines[i] != "\r") {
            newLine.setAttribute('class', 'code-line');

            // Add tabs when tabs are detected.
            for (let t = 0; lines[i].charCodeAt(t) == 32; t++) newLine.innerHTML += '&nbsp';
            newLine.textContent += lines[i];
            codeBoxRef.appendChild(newLine);
        }
    }

    // Extra empty paragraph for padding.
    codeBoxRef.appendChild(document.createElement('p'));
}
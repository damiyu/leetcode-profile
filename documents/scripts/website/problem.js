import * as Util from './utilities.js';

init();

async function init() {
    const problems = await Util.getJSON('../database/problems.json');
    const problemNum = localStorage.getItem('problemNum');

    homePage();
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
        fileTextDisplay(problem.difficulty, problem.number);
    }
}

function homePage() {
    const titleDivRef = document.getElementById('titleDiv');
    
    titleDivRef.addEventListener('click', function() {
        window.location = './index.html';
    });
}

function searchCall(problems) {
    const searchRef = document.getElementById('submitButton');
    const inputRef = document.getElementById('searchInput');

    searchRef.addEventListener('click', function () {
        let problemNum = inputRef.value;

        // If problem exists, set the search card to that problem idx.
        if (Util.problemSearch(problems, problemNum) != -1) {
            localStorage.setItem('problemNum', problemNum);
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
    const problemContainerRef = document.getElementById('problemContainer');

    // Display problem only if it exists.
    if (bool) {
        problemContainerRef.innerHTML += `<div id="problemDiv">
            <p id="problemTitle">Problem: #<span id="number">N/A</span></p>
            <hr id="problemBar">
            <p id="type">N/A</p>
            <p class="props">Date: <span id="date">MMM DD, YYYY</span>
            <p class="props">Language: <span id="lang">N/A</span></p>
            <p class="props">Runtime: <span id="time">0.00</span></p>
            <p class="props">Memory: <span id="memory">0.00</span></p>
            <p class="props">Received Help: <span id="help">Null</span></p>
        </div>
        <img id="problemImage" src="../images/misc/blank.png" height="450px">`

        document.getElementById('codeBox').style.border = "2px solid navy";
    } else {
        problemContainerRef.innerHTML = `<p id="problemNull">Please return to the home page and select a problem or search a problem!</p>`
        document.getElementById('problemNull').addEventListener('click', function() {
            window.location = './index.html';
        });
    }
}

function displayImage(problem) {
    const problemImageRef = document.getElementById('problemImage');
    let problemDiff = problem.difficulty;

    if (problemDiff == "Easy") problemDiff = "easy";
    else if (problemDiff == "Medium") problemDiff = "med";
    else if (problemDiff == "Hard") problemDiff = "hard";
    
    problemImageRef.src = "../images/" + problemDiff + "/" + problemDiff + problem.number + ".png";
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

async function fileTextDisplay(problemDiff, problemNumber) {
    const codeBoxRef = document.getElementById('codeBox');

    // Find the correct file path to the file.
    if (problemDiff == "Easy") problemDiff = "easy";
    else if (problemDiff == "Medium") problemDiff = "med";
    else if (problemDiff == "Hard") problemDiff = "hard";
    let fileText = await fetch('../../solutions/' + problemDiff + '/' + problemDiff + problemNumber + '/Solution.java');

    // Some problems will have a different file name.
    if (problemNumber == 225) fileText = await fetch('../../solutions/' + problemDiff + '/' + problemDiff + problemNumber + '/MyStack.java');

    // Segement the text by line breaks.
    let lines = (await fileText.text()).split('\n');
    let linesLen = lines.length;

    // Traverse the text lines and insert their content into a new paragraph.
    for (let i = 0; i < linesLen; i++) {
        const newLine = document.createElement('p');

        // Ignore all new lines in the file.
        if (lines[i] != "\r") {
            newLine.setAttribute('class', 'codeLine');

            // Add tabs when tabs are detected.
            for (let t = 0; lines[i].charCodeAt(t) == 32; t++) newLine.innerHTML += '&nbsp';
            newLine.textContent += lines[i];
            codeBoxRef.appendChild(newLine);
        }
    }

    // Extra empty paragraph for padding.
    codeBoxRef.appendChild(document.createElement('p'));
}
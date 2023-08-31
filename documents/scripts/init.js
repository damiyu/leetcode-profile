init();

async function init() {
    var n = [0, false, 0, false];
    setInterval(gradientBackground, 50, n);
    problemSetup();

    const submitRef = document.getElementById('submit');
    const searchRef = document.getElementById('userInput');

    submitRef.addEventListener("click", function() {
        const input = searchRef.value;
        console.log(input);
    });

    searchRef.addEventListener("click", function() {
        searchRef.textContent = "";
    });
}

async function problemSetup() {
    const footerRef = document.querySelector('footer');
    const problems = await getJSON("./percentile.json");
    let problemCnt = problems.length, problemIdx = 0;

    while (problemIdx < problemCnt) {
        const solutions = document.createElement('div');
        solutions.setAttribute('class', "solutions");

        for (let i = 0; i < 5 && problemIdx < problemCnt; i++, problemIdx++) {
            solutions.innerHTML = solutions.innerHTML + `<div class="problems"><div class="solutionsText">
                <p class="solutionsTitle">Problem: #` + problems[problemIdx].problem + `</p>
                <hr class="solutionsBar">
                <p class="type">` + problems[problemIdx].type + `</p>
                <p>Runtime: <span class="time">` + (problems[problemIdx].runtime).toFixed(2) + `</span></p>
                <p>Memory: <span class="memory">` + (problems[problemIdx].memory).toFixed(2) + `</span></p>
            </div></div>`
        }

        footerRef.before(solutions);
    }

    const typeRef = document.getElementsByClassName("type");
    const timeRef = document.getElementsByClassName("time");
    const memoryRef = document.getElementsByClassName("memory");
    for (let i = 0; i < problemCnt; i++) {
        if (typeRef[i].textContent == "Medium") {
            typeRef[i].style.color = "gold";
            typeRef[i].style.backgroundImage = "radial-gradient(black 30%,gold)";
        } else if (typeRef[i].textContent == "Hard") {
            typeRef[i].style.color = "crimson";
            typeRef[i].style.backgroundImage = "radial-gradient(black 30%,crimson)";
        }

        if (parseInt(timeRef[i].textContent) >= 80) {
            timeRef[i].style.color = "green";
        } else if (parseInt(timeRef[i].textContent) >= 50) {
            timeRef[i].style.color = "yellow";
        }
        timeRef[i].textContent += "%";

        if (parseInt(memoryRef[i].textContent) >= 80) {
            memoryRef[i].style.color = "green";
        } else if (parseInt(memoryRef[i].textContent) >= 50) {
            memoryRef[i].style.color = "yellow";
        }
        memoryRef[i].textContent += "%";
    }
}

function gradientBackground(n) {
    if (!n[1] && n[0] < 50) {
        n[0]++;
    } else if (n[0]-- > 25) {
        n[1] = true;
    } else {
        n[1] = false;
    }

    if (!n[3] && n[2] < 255) {
        n[2] += 5;
    } else if (n[2] > 55) {
        n[2] -= 5;
        n[3] = true;
    } else {
        n[3] = false;
    }
    
    document.body.style.backgroundImage = "radial-gradient(circle, skyblue, violet " + n[0] + "%, brown, rgb(0, 0, " + n[2] + ", 80%))";
}

export async function getJSON(url) {
	const { default: json } = await import(url, { assert: { type: 'json' } });
	return json;
}
import * as Util from './utilities.js';

init();

async function init() {
    // sphereSize = n[0]; is the size of the pulsing sphere, min: 5%, and max: 50%.
    // sphereIsDecreasing = n[1]; is used to track the direction of the sphere (increaing or decreasing).
    // blueValue = n[2]; is the "b" value of the sphere background color, min: 55, and max: 255.
    // blueGettingDarker = n[3]; is used to track when the background blue is getting lighter of darker.
    // statStripShift = n[4]; is the displacement of the border strips from the corners, min: 0, and max:45.
    // statIsReversing = n[5]; is used to track when the strips are returning to the corners.
    // pieChartRotate = n[6]; is the angle the strips are around the pie chart, min: 0deg; and max: 360deg;
    // pieIsReversing = n[7]; is used to track when the pie chart stripes are reversing.
    let n = [5, false, 55, false, 0, false, 0, false];
    setInterval(gradientBackgrounds, 25, n);
    homePage();
    copyGmail();

    let searchProblem = [localStorage.getItem('problem-num')];
    const problems = await Util.getJSON('../scripts/database/problems.json');
    const problemCnts = statsMaker(problems);
    pieChartSetUp(problemCnts);

    let pageNum = [1], filter = ["All", "All", "All", "All"];
    buildProblemDivs();
    hideProblemDivs();
    problemPopulate(problems, problems, searchProblem, pageNum);
    gradeProblems();
    pageTransfer();
    searchRecommend(problems);
    searchCall(problems, searchProblem, pageNum);
    menuShift(problems, filter, searchProblem, pageNum);
    filterSearch(problems, filter, searchProblem, pageNum);
}

function gradientBackgrounds(n) {
    const problemStatBorderRef = document.getElementById('problem-stat-border');
    const pieChartBorderRef = document.getElementById('pie-chart-border');

    document.body.style.backgroundImage = "radial-gradient(circle, skyblue, violet " + n[0] +
                                                "%, aquamarine, rgb(0, 0, " + n[2] + ", 80%))";

    let botVal = n[4] + 10, topVal = 100 - n[4] - 10;
    if (n[5]) {
        problemStatBorderRef.style.backgroundImage = "linear-gradient(45deg, navy 0% " + n[4] + "%, aquamarine " + n[4] + "% " + botVal +
                                                        "%, navy " + botVal + "% " + topVal + "%, aquamarine " + topVal +
                                                        "% " + (100 - n[4]) + "%, navy " + (100 - n[4]) + "% 100%)";
    } else {
        problemStatBorderRef.style.backgroundImage = "linear-gradient(45deg, navy 0% " + n[4] + "%, gold " + n[4] + "% " + botVal +
                                                        "%, navy " + botVal + "% " + topVal + "%, gold " + topVal +
                                                        "% " + (100 - n[4]) + "%, navy " + (100 - n[4]) + "% 100%)";
    }

    if (n[7]) {
        pieChartBorderRef.style.backgroundImage = "linear-gradient(45deg, navy 0% 20%, aquamarine 20% 37.5%, " +
                                                                            "navy 37.5% 62.5%, aquamarine 62.5% 80%, navy 80% 100%)";
    } else {
        pieChartBorderRef.style.backgroundImage = "linear-gradient(45deg, navy 0% 20%, gold 20% 37.5%, " +
                                                                            "navy 37.5% 62.5%, gold 62.5% 80%, navy 80% 100%)";
    }
    const pieChartRef = document.getElementById('pie-chart');
    pieChartRef.style.transform = "rotate(-" + n[6] + "deg)";
    pieChartBorderRef.style.transform = "rotate(" + n[6] + "deg)";

    // Updated all background/border values.
    if (n[1] || (n[0] += 0.5) > 50) n[1] = (n[0] -= 0.5) != 5;
    if (n[3] || (n[2] += 5) > 255) n[3] = (n[2] -= 5) != 55;
    if (n[5] || (n[4] += 0.5) > 40) n[5] = (n[4] -= 0.5) != 0;
    if (n[7] || (n[6] += 0.5) > 360) n[7] = (n[6] -= 0.5) != 0;
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

function statsMaker(problems) {
    const statsInputRef = document.getElementsByClassName('stats-input');
    const meanRunRef = document.getElementById('mean-runtime');
    const meanMemRef = document.getElementById('mean-memory');
    const langList = ["Java", "JavaScript", "Python3", "C", "C++"];
    let totalProblemCnt = problems.length, averageRun = 0.0, averageMem = 0.0;
    let problemStatsCnts = [problems.length, 0, 0, problems.length, 0, 0, 0, 0, 0];

    for (let i = 0; i < totalProblemCnt; i++) {
        if (problems[i].difficulty == "Medium") {
            problemStatsCnts[0]--;
            problemStatsCnts[1]++;
        } else if (problems[i].difficulty == "Hard") {
            problemStatsCnts[0]--;
            problemStatsCnts[2]++;
        }

        // Increment the correct language element.
        for (let j = 0; j < 5; j++) if (problems[i].language == langList[j]) problemStatsCnts[j + 4]++;
        averageRun += parseFloat(problems[i].runtime);
        averageMem += parseFloat(problems[i].memory);
    }
    
    // Inserting the mean runtime and memory usage through the document IDs.
    meanRunRef.textContent += (averageRun / totalProblemCnt).toFixed(2) + "%";
    meanMemRef.textContent += (averageMem / totalProblemCnt).toFixed(2) + "%";

    for (let i = 0; i < 9; i++) statsInputRef[i].textContent = problemStatsCnts[i];
    return problemStatsCnts;
}

function pieChartSetUp(problemCnts) {
    const pieRef = document.getElementById('pie-chart');
    const statsInputRef = document.getElementsByClassName('stats-input');
    let easySection = (problemCnts[0] / problemCnts[3]) * 100, medSection = (problemCnts[1] / problemCnts[3]) * 100 + easySection;
    let n = problemCnts.length;

    easySection = easySection.toFixed(0);
    medSection = medSection.toFixed(0);

    // Calculate and insert the percentages of each type into the stat block.
    statsInputRef[0].textContent += " (" + easySection + "%)";
    statsInputRef[1].textContent += " (" + (medSection - easySection) + "%)";
    statsInputRef[2].textContent += " (" + (100 - medSection) + "%)";
    for (let i = 4; i < n; i++) statsInputRef[i].textContent += " (" + (problemCnts[i] / problemCnts[3] * 100).toFixed(0) + "%)";

    pieRef.style.backgroundImage = "conic-gradient(lime 0% " + easySection + "%, yellow " + easySection +
                                                        "% " + medSection + "%, crimson " + medSection + "% 100%)";
}

function buildProblemDivs() {
    const containerRef = document.getElementById('solutions-container');

    for (let i = 0; i < 3; i++) {
        const solutions = document.createElement('div');
        solutions.setAttribute('class', 'solutions');

        if (i == 1) solutions.innerHTML += `<div id="left-page-button-border" style="visibility: hidden">
                                                <button id="left-page-button">&langle;&langle;</button>
                                            </div>`;
        for (let j = 0; j < 5; j++) {
            solutions.innerHTML = solutions.innerHTML + `<div class="problem-div">
                <p class="problem-title">Problem: #<span class="number">N/A</span></p>
                <hr class="problem-bar">
                <p class="type">N/A</p>
                <p class="props">Date: <span class="date">MMM DD, YYYY</span></p>
                <p class="props">Language: <span class="lang">N/A</span></p>
                <p class="props">Runtime: <span class="time">0.00</span></p>
                <p class="props">Memory: <span class="memory">0.00</span></p>
                <p class="props">Received Help: <span class="help">N/A</span></p>
            </div>`
        }
        if (i == 1) solutions.innerHTML += `<div id="right-page-button-border">
                                                <button id="right-page-button">&rangle;&rangle;</button>
                                            </div>`;

        containerRef.appendChild(solutions);
    }
}

function hideProblemDivs() {
    const problemDivs = document.getElementsByClassName('problem-div');
    let len = problemDivs.length;

    for (let i = 1; i < len; i++) problemDivs[i].style.visibility = "hidden";
}

function problemPopulate(problems, appliedFilter, searchProblem, pageNum) {
    const problemDivs = document.getElementsByClassName('problem-div');
    const problemNumber = document.getElementsByClassName('number');
    const problemType = document.getElementsByClassName('type');
    const problemDate = document.getElementsByClassName('date');
    const problemLang = document.getElementsByClassName('lang');
    const problemTime = document.getElementsByClassName('time');
    const problemMem = document.getElementsByClassName('memory');
    const problemHelp = document.getElementsByClassName('help');
    let problemCnt = appliedFilter.length, problemIdx = 15 * pageNum[0] - 15, searchIdx = Util.problemSearch(problems, searchProblem[0]);

    // First problem card is the previously searched problem or the default problem.
    if (searchIdx != -1) {
        problemNumber[0].textContent = problems[searchIdx].number;
        problemType[0].textContent = problems[searchIdx].difficulty;
        problemDate[0].textContent = problems[searchIdx].date;
        problemLang[0].textContent = problems[searchIdx].language;
        problemTime[0].textContent = problems[searchIdx].runtime;
        problemMem[0].textContent = problems[searchIdx].memory;
        problemHelp[0].textContent = problems[searchIdx].help;
    } else {
        problemNumber[0].textContent = "N/A";
        problemType[0].textContent = "N/A";
        problemDate[0].textContent = "MMM DD, YYYY";
        problemLang[0].textContent = "N/A";
        problemTime[0].textContent = "0.00";
        problemMem[0].textContent = "0.00";
        problemHelp[0].textContent = "N/A";
    }

    // Display the page number and problem count.
    document.getElementById('total-problem-count').textContent = problemCnt;
    document.getElementById('current-page-number').textContent = problemCnt > 0 ? pageNum[0] : 0;
    document.getElementById('total-page-number').textContent = Math.ceil(problemCnt / 15);

    // Skip the first problem card because of the search card.
    for (let i = 1; i < 16 && problemIdx < problemCnt; i++) {
        problemDivs[i].style.visibility = "visible";
        problemNumber[i].textContent = appliedFilter[problemIdx].number;
        problemType[i].textContent = appliedFilter[problemIdx].difficulty;
        problemDate[i].textContent = appliedFilter[problemIdx].date;
        problemLang[i].textContent = appliedFilter[problemIdx].language;
        problemTime[i].textContent = appliedFilter[problemIdx].runtime;
        problemMem[i].textContent = appliedFilter[problemIdx].memory;
        problemHelp[i].textContent = appliedFilter[problemIdx++].help;
    }
}

function gradeProblems() {
    const typeRef = document.getElementsByClassName('type');
    const timeRef = document.getElementsByClassName('time');
    const memoryRef = document.getElementsByClassName('memory');

    // One extra problem cnt to include the main problem from search.
    for (let i = 0; i < 16; i++) {
        if (typeRef[i].textContent == "Easy") {
            typeRef[i].style.color = "lime";
            typeRef[i].style.backgroundImage = "radial-gradient(black 30%, lime)";            
        } else if (typeRef[i].textContent == "Medium") {
            typeRef[i].style.color = "gold";
            typeRef[i].style.backgroundImage = "radial-gradient(black 30%, gold)";
        } else if (typeRef[i].textContent == "Hard") {
            typeRef[i].style.color = "crimson";
            typeRef[i].style.backgroundImage = "radial-gradient(black 30%, crimson)";
        }

        if (parseInt(timeRef[i].textContent) >= 80) {
            timeRef[i].style.color = "lime";
        } else if (parseInt(timeRef[i].textContent) >= 50) {
            timeRef[i].style.color = "yellow";
        } else if (parseInt(timeRef[i].textContent) > 0) {
            timeRef[i].style.color = "brown";
        }
        timeRef[i].textContent += "%";

        if (parseInt(memoryRef[i].textContent) >= 80) {
            memoryRef[i].style.color = "lime";
        } else if (parseInt(memoryRef[i].textContent) >= 50) {
            memoryRef[i].style.color = "yellow";
        } else if (parseInt(memoryRef[i].textContent) > 0) {
            memoryRef[i].style.color = "brown";
        }
        memoryRef[i].textContent += "%";
    }
}

function pageTransfer() {
    const problemDiv = document.getElementsByClassName('problem-div');
    let cnt = problemDiv.length;

    for (let i = 0; i < cnt; i++) {
        if (problemDiv[i].childElementCount > 0) {
            problemDiv[i].addEventListener('mouseenter', function() {
                const problemAudio = new Audio('../media/audios/hover-over.mp3');
                problemAudio.volume = 0.2;
                problemAudio.play().catch(error => {});
            });

            // Adds listener to all problem cards and redirects to the problem page with the chosen problem number.
            problemDiv[i].addEventListener('click', function() {
                const numberRef = document.getElementsByClassName('number');

                if (numberRef[i].textContent != "N/A") {
                    localStorage.setItem("problem-num", parseInt(numberRef[i].textContent));
                    window.location='./problem.html';
                } else {
                    alert('Please search a problem first.');
                }
            });
        }
    }
}

function searchRecommend(problems) {
    const problemNumsRef = document.getElementById('problem-numbers');
    let cnt = problems.length;

    // Add all problem numbers to datalist and let each input autocomplete.
    for (let i = 0; i < cnt; i++) {
        let newOption = document.createElement('option');
        newOption.textContent = problems[i].number;
        problemNumsRef.appendChild(newOption);
    }
}

function searchCall(problems, searchProblem, pageNum) {
    const searchRef = document.getElementById('search-button');
    const inputRef = document.getElementById('search-input');
    const searchAudio = new Audio('../media/audios/search-enter.mp3');
    searchAudio.volume = 0.5;

    searchRef.addEventListener('click', function() {
        let problemNum = inputRef.value;
        searchAudio.currentTime = 0;
        searchAudio.play();

        // If problem exists, set the search card to that problem idx.
        if (Util.problemSearch(problems, problemNum) != -1) {
            // Store the idx so we know which problem to display.
            localStorage.setItem('problem-num', problemNum);
            searchProblem[0] = problemNum;
            problemPopulate(problems, problems, searchProblem, pageNum);
            gradeProblems();

            // Bring the user to the top of the page to view the problem.
            document.documentElement.scrollTop = 0;

            document.getElementsByClassName('problem-div')[0].setAttribute('id', 'problem-div-search');
        } else {
            alert("Sorry, but your requested search isn't in the database/incomplete. Try searching for another problem number.");
        }
    });

    inputRef.addEventListener("keypress", function(press) {
        if (press.key === "Enter") searchRef.click();
    });
}

function menuShift(problems, filter, searchProblem, pageNum) {
    const leftMenuButton = document.getElementById('left-page-button');
    const rightMenuButton = document.getElementById('right-page-button');
    const leftPageButtonBorderRef = document.getElementById('left-page-button-border');
    const rightPageButtonBorderRef = document.getElementById('right-page-button-border');
    const pageFlipAudio = new Audio('../media/audios/page-flip.wav');
    pageFlipAudio.volume = 0.3;

    if (leftMenuButton != null) {
        leftMenuButton.addEventListener('click', function() {
            pageFlipAudio.currentTime = 0;
            pageFlipAudio.play();

            if (pageNum[0] > 1) {
                // Make right menu button visible and hide left menu button when on first page.
                rightPageButtonBorderRef.style.visibility = "visible";
                if (--pageNum[0] == 1) leftPageButtonBorderRef.style.visibility = "hidden";

                // Repopulate the problem cards with the previous problems.
                hideProblemDivs();

                problemPopulate(problems, filterProblems(problems, filter), searchProblem, pageNum);
                gradeProblems();
            }
        });
    }

    if (rightMenuButton != null) {
        rightMenuButton.addEventListener('click', function() {
            let appliedFilter = filterProblems(problems, filter);
            pageFlipAudio.currentTime = 0;
            pageFlipAudio.play();

            if (pageNum[0] < appliedFilter.length / 15) {
                // Make left menu button visible and hide right menu button when on last page.
                leftPageButtonBorderRef.style.visibility = "visible";
                if (++pageNum[0] == Math.ceil(appliedFilter.length / 15)) rightPageButtonBorderRef.style.visibility = "hidden";

                // Repopulate the problem cards with the next problems.
                hideProblemDivs();
                problemPopulate(problems, appliedFilter, searchProblem, pageNum);
                gradeProblems();
            }
        });
    }
}

function filterSearch(problems, filter, searchProblem, pageNum) {
    const difficultyFilterRef = document.getElementById('difficulty-filter');
    const languageFilterRef = document.getElementById('language-filter');
    const percentileFilterRef = document.getElementById('percentile-filter');
    const solutionFilterRef = document.getElementById('solution-filter');
    const filterButtonRef = document.getElementById('filter-button');
    const filterSelectAudio = new Audio('../media/audios/filter-pick.wav'), applyAudio = new Audio('../media/audios/apply-filter.mp4');
    applyAudio.volume = 0.5;

    let filters = [difficultyFilterRef, languageFilterRef, percentileFilterRef, solutionFilterRef];
    let n = filters.length;
    for (let i = 0; i < n; i++) {
        filters[i].addEventListener('click', function() {
            filterSelectAudio.currentTime = 0;
            filterSelectAudio.play();
        });
    }

    filterButtonRef.addEventListener('click', function() {
        applyAudio.currentTime = 0;
        applyAudio.play();

        filter[0] = difficultyFilterRef.value;
        filter[1] = languageFilterRef.value;
        filter[2] = percentileFilterRef.value
        filter[3] = solutionFilterRef.value;

        let appliedFilter = filterProblems(problems, filter);
        pageNum[0] = 1;
        hideProblemDivs();
        problemPopulate(problems, appliedFilter, searchProblem, pageNum);
        gradeProblems();

        document.getElementById('left-page-button-border').style.visibility = "hidden";
        if (appliedFilter.length <= 15) document.getElementById('right-page-button-border').style.visibility = "hidden";
        else document.getElementById('right-page-button-border').style.visibility = "visible";
    });
}

function filterProblems(problems, filter) {
    let appliedFilter = [], sortIdx = 0, len = problems.length;

    for (let i = 0; i < len; i++) {
        if (filter[0] != "All" && problems[i].difficulty != filter[0]) continue;
        if (filter[1] != "All" && problems[i].language != filter[1]) continue;
        if (filter[2] != "All") {
            let percentile = parseFloat(problems[i].runtime) + parseFloat(problems[i].memory);

            if (filter[2] == "Good" && percentile < 180) continue;
            else if (filter[2] == "Neutral" && (percentile <= 100 || percentile >= 180)) continue;
            else if (filter[2] == "Bad" && percentile >= 100) continue;
        }
        if (filter[3] != "All" && problems[i].help != filter[3]) continue;

        appliedFilter[sortIdx++] = problems[i];
    }

    return appliedFilter;
}
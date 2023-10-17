build();

function build() {
    // Get cmd line arguments and count them.
    let argv = process.argv, argc = argv.length;
    var fs = require('fs');
    
    // Only allow valid arguments.
    if (argc == 11 && argv[2] == "add") {
        if (entryChecker(argv[4], argv[5], argv[6], argv[7], argv[8], argv[9], argv[10])) {
            if (!searchNumber(fs, argv[3], argv[4])) {
                // Log a new entry, reorder the database, and check if other components are in sync.
                newEntry(fs, argv[3], argv[4], argv[5], argv[6], argv[7], argv[8], argv[9], argv[10]);
                orderEntries(fs, argv[3]);
                fileImageEntryCheck(fs, argv[3]);
            } else {
                console.log("Fail, duplicate problem number found!");
            }
        }
    } else if (argc == 4 && argv[2] == "sort") {
        orderEntries(fs, argv[3]);
    } else if (argc == 4 && argv[2] == "order") {
        let jsonFile = JSON.parse(fs.readFileSync(argv[3]));
        isAscending(jsonFile);
    } else if (argc = 4 && argv[2] == "exist") {
        fileImageEntryCheck(fs, argv[3]);
    } else {
        console.log("Invalid arguments, try again!");
    }
}

function entryChecker(number, difficulty, language, date, runtime, memory, help) {
    // Check if new entry is a valid problem number in the format X*, X[0] != '0'.
    if (!/^[1-9]\d*/.test(number)) {
        console.log("Fail, \'" + number + "\' is an invalid number argument on new entry!");
        return false;
    }

    // Check if new entry has a valid difficulty.
    if (difficulty != "Easy" && difficulty != "Medium" && difficulty != "Hard") {
        console.log("Fail, \'" + difficulty + "\' is an invalid difficulty argument on new entry!");
        return false;
    }
    
    // Check if new entry has a valid language.
    if (language != "Java" && language != "C" && language != "C++"
        && language != "Python3" && language != "JavaScript") {
        console.log("Fail, \'" + language + "\' is an invalid language argument on new entry!");
        return false;
    }
    
    // Check if new entry has a correct date format.
    const validMon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let dateSplit = date.split(' ');
    if (dateSplit.length != 3 || validMon.indexOf(dateSplit[0]) == -1 || parseInt(dateSplit[1]) < 1
        || parseInt(dateSplit[1]) > 31 || dateSplit[1][dateSplit[1].length - 1] != ',') {
        console.log("Fail, \'" + date + "\' is an invalid date argument on new entry!");
        return false;
    }

    // Check of new entry has a runtime in the format XX.XX or XXX.XX, X[0] != '0'.
    if (!/^[1-9]\d{0,2}\.\d{2}$/.test(runtime)) {
        console.log("Fail, " + runtime + "\' is an invalid runtime argument on new entry!");
        console.log("Runtime must follow the format XX.XX or XXX.XX! X[0] != \'0\'");
        return false;
    }

    // Check of new entry has a memory in the format XX.XX or XXX.XX, X[0] != '0'.
    if (!/^[1-9]\d{0,2}\.\d{2}$/.test(memory)) {
        console.log("Fail, " + memory + "\' is an invalid memory argument on new entry!");
        console.log("Memory must follow the format XX.XX or XXX.XX! X[0] != \'0\'");
        return false;
    }

    // Check if new entry has a valid help argument.
    if (help != "No" && help != "Yes") {
        console.log("Fail, \'" + help + "\' is an invalid help argument on new entry!");
        console.log("The only valid help values are \'No\' and \'Yes\'!");
        return false;
    }

    return true;
}

function searchNumber(fs, filePath, number) {
    let jsonFile = JSON.parse(fs.readFileSync(filePath));
    let len = jsonFile.length, top = 0, mid = len >> 1;

    while (top < mid) {
        if (parseInt(jsonFile[mid].number) < parseInt(number)) {
            top = mid;
            mid = (mid + len) >> 1;
        } else if (parseInt(jsonFile[mid].number) > parseInt(number)) {
            mid = (mid + top) >> 1;
        } else {
            return true;
        }
    }

    return parseInt(jsonFile[mid].number) == parseInt(number);
}

function newEntry(fs, filePath, number, difficulty, lang, date, runtime, memory, help) {
    let jsonFile = JSON.parse(fs.readFileSync(filePath));
    let len = jsonFile.length;

    // Add new entry to the json file.
    jsonFile[len] = {
                        "number": number,
                        "difficulty": difficulty,
                        "date": date,
                        "language": lang,
                        "runtime": runtime,
                        "memory": memory,
                        "help": help
    };
    
    // Append new entry with indentation for readability.
    fs.writeFileSync(filePath, JSON.stringify(jsonFile, null, '\t'));
}

function orderEntries(fs, filePath) {
    let jsonFile = JSON.parse(fs.readFileSync(filePath));
    let len = jsonFile.length;

    for (let i = 0; i < len - 1; i++) {
        if (parseInt(jsonFile[i + 1].number) < parseInt(jsonFile[i].number)) {
            let idx = idxFind(jsonFile, i + 1), old;

            // If the current number is bigger than the found idx, replace the next idx with the current number
            // and shift problems to the right. If the current number is smaller, only shift objects to the right.
            if (parseInt(jsonFile[idx].number) < parseInt(jsonFile[i + 1].number)) {
                old = jsonFile[idx + 1];
                jsonFile[idx + 1] = jsonFile[i + 1];

                for (let j = idx + 2; j <= i + 1; j++) {
                    let temp = jsonFile[j];
                    jsonFile[j] = old;
                    old = temp;
                }
            } else {
                old = jsonFile[idx];
                jsonFile[idx] = jsonFile[i + 1];

                for (let j = idx + 1; j <= i + 1; j++) {
                    let temp = jsonFile[j];
                    jsonFile[j] = old;
                    old = temp;
                }
            }
        }
    }

    if (isAscending(jsonFile)) {
        console.log("Appended object was successful!");
        fs.writeFileSync(filePath, JSON.stringify(jsonFile, null, '\t'));
    } else {
        console.log("Append fail, check 'function orderEntries()'!!!");
    }
}

function idxFind(jsonFile, curIdx) {
    let len = curIdx, top = 0, mid = len >> 1;

    while (top < mid) {
        if (parseInt(jsonFile[mid].number) < parseInt(jsonFile[curIdx].number)) {
            top = mid;
            mid = (mid + len) >> 1;
        } else {
            mid = (mid + top) >> 1;
        }
    }

    return mid;
}

function isAscending(jsonFile) {
    let len = jsonFile.length;

    for (let i = 0; i < len - 1; i++) {
        if (parseInt(jsonFile[i + 1].number) <= parseInt(jsonFile[i].number)) {
            console.log("Not order (num: " + jsonFile[i].number + "), at " + "idx: " + i + " and idx: " + (i + 1));
            return false;
        }
    }

    console.log("In order");
    return true;
}

async function fileImageEntryCheck(fs, filePath) {
    let jsonFile = JSON.parse(fs.readFileSync(filePath));
    let cnt = jsonFile.length;

    for (let i = 0 ; i < cnt; i++) {
        let num = jsonFile[i].number;
        let diff = jsonFile[i].difficulty;

        if (diff == "Easy") diff = "easy";
        else if (diff == "Medium") diff = "med";
        else diff = "hard";

        // Checks if problem directories exist and if their images are in media.
        if (!fs.existsSync('../../../algorithms/' + diff + "/" + diff + num)) {
            console.log("The programming files for problem #" + num + " doesn't exists!");
        }
        if (!fs.existsSync('../../media/images/' + diff + "/" + diff + num + ".png")) {
            console.log("The images for problem #" + num + " doesn't exist!");
        }
    }
}
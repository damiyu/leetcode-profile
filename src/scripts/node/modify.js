build();

function build() {
    // Get cmd line arguments and count them
    let argv = process.argv, argc = argv.length;
    var fs = require('fs');
    
    // Only allow valid arguments
    if (argc == 11 && argv[2] == "add") {
        if (!searchNumber(fs, argv[3], argv[4])) {
            // Log a new entry and reorder the database
            newEntry(fs, argv[3], argv[4], argv[5], argv[6], argv[7], argv[8], argv[9], argv[10]);
            orderEntries(fs, argv[3]);
        } else {
            console.log("Fail, duplicate problem found!");
        }
    } else if (argc == 4 && argv[2] == "sort") {
        orderEntries(fs, argv[3]);
    } else if (argc == 4 && argv[2] == "order") {
        let jsonFile = JSON.parse(fs.readFileSync(argv[3]));
        isAscending(jsonFile);
    } else {
        console.log("Invalid arguments, try again!");
    }
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
        console.log("Appended objest was successful!");
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
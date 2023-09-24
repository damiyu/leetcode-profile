setup();

function setup() {
    let argv = process.argv, argc = argv.length;
    var fs = require('fs');
    
    //for (let i = 0; i < argc; i++) console.log(argv[i]);
    //if (argc == 8) newEntry(fs, argv[2], argv[3], argv[4], argv[5], argv[6], argv[7]);
    allEntriesToStrings(fs);
}

function newEntry(fs, number, difficulty, date, runtime, memory, help) {
    let jsonFile = JSON.parse(fs.readFileSync('./test.json'));
    let len = jsonFile.length;

    // Add new entry to the json file.
    jsonFile[len] = {
                        "number": number,
                        "difficulty": difficulty,
                        "date": date,
                        "runtime": runtime,
                        "memory": memory,
                        "help": help
    };
    
    // Append new entry with indentation for readability.
    fs.writeFileSync('./test.json', JSON.stringify(jsonFile, null, '\t'));
}

function allEntriesToStrings(fs) {
    let jsonFile = JSON.parse(fs.readFileSync('./test.json'));
    let len = jsonFile.length;

    console.log(len);

    fs.writeFileSync('./test.json', JSON.stringify(jsonFile, null, '\t'));
}
/*
 * To import a function, do `import { myFunction } from './utilities.js'`
 * To import all functions, do `import * as Util from './utilities.js';`
 * To call a function, do `Util.myFunction(par1, par2, par2)`
 */

// Here all all the utility functions:
export function problemSearch(problems, num) {
    let len = problems.length, top = 0, mid = (top + len) >> 1;

    while (top < mid) {
        if (parseInt(problems[mid].number) < num) {
            top = mid;
            mid = (mid + len) >> 1;
        } else if (parseInt(problems[mid].number) > num) {
            mid = (mid + top) >> 1;
        } else {
            return mid;
        }
    }

    return parseInt(problems[mid].number) == num ? mid : -1;
}

export async function getJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();

        return data;
    } catch(error) {
        console.error('Error fetching the JSON file:', error);
    }
}
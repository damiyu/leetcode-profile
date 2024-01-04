/*
 * 2610: Convert an Array Into a 2D Array With Conditions
 * Last Updated: Jan 1, 2024
 * Solve Time: 14 min & 51 sec
 */
var findMatrix = function(nums) {
    let twoDim = [];

    for (const val of nums) {
        let found = false;

        for (const arr of twoDim) {
            if (!arr.includes(val)) {
                arr.push(val);
                found = true;
                break;
            }
        }

        if (!found) twoDim[twoDim.length] = [val];
    }
    return twoDim;
}

// My Original Solution
/*
var findMatrix = function(nums) {
    let n = nums.length, cnts = new Array(n).fill(0);
    
    for (let v of nums) {
        cnts[v - 1]++;
    }

    let max = Math.max(...cnts);
    let twoDim = new Array(max);
    for (let i = 0; i < max; i++) twoDim[i] = new Array();

    for (let i = 0; i < n; i++) {
        if (cnts[i] > 0) {
            for (let j = 0; j < cnts[i]; j++) {
                twoDim[j].push(i + 1);
            }
        }
    }

    return twoDim;
}
*/

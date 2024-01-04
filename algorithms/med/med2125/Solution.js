/*
 * 2125: Number of Laser Beams in a Bank
 * Last Updated: Jan 2, 2024
 * Solve Time: 16 min & 57 sec
 */
var numberOfBeams = function(bank) {
    let n = bank.length; m = bank[0].length, totCnt = 0, prev = 0;

    for (let i = 0; i < n; i++) {
        let floor = bank[i], cur = 0;

        for (let j = 0; j < m; j++) if (floor[j] == '1') cur++;
        totCnt += cur * prev;
        prev = cur > 0 ? cur : prev;
    }
    return totCnt;
}
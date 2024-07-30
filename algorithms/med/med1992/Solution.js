/*
 * 1992: Find All Groups of Farmland
 * Last Updated: Apr 20, 2024
 * Solve Time: 12 min & 34 sec
 */
var findFarmland = function(land) {
    let n = land.length, m = land[0].length, corners = new Array;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (land[i][j] == 1) {
                let rowCnt = 0, colCnt = 0;

                while (i + rowCnt < n && land[i + rowCnt][j] == 1) {
                    let idx = 0;

                    while (j + idx < m && land[i + rowCnt][j + idx] == 1) land[i + rowCnt][j + idx++] = 0;
                    colCnt = idx;
                    rowCnt++;
                }

                corners.push([i, j, i + rowCnt - 1, j + colCnt - 1]);
            }
        }
    }

    return corners;
};
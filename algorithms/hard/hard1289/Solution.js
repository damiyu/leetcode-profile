/*
 * 1289: Minimum Falling Path Sum II
 * Last Updated: Apr 26, 2024
 */
var minFallingPathSum = function(grid) {
    const n = grid.length, minMap = new Array(n);
    if (n == 1) return grid[0][0];

    minMap[0] = new Array(...grid[0]);
    for (let i = 1; i < n; i++) minMap[i] = new Array(n);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let min = 20000;

            for (let k = 0; k < n; k++) {
                if (j == k) continue;
                let curMin = grid[i][j] + minMap[i - 1][k];
                min = min < curMin ? min : curMin;
            }

            minMap[i][j] = min;
        }
    }

    return Math.min(...minMap[n - 1]);
};
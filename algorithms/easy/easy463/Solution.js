/*
 * 463: Island Perimeter
 * Last Updated: Apr 17, 2024
 * Solve Time: 5 min & 36 sec
 */
var islandPerimeter = function(grid) {
    let n = grid.length, m = grid[0].length, perm = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] == 1) {
                if (i - 1 < 0 || grid[i - 1][j] == 0) perm++;
                if (i + 1 >= n || grid[i + 1][j] == 0) perm++;
                if (j - 1 < 0 || grid[i][j - 1] == 0) perm++;
                if (j + 1 >= m || grid[i][j + 1] == 0) perm++;
            }
        }
    }

    return perm;
};
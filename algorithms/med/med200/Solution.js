/*
 * 200: Number of Islands
 * Last Updated: Apr 18, 2024
 * Solve Time: 23 min & 46 sec
 */
var numIslands = function(grid) {
    let n = grid.length, m = grid[0].length, cnt = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] == '1') {
                const land = new Array;

                land.push([i, j]);
                grid[i][j] == '0';
                while (land.length) {
                    const [x, y] = land.pop();

                    if (x - 1 > -1 && grid[x - 1][y] == '1') {
                        land.push([x - 1, y]);
                        grid[x - 1][y] = '0';
                    }
                    if (x + 1 < n && grid[x + 1][y] == '1') {
                        land.push([x + 1, y]);
                        grid[x + 1][y] = '0';
                    }
                    if (y - 1 > -1 && grid[x][y - 1] == '1') {
                        land.push([x, y - 1]);
                        grid[x][y - 1] = '0';
                    }
                    if (y + 1 < m && grid[x][y + 1] == '1') {
                        land.push([x, y + 1]);
                        grid[x][y + 1] = '0';
                    }
                }

                cnt++;
            }
        }
    }

    return cnt;
};
/*
 * 79: Word Search
 * Last Updated: Apr 3, 2024
 */
var exist = function(board, word) {
    let n = board.length, m = board[0].length, len = word.length;

    function traverse(x, y, k) {
        if (k == len - 1) return true;
        let u = x - 1, d = x + 1;
        let l = y - 1, r = y + 1;
        let found = false;
    
        const t = board[x][y];
        board[x][y] = '\0';
    
        if (u > -1 && board[u][y] == word[k + 1]) found |= traverse(u, y, k + 1);
        if (d < n && board[d][y] == word[k + 1]) found |= traverse(d, y, k + 1);
        if (l > -1 && board[x][l] == word[k + 1]) found |= traverse(x, l, k + 1);
        if (r < m && board[x][r] == word[k + 1]) found |= traverse(x, r, k + 1);
    
        board[x][y] = t;
        return found;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] == word[0]) {
                if (traverse(i, j, 0)) return true;
            }
        }
    }

    return false;
};
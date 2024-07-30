/*
 * 514: Freedom Trail
 * Last Updated: Apr 27, 2024
 */
var findRotateSteps = function(ring, key) {
    const m = ring.length, n = key.length;
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(-1));

    let map = new Map();
    for (let i = 0; i < m; i++) {
        let item = map.get(ring[i]) || [];
        item.push(i);
        map.set(ring[i], item);
    }

    const helper = function(i, j) {
        if (j == n) return 0;
        if (dp[i][j] != -1) return dp[i][j];

        let res = Infinity;
        for (let k of map.get(key[j])) {
            const rotate = Math.min(Math.abs(k - i), m - Math.abs(k - i));
            res = Math.min(res, 1 + rotate + helper(k, j + 1));
        }

        dp[i][j] = res;
        return res;
    }

    return helper(0, 0);
};
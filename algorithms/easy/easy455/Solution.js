/*
 * 455: Assign Cookies
 * Last Updated: Dec 31, 2023
 * Solve Time: 8 min & 12 min
 */
var findContentChildren = function(g, s) {
    let n = g.length, l = s.length, tot = 0;
    
    g.sort(function(a, b) { return b - a; });
    s.sort(function(a, b) { return b - a; });
    for (let i = 0, j = 0; i < n && j < l && j <= i; i++) {
        if (g[i] <= s[j]) {
            tot++;
            j++;
        }
    }

    return tot;
}
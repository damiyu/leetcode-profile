/*
 * 205: Isomorphic Strings
 * Last Updated: Apr 2, 2024
 * Solve Time: 11 min & 3 sec
 */
var isIsomorphic = function(s, t) {
    let n = s.length, map1 = new Map, map2 = new Map;

    for (let i = 0; i < n; i++) {
        if (s[i] in map1 && t[i] in map2) {
            if (map1[s[i]] != t[i] && map2[t[i]] != s[i]) return false;
        } else if (!(s[i] in map1) && !(t[i] in map2)) {
            map1[s[i]] = t[i];
            map2[t[i]] = s[i];
        } else {
            return false;
        }
    }

    return true;
};
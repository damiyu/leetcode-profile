/*
 * 310: Minimum Height Trees
 * Last Updated: Apr 26, 2024
 */
var findMinHeightTrees = function(n, edges) {
    const counts = new Array(n).fill(0), links = new Array(n).fill(0);
    
    for (const edge of edges) {
        links[edge[0]] ^= edge[1];
        counts[edge[0]]++;
        links[edge[1]] ^= edge[0];
        counts[edge[1]]++;
    }
    
    const queue = new Array, dists = new Array(n).fill(0);
    for (let i = 0; i < n; i++) if (counts[i] == 1) queue.push(i);
    
    let idx = 1;
    while (queue.length > 0) {
        const l = queue.length;

        for (let j = 0; j < l; j++) {
            const tmp = queue.shift();

            links[links[tmp]] ^= tmp;
            counts[links[tmp]]--;
            if (counts[links[tmp]] == 1) {
                dists[links[tmp]] = Math.max(idx, dists[links[tmp]]);
                queue.push(links[tmp]);
            }
        }

        idx++;
    }
    
    const maxDist = Math.max(...dists), minSpans = new Array;
    for (let i = 0; i < n; i++) if (dists[i] == maxDist) minSpans.push(i);
    return minSpans;
};
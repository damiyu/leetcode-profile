/*
 * 1971: Find if Path Exists in Graph
 * Last Updated: Apr 20, 2024
 * Solve Time: 12 min & 16 sec
 */
var validPath = function(n, edges, source, destination) {
    if (source == destination) return true;
    const e = edges.length, nodes = new Map, path = new Array, visit = new Set;

    for (let i = 0; i < n; i++) nodes[i] = new Array;
    for (let i = 0; i < e; i++) {
        nodes[edges[i][0]].push(edges[i][1]);
        nodes[edges[i][1]].push(edges[i][0]);
    }

    path.push(source);
    while (path.length) {
        let node = nodes[path.pop()], p = node.length;
        visit.add(node);

        for (let i = 0; i < p; i++) {
            if (node[i] == destination) return true;
            if (!visit.has(node[i])) {
                path.push(node[i]);
                visit.add(node[i]);
            }
        }
    }

    return false;
};
/*
 * 621: Task Scheduler
 * Last Updated: Mar 19, 2024
 */
var leastInterval = function(tasks, n) {
    let m = tasks.length, cnts = new Array(26).fill(0);

    for (let i = 0; i < m; i++) cnts[tasks[i].charCodeAt() - 65]++;
    cnts.sort((a, b) => b - a);

    let top = cnts[0] - 1, time = top * n;
    for (let i = 1; i < 26; i++) time -= top < cnts[i] ? top : cnts[i];

    return time < 0 ? m : m + time;
};
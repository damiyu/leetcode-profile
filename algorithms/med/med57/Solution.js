/*
 * 57: Insert Interval
 * Last Updated: Mar 17, 2024
 */
var insert = function(intervals, newInterval) {
    let n = intervals.length, left = -1, right = -1, merged = new Array(), added = false;

    for (let i = 0; i < n; i++) {
        if (intervals[i][0] <= newInterval[0] && intervals[i][1] >= newInterval[0]) left = i; 
        if (intervals[i][0] <= newInterval[1] && intervals[i][1] >= newInterval[1]) right = i;
    }

    if (left == -1 && right == -1) newInterval = newInterval;
    else if (left == -1) newInterval[1] = intervals[right][1];
    else if (right == -1) newInterval[0] = intervals[left][0];
    else newInterval = [intervals[left][0], intervals[right][1]];

    for (let i = 0; i < n; i++) {
        if (!added && intervals[i][0] >= newInterval[1]) {
            merged.push(newInterval);
            added = true;
        }
        if (intervals[i][0] < newInterval[0] || intervals[i][1] > newInterval[1]) merged.push(intervals[i]);
    }
    if (!added) merged.push(newInterval);

    return merged;
};
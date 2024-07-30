/*
 * 452: Minimum Number of Arrows to Burst Balloons
 * Last Updated: Mar 18, 2024
 */
var findMinArrowShots = function(points) {
    let n = points.length, cnt = 0;

    points.sort((a, b) => a[0] - b[0]);
    for (let i = 0 ; i < n; i++) {
        if (points[i] == '\0') continue;
        let [x, y] = points[i];

        for (let j = i + 1; j < n; j++) {
            let [a, b] = points[j];

            if (b < x || a > y) {
                i = j - 1;
                break;
            }

            x = x > a ? x : a;
            y = y < b ? y : b;
            points[j] = '\0';
        }
        cnt++;
    }

    return cnt;
};
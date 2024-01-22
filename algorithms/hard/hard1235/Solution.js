/*
 * 1235: Maximum Profit in Job Scheduling
 * Last Updated: Jan 7, 2024
 */
var jobScheduling = function(startTime, endTime, profit) {
    let n = startTime.length, times = new Array(n), dp = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) times[i] = [startTime[i], endTime[i], profit[i]];

    times.sort((a, b) => a[1] - b[1]);
    for (let i = 0; i < n; i++) {
        let idx = binarySearch(times, i, times[i][0]);

        dp[i + 1] = dp[i] > dp[idx] + times[i][2] ? dp[i] : dp[idx] + times[i][2];
    }
    return dp[n];
}

function binarySearch(times, end, target) {
    let left = 0, right = end, mid = Math.floor(end / 2);

    while (left < right) {
        if (times[mid][1] <= target) {
            left = mid + 1;
            mid = Math.floor((left + right) / 2);
        } else {
            right = mid;
            mid = Math.floor((left + right) / 2);
        }
    }

    return left;
}
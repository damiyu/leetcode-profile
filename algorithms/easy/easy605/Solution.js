/*
 * 605: Can Place Flowers
 * Last Updated: Feb 25, 2024
 * Solve Time: 13 min and 1 sec
 */
var canPlaceFlowers = function(flowerbed, n) {
    let m = flowerbed.length, cnt = 0;

    for (let i = 0; i < m; i++) {
        if ((!i || !flowerbed[i - 1]) && !flowerbed[i] && (i == m - 1 || !flowerbed[i + 1])) {
            cnt++;
            flowerbed[i] = 1;
        }
    }

    return cnt >= n;
};
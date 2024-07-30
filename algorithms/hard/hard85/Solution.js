/*
 * 85: Maximal Rectangle
 * Last Updated: Apr 12, 2024
 */
var maximalRectangle = function(matrix) {
    let n = matrix.length, m = matrix[0].length, maxSize = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] == '1') {
                let maxRow = 1, rIdx = i + 1;
                while (rIdx < n && matrix[rIdx++][j] == '1') maxRow++;

                const rowCnts = new Array(maxRow).fill(1);
                for (let k = 0; k < maxRow; k++) {
                    let idx = 1;

                    while (idx < m && matrix[i + k][j + idx++] == '1') rowCnts[k]++;
                }

                let end = rowCnts[0];
                if (end * maxRow < maxSize) continue;

                for (let start = 1; start <= end; start++) {
                    let width = 0;

                    while (rowCnts[width] >= start) width++;
                    maxSize = Math.max(maxSize, start * width);
                }
            }
        }
    }

    return maxSize;
};
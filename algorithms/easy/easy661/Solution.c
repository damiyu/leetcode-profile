#include <stdbool.h>

/*
 * 661: Image Smoother
 * Last Updated: Dec 19, 2023
 */
int** imageSmoother(int** img, int imgSize, int* imgColSize, int* returnSize, int** returnColumnSizes) {
    int** smooth = (int**) malloc(imgSize * sizeof(int*));
    
    for (int i = 0; i < imgSize; i++) smooth[i] = (int*) malloc(*imgColSize * sizeof(int));
    for (int i = 0; i < imgSize; i++) {
        for (int j = 0; j < *imgColSize; j++) {
            int tot = img[i][j], cnt = 1;
            bool t = i - 1 > -1, b = i + 1 < imgSize, l = j - 1 > -1, r = j + 1 < *imgColSize;

            if (t && l) {
                tot += img[i - 1][j - 1];
                cnt += 1;
            }
            if (t) {
                tot += img[i - 1][j];
                cnt += 1;
            }
            if (t && r) {
                tot += img[i - 1][j + 1];
                cnt += 1;
            }
            if (l) {
                tot += img[i][j - 1];
                cnt += 1;
            }
            if (r) {
                tot += img[i][j + 1];
                cnt += 1;
            }
            if (b && l) {
                tot += img[i + 1][j - 1];
                cnt += 1;
            }
            if (b) {
                tot += img[i + 1][j];
                cnt += 1;
            }
            if (b && r) {
                tot += img[i + 1][j + 1];
                cnt += 1;
            }
            smooth[i][j] = tot / cnt;
        }
    }

    *returnSize = imgSize;
    *returnColumnSizes = imgColSize;
    return smooth;
}
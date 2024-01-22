#include <stdlib.h>

/*
 * 1637: Widest Vertical Area Between Two Points Containing No Points
 * Last Updated: Dec 21, 2023
 * Solve Time: 15 min & 15 sec
 */
int cmpfunc (const void * a, const void * b) {
   return ( *(int*)a - *(int*)b );
}

int maxWidthOfVerticalArea(int** points, int pointsSize, int* pointsColSize) {
    int a[pointsSize];

    for (int i = 0; i < pointsSize; i++) {
        a[i] = points[i][0];
    }

    qsort(a, pointsSize, sizeof(int), cmpfunc);

    int max = 0;

    for (int i = 0; i < pointsSize - 1; i++) {
        max = a[i + 1] - a[i] > max ? a[i + 1] - a[i] : max;
    }
    return max;
}
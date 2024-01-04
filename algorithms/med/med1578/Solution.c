/*
 * 1578: Minimum Time to Make Rope Colorful
 * Last Updated: Dec 27, 2023
 * Solve Time: 10 min & 57 sec
 */
int minCost(char* colors, int* neededTime, int neededTimeSize) {
    int n = strlen(colors), min = 0, curT, oldT;

    for (int i = 1; i < n; i++) {
        *colors++;

        if (*(colors - 1) == *colors) {
            curT = neededTime[i];
            oldT = neededTime[i - 1];

            if (oldT < curT) {
                min += oldT;
            } else {
                min += curT;
                neededTime[i] = oldT;
            }
        }
    }

    return min;
}
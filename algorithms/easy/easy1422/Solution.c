/*
 * 1422: Maximum Score After Splitting a String
 * Last Updated: Dec 22, 2023
 * Solve Time: 13 min & 20 sec
 */
int maxScore(char* s) {
    int n = strlen(s), zero = 0, one = 0, max = 0;

    for (int i = 0; i < n; i++) if (s[i] == '1') one++;
    for (int i = 0; i < n - 1; i++) {
        if (s[i] == '0') zero++;
        else one--;

        max = zero + one > max ? zero + one : max;
    }

    return max;
}

// My Original Solution
/*
int maxScore(char* s) {
    int n = strlen(s), max = 0, cur;

    for (int i = 0; i < n; i++) {
        cur = 0;

        for (int j = 0; j <= i && j < n - 1; j++) cur += s[j] == '0' ? 1 : 0;
        for (int j = i + 1; j < n; j++) cur += s[j] == '1' ? 1 : 0;
        max = cur > max ? cur : max;
    }

    return max;
}
*/
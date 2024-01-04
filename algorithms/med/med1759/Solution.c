/*
 * 1759: Count Number of Homogenous Substrings
 * Last Updated: Nov 10, 2023
 */
int countHomogenous(char* s) {
    long long cnt = 1, tot = 0;
    int n = strlen(s);
    char prev = '\0';

    for (int i = 0; i < n - 1; i++) {
        prev = *s;
        s++;

        if (prev == *s) {
            cnt++;
        } else {
            tot += (cnt * (cnt + 1)) / 2;
            cnt = 1;
        }
    }

    tot += (cnt * (cnt + 1)) / 2;
    return tot % 1000000007;
}
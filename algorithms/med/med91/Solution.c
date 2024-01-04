/*
 * 91: Decode Ways
 * Last Updated: Dec 24, 2023
 */
int numDecodings(char* s) {
    int n = strlen(s), tot = 1, cur = 0, prev = 0;

    for (int i = 0; i < n; i++) {
        cur = 0;
        if (i > 0 && (s[i - 1] == '1'|| (s[i - 1] == '2' && s[i] < '7'))) cur += prev;
        if (s[i] != '0') cur += tot;
        prev = tot;
        tot = cur;
    }
    return tot;
}